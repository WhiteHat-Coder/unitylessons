# 🚀 Deployment Guide

This guide covers various methods to deploy your Programming Lectures static website to production.

## Table of Contents
- [GitHub Pages](#github-pages)
- [Netlify](#netlify)
- [Vercel](#vercel)
- [AWS S3 + CloudFront](#aws-s3--cloudfront)
- [Firebase Hosting](#firebase-hosting)
- [Custom Server](#custom-server)

---

## GitHub Pages

### Method 1: Using GitHub Actions (Recommended)

1. Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./
```

2. Push to GitHub:
```bash
git add .
git commit -m "Add deployment workflow"
git push origin main
```

### Method 2: Manual Deployment
```bash
# Build (no build step needed for static site)
# Just push to GitHub

# Enable GitHub Pages
# Go to: Settings → Pages → Source: main branch
```

**Live URL**: `https://yourusername.github.io/programming-lectures/`

---

## Netlify

### Method 1: Drag and Drop
1. Visit [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag your project folder
3. Done! Your site is live

### Method 2: CLI Deployment
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Initialize
netlify init

# Deploy to production
netlify deploy --prod
```

### Method 3: Git Integration
```bash
# Connect your repository via Netlify dashboard
# Settings:
# - Build command: (leave empty)
# - Publish directory: ./
# - Branch: main
```

### Custom Domain Setup
```bash
# Add custom domain via Netlify dashboard
# DNS Configuration:
# Add A record: 75.2.60.5
# Add CNAME: www → your-site.netlify.app
```

**Features**:
- ✅ Automatic HTTPS
- ✅ CDN distribution
- ✅ Instant cache invalidation
- ✅ Form handling
- ✅ Continuous deployment

---

## Vercel

### CLI Deployment
```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

### Git Integration
1. Import repository at [vercel.com/new](https://vercel.com/new)
2. Configure:
   - Framework Preset: Other
   - Build Command: (leave empty)
   - Output Directory: ./
3. Deploy!

### Configuration File (vercel.json)
```json
{
  "version": 2,
  "public": true,
  "cleanUrls": true,
  "trailingSlash": false,
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

---

## AWS S3 + CloudFront

### Step 1: Create S3 Bucket
```bash
# Install AWS CLI
brew install awscli  # macOS
# or download from aws.amazon.com/cli

# Configure
aws configure

# Create bucket
aws s3 mb s3://programming-lectures-prod

# Enable static website hosting
aws s3 website s3://programming-lectures-prod --index-document index.html
```

### Step 2: Upload Files
```bash
# Sync files
aws s3 sync . s3://programming-lectures-prod --exclude ".git/*" --exclude "node_modules/*"

# Set public read permissions
aws s3api put-bucket-policy --bucket programming-lectures-prod --policy '{
  "Version": "2012-10-17",
  "Statement": [{
    "Sid": "PublicReadGetObject",
    "Effect": "Allow",
    "Principal": "*",
    "Action": "s3:GetObject",
    "Resource": "arn:aws:s3:::programming-lectures-prod/*"
  }]
}'
```

### Step 3: CloudFront Distribution
```bash
# Create distribution via AWS Console
# CloudFront → Create Distribution:
# - Origin Domain: programming-lectures-prod.s3-website-region.amazonaws.com
# - Viewer Protocol Policy: Redirect HTTP to HTTPS
# - Compress Objects: Yes
# - Price Class: Use all edge locations
```

### Step 4: Invalidate Cache on Deployment
```bash
# After each deployment
aws cloudfront create-invalidation --distribution-id YOUR_DIST_ID --paths "/*"
```

**Estimated Cost**: ~$1-5/month for moderate traffic

---

## Firebase Hosting

### Setup
```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login
firebase login

# Initialize
firebase init hosting

# Configuration:
# - Public directory: .
# - Single-page app: No
# - Set up automatic builds: No
```

### firebase.json Configuration
```json
{
  "hosting": {
    "public": ".",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "headers": [{
      "source": "**/*.@(jpg|jpeg|gif|png|svg|webp|css|js)",
      "headers": [{
        "key": "Cache-Control",
        "value": "max-age=31536000"
      }]
    }],
    "rewrites": []
  }
}
```

### Deploy
```bash
# Deploy to production
firebase deploy --only hosting

# Deploy with custom message
firebase deploy --only hosting -m "Update lesson content"
```

**Features**:
- ✅ Free SSL certificate
- ✅ Global CDN
- ✅ Rollback support
- ✅ Free tier: 10GB storage, 360MB/day transfer

---

## Custom Server (VPS/Dedicated)

### Nginx Configuration
```nginx
server {
    listen 80;
    server_name programming-lectures.com www.programming-lectures.com;
    
    root /var/www/programming-lectures;
    index index.html;

    # Gzip compression
    gzip on;
    gzip_types text/css application/javascript image/svg+xml;
    
    # Cache static assets
    location ~* \.(jpg|jpeg|png|gif|svg|css|js)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;

    # 404 handling
    error_page 404 /404.html;
}

# HTTPS redirect
server {
    listen 80;
    server_name programming-lectures.com www.programming-lectures.com;
    return 301 https://$server_name$request_uri;
}
```

### Deploy Script
```bash
#!/bin/bash
# deploy.sh

# Build (if needed)
echo "No build step required for static site"

# Sync to server
rsync -avz --delete \
  --exclude '.git' \
  --exclude 'node_modules' \
  --exclude '.DS_Store' \
  ./ user@your-server.com:/var/www/programming-lectures/

# Reload nginx
ssh user@your-server.com 'sudo systemctl reload nginx'

echo "Deployment complete!"
```

---

## Performance Optimization

### Before Deployment Checklist
- [ ] Minify CSS and JavaScript
- [ ] Optimize images (use WebP where possible)
- [ ] Enable Gzip/Brotli compression
- [ ] Set appropriate cache headers
- [ ] Add security headers
- [ ] Test on multiple devices
- [ ] Run Lighthouse audit (target 95+)
- [ ] Test offline functionality
- [ ] Validate HTML/CSS
- [ ] Check broken links

### Tools
```bash
# Minify CSS
npx cssnano assets/css/main.css assets/css/main.min.css

# Minify JavaScript
npx terser assets/js/main.js -o assets/js/main.min.js

# Optimize images
brew install imageoptim-cli
imageoptim assets/images/*

# Run Lighthouse
npm install -g lighthouse
lighthouse https://your-site.com --view
```

---

## Domain Configuration

### DNS Records
```
Type    Name    Value                   TTL
A       @       Your-IP-Address        3600
A       www     Your-IP-Address        3600
CNAME   www     your-site.com          3600
```

### SSL Certificate (Let's Encrypt)
```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx

# Obtain certificate
sudo certbot --nginx -d programming-lectures.com -d www.programming-lectures.com

# Auto-renewal (runs automatically)
sudo certbot renew --dry-run
```

---

## Monitoring

### Uptime Monitoring
- [UptimeRobot](https://uptimerobot.com) (Free)
- [Pingdom](https://www.pingdom.com)
- [StatusCake](https://www.statuscake.com)

### Analytics
- Google Analytics
- Plausible (Privacy-friendly)
- Simple Analytics
- Fathom Analytics

---

## Troubleshooting

### Common Issues

**404 errors on deployed site:**
- Check file paths are relative
- Verify all files are uploaded
- Check server directory structure

**CSS/JS not loading:**
- Verify file paths in HTML
- Check cache headers
- Clear CDN cache
- Check CORS settings

**Slow loading:**
- Enable compression
- Optimize images
- Use CDN
- Minimize HTTP requests
- Enable browser caching

---

## Support

For deployment issues:
1. Check the [GitHub Issues](https://github.com/yourusername/programming-lectures/issues)
2. Review server logs
3. Test locally first
4. Contact hosting provider support

---

**Last Updated**: March 29, 2026
