# Movie Database - Full Stack Application

A full-stack movie management application built with **Next.js** (frontend) and **NestJS** (backend). This application allows users to manage their movie collection with features like authentication, CRUD operations, image uploads, and pagination.

## 🚀 Features

- **Authentication**: Secure login with JWT tokens
- **Movie Management**: Create, read, update, and delete movies
- **Image Upload**: Upload movie posters with drag-and-drop support
- **Pagination**: Efficient movie list pagination
- **Responsive Design**: Mobile-friendly interface
- **Form Validation**: Client and server-side validation
- **API Documentation**: Swagger/OpenAPI documentation
- **State Management**: Zustand for global state
- **Error Handling**: Comprehensive error handling and user feedback

## 🛠️ Tech Stack

### Frontend
- **Next.js 16** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Zustand** - State management
- **React Hook Form** - Form handling
- **Zod** - Schema validation
- **Axios** - HTTP client

### Backend
- **NestJS** - Progressive Node.js framework
- **TypeScript** - Type safety
- **JWT** - Authentication
- **Passport** - Authentication middleware
- **Multer** - File upload handling
- **Swagger** - API documentation
- **Class Validator** - DTO validation

## 📋 Prerequisites

- Node.js 20+ 
- npm or yarn
- Docker (optional, for containerized deployment)

## 🔧 Installation

### Quick Start (Master Runner) ⚡

The easiest way to run both frontend and backend together:

```bash
# Install all dependencies (root, frontend, and backend)
npm run install:all

# Start both services together
npm run dev
```

That's it! Both services will start automatically.

### Manual Setup

### 1. Clone the repository

```bash
git clone <repository-url>
cd "NextJS + NestJS Movie Website"
```

### 2. Install All Dependencies

```bash
# Install root dependencies
npm install

# Install frontend dependencies
cd frontend
npm install
cd ..

# Install backend dependencies
cd backend
npm install
cd ..
```

Or use the master command:
```bash
npm run install:all
```

### 3. Backend Setup

```bash
cd backend
```

Create a `.env` file in the `backend` directory:

```env
PORT=3001
JWT_SECRET=your-secret-key-change-in-production
FRONTEND_URL=http://localhost:3000
```

Create the uploads directory:

```bash
mkdir uploads
```

Start the backend:

```bash
npm run start:dev
```

The backend will run on `http://localhost:3001`
API documentation will be available at `http://localhost:3001/api`

### 4. Frontend Setup

```bash
cd frontend
```

Create a `.env.local` file in the `frontend` directory:

```env
NEXT_PUBLIC_API_URL=http://localhost:3001
```

Start the frontend:

```bash
npm run dev
```

The frontend will run on `http://localhost:3000`

## 🔐 Default Credentials

- **Email**: `admin@example.com`
- **Password**: `password123`

## 🚀 Master Runner Commands

From the root directory, you can run both services together:

```bash
# Development mode (both services)
npm run dev

# Production mode (both services)
npm run start

# Build both projects
npm run build

# Install all dependencies
npm run install:all

# Lint both projects
npm run lint

# Clean all node_modules and build files
npm run clean
```

### Individual Service Commands

```bash
# Frontend only
npm run dev:frontend
npm run build:frontend
npm run start:frontend

# Backend only
npm run dev:backend
npm run build:backend
npm run start:backend
```

## 📚 API Endpoints

### Authentication
- `POST /auth/login` - Login user

### Movies
- `GET /movies` - Get all movies (with pagination)
- `GET /movies/:id` - Get movie by ID
- `POST /movies` - Create a new movie
- `PATCH /movies/:id` - Update a movie
- `DELETE /movies/:id` - Delete a movie

For detailed API documentation, visit `http://localhost:3001/api` when the backend is running.

## 🐳 Docker Deployment

### Using Docker Compose

```bash
docker-compose up -d
```

This will start both frontend and backend services.

### Individual Docker Builds

**Backend:**
```bash
cd backend
docker build -t movie-backend .
docker run -p 3001:3001 movie-backend
```

**Frontend:**
```bash
cd frontend
docker build -t movie-frontend .
docker run -p 3000:3000 movie-frontend
```

## ☁️ AWS Deployment

### Backend Deployment (EC2/ECS/Elastic Beanstalk)

1. **Build the backend:**
   ```bash
   cd backend
   npm run build
   ```

2. **Deploy to AWS:**
   - **EC2**: Use PM2 or systemd to run the application
   - **ECS**: Use the provided Dockerfile
   - **Elastic Beanstalk**: Create a Node.js environment

3. **Environment Variables:**
   Set the following in your AWS environment:
   - `PORT=3001`
   - `JWT_SECRET=<your-secret-key>`
   - `FRONTEND_URL=<your-frontend-url>`

### Frontend Deployment (Vercel/Amplify/S3)

1. **Build the frontend:**
   ```bash
   cd frontend
   npm run build
   ```

2. **Deploy to Vercel (Recommended):**
   ```bash
   npm install -g vercel
   vercel
   ```

3. **Deploy to AWS Amplify:**
   - Connect your repository
   - Set build settings:
     - Build command: `npm run build`
     - Output directory: `.next`

4. **Environment Variables:**
   Set `NEXT_PUBLIC_API_URL` to your backend URL

### S3 + CloudFront Deployment

1. Build the frontend:
   ```bash
   cd frontend
   npm run build
   npm run export  # If using static export
   ```

2. Upload to S3 bucket
3. Configure CloudFront distribution
4. Set up custom domain (optional)

## 📱 Responsive Design

The application is fully responsive and works on:
- Desktop (1920px+)
- Tablet (768px - 1024px)
- Mobile (320px - 767px)

## 🎨 Design System

The application follows a consistent design system with:
- **Colors**: Dark teal background (#06343a), green accent (#33d583)
- **Typography**: Montserrat font family
- **Spacing**: Consistent spacing scale
- **Components**: Reusable UI components

## 🧪 Testing

### Backend Tests
```bash
cd backend
npm run test
npm run test:e2e
```

### Frontend Tests
```bash
cd frontend
npm run test
```

## 📝 Project Structure

```
.
├── backend/
│   ├── src/
│   │   ├── auth/          # Authentication module
│   │   ├── movies/         # Movies module
│   │   ├── app.module.ts   # Root module
│   │   └── main.ts         # Application entry point
│   ├── uploads/            # Uploaded images
│   └── package.json
├── frontend/
│   ├── app/                # Next.js app directory
│   │   ├── login/          # Login page
│   │   ├── movies/         # Movies pages
│   │   └── layout.tsx      # Root layout
│   ├── components/         # React components
│   ├── lib/                # Utilities and API clients
│   └── package.json
└── README.md
```

## 🚀 Development

### Backend Development
```bash
cd backend
npm run start:dev
```

### Frontend Development
```bash
cd frontend
npm run dev
```

## 📦 Production Build

### Backend
```bash
cd backend
npm run build
npm run start:prod
```

### Frontend
```bash
cd frontend
npm run build
npm start
```

## 🔒 Security Considerations

- JWT tokens are stored securely
- Passwords are hashed using bcrypt
- CORS is configured for production
- File uploads are validated
- Input validation on both client and server

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is developed by **Anmol Verma** with 6+ years of experience.

## 👨‍💻 Author

**Anmol Verma**
- 6+ years of experience in full-stack development
- Expert in React, Next.js, NestJS, and cloud deployment

## 🎯 Future Enhancements

- [ ] User registration
- [ ] Movie search and filtering
- [ ] Movie ratings and reviews
- [ ] Social sharing
- [ ] Export/import functionality
- [ ] Dark/light theme toggle
- [ ] Multi-language support
- [ ] Real-time updates with WebSockets

## 📞 Support

For issues and questions, please open an issue on GitHub.

---

**Note**: This is a full-stack application developed as an assignment. All features are production-ready and follow best practices.

