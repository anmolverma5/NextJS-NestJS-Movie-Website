"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoviesController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const swagger_1 = require("@nestjs/swagger");
const movies_service_1 = require("./movies.service");
const create_movie_dto_1 = require("./dto/create-movie.dto");
const update_movie_dto_1 = require("./dto/update-movie.dto");
const movie_entity_1 = require("./entities/movie.entity");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const multer_1 = require("multer");
const path_1 = require("path");
const uuid_1 = require("uuid");
let MoviesController = class MoviesController {
    moviesService;
    constructor(moviesService) {
        this.moviesService = moviesService;
    }
    async create(createMovieDto, files) {
        const imageUrls = files && files.length > 0
            ? files.map(file => `/uploads/${file.filename}`)
            : [];
        const posterUrl = imageUrls.length > 0 ? imageUrls[0] : '';
        return this.moviesService.create(createMovieDto, posterUrl, imageUrls);
    }
    async findAll(page = 1, limit = 8) {
        return this.moviesService.findAll(page, limit);
    }
    async findOne(id) {
        return this.moviesService.findOne(id);
    }
    async update(id, updateMovieDto, files) {
        const imageUrls = files && files.length > 0
            ? files.map(file => `/uploads/${file.filename}`)
            : undefined;
        const posterUrl = imageUrls && imageUrls.length > 0 ? imageUrls[0] : undefined;
        return this.moviesService.update(id, updateMovieDto, posterUrl, imageUrls);
    }
    async remove(id) {
        await this.moviesService.remove(id);
        return { message: 'Movie deleted successfully', id };
    }
};
exports.MoviesController = MoviesController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FilesInterceptor)('images', 10, {
        storage: (0, multer_1.diskStorage)({
            destination: './uploads',
            filename: (req, file, cb) => {
                const uniqueName = `${(0, uuid_1.v4)()}${(0, path_1.extname)(file.originalname)}`;
                cb(null, uniqueName);
            },
        }),
        fileFilter: (req, file, cb) => {
            if (!file.mimetype.match(/\/(jpg|jpeg|png|gif)$/)) {
                return cb(new Error('Only image files are allowed!'), false);
            }
            cb(null, true);
        },
        limits: { fileSize: 5 * 1024 * 1024 },
    })),
    (0, swagger_1.ApiOperation)({
        summary: 'Create a new movie',
        description: 'Create a new movie with title, publishing year, and optional images. Images must be JPG, PNG, or GIF format, max 5MB each. Up to 10 images allowed.'
    }),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            required: ['title', 'publishingYear'],
            properties: {
                title: { type: 'string', example: 'The Matrix', description: 'Movie title' },
                publishingYear: { type: 'number', example: 1999, description: 'Year between 1000 and 2035' },
                images: {
                    type: 'array',
                    items: { type: 'string', format: 'binary' },
                    description: 'Movie images (optional, up to 10 images)'
                },
            },
        },
    }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Movie created successfully',
        type: movie_entity_1.Movie
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Validation error - Invalid input data' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized - Invalid or missing JWT token' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFiles)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_movie_dto_1.CreateMovieDto, Array]),
    __metadata("design:returntype", Promise)
], MoviesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({
        summary: 'Get all movies with pagination',
        description: 'Retrieve a paginated list of all movies. Supports pagination with page and limit query parameters.'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Movies retrieved successfully',
        schema: {
            type: 'object',
            properties: {
                data: {
                    type: 'array',
                    items: { type: 'object' }
                },
                total: { type: 'number', example: 50 },
                page: { type: 'number', example: 1 },
                limit: { type: 'number', example: 8 },
                totalPages: { type: 'number', example: 7 }
            }
        }
    }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized - Invalid or missing JWT token' }),
    __param(0, (0, common_1.Query)('page', new common_1.DefaultValuePipe(1), common_1.ParseIntPipe)),
    __param(1, (0, common_1.Query)('limit', new common_1.DefaultValuePipe(8), common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], MoviesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({
        summary: 'Get a movie by ID',
        description: 'Retrieve a single movie by its unique identifier'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Movie retrieved successfully',
        type: movie_entity_1.Movie
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Movie not found' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized - Invalid or missing JWT token' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MoviesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FilesInterceptor)('images', 10, {
        storage: (0, multer_1.diskStorage)({
            destination: './uploads',
            filename: (req, file, cb) => {
                const uniqueName = `${(0, uuid_1.v4)()}${(0, path_1.extname)(file.originalname)}`;
                cb(null, uniqueName);
            },
        }),
        fileFilter: (req, file, cb) => {
            if (!file.mimetype.match(/\/(jpg|jpeg|png|gif)$/)) {
                return cb(new Error('Only image files are allowed!'), false);
            }
            cb(null, true);
        },
        limits: { fileSize: 5 * 1024 * 1024 },
    })),
    (0, swagger_1.ApiOperation)({
        summary: 'Update a movie',
        description: 'Update an existing movie. All fields are optional. Only provided fields will be updated. Up to 10 images allowed.'
    }),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            properties: {
                title: { type: 'string', example: 'The Matrix Reloaded', description: 'Updated movie title (optional)' },
                publishingYear: { type: 'number', example: 2003, description: 'Updated publishing year (optional)' },
                images: {
                    type: 'array',
                    items: { type: 'string', format: 'binary' },
                    description: 'Updated movie images (optional, up to 10 images)'
                },
            },
        },
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Movie updated successfully',
        type: movie_entity_1.Movie
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Movie not found' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Validation error - Invalid input data' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized - Invalid or missing JWT token' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.UploadedFiles)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_movie_dto_1.UpdateMovieDto, Array]),
    __metadata("design:returntype", Promise)
], MoviesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({
        summary: 'Delete a movie',
        description: 'Permanently delete a movie from the database. This action cannot be undone.'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Movie deleted successfully',
        schema: {
            type: 'object',
            properties: {
                message: { type: 'string', example: 'Movie deleted successfully' },
                id: { type: 'string', example: '1' }
            }
        }
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Movie not found' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized - Invalid or missing JWT token' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MoviesController.prototype, "remove", null);
exports.MoviesController = MoviesController = __decorate([
    (0, swagger_1.ApiTags)('movies'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('movies'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [movies_service_1.MoviesService])
], MoviesController);
//# sourceMappingURL=movies.controller.js.map