# Movie Database - Backend API

A robust, scalable REST API built with **NestJS**, **TypeScript**, and modern Node.js best practices.

## 📋 Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Features](#features)
- [Getting Started](#getting-started)
- [Configuration](#configuration)
- [API Endpoints](#api-endpoints)
- [Authentication](#authentication)
- [Database](#database)
- [File Upload](#file-upload)
- [Development](#development)
- [Testing](#testing)
- [Deployment](#deployment)
- [API Documentation](#api-documentation)

## 🎯 Overview

This is the backend API for the Movie Database project. It provides a secure, RESTful API for managing movies with features like JWT authentication, CRUD operations, image uploads, and pagination.

**Developed by:** Anmol Verma (6+ years of experience)

## 🛠️ Tech Stack

- **NestJS 11** - Progressive Node.js framework
- **TypeScript** - Type safety
- **Passport** - Authentication middleware
- **JWT** - JSON Web Tokens
- **Multer** - File upload handling
- **Swagger** - API documentation
- **Class Validator** - DTO validation
- **bcryptjs** - Password hashing
- **Express** - Web framework

## 📁 Project Structure

```
backend/
├── src/                          # Source code
│   ├── main.ts                   # Application entry point
│   ├── app.module.ts             # Root module
│   ├── app.controller.ts         # Root controller
│   ├── app.service.ts            # Root service
│   │
│   ├── auth/                     # Authentication module
│   │   ├── auth.module.ts        # Auth module definition
│   │   ├── auth.controller.ts     # Auth endpoints
│   │   ├── auth.service.ts       # Auth business logic
│   │   ├── jwt.strategy.ts       # JWT passport strategy
│   │   ├── jwt-auth.guard.ts     # JWT guard
│   │   └── dto/                  # Data Transfer Objects
│   │       └── login.dto.ts      # Login DTO
│   │
│   └── movies/                   # Movies module
│       ├── movies.module.ts      # Movies module definition
│       ├── movies.controller.ts # Movies endpoints
│       ├── movies.service.ts     # Movies business logic
│       ├── database.service.ts   # In-memory database
│       ├── entities/             # Entity definitions
│       │   └── movie.entity.ts  # Movie entity
│       └── dto/                  # Data Transfer Objects
│           ├── create-movie.dto.ts    # Create movie DTO
│           └── update-movie.dto.ts  # Update movie DTO
│
├── test/                         # Test files
│   ├── app.e2e-spec.ts          # E2E tests
│   └── jest-e2e.json            # Jest E2E config
│
├── uploads/                      # Uploaded images directory
│   └── .gitkeep                 # Keep directory in git
│
├── Dockerfile                    # Docker configuration
├── nest-cli.json                 # NestJS CLI configuration
├── package.json                 # Dependencies and scripts
├── tsconfig.json                 # TypeScript configuration
├── tsconfig.build.json           # TypeScript build config
├── eslint.config.mjs             # ESLint configuration
└── README.md                     # This file
```

## ✨ Features

### Authentication
- ✅ JWT-based authentication
- ✅ Secure password hashing with bcrypt
- ✅ Protected routes with guards
- ✅ Token validation
- ✅ User session management

### Movie Management
- ✅ Create movies with image upload
- ✅ Read movies with pagination
- ✅ Update movies
- ✅ Delete movies
- ✅ Get movie by ID

### File Upload
- ✅ Image upload with Multer
- ✅ File validation (type, size)
- ✅ Unique filename generation
- ✅ Static file serving

### API Features
- ✅ RESTful API design
- ✅ Request validation
- ✅ Error handling
- ✅ CORS configuration
- ✅ Swagger documentation

## 🚀 Getting Started

### Prerequisites

- Node.js 20+ installed
- npm or yarn package manager

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Create environment file:**
   Create a `.env` file in the root directory:
   ```env
   PORT=3001
   JWT_SECRET=your-secret-key-change-in-production
   FRONTEND_URL=http://localhost:3000
   ```

3. **Create uploads directory:**
   ```bash
   mkdir uploads
   ```

4. **Start development server:**
   ```bash
   npm run start:dev
   ```

5. **Access API:**
   - API: http://localhost:3001
   - Swagger Docs: http://localhost:3001/api

## ⚙️ Configuration

### Environment Variables

Create a `.env` file with the following variables:

```env
# Server port
PORT=3001

# JWT secret key (change in production!)
JWT_SECRET=your-secret-key-change-in-production

# Frontend URL for CORS
FRONTEND_URL=http://localhost:3000
```

### Default User

The application comes with a default user:
- **Email:** `admin@example.com`
- **Password:** `password123`

**Note:** In production, implement proper user registration and management.

## 📡 API Endpoints

### Authentication

#### POST `/auth/login`
Login user and get JWT token.

**Request Body:**
```json
{
  "email": "admin@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "email": "admin@example.com"
  }
}
```

### Movies

#### GET `/movies`
Get all movies with pagination.

**Query Parameters:**
- `page` (optional): Page number (default: 1)
- `limit` (optional): Items per page (default: 8)

**Headers:**
```
Authorization: Bearer <token>
```

**Response:**
```json
{
  "data": [
    {
      "id": "1",
      "title": "The Matrix",
      "publishingYear": 1999,
      "poster": "/uploads/image.jpg",
      "createdAt": "2024-01-01T00:00:00.000Z",
      "updatedAt": "2024-01-01T00:00:00.000Z"
    }
  ],
  "total": 10,
  "page": 1,
  "limit": 8,
  "totalPages": 2
}
```

#### GET `/movies/:id`
Get movie by ID.

**Headers:**
```
Authorization: Bearer <token>
```

**Response:**
```json
{
  "id": "1",
  "title": "The Matrix",
  "publishingYear": 1999,
  "poster": "/uploads/image.jpg",
  "createdAt": "2024-01-01T00:00:00.000Z",
  "updatedAt": "2024-01-01T00:00:00.000Z"
}
```

#### POST `/movies`
Create a new movie.

**Headers:**
```
Authorization: Bearer <token>
Content-Type: multipart/form-data
```

**Form Data:**
- `title` (string, required): Movie title
- `publishingYear` (number, required): Publishing year
- `poster` (file, optional): Movie poster image

**Response:**
```json
{
  "id": "1",
  "title": "The Matrix",
  "publishingYear": 1999,
  "poster": "/uploads/image.jpg",
  "createdAt": "2024-01-01T00:00:00.000Z",
  "updatedAt": "2024-01-01T00:00:00.000Z"
}
```

#### PATCH `/movies/:id`
Update a movie.

**Headers:**
```
Authorization: Bearer <token>
Content-Type: multipart/form-data
```

**Form Data:**
- `title` (string, optional): Movie title
- `publishingYear` (number, optional): Publishing year
- `poster` (file, optional): Movie poster image

**Response:**
```json
{
  "id": "1",
  "title": "The Matrix Reloaded",
  "publishingYear": 2003,
  "poster": "/uploads/new-image.jpg",
  "createdAt": "2024-01-01T00:00:00.000Z",
  "updatedAt": "2024-01-01T00:00:00.000Z"
}
```

#### DELETE `/movies/:id`
Delete a movie.

**Headers:**
```
Authorization: Bearer <token>
```

**Response:**
```json
{
  "message": "Movie deleted successfully"
}
```

## 🔐 Authentication

### JWT Strategy

The application uses Passport JWT strategy for authentication:

1. **Login:** User provides email and password
2. **Validation:** Credentials are validated
3. **Token Generation:** JWT token is generated with user info
4. **Token Storage:** Token is returned to client
5. **Protected Routes:** Token is validated on each request

### Using Protected Routes

Include the JWT token in the Authorization header:

```
Authorization: Bearer <your-jwt-token>
```

### JWT Guard

The `JwtAuthGuard` is applied to all movie endpoints to ensure only authenticated users can access them.

## 💾 Database

### Current Implementation

The application currently uses an **in-memory database** (`DatabaseService`) for simplicity. This is suitable for development and demonstration purposes.

### Production Database

For production, consider using:
- **PostgreSQL** with TypeORM or Prisma
- **MongoDB** with Mongoose
- **MySQL** with TypeORM
- **DynamoDB** for serverless

### Migration Guide

To migrate to a real database:

1. Install database driver and ORM
2. Create database connection module
3. Replace `DatabaseService` with ORM repository
4. Update entity definitions
5. Run migrations

## 📤 File Upload

### Configuration

File uploads are handled by Multer with the following configuration:

- **Destination:** `./uploads` directory
- **File Size Limit:** 5MB
- **Allowed Types:** jpg, jpeg, png, gif
- **Filename:** UUID-based unique names

### Static File Serving

Uploaded files are served statically at `/uploads/:filename`.

### File Validation

- File type validation (images only)
- File size validation (max 5MB)
- Automatic filename generation

## 💻 Development

### Available Scripts

```bash
# Start development server (watch mode)
npm run start:dev

# Build for production
npm run build

# Start production server
npm run start:prod

# Run tests
npm run test

# Run e2e tests
npm run test:e2e

# Run tests with coverage
npm run test:cov

# Lint code
npm run lint

# Format code
npm run format
```

### Development Workflow

1. **Start the server:**
   ```bash
   npm run start:dev
   ```

2. **Access Swagger documentation:**
   Open http://localhost:3001/api

3. **Test endpoints:**
   - Use Swagger UI for interactive testing
   - Use Postman or similar tools
   - Test from frontend application

## 🧪 Testing

### Unit Tests

```bash
npm run test
```

### E2E Tests

```bash
npm run test:e2e
```

### Test Coverage

```bash
npm run test:cov
```

## 🚀 Deployment

### Production Build

```bash
npm run build
npm run start:prod
```

### Docker Deployment

```bash
# Build image
docker build -t movie-backend .

# Run container
docker run -p 3001:3001 \
  -e PORT=3001 \
  -e JWT_SECRET=your-secret-key \
  -e FRONTEND_URL=https://your-frontend.com \
  -v $(pwd)/uploads:/app/uploads \
  movie-backend
```

### AWS Deployment

See `DEPLOYMENT.md` in the root directory for detailed AWS deployment instructions.

**Options:**
- AWS Elastic Beanstalk
- AWS ECS (Docker)
- AWS EC2 (Direct)
- AWS Lambda (Serverless)

## 📚 API Documentation

### Swagger UI

The API documentation is available at:
```
http://localhost:3001/api
```

### Features

- Interactive API testing
- Request/response schemas
- Authentication testing
- Endpoint descriptions

### Accessing Protected Endpoints

1. Login via `/auth/login`
2. Copy the `access_token` from response
3. Click "Authorize" button in Swagger UI
4. Enter: `Bearer <your-token>`
5. Test protected endpoints

## 🔒 Security Features

- JWT token authentication
- Password hashing with bcrypt
- CORS configuration
- Input validation
- File upload validation
- Error handling without exposing internals

## 🐛 Troubleshooting

### Common Issues

1. **Port Already in Use:**
   - Change PORT in `.env`
   - Kill process using the port

2. **CORS Errors:**
   - Verify `FRONTEND_URL` in `.env`
   - Check CORS configuration in `main.ts`

3. **File Upload Fails:**
   - Ensure `uploads` directory exists
   - Check file permissions
   - Verify file size and type

4. **Authentication Fails:**
   - Verify JWT_SECRET is set
   - Check token expiration
   - Verify token format

## 📦 Dependencies

### Production Dependencies

- `@nestjs/common` - NestJS core
- `@nestjs/core` - NestJS core
- `@nestjs/platform-express` - Express adapter
- `@nestjs/jwt` - JWT module
- `@nestjs/passport` - Passport integration
- `@nestjs/swagger` - API documentation
- `@nestjs/config` - Configuration module
- `@nestjs/serve-static` - Static file serving
- `passport` - Authentication middleware
- `passport-jwt` - JWT strategy
- `bcryptjs` - Password hashing
- `multer` - File upload
- `class-validator` - DTO validation
- `class-transformer` - Object transformation
- `uuid` - Unique ID generation

## 📝 Code Structure

### Modules

- **AuthModule:** Handles authentication
- **MoviesModule:** Handles movie CRUD operations

### Services

- **AuthService:** Authentication business logic
- **MoviesService:** Movie business logic
- **DatabaseService:** In-memory database operations

### Controllers

- **AuthController:** Authentication endpoints
- **MoviesController:** Movie endpoints

### DTOs

- **LoginDto:** Login request validation
- **CreateMovieDto:** Create movie validation
- **UpdateMovieDto:** Update movie validation

## 🔄 Future Enhancements

- [ ] User registration
- [ ] Password reset
- [ ] Email verification
- [ ] Role-based access control
- [ ] Database integration (PostgreSQL/MongoDB)
- [ ] Redis caching
- [ ] Rate limiting
- [ ] Logging and monitoring
- [ ] Unit and E2E tests
- [ ] CI/CD pipeline

## 👨‍💻 Author

**Anmol Verma**
- 6+ years of experience in full-stack development
- Expert in NestJS, Node.js, TypeScript, and cloud technologies

## 📄 License

This project is part of a full-stack assignment.

---

**Note:** This is the backend API. Make sure to configure the frontend to point to this API URL.
