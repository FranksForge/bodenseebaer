import { readdir, stat, readFile, writeFile } from "fs/promises";
import path from "path";
import { performance } from "perf_hooks";
import sharp from "sharp";

const root = process.cwd();
const targets = [
  path.resolve(root, "src/assets"),
  path.resolve(root, "public"),
];

const MAX_WIDTH = 2000;
const JPEG_QUALITY = 72;

let processed = 0;
let optimized = 0;
let bytesSaved = 0;

const SUPPORTED_EXTENSIONS = new Set([".jpg", ".jpeg", ".png"]);

async function traverseDirectory(directory) {
  let entries;
  try {
    entries = await readdir(directory);
  } catch (error) {
    console.warn(`⚠️  Skipping ${directory}: ${error.message}`);
    return;
  }

  await Promise.all(
    entries.map(async (entry) => {
      const fullPath = path.join(directory, entry);
      let fileStat;
      try {
        fileStat = await stat(fullPath);
      } catch (error) {
        console.warn(`⚠️  Could not stat ${fullPath}: ${error.message}`);
        return;
      }

      if (fileStat.isDirectory()) {
        await traverseDirectory(fullPath);
      } else {
        await optimizeImage(fullPath, fileStat.size);
      }
    })
  );
}

async function optimizeImage(filePath, originalSize) {
  const ext = path.extname(filePath).toLowerCase();
  if (!SUPPORTED_EXTENSIONS.has(ext)) {
    return;
  }

  processed += 1;

  try {
    const inputBuffer = await readFile(filePath);
    const metadata = await sharp(inputBuffer).metadata();

    let transformer = sharp(inputBuffer, { failOn: "none" });

    if (metadata.width && metadata.width > MAX_WIDTH) {
      transformer = transformer.resize({
        width: MAX_WIDTH,
        withoutEnlargement: true,
      });
    }

    let outputBuffer;
    if (ext === ".png") {
      outputBuffer = await transformer
        .png({
          compressionLevel: 9,
          palette: true,
          quality: 80,
        })
        .toBuffer();
    } else {
      outputBuffer = await transformer
        .jpeg({
          quality: JPEG_QUALITY,
          progressive: true,
          chromaSubsampling: "4:4:4",
        })
        .toBuffer();
    }

    if (outputBuffer.length < inputBuffer.length - 512) {
      await writeFile(filePath, outputBuffer);
      optimized += 1;
      bytesSaved += inputBuffer.length - outputBuffer.length;
      console.log(
        `✅ Optimized ${path.relative(root, filePath)} ↓ ${((
          (inputBuffer.length - outputBuffer.length) /
          1024
        ).toFixed(1))}KB`
      );
    } else {
      // Skip rewriting if savings are negligible
      // console.debug(`Skipped ${filePath} (no significant savings)`);
    }
  } catch (error) {
    console.error(`❌ Failed to optimize ${filePath}:`, error);
  }
}

async function run() {
  console.log("🔧 Optimizing images...");
  const start = performance.now();

  for (const target of targets) {
    await traverseDirectory(target);
  }

  const duration = ((performance.now() - start) / 1000).toFixed(2);
  const savedKB = (bytesSaved / 1024).toFixed(1);

  console.log(
    `\n✨ Image optimization finished in ${duration}s\n` +
      `   Processed:  ${processed}\n` +
      `   Optimized:  ${optimized}\n` +
      `   Saved:      ${savedKB} KB`
  );
}

run().catch((error) => {
  console.error("💥 Optimization failed:", error);
  process.exit(1);
});

