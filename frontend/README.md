# Movie Database - Frontend Application

A modern, responsive movie management frontend built with **Next.js 16**, **TypeScript**, and **Tailwind CSS**.

## 📋 Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Features](#features)
- [Getting Started](#getting-started)
- [Configuration](#configuration)
- [Development](#development)
- [Build & Deployment](#build--deployment)
- [Components](#components)
- [Pages](#pages)
- [State Management](#state-management)
- [API Integration](#api-integration)

## 🎯 Overview

This is the frontend application for the Movie Database project. It provides a beautiful, responsive user interface for managing movies with features like authentication, CRUD operations, image uploads, and pagination.

**Developed by:** Anmol Verma (6+ years of experience)

## 🛠️ Tech Stack

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **React Hook Form** - Form handling and validation
- **Zod** - Schema validation
- **Zustand** - State management
- **Axios** - HTTP client
- **Next/Image** - Optimized image handling

## 📁 Project Structure

```
frontend/
├── app/                          # Next.js App Router directory
│   ├── favicon.ico              # Site favicon
│   ├── globals.css               # Global styles and design system
│   ├── layout.tsx                # Root layout component
│   ├── page.tsx                  # Home page (redirects to login)
│   ├── login/                    # Login page
│   │   └── page.tsx             # Login page component
│   └── movies/                   # Movies section
│       ├── page.tsx              # Movies list page
│       ├── create/               # Create movie page
│       │   └── page.tsx         # Create movie form
│       └── [id]/                 # Dynamic route for movie ID
│           └── edit/             # Edit movie page
│               └── page.tsx     # Edit movie form
│
├── components/                   # Reusable React components
│   ├── Button.tsx               # Button component with variants
│   ├── Input.tsx                # Input component with validation
│   ├── MovieCard.tsx            # Movie card component
│   ├── ImageUpload.tsx          # Image upload with drag-and-drop
│   └── Wave.tsx                 # Decorative wave component
│
├── lib/                          # Utilities and helpers
│   ├── api.ts                   # Axios instance and interceptors
│   ├── store.ts                 # Zustand store for auth
│   ├── types.ts                   # TypeScript type definitions
│   ├── utils.ts                # Utility functions
│   └── api/                     # API client modules
│       ├── auth.ts              # Authentication API
│       └── movies.ts            # Movies API
│
├── public/                       # Static assets
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
│
├── Dockerfile                    # Docker configuration
├── next.config.ts                # Next.js configuration
├── package.json                  # Dependencies and scripts
├── postcss.config.mjs           # PostCSS configuration
├── tsconfig.json                # TypeScript configuration
└── README.md                     # This file
```

## ✨ Features

### Authentication
- ✅ Secure login with JWT tokens
- ✅ Form validation with error messages
- ✅ Remember me functionality
- ✅ Protected routes
- ✅ Auto-redirect on authentication

### Movie Management
- ✅ View all movies in a responsive grid
- ✅ Create new movies with image upload
- ✅ Edit existing movies
- ✅ Delete movies (via API)
- ✅ Pagination support
- ✅ Empty state handling

### Image Upload
- ✅ Drag-and-drop image upload
- ✅ Image preview before upload
- ✅ File validation
- ✅ Support for multiple image formats

### User Experience
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Loading states
- ✅ Error handling with user-friendly messages
- ✅ Smooth transitions and animations
- ✅ Modern, clean UI design

### Form Validation
- ✅ Client-side validation with Zod
- ✅ Real-time error messages
- ✅ Input sanitization
- ✅ Type-safe form handling

## 🚀 Getting Started

### Prerequisites

- Node.js 20+ installed
- npm or yarn package manager
- Backend API running (see backend README)

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Create environment file:**
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:3001
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## ⚙️ Configuration

### Environment Variables

Create a `.env.local` file with the following variables:

```env
# Backend API URL
NEXT_PUBLIC_API_URL=http://localhost:3001
```

### Next.js Configuration

The `next.config.ts` file includes:
- Image optimization settings
- Remote image patterns for API images
- Unoptimized images for development

## 💻 Development

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

### Development Workflow

1. **Start the backend API** (see backend README)
2. **Start the frontend:**
   ```bash
   npm run dev
   ```
3. **Open browser:** http://localhost:3000
4. **Login with default credentials:**
   - Email: `admin@example.com`
   - Password: `password123`

## 🏗️ Build & Deployment

### Production Build

```bash
npm run build
npm start
```

### Docker Deployment

```bash
docker build -t movie-frontend .
docker run -p 3000:3000 movie-frontend
```

### Vercel Deployment

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

3. Set environment variables in Vercel dashboard:
   - `NEXT_PUBLIC_API_URL`: Your backend API URL

### AWS Amplify Deployment

1. Connect your Git repository
2. Configure build settings:
   - Build command: `npm run build`
   - Output directory: `.next`
3. Set environment variables:
   - `NEXT_PUBLIC_API_URL`: Your backend API URL

## 🧩 Components

### Button Component
- **Location:** `components/Button.tsx`
- **Variants:** `primary`, `ghost`
- **Sizes:** `md`, `lg`
- **Usage:**
  ```tsx
  <Button variant="primary" size="md">Click me</Button>
  ```

### Input Component
- **Location:** `components/Input.tsx`
- **Features:** Validation, error messages, labels
- **Usage:**
  ```tsx
  <Input 
    type="email" 
    placeholder="Email" 
    error={errors.email?.message}
    {...register('email')}
  />
  ```

### MovieCard Component
- **Location:** `components/MovieCard.tsx`
- **Features:** Image display, movie info, click handler
- **Usage:**
  ```tsx
  <MovieCard movie={movie} onEdit={handleEdit} />
  ```

### ImageUpload Component
- **Location:** `components/ImageUpload.tsx`
- **Features:** Drag-and-drop, preview, file validation
- **Usage:**
  ```tsx
  <ImageUpload 
    value={file} 
    onChange={setFile}
    error={errors.poster?.message}
  />
  ```

## 📄 Pages

### Login Page
- **Route:** `/login`
- **File:** `app/login/page.tsx`
- **Features:**
  - Email and password input
  - Remember me checkbox
  - Form validation
  - Error handling
  - Auto-redirect on success

### Movies List Page
- **Route:** `/movies`
- **File:** `app/movies/page.tsx`
- **Features:**
  - Grid layout of movie cards
  - Pagination controls
  - Empty state
  - Logout functionality
  - Create movie button

### Create Movie Page
- **Route:** `/movies/create`
- **File:** `app/movies/create/page.tsx`
- **Features:**
  - Image upload area
  - Title input
  - Publishing year input
  - Form validation
  - Cancel and submit buttons

### Edit Movie Page
- **Route:** `/movies/[id]/edit`
- **File:** `app/movies/[id]/edit/page.tsx`
- **Features:**
  - Pre-filled form with existing data
  - Image upload with preview
  - Update functionality
  - Cancel and update buttons

## 🔄 State Management

### Zustand Store
- **Location:** `lib/store.ts`
- **Features:**
  - User authentication state
  - Token management
  - Login/logout functions
  - LocalStorage persistence

**Usage:**
```tsx
import { useAuthStore } from '@/lib/store';

const { user, isAuthenticated, login, logout } = useAuthStore();
```

## 🌐 API Integration

### API Client
- **Location:** `lib/api.ts`
- **Features:**
  - Axios instance with base URL
  - Request interceptors for JWT tokens
  - Response interceptors for error handling
  - Auto-redirect on 401 errors

### API Modules

#### Authentication API
- **Location:** `lib/api/auth.ts`
- **Methods:**
  - `login(email, password)` - User login

#### Movies API
- **Location:** `lib/api/movies.ts`
- **Methods:**
  - `getAll(page, limit)` - Get paginated movies
  - `getById(id)` - Get movie by ID
  - `create(data)` - Create new movie
  - `update(id, data)` - Update movie
  - `delete(id)` - Delete movie

## 🎨 Design System

### Colors
- **Background:** `#06343a` (Dark teal)
- **Accent:** `#33d583` (Green)
- **Text:** `#ffffff` (White)
- **Input Background:** `rgba(255, 255, 255, 0.03)`

### Typography
- **Font Family:** Montserrat
- **Weights:** 400, 500, 600, 700

### Spacing
- Consistent spacing scale using Tailwind CSS
- Responsive breakpoints for mobile, tablet, desktop

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- **Mobile:** < 520px (1 column)
- **Tablet:** 520px - 800px (2 columns)
- **Desktop:** 800px - 1100px (3 columns)
- **Large Desktop:** > 1100px (4 columns)

## 🔒 Security Features

- JWT token storage in localStorage
- Protected routes with authentication check
- Input validation and sanitization
- CORS configuration
- Secure API communication

## 🐛 Troubleshooting

### Common Issues

1. **API Connection Error:**
   - Check if backend is running
   - Verify `NEXT_PUBLIC_API_URL` in `.env.local`
   - Check CORS settings in backend

2. **Image Upload Not Working:**
   - Verify backend uploads directory exists
   - Check file size limits
   - Verify image format is supported

3. **Authentication Issues:**
   - Clear localStorage
   - Check JWT token
   - Verify backend JWT secret

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Hook Form](https://react-hook-form.com/)
- [Zod Documentation](https://zod.dev/)
- [Zustand Documentation](https://zustand-demo.pmnd.rs/)
- [Tailwind CSS](https://tailwindcss.com/docs)

## 👨‍💻 Author

**Anmol Verma**
- 6+ years of experience in full-stack development
- Expert in React, Next.js, TypeScript, and modern web technologies

## 📄 License

This project is part of a full-stack assignment.

---

**Note:** This is the frontend application. Make sure the backend API is running for full functionality.
