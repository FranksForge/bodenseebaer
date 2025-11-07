import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  assetsInclude: ['**/*.JPG', '**/*.jpg', '**/*.PNG', '**/*.png'],
  build: {
    // Optimize for production
    minify: 'terser',
    sourcemap: false,
    // Target modern browsers for smaller bundle
    target: 'es2015',
    // CSS code splitting
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        // Chunk splitting for better caching and parallel loading
        manualChunks: (id) => {
          // Vendor chunks
          if (id.includes('node_modules')) {
            // React core
            if (id.includes('react') || id.includes('react-dom')) {
              return 'vendor-react';
            }
            // Router
            if (id.includes('react-router')) {
              return 'vendor-router';
            }
            // UI libraries
            if (id.includes('@radix-ui')) {
              return 'vendor-ui';
            }
            // Icons
            if (id.includes('lucide-react')) {
              return 'vendor-icons';
            }
            // Other vendors
            return 'vendor';
          }
        },
        // Asset file naming with content hash for cache busting
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          if (/\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/i.test(assetInfo.name)) {
            return `assets/media/[name]-[hash][extname]`;
          }
          if (/\.(png|jpe?g|gif|svg|webp|ico)(\?.*)?$/i.test(assetInfo.name)) {
            return `assets/images/[name]-[hash][extname]`;
          }
          if (ext === 'css') {
            return `assets/styles/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
        // Optimize chunk file names
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      },
    },
    // Optimize assets
    assetsInlineLimit: 4096, // 4kb - inline small assets
    chunkSizeWarningLimit: 1000, // Warn for chunks > 1MB (reduced from 1.6MB)
    // Report compressed sizes
    reportCompressedSize: true,
  },
  // Performance optimizations
  optimizeDeps: {
    include: ['react', 'react-dom', 'lucide-react'],
  },
});
