# MERN Stack Production-Ready Application

> A full-stack MERN (MongoDB, Express, React, Node.js) application with production deployment configuration, CI/CD pipelines, and monitoring setup.

## 🚀 Live Deployment URLs

### Production Endpoints
- **Frontend Application:** `https://your-app.vercel.app` _(Deploy to get URL)_
- **Backend API:** `https://your-app.onrender.com` _(Deploy to get URL)_
- **API Health Check:** `https://your-app.onrender.com/health`
- **API Users Endpoint:** `https://your-app.onrender.com/api/users`

### Local Development URLs
- **Frontend:** http://localhost:5173
- **Backend:** http://localhost:5000
- **MongoDB:** mongodb://localhost:27017/

## � Project Overview

This is a production-ready MERN stack application featuring:
- **Backend**: RESTful API built with Node.js, Express, and MongoDB
- **Frontend**: Modern React application with Vite build system
- **Authentication**: JWT-based user authentication
- **Database**: MongoDB with Mongoose ODM
- **Security**: Helmet.js, CORS, input validation
- **CI/CD**: GitHub Actions workflows for automated testing and deployment
- **Monitoring**: Error tracking and performance monitoring setup

### Features
- ✅ User CRUD operations (Create, Read, Update, Delete)
- ✅ RESTful API endpoints
- ✅ MongoDB Atlas integration
- ✅ Environment-based configuration
- ✅ Production-ready security headers
- ✅ CORS configuration
- ✅ Error handling and logging
- ✅ Responsive React UI
- ✅ CI/CD pipeline ready
- ✅ One-click deployment configurations

## �🛠️ Technology Stack

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT (jsonwebtoken), bcryptjs
- **Security**: Helmet.js, CORS
- **Logging**: Morgan
- **Development**: Nodemon

### Frontend
- **Framework**: React 18.2.0
- **Build Tool**: Vite 4.5.0
- **HTTP Client**: Axios 1.6.0
- **Styling**: CSS Modules
- **Linting**: ESLint

### DevOps & Deployment
- **Version Control**: Git & GitHub
- **CI/CD**: GitHub Actions
- **Backend Hosting**: Render
- **Frontend Hosting**: Vercel
- **Database**: MongoDB Atlas
- **Environment Management**: dotenv

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or Atlas account)
- Git
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/PLP-MERN-Stack-Development/deployment-and-devops-essentials-mugoemm.git
cd deployment-and-devops-essentials-mugoemm
```

2. **Install Backend Dependencies**
```bash
cd backend
npm install
```

3. **Install Frontend Dependencies**
```bash
cd ../frontend
npm install
```

4. **Configure Environment Variables**

Backend (`backend/.env`):
```env
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://localhost:27017/mern_app
JWT_SECRET=your_jwt_secret_here
CORS_ORIGIN=http://localhost:5173
```

Frontend (`frontend/.env`):
```env
VITE_API_BASE_URL=http://localhost:5000/api
VITE_DEV_SERVER_PORT=5173
VITE_PREVIEW_SERVER_PORT=4173
```

5. **Start Development Servers**

Backend:
```bash
cd backend
npm run dev
```

Frontend (in a new terminal):
```bash
cd frontend
npm run dev
```

6. **Access the Application**
- Frontend: http://localhost:5173
- Backend API: http://localhost:5000
- Health Check: http://localhost:5000/health

## 🌐 Deployment Instructions

## 🌐 Deployment Instructions

> **📖 Detailed deployment guide available in [DEPLOYMENT.md](./DEPLOYMENT.md)**

### Backend Deployment (Render)

1. **Prepare MongoDB Atlas**
   - Create a free cluster at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
   - Get your connection string
   - Whitelist IP: `0.0.0.0/0` (allow from anywhere)

2. **Deploy to Render**
   - Go to [Render Dashboard](https://dashboard.render.com/)
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Configure:
     - **Name**: `mern-backend`
     - **Root Directory**: `backend`
     - **Environment**: `Node`
     - **Build Command**: `npm install`
     - **Start Command**: `npm start`
     - **Plan**: Free

3. **Set Environment Variables** (on Render):
   ```
   NODE_ENV=production
   MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/dbname
   JWT_SECRET=generate-a-secure-random-string
   CORS_ORIGIN=https://your-app.vercel.app
   PORT=10000
   ```

4. **Deploy** and copy your backend URL (e.g., `https://your-app.onrender.com`)

### Frontend Deployment (Vercel)

1. **Deploy to Vercel**
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "Add New..." → "Project"
   - Import your GitHub repository
   - Configure:
     - **Framework Preset**: Vite
     - **Root Directory**: `frontend`
     - **Build Command**: `npm run build`
     - **Output Directory**: `dist`

2. **Set Environment Variable** (on Vercel):
   ```
   VITE_API_BASE_URL=https://your-app.onrender.com/api
   ```

3. **Deploy** and copy your frontend URL (e.g., `https://your-app.vercel.app`)

4. **Update Backend CORS**
   - Go back to Render
   - Update `CORS_ORIGIN` to your Vercel URL
   - Save and redeploy

### Verification

Test your deployed application:

```bash
# Health check
curl https://your-app.onrender.com/health

# Get users
curl https://your-app.onrender.com/api/users

# Open frontend
open https://your-app.vercel.app
```

## � API Documentation

### Base URL
- **Local**: `http://localhost:5000/api`
- **Production**: `https://your-app.onrender.com/api`

### Endpoints

#### Health Check
```http
GET /health
```
Response:
```json
{
  "status": "ok",
  "uptime": 123.456
}
```

#### Users API

**Create User**
```http
POST /api/users
Content-Type: application/json

{
  "username": "johndoe",
  "email": "john@example.com",
  "password": "securePassword123"
}
```
Response (201):
```json
{
  "_id": "507f1f77bcf86cd799439011",
  "username": "johndoe",
  "email": "john@example.com",
  "password": "$2a$10$...", 
  "createdAt": "2025-11-12T10:30:00.000Z",
  "updatedAt": "2025-11-12T10:30:00.000Z",
  "__v": 0
}
```

**Get All Users**
```http
GET /api/users
```
Response (200):
```json
[
  {
    "_id": "507f1f77bcf86cd799439011",
    "username": "johndoe",
    "email": "john@example.com",
    "createdAt": "2025-11-12T10:30:00.000Z",
    "updatedAt": "2025-11-12T10:30:00.000Z"
  }
]
```

**Get User by ID**
```http
GET /api/users/:id
```

**Update User**
```http
PUT /api/users/:id
Content-Type: application/json

{
  "username": "newusername",
  "email": "newemail@example.com"
}
```

**Delete User**
```http
DELETE /api/users/:id
```
Response (200):
```json
{
  "message": "User deleted successfully"
}
```

## � CI/CD Pipeline

### GitHub Actions Workflows

This project includes automated CI/CD pipelines:

#### Frontend CI/CD (`.github/workflows/frontend-ci.yml`)
- **Triggers**: Push/PR to main branch
- **Steps**:
  1. Checkout code
  2. Setup Node.js
  3. Install dependencies
  4. Run linting (`npm run lint`)
  5. Build application (`npm run build`)
  6. Run tests (`npm test`)

#### Backend CI/CD (`.github/workflows/backend-ci.yml`)
- **Triggers**: Push/PR to main branch  
- **Steps**:
  1. Checkout code
  2. Setup Node.js
  3. Install dependencies
  4. Run linting
  5. Run tests
  6. Build check

### Continuous Deployment

- **Vercel**: Automatically deploys frontend on push to main
- **Render**: Automatically deploys backend on push to main

### Pipeline Status

[![Frontend CI](https://github.com/PLP-MERN-Stack-Development/deployment-and-devops-essentials-mugoemm/actions/workflows/frontend-ci.yml/badge.svg)](https://github.com/PLP-MERN-Stack-Development/deployment-and-devops-essentials-mugoemm/actions/workflows/frontend-ci.yml)

## 📊 Monitoring Setup

### Error Tracking
- **Sentry Integration**: Ready for error monitoring
- Configure `SENTRY_DSN` in environment variables
- Automatic error reporting in production

### Performance Monitoring
- Health check endpoint: `/health`
- Server uptime tracking
- Request logging with Morgan

### Logging
- Development: Console logging with Morgan
- Production: Structured logging ready

## 🖼️ Screenshots

### Application Interface
![User Management Interface](./screenshots/frontend-ui.png)
_User management interface with create, read, and delete operations_

### CI/CD Pipeline
![GitHub Actions Workflow](./screenshots/github-actions.png)
_Automated testing and deployment pipeline_

### Deployed Application
![Live Application](./screenshots/deployed-app.png)
_Production application running on Vercel and Render_

### Monitoring Dashboard
![Monitoring Setup](./screenshots/monitoring.png)
_Health checks and monitoring configuration_

> **Note**: Deploy your application to capture actual screenshots

## 🔑 Environment Variables

### Backend Environment Variables

Create `backend/.env` file:

```env
# Node Environment
NODE_ENV=development                    # development | production

# Server Configuration
PORT=5000                              # Server port (Render uses 10000)

# Database
MONGODB_URI=mongodb://localhost:27017/mern_app
# Production: mongodb+srv://user:pass@cluster.mongodb.net/dbname

# Authentication
JWT_SECRET=your-super-secret-jwt-key   # Generate with: openssl rand -base64 32
BCRYPT_SALT_ROUNDS=12                  # Password hashing rounds

# Security
CORS_ORIGIN=http://localhost:5173      # Frontend URL
# Production: https://your-app.vercel.app

# Monitoring (Optional)
SENTRY_DSN=                            # Sentry error tracking
SENTRY_TRACES_SAMPLE_RATE=0.1          # Performance monitoring
```

### Frontend Environment Variables

Create `frontend/.env` file:

```env
# API Configuration
VITE_API_BASE_URL=http://localhost:5000/api
# Production: https://your-app.onrender.com/api

# Development Server
VITE_DEV_SERVER_PORT=5173
VITE_PREVIEW_SERVER_PORT=4173

# Monitoring (Optional)
VITE_SENTRY_DSN=                       # Frontend error tracking
```

### Environment Templates

See example configurations:
- Backend: [`backend/env.example`](./backend/env.example)
- Frontend: [`frontend/env.example`](./frontend/env.example)

### Security Notes
- ⚠️ Never commit `.env` files to version control
- ✅ Use `.env.example` as templates
- ✅ Generate strong `JWT_SECRET` for production
- ✅ Use MongoDB Atlas for production database
- ✅ Set appropriate CORS origins

## 📁 Project Structure

```
deployment-and-devops-essentials-mugoemm/
├── backend/                          # Node.js/Express backend
│   ├── config/                       # Configuration files
│   │   └── index.js                  # Centralized config
│   ├── middleware/                   # Custom middleware
│   │   └── notFound.js              # 404 handler
│   ├── models/                       # Mongoose models
│   │   └── User.js                  # User schema
│   ├── routes/                       # API routes
│   │   ├── index.js                 # Route aggregator
│   │   └── users.js                 # User CRUD routes
│   ├── node_modules/                # Dependencies
│   ├── .env                         # Environment variables (not in git)
│   ├── .env.example                 # Environment template
│   ├── .eslintignore               # ESLint ignore rules
│   ├── .eslintrc.cjs               # ESLint configuration
│   ├── .gitignore                   # Git ignore rules
│   ├── env.example                  # Backup env template
│   ├── package.json                 # Dependencies & scripts
│   ├── package-lock.json            # Dependency lock file
│   ├── Procfile                     # Render deployment config
│   ├── render.yaml                  # Render configuration
│   └── server.js                    # Express app entry point
│
├── frontend/                         # React/Vite frontend
│   ├── src/                         # Source code
│   │   ├── components/              # React components
│   │   │   ├── UserForm.jsx        # User creation form
│   │   │   └── UserList.jsx        # User list display
│   │   ├── pages/                   # Page components
│   │   │   └── UsersPage.jsx       # Main users page
│   │   ├── services/                # API services
│   │   │   └── api.js              # Axios HTTP client
│   │   ├── styles/                  # CSS stylesheets
│   │   │   ├── app.css             # App-specific styles
│   │   │   ├── index.css           # Global styles
│   │   │   ├── layout.css          # Layout utilities
│   │   │   ├── reset.css           # CSS reset
│   │   │   └── theme.css           # Theme variables
│   │   ├── App.jsx                  # Root component
│   │   └── main.jsx                 # React entry point
│   ├── node_modules/                # Dependencies
│   ├── .env                         # Environment variables (not in git)
│   ├── .eslintignore               # ESLint ignore rules
│   ├── .eslintrc.cjs               # ESLint configuration
│   ├── env.example                  # Environment template
│   ├── index.html                   # HTML template
│   ├── package.json                 # Dependencies & scripts
│   ├── package-lock.json            # Dependency lock file
│   ├── postcss.config.cjs          # PostCSS configuration
│   ├── vercel.json                  # Vercel deployment config
│   └── vite.config.js              # Vite build configuration
│
├── .github/                          # GitHub configuration
│   └── workflows/                   # CI/CD workflows
│       ├── backend-ci.yml          # Backend CI pipeline
│       └── frontend-ci.yml         # Frontend CI pipeline
│
├── monitoring/                       # Monitoring configuration
│   └── README.md                    # Monitoring setup guide
│
├── .gitignore                       # Git ignore rules
├── DEPLOYMENT.md                    # Detailed deployment guide
├── README.md                        # This file
└── Week7-Assignment.md             # Assignment instructions
```

### Key Files

- **`backend/server.js`**: Express server with MongoDB connection, middleware, and routes
- **`backend/models/User.js`**: Mongoose schema for User model
- **`backend/routes/users.js`**: RESTful API endpoints for user operations
- **`frontend/src/App.jsx`**: Main React application component
- **`frontend/src/services/api.js`**: Centralized API client with Axios
- **`backend/Procfile`**: Render deployment configuration
- **`backend/render.yaml`**: Render service configuration
- **`frontend/vercel.json`**: Vercel deployment configuration
- **`.github/workflows/*.yml`**: GitHub Actions CI/CD pipelines

## 🧪 Testing

### Backend Tests
```bash
cd backend
npm test
```

### Frontend Tests
```bash
cd frontend
npm test              # Run tests
npm run lint          # Run ESLint
npm run lint:fix      # Fix linting issues
```

### Manual Testing

Test API endpoints locally:

```bash
# Create a user
curl -X POST http://localhost:5000/api/users \
  -H "Content-Type: application/json" \
  -d '{"username":"testuser","email":"test@example.com","password":"password123"}'

# Get all users
curl http://localhost:5000/api/users

# Delete a user
curl -X DELETE http://localhost:5000/api/users/<user_id>
```

## 🛡️ Security Features

- ✅ **Helmet.js**: Security headers (CSP, XSS protection, etc.)
- ✅ **CORS**: Configured cross-origin resource sharing
- ✅ **Password Hashing**: bcryptjs for secure password storage
- ✅ **JWT Authentication**: Token-based authentication ready
- ✅ **Input Validation**: Client and server-side validation
- ✅ **Environment Variables**: Sensitive data protected
- ✅ **MongoDB Injection Prevention**: Mongoose sanitization
- ✅ **HTTPS Ready**: Production deployment uses HTTPS

## 🚨 Troubleshooting

### Common Issues

**Issue**: MongoDB connection fails
```bash
# Solution: Check MongoDB is running
mongod --version
# Or use MongoDB Atlas connection string
```

**Issue**: CORS errors in browser
```bash
# Solution: Update CORS_ORIGIN in backend/.env
CORS_ORIGIN=http://localhost:5173
```

**Issue**: Frontend can't connect to backend
```bash
# Solution: Update VITE_API_BASE_URL in frontend/.env
VITE_API_BASE_URL=http://localhost:5000/api
```

**Issue**: Port already in use
```bash
# Solution: Kill process on port 5000
# Windows:
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Mac/Linux:
lsof -ti:5000 | xargs kill
```

## 📚 Resources & Documentation

### Official Documentation
- [MongoDB Atlas](https://docs.atlas.mongodb.com/)
- [Express.js](https://expressjs.com/)
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Mongoose](https://mongoosejs.com/)

### Deployment Platforms
- [Render Documentation](https://render.com/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [MongoDB Atlas Setup](https://www.mongodb.com/docs/atlas/getting-started/)

### CI/CD
- [GitHub Actions](https://docs.github.com/en/actions)
- [GitHub Actions for Node.js](https://docs.github.com/en/actions/automating-builds-and-tests/building-and-testing-nodejs)

## 👥 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is part of the PLP MERN Stack Development course.

## 📧 Contact & Support

- **Repository**: [GitHub](https://github.com/PLP-MERN-Stack-Development/deployment-and-devops-essentials-mugoemm)
- **Issues**: [Report a bug](https://github.com/PLP-MERN-Stack-Development/deployment-and-devops-essentials-mugoemm/issues)

## ✅ Assignment Checklist

- [x] Complete MERN stack application code
- [x] Backend API with CRUD operations
- [x] Frontend React application
- [x] MongoDB database integration
- [x] CI/CD configuration files (GitHub Actions)
- [x] Environment variable templates (`.env.example`)
- [x] Deployment scripts and configuration (Procfile, render.yaml, vercel.json)
- [x] Comprehensive README.md with deployment instructions
- [ ] URL of deployed frontend application (Deploy to add)
- [ ] URL of deployed backend API (Deploy to add)
- [ ] Screenshots of CI/CD pipeline in action (Add after deployment)
- [ ] Documentation of monitoring setup (Sentry configuration ready)

---

**Built with ❤️ for PLP MERN Stack Development Course**

*Last Updated: November 12, 2025* 