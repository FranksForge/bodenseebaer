# Bodenseebär Website

Website for Bodenseebär shop in Hagnau am Bodensee.

## 🚀 Deployment on Vercel

### Prerequisites
- Vercel account
- Domain: `sichtbar-seiten.de` (main domain)
- Subdomain: `bodenseebaer.sichtbar-seiten.de`

### Deployment Steps

1. **Install Vercel CLI (if not already installed)**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy to Vercel**
   ```bash
   cd craft-leaf-cafe-site
   vercel
   ```

4. **Configure Domain in Vercel Dashboard**
   - Go to your project settings in Vercel
   - Navigate to "Domains"
   - Add domain: `bodenseebaer.sichtbar-seiten.de`
   - Follow the DNS configuration instructions

5. **DNS Configuration**
   - Add a CNAME record in your DNS provider for `sichtbar-seiten.de`:
     - Type: CNAME
     - Name: `bodenseebaer`
     - Value: `cname.vercel-dns.com` (or the value provided by Vercel)
   - Wait for DNS propagation (can take up to 48 hours, usually faster)

6. **Production Deployment**
   ```bash
   vercel --prod
   ```

### Environment Variables

No environment variables are currently required, but you can add them in Vercel dashboard under "Settings" > "Environment Variables" if needed in the future.

### Build Configuration

The project uses:
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`
- **Framework**: Vite

All configuration is in `vercel.json`.

### Local Development

```bash
npm install
npm run dev
```

### Production Build

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
craft-leaf-cafe-site/
├── src/
│   ├── components/     # React components
│   ├── assets/         # Images and static assets
│   ├── pages/          # Page components
│   └── ...
├── public/             # Public assets
├── dist/               # Build output (generated)
├── vercel.json         # Vercel configuration
└── package.json        # Dependencies
```

## 🔧 Configuration Files

- `vercel.json` - Vercel deployment configuration
- `vite.config.ts` - Vite build configuration
- `tailwind.config.ts` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration

## 📝 Notes

- The site is configured for SPA routing (React Router)
- All routes are rewritten to `index.html` for client-side routing
- Static assets are cached for 1 year
- Security headers are configured in `vercel.json`
