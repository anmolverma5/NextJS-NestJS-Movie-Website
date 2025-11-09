# Quick Start Guide

Get the Movie Database application up and running in 5 minutes!

## Prerequisites

- Node.js 20+ installed
- npm or yarn

## Quick Setup

### Option 1: Using npm Scripts (Recommended) ⚡

**From the root directory:**

```bash
# Install all dependencies (root, frontend, and backend)
npm run install:all

# Start both services together
npm run dev
```

That's it! Both services will start automatically.

### Option 2: Manual Setup

### 1. Install Dependencies

**Backend:**
```bash
cd backend
npm install
```

**Frontend:**
```bash
cd frontend
npm install
```

### 2. Configure Environment

**Backend (.env):**
```env
PORT=3001
JWT_SECRET=your-secret-key-change-in-production
FRONTEND_URL=http://localhost:3000
```

**Frontend (.env.local):**
```env
NEXT_PUBLIC_API_URL=http://localhost:3001
```

### 3. Create Uploads Directory

```bash
cd backend
mkdir uploads
```

### 4. Start Development Servers

**Terminal 1 - Backend:**
```bash
cd backend
npm run start:dev
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```

### 5. Access the Application

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:3001
- **API Docs**: http://localhost:3001/api

### 6. Login

- **Email**: `admin@example.com`
- **Password**: `password123`

## What's Next?

1. Create your first movie
2. Upload a movie poster
3. Explore the API documentation at `/api`
4. Check out the responsive design on mobile

## Troubleshooting

**Port already in use?**
- Change the PORT in backend/.env
- Update NEXT_PUBLIC_API_URL in frontend/.env.local

**CORS errors?**
- Make sure FRONTEND_URL in backend/.env matches your frontend URL

**Image upload not working?**
- Ensure the `uploads` directory exists in the backend folder
- Check file permissions

## Production Build

**Backend:**
```bash
cd backend
npm run build
npm run start:prod
```

**Frontend:**
```bash
cd frontend
npm run build
npm start
```

## Docker Quick Start

```bash
docker-compose up -d
```

This starts both services automatically!

---

Happy coding! 🚀

