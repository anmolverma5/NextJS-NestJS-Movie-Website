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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoviesService = void 0;
const common_1 = require("@nestjs/common");
const database_service_1 = require("./database.service");
let MoviesService = class MoviesService {
    databaseService;
    constructor(databaseService) {
        this.databaseService = databaseService;
    }
    async findAll(page = 1, limit = 8) {
        return this.databaseService.findAll(page, limit);
    }
    async findOne(id) {
        const movie = this.databaseService.findOne(id);
        if (!movie) {
            throw new common_1.NotFoundException(`Movie with ID ${id} not found`);
        }
        return movie;
    }
    async create(createMovieDto, posterUrl, imageUrls = []) {
        return this.databaseService.create({
            title: createMovieDto.title,
            publishingYear: createMovieDto.publishingYear,
            poster: posterUrl,
            images: imageUrls,
        });
    }
    async update(id, updateMovieDto, posterUrl, imageUrls) {
        const movie = this.databaseService.findOne(id);
        if (!movie) {
            throw new common_1.NotFoundException(`Movie with ID ${id} not found`);
        }
        const updates = {};
        if (updateMovieDto.title) {
            updates.title = updateMovieDto.title;
        }
        if (updateMovieDto.publishingYear) {
            updates.publishingYear = updateMovieDto.publishingYear;
        }
        if (posterUrl) {
            updates.poster = posterUrl;
        }
        if (imageUrls) {
            updates.images = imageUrls;
            if (imageUrls.length > 0) {
                updates.poster = imageUrls[0];
            }
        }
        const updated = this.databaseService.update(id, updates);
        if (!updated) {
            throw new common_1.NotFoundException(`Movie with ID ${id} not found`);
        }
        return updated;
    }
    async remove(id) {
        const deleted = this.databaseService.remove(id);
        if (!deleted) {
            throw new common_1.NotFoundException(`Movie with ID ${id} not found`);
        }
    }
};
exports.MoviesService = MoviesService;
exports.MoviesService = MoviesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], MoviesService);
//# sourceMappingURL=movies.service.js.map