
# Deployment and DevOps for MERN Applications

This assignment focuses on deploying a full MERN stack application to production, implementing CI/CD pipelines, and setting up monitoring for your application.

## Assignment Overview

You will:
1. Prepare your MERN application for production deployment
2. Deploy the backend to a cloud platform
3. Deploy the frontend to a static hosting service
4. Set up CI/CD pipelines with GitHub Actions
5. Implement monitoring and maintenance strategies

## Getting Started

1. Accept the GitHub Classroom assignment invitation
2. Clone your personal repository that was created by GitHub Classroom
3. Follow the setup instructions in the `Week7-Assignment.md` file
4. Use the provided templates and configuration files as a starting point

## Files Included

- `Week7-Assignment.md`: Detailed assignment instructions
- `.github/workflows/`: GitHub Actions workflow templates
- `deployment/`: Deployment configuration files and scripts
- `.env.example`: Example environment variable templates
- `monitoring/`: Monitoring configuration examples

## Requirements

- A completed MERN stack application from previous weeks
- Accounts on the following services:
  - GitHub
  - MongoDB Atlas
  - Render, Railway, or Heroku (for backend)
  - Vercel, Netlify, or GitHub Pages (for frontend)
- Basic understanding of CI/CD concepts

## Deployment Platforms

### Backend Deployment Options
- **Render**: Easy to use, free tier available
- **Railway**: Developer-friendly, generous free tier
- **Heroku**: Well-established, extensive documentation

### Frontend Deployment Options
- **Vercel**: Optimized for React apps, easy integration
- **Netlify**: Great for static sites, good CI/CD
- **GitHub Pages**: Free, integrated with GitHub

## CI/CD Pipeline

The assignment includes templates for setting up GitHub Actions workflows:
- `frontend-ci.yml`: Tests and builds the React application
- `backend-ci.yml`: Tests the Express.js backend
- `frontend-cd.yml`: Deploys the frontend to your chosen platform
- `backend-cd.yml`: Deploys the backend to your chosen platform

## Submission

Your work will be automatically submitted when you push to your GitHub Classroom repository. Make sure to:

1. Complete all deployment tasks
2. Set up CI/CD pipelines with GitHub Actions
3. Deploy both frontend and backend to production
4. Document your deployment process in the README.md
5. Include screenshots of your CI/CD pipeline in action
6. Add URLs to your deployed applications

## Resources

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [MongoDB Atlas Documentation](https://docs.atlas.mongodb.com/)
- [Render Documentation](https://render.com/docs)
- [Railway Documentation](https://docs.railway.app/)
- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com/) 

# MERN Stack Production App

## 🚀 Live URLs
- **Frontend:** <https://your-frontend-url-on-vercel>
- **Backend API:** <https://your-backend-url-on-render>

## 🛠️ Deployment Instructions

### Backend (Render)
1. Push your code to GitHub.
2. Go to [Render](https://render.com/) and create a new Web Service.
3. Connect your GitHub repo and select the `/backend` folder.
4. Set environment variables:
   - `MONGODB_URI` (from MongoDB Atlas)
   - `JWT_SECRET` (your secret)
   - `CORS_ORIGIN` (your frontend Vercel URL)
   - `SENTRY_DSN` (optional)
5. Render will auto-detect the `start` script and `Procfile`.
6. Deploy and copy your backend URL.

### Frontend (Vercel)
1. Push your code to GitHub.
2. Go to [Vercel](https://vercel.com/) and import your repo.
3. Set environment variable:
   - `REACT_APP_API_URL` (your backend Render URL)
4. Vercel will auto-detect the React app and build it.
5. Deploy and copy your frontend URL.

## 📝 Example CRUD API Usage

The backend exposes a User CRUD API at `/api/users`:

- **Create:** `POST /api/users` with JSON `{ "username": "alice", "email": "alice@email.com", "password": "secret" }`
- **Read all:** `GET /api/users`
- **Read one:** `GET /api/users/:id`
- **Update:** `PUT /api/users/:id` with JSON body
- **Delete:** `DELETE /api/users/:id`

Example response:
```json
{
  "_id": "...",
  "username": "alice",
  "email": "alice@email.com",
  "password": "...",
  "createdAt": "...",
  "updatedAt": "..."
}
```

## 🖼️ Screenshots
- _Add screenshots of your deployed app and CI/CD workflows here_

## 🔑 Environment Variables

### Backend
- `MONGODB_URI` - MongoDB Atlas connection string
- `JWT_SECRET` - Secret for JWT
- `PORT` - (optional, default 5000)
- `CORS_ORIGIN` - Frontend URL
- `SENTRY_DSN` - (optional)

### Frontend
- `REACT_APP_API_URL` - Backend API URL
- `REACT_APP_SENTRY_DSN` - (optional)

---

git init
git remote add origin https://github.com/PLP-MERN-Stack-Development/deployment-and-devops-essentials-mugoemm.git
git add .
git commit -m "Production-ready MERN stack, ready for Render and Vercel deployment"
git push -u origin main

