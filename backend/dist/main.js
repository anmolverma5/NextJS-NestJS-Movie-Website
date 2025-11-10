"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        origin: process.env.FRONTEND_URL || 'http://localhost:3000',
        credentials: true,
    });
    app.useGlobalPipes(new common_1.ValidationPipe({
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
            return new common_1.BadRequestException({
                statusCode: 400,
                message: formattedErrors.length === 1
                    ? formattedErrors[0].message
                    : 'Validation failed',
                errors: formattedErrors,
            });
        },
    }));
    const config = new swagger_1.DocumentBuilder()
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
        .addBearerAuth({
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'JWT',
        description: 'Enter JWT token',
        in: 'header',
    }, 'JWT-auth')
        .addTag('auth', 'Authentication endpoints')
        .addTag('movies', 'Movie management endpoints')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document, {
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
//# sourceMappingURL=main.js.map