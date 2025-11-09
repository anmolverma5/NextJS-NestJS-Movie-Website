# Master Runner Guide

This guide explains how to use the master runner to start both frontend and backend services from the root directory.

## 🎯 Overview

The master runner allows you to start both the Next.js frontend and NestJS backend with a single command, making development easier and more efficient.

## 📋 Using npm Scripts

The project uses npm scripts for running both services. This is the recommended and only method.

### Install All Dependencies

```bash
npm run install:all
```

This will install dependencies for:
- Root directory
- Frontend directory
- Backend directory

### Start Both Services

```bash
npm run dev
```

This starts both services concurrently:
- **Backend:** http://localhost:3001
- **Frontend:** http://localhost:3000
- **API Docs:** http://localhost:3001/api

### Other Useful Commands

```bash
# Build both projects
npm run build

# Start in production mode
npm run start

# Lint both projects
npm run lint

# Clean all node_modules and build files
npm run clean

# Clean and reinstall all dependencies
npm run clean:install
```

## ⚙️ Configuration

### Environment Files

Before running, make sure you have the required environment files:

#### Backend (.env)

Create `backend/.env`:

```env
PORT=3001
JWT_SECRET=your-secret-key-change-in-production
FRONTEND_URL=http://localhost:3000
```

#### Frontend (.env.local)

Create `frontend/.env.local`:

```env
NEXT_PUBLIC_API_URL=http://localhost:3001
```

### Directory Structure

The master runner will automatically create:
- `backend/uploads/` - For uploaded images

## 🚀 Quick Start

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd "NextJS + NestJS Movie Website"
   ```

2. **Install all dependencies:**
   ```bash
   npm run install:all
   ```

3. **Create environment files:**
   - Create `backend/.env` (see above)
   - Create `frontend/.env.local` (see above)

4. **Start both services:**
   ```bash
   npm run dev
   ```

5. **Access the application:**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:3001
   - API Docs: http://localhost:3001/api

## 📝 Available npm Scripts

### Root Package.json Scripts

| Script | Description |
|--------|-------------|
| `install:all` | Install dependencies for root, frontend, and backend |
| `dev` | Start both services in development mode |
| `dev:frontend` | Start only frontend in development mode |
| `dev:backend` | Start only backend in development mode |
| `build` | Build both projects |
| `build:frontend` | Build only frontend |
| `build:backend` | Build only backend |
| `start` | Start both services in production mode |
| `start:frontend` | Start only frontend in production mode |
| `start:backend` | Start only backend in production mode |
| `lint` | Lint both projects |
| `lint:frontend` | Lint only frontend |
| `lint:backend` | Lint only backend |
| `clean` | Remove all node_modules and build files |
| `clean:install` | Clean and reinstall all dependencies |

## 🔧 Troubleshooting

### Port Already in Use

If you get a "port already in use" error:

1. **Change the port in backend/.env:**
   ```env
   PORT=3002
   ```

2. **Update frontend/.env.local:**
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:3002
   ```

### Dependencies Not Installing

If dependencies fail to install:

1. **Clear npm cache:**
   ```bash
   npm cache clean --force
   ```

2. **Delete node_modules:**
   ```bash
   npm run clean
   ```

3. **Reinstall:**
   ```bash
   npm run install:all
   ```

### Services Not Starting

1. **Check if ports are available:**
   - Frontend: 3000
   - Backend: 3001

2. **Verify environment files exist:**
   - `backend/.env`
   - `frontend/.env.local`

3. **Check for errors in console output**

### Concurrently Not Found

If you get "concurrently not found":

```bash
npm install concurrently --save-dev
```

## 💡 Tips

1. **Use separate terminals** for better log visibility:
   ```bash
   # Terminal 1
   npm run dev:backend

   # Terminal 2
   npm run dev:frontend
   ```

2. **Use npm scripts** for consistency across platforms

3. **Check logs** if services don't start properly

4. **Keep environment files** in `.gitignore` (already configured)

## 🎯 Best Practices

1. **Always use `npm run install:all`** after cloning
2. **Create environment files** before first run
3. **Use `npm run dev`** for development
4. **Use `npm run build`** before deployment
5. **Use `npm run lint`** before committing

## 📚 Additional Resources

- [Concurrently Documentation](https://github.com/open-cli-tools/concurrently)
- [Next.js Documentation](https://nextjs.org/docs)
- [NestJS Documentation](https://docs.nestjs.com)

---

**Developed by Anmol Verma** - 6+ years of experience

