import { NestFactory } from '@nestjs/core';
import { ValidationPipe, BadRequestException } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS
  app.enableCors({
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    credentials: true,
  });

  // Global validation pipe with custom error formatting
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
      exceptionFactory: (errors) => {
        const formattedErrors = errors.map((error) => {
          const messages = Object.values(error.constraints || {});
          return {
            field: error.property,
            message: messages[0] || 'Validation failed',
          };
        });
        return new BadRequestException({
          statusCode: 400,
          message: formattedErrors.length === 1 
            ? formattedErrors[0].message 
            : 'Validation failed',
          errors: formattedErrors,
        });
      },
    })
  );

  // Enhanced Swagger documentation
  const config = new DocumentBuilder()
    .setTitle('Movie Database API')
    .setDescription(`
      Complete REST API for managing a movie database.
      
      ## Features
      - JWT Authentication
      - Movie CRUD Operations
      - Image Upload Support
      - Pagination
      - Input Validation
      
      ## Authentication
      All movie endpoints require JWT authentication. Login via /auth/login to get a token.
      
      ## Default Credentials
      - Email: admin@example.com
      - Password: password123
      
      ## Base URL
      ${process.env.FRONTEND_URL || 'http://localhost:3000'}
    `)
    .setVersion('1.0')
    .setContact('Anmol Verma', '', '')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'JWT',
        description: 'Enter JWT token',
        in: 'header',
      },
      'JWT-auth'
    )
    .addTag('auth', 'Authentication endpoints')
    .addTag('movies', 'Movie management endpoints')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document, {
    customSiteTitle: 'Movie Database API Documentation',
    customCss: '.swagger-ui .topbar { display: none }',
    customfavIcon: '/favicon.ico',
  });

  const port = process.env.PORT || 3001;
  await app.listen(port);
  console.log(`Application is running on: http://localhost:${port}`);
  console.log(`Swagger documentation: http://localhost:${port}/api`);
}
bootstrap();
