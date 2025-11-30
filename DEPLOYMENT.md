# GitHub Pages Deployment Guide

## Quick Setup

Your portfolio site is built and ready! Follow these steps to deploy to GitHub Pages:

### 1. Push Your Code to GitHub

```bash
git add .
git commit -m "Add portfolio website"
git push origin main
```

### 2. Enable GitHub Pages

1. Go to your repository on GitHub: `https://github.com/jagankumar191/jagankumar191.github.io`
2. Click on **Settings** (the gear icon)
3. In the left sidebar, click **Pages**
4. Under **Source**, select **GitHub Actions**
5. The workflow will automatically run and deploy your site

### 3. Wait for Deployment

- GitHub Actions will automatically build and deploy your site
- This usually takes 1-2 minutes
- You can check the progress in the **Actions** tab of your repository
- Once complete, your site will be live at: `https://jagankumar191.github.io`

## What Was Set Up

- ✅ Next.js configured for static export (`output: "export"`)
- ✅ GitHub Actions workflow created (`.github/workflows/deploy.yml`)
- ✅ All pages pre-rendered as static HTML

## Updating Your Site

Whenever you push changes to the `main` branch, GitHub Actions will automatically rebuild and redeploy your site.

## Customization

To customize your content, edit the following files:
- **Hero Section**: `src/components/sections/Hero.tsx`
- **Skills**: `src/components/sections/Skills.tsx`
- **Experience**: `src/components/sections/Experience.tsx`
- **Projects**: `src/components/sections/Projects.tsx`
- **Education**: `src/components/sections/Education.tsx`
- **Contact**: `src/components/sections/Contact.tsx`

Replace the placeholder resume with your actual resume at `public/resume.pdf`.
