# Deployment Guide

## Prerequisites
- GitHub account with this repository
- Render account (https://render.com)
- Vercel account (https://vercel.com)
- MongoDB Atlas account (https://www.mongodb.com/cloud/atlas)

## Backend Deployment (Render)

### Step 1: Set up MongoDB Atlas
1. Go to https://www.mongodb.com/cloud/atlas
2. Create a free cluster
3. Click "Connect" → "Connect your application"
4. Copy the connection string (looks like: `mongodb+srv://<username>:<password>@cluster.xxxxx.mongodb.net/<dbname>`)

### Step 2: Deploy to Render
1. Go to https://render.com and sign in
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Select this repository: `deployment-and-devops-essentials-mugoemm`
5. Configure:
   - **Name**: `mern-backend` (or your preferred name)
   - **Root Directory**: `backend`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Plan**: Free

6. Add Environment Variables:
   - `NODE_ENV` = `production`
   - `MONGODB_URI` = Your MongoDB Atlas connection string
   - `JWT_SECRET` = Generate a secure random string (e.g., use: `openssl rand -base64 32`)
   - `CORS_ORIGIN` = Your Vercel frontend URL (add this after frontend deployment)

7. Click "Create Web Service"
8. Wait for deployment (5-10 minutes)
9. Copy your backend URL (e.g., `https://your-app.onrender.com`)

### Step 3: Update CORS after Frontend Deployment
After deploying the frontend, go back to Render:
1. Go to your backend service → Environment
2. Update `CORS_ORIGIN` with your Vercel URL
3. Save changes (this will redeploy)

---

## Frontend Deployment (Vercel)

### Step 1: Deploy to Vercel
1. Go to https://vercel.com and sign in
2. Click "Add New..." → "Project"
3. Import your GitHub repository
4. Configure:
   - **Framework Preset**: Vite
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`

5. Add Environment Variable:
   - `VITE_API_BASE_URL` = Your Render backend URL + `/api` (e.g., `https://your-app.onrender.com/api`)

6. Click "Deploy"
7. Wait for deployment (2-5 minutes)
8. Your app will be live at: `https://your-project.vercel.app`

### Step 2: Update Backend CORS
Now that you have your Vercel URL:
1. Go back to Render → Your backend service → Environment
2. Update `CORS_ORIGIN` to your Vercel URL
3. Save and wait for redeployment

---

## Verification

### Test Backend
```bash
# Health check
curl https://your-backend.onrender.com/health

# Get users
curl https://your-backend.onrender.com/api/users
```

### Test Frontend
1. Open your Vercel URL in a browser
2. Try creating a new user
3. Verify users are displayed
4. Check browser console for any errors

---

## Troubleshooting

### Backend Issues
- **MongoDB Connection Error**: Verify your `MONGODB_URI` is correct and MongoDB Atlas IP whitelist includes `0.0.0.0/0`
- **CORS Error**: Ensure `CORS_ORIGIN` matches your Vercel URL exactly
- **Service not starting**: Check Render logs for errors

### Frontend Issues
- **API calls failing**: Verify `VITE_API_BASE_URL` is correct in Vercel environment variables
- **Blank page**: Check Vercel build logs for errors
- **CORS errors**: Update backend `CORS_ORIGIN` with correct Vercel URL

### Free Tier Limitations
- **Render**: Service may spin down after 15 minutes of inactivity (first request will be slow)
- **Vercel**: 100GB bandwidth per month
- **MongoDB Atlas**: 512MB storage

---

## Custom Domain (Optional)

### Frontend (Vercel)
1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed

### Backend (Render)
1. Go to Service Settings → Custom Domain
2. Add your custom domain
3. Update DNS records as instructed
4. Update frontend `VITE_API_BASE_URL` with new domain

---

## Environment Variables Reference

### Backend (Render)
| Variable | Description | Example |
|----------|-------------|---------|
| `NODE_ENV` | Node environment | `production` |
| `MONGODB_URI` | MongoDB connection string | `mongodb+srv://user:pass@cluster.mongodb.net/dbname` |
| `JWT_SECRET` | Secret for JWT tokens | Random 32+ character string |
| `CORS_ORIGIN` | Frontend URL | `https://your-app.vercel.app` |
| `PORT` | Server port (auto-set by Render) | `10000` |

### Frontend (Vercel)
| Variable | Description | Example |
|----------|-------------|---------|
| `VITE_API_BASE_URL` | Backend API URL | `https://your-backend.onrender.com/api` |

---

## Quick Deploy Commands

### Backend Manual Deploy
```bash
cd backend
git push origin main  # Render auto-deploys on push
```

### Frontend Manual Deploy
```bash
cd frontend
git push origin main  # Vercel auto-deploys on push
```

Or use Vercel CLI:
```bash
npm i -g vercel
cd frontend
vercel --prod
```

---

## Monitoring

### Render
- View logs: Dashboard → Your Service → Logs
- View metrics: Dashboard → Your Service → Metrics

### Vercel
- View deployments: Dashboard → Your Project → Deployments
- View analytics: Dashboard → Your Project → Analytics

---

## Next Steps

1. ✅ Set up MongoDB Atlas database
2. ✅ Deploy backend to Render
3. ✅ Deploy frontend to Vercel
4. ✅ Update CORS settings
5. ✅ Test the application
6. 🔄 Set up custom domains (optional)
7. 🔄 Configure CI/CD (already set up via GitHub)
8. 🔄 Set up monitoring and error tracking

---

## Support

- **Render Docs**: https://render.com/docs
- **Vercel Docs**: https://vercel.com/docs
- **MongoDB Atlas Docs**: https://docs.atlas.mongodb.com/
