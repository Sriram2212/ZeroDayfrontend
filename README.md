# ZeroDay - Student Community Platform

A comprehensive React-based platform for student communities with features like skill marketplace, session booking, polls, and more.

## 🚀 Quick Deploy to Vercel

### Prerequisites
- Node.js 16+ installed
- Vercel account
- Backend API URL

### Environment Setup

1. **For Local Development:**
   Create `.env.local` file:
   ```
   REACT_APP_API_URL=http://localhost:5000/api
   ```

2. **For Vercel Deployment:**
   - Go to Vercel Dashboard → Your Project → Settings → Environment Variables
   - Add: `REACT_APP_API_URL` = `https://your-backend-api-url.com/api`

### Install & Run Locally
```bash
npm install
npm start
```

### Deploy to Vercel
1. Push code to GitHub
2. Connect repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

## Features
- 🔐 Authentication & Authorization
- 🎯 Skill Marketplace
- 📅 Session Booking
- 📊 Polls & Voting
- 📢 Announcements
- 🏷️ Lost & Found
- 📝 Reviews & Ratings
- 📋 Complaints Management
- 📱 Responsive Design

## Tech Stack
- React 19
- React Router DOM
- Axios for API calls
- Framer Motion for animations
- Tailwind CSS for styling

## Project Structure
```
src/
├── components/     # Reusable UI components
├── pages/         # Page components
├── services/      # API services
├── context/       # React context providers
└── ...
```

## Environment Variables
- `REACT_APP_API_URL`: Your backend API base URL

## Support
For deployment issues, check the `DEPLOYMENT.md` file for detailed instructions.
