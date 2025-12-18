# Deployment Instructions for GitHub Pages

## Prerequisites
- GitHub account
- Git installed on your computer
- Node.js and npm installed

## Steps to Deploy

### 1. Create GitHub Repository
1. Go to https://github.com and log in
2. Click "New repository" button
3. Name it: `carer-pharma-website`
4. Make it public
5. Don't initialize with README (we already have files)
6. Click "Create repository"

### 2. Update package.json
Replace `YOUR_GITHUB_USERNAME` in package.json with your actual GitHub username:
```json
"homepage": "https://YOUR_GITHUB_USERNAME.github.io/carer-pharma-website"
```

### 3. Initialize Git and Push to GitHub
Run these commands in your project directory:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit - Carer Pharmaceutical Website"

# Add remote repository (replace YOUR_GITHUB_USERNAME)
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/carer-pharma-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 4. Deploy to GitHub Pages
Run this command:
```bash
npm run deploy
```

This will:
- Build your project (`npm run build`)
- Create a `gh-pages` branch
- Deploy the `dist` folder to GitHub Pages

### 5. Enable GitHub Pages
1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll to "Pages" section (left sidebar)
4. Under "Source", select branch: `gh-pages`
5. Click "Save"

### 6. Access Your Website
Your website will be available at:
```
https://YOUR_GITHUB_USERNAME.github.io/carer-pharma-website/
```

It may take a few minutes for the site to be live.

## Updating the Website

Whenever you make changes:

```bash
# Make your changes to the code

# Add and commit changes
git add .
git commit -m "Description of changes"

# Push to GitHub
git push

# Deploy updated version
npm run deploy
```

## Troubleshooting

### Issue: 404 Page Not Found
- Check that `base` in `vite.config.ts` matches your repository name
- Ensure GitHub Pages is enabled and set to `gh-pages` branch

### Issue: Assets not loading
- Verify the `base` path in `vite.config.ts` is correct
- Check that all asset paths are relative, not absolute

### Issue: Deployment fails
- Run `npm run build` first to check for build errors
- Ensure you have write permissions to the repository
- Check your internet connection

## Custom Domain (Optional)

To use a custom domain like www.carerpharmaceutical.com:

1. Add a `CNAME` file to the `public` folder with your domain
2. Configure DNS settings with your domain provider
3. In GitHub repository settings, add your custom domain under "Pages"

## Notes

- The website is built using Vite + React + TypeScript
- Deployment uses the `gh-pages` package
- The `dist` folder contains the production build
- GitHub Pages serves static files from the `gh-pages` branch
