# Vercel Deployment Guide

## Quick Setup Steps

### 1. Environment Variables Setup
In your Vercel dashboard:
- Go to **Settings** → **Environment Variables**
- Add: `REACT_APP_API_URL` = `https://your-backend-api-url.com/api`
- Select all environments (Production, Preview, Development)

### 2. Backend API URL Options
Choose one of these for your `REACT_APP_API_URL`:

**Option A: If you have a backend deployed on Vercel:**
```
https://your-backend-project.vercel.app/api
```

**Option B: If you have a backend deployed elsewhere:**
```
https://your-backend-domain.com/api
```

**Option C: For testing (temporary):**
```
https://jsonplaceholder.typicode.com
```

### 3. Local Development
Create a `.env.local` file in your project root:
```
REACT_APP_API_URL=http://localhost:5000/api
```

### 4. Deploy to Vercel
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

## Current Configuration
- ✅ `vercel.json` updated (removed secret reference)
- ✅ Environment variable setup ready
- ✅ Build configuration optimized

## Troubleshooting
If you still get environment variable errors:
1. Check Vercel dashboard → Settings → Environment Variables
2. Make sure the variable name is exactly: `REACT_APP_API_URL`
3. Redeploy after adding environment variables 