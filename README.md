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
