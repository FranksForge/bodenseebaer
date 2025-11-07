# Vercel Deployment Guide

## 🎯 Deployment Target
- **Subdomain**: `bodenseebaer.sichtbar-seiten.de`
- **Main Domain**: `sichtbar-seiten.de` (parent domain)

## 📋 Pre-Deployment Checklist

- [x] All URLs updated to new domain (`bodenseebaer.sichtbar-seiten.de`)
- [x] SEO structured data updated
- [x] Build configuration verified
- [x] Vercel configuration file created

## 🚀 Deployment Steps

### Option 1: Using Vercel CLI (Recommended for first deployment)

1. **Install Vercel CLI** (if not already installed)
   ```bash
   npm i -g vercel
   ```

2. **Navigate to project directory**
   ```bash
   cd craft-leaf-cafe-site
   ```

3. **Login to Vercel**
   ```bash
   vercel login
   ```

4. **Deploy to Vercel** (this will create a preview deployment)
   ```bash
   vercel
   ```
   - Follow the prompts:
     - Set up and deploy? **Yes**
     - Which scope? **Your account**
     - Link to existing project? **No** (first time) or **Yes** (if project exists)
     - Project name? **bodenseebaer-shop** (or your preferred name)
     - Directory? **./** (current directory)
     - Override settings? **No**

5. **Deploy to Production**
   ```bash
   vercel --prod
   ```

### Option 2: Using Vercel Dashboard (Recommended for ongoing deployments)

1. **Connect Repository**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your Git repository (GitHub, GitLab, or Bitbucket)
   - Or drag and drop the `craft-leaf-cafe-site` folder

2. **Configure Project**
   - **Framework Preset**: Vite
   - **Root Directory**: `craft-leaf-cafe-site` (if repo root is parent)
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `dist` (auto-detected)
   - **Install Command**: `npm install` (auto-detected)

3. **Deploy**
   - Click "Deploy"
   - Wait for build to complete

## 🌐 Domain Configuration

### Step 1: Add Domain in Vercel Dashboard

1. Go to your project in Vercel Dashboard
2. Navigate to **Settings** → **Domains**
3. Click **Add Domain**
4. Enter: `bodenseebaer.sichtbar-seiten.de`
5. Click **Add**

### Step 2: Configure DNS

Vercel will provide DNS configuration instructions. Typically:

1. **For Subdomain (bodenseebaer.sichtbar-seiten.de)**:
   - Type: **CNAME**
   - Name: **bodenseebaer**
   - Value: **cname.vercel-dns.com** (or the value provided by Vercel)
   - TTL: **3600** (or default)

2. **Add DNS Record**:
   - Log in to your DNS provider (where `sichtbar-seiten.de` is managed)
   - Add the CNAME record as specified above
   - Save changes

### Step 3: SSL Certificate

- Vercel automatically provisions SSL certificates via Let's Encrypt
- SSL will be active once DNS propagates (usually within minutes to hours)
- Wait for DNS propagation (can take up to 48 hours, usually much faster)

### Step 4: Verify Domain

1. Check DNS propagation: Use [dnschecker.org](https://dnschecker.org)
2. Enter: `bodenseebaer.sichtbar-seiten.de`
3. Verify the CNAME record points to Vercel
4. Once DNS is propagated, Vercel will automatically issue SSL certificate

## 🔧 Build Configuration

The project is already configured via `vercel.json`:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "vite"
}
```

## ✅ Post-Deployment Verification

1. **Check Website**
   - Visit: `https://bodenseebaer.sichtbar-seiten.de`
   - Verify all pages load correctly
   - Check images load properly
   - Test navigation

2. **Check SEO**
   - Verify meta tags in page source
   - Check structured data (JSON-LD)
   - Test Open Graph tags with [opengraph.xyz](https://www.opengraph.xyz/)

3. **Check Performance**
   - Run Lighthouse audit
   - Verify Core Web Vitals
   - Check bundle sizes

4. **Check SSL**
   - Verify HTTPS is working
   - Check SSL certificate validity

## 🔄 Continuous Deployment

Once connected to a Git repository:
- **Automatic Deployments**: Every push to main/master triggers production deployment
- **Preview Deployments**: Pull requests get preview deployments
- **Branch Deployments**: Other branches can be configured for preview

## 📝 Environment Variables

Currently no environment variables are required. If needed in the future:

1. Go to **Settings** → **Environment Variables**
2. Add variables for Production, Preview, and Development
3. Redeploy after adding variables

## 🐛 Troubleshooting

### Build Fails
- Check build logs in Vercel Dashboard
- Verify `package.json` has correct scripts
- Ensure all dependencies are listed in `package.json`

### DNS Not Working
- Verify CNAME record is correct
- Check DNS propagation status
- Ensure TTL is not too high (3600 recommended)

### SSL Certificate Issues
- Wait for DNS propagation to complete
- Check domain is correctly added in Vercel
- Verify CNAME record is pointing to Vercel

### Routing Issues (404 on refresh)
- Verify `vercel.json` has rewrites configured
- Check that all routes are handled by React Router

## 📞 Support

- Vercel Docs: [vercel.com/docs](https://vercel.com/docs)
- Vercel Support: [vercel.com/support](https://vercel.com/support)

## 🔐 Security Notes

- Security headers are configured in `vercel.json`
- SSL is automatically provisioned by Vercel
- Cache headers are optimized for performance
- No sensitive data should be in the codebase

