"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseService = void 0;
const common_1 = require("@nestjs/common");
let DatabaseService = class DatabaseService {
    movies = [];
    nextId = 1;
    findAll(page = 1, limit = 8) {
        const skip = (page - 1) * limit;
        const data = this.movies.slice(skip, skip + limit);
        const total = this.movies.length;
        const totalPages = Math.ceil(total / limit);
        return {
            data,
            total,
            page,
            limit,
            totalPages,
        };
    }
    findOne(id) {
        return this.movies.find((movie) => movie.id === id);
    }
    create(movie) {
        const newMovie = {
            ...movie,
            images: movie.images || [],
            poster: movie.poster || (movie.images && movie.images.length > 0 ? movie.images[0] : ''),
            id: this.nextId.toString(),
            createdAt: new Date(),
            updatedAt: new Date(),
        };
        this.nextId++;
        this.movies.push(newMovie);
        return newMovie;
    }
    update(id, updates) {
        const index = this.movies.findIndex((movie) => movie.id === id);
        if (index === -1) {
            return null;
        }
        this.movies[index] = {
            ...this.movies[index],
            ...updates,
            updatedAt: new Date(),
        };
        return this.movies[index];
    }
    remove(id) {
        const index = this.movies.findIndex((movie) => movie.id === id);
        if (index === -1) {
            return false;
        }
        this.movies.splice(index, 1);
        return true;
    }
};
exports.DatabaseService = DatabaseService;
exports.DatabaseService = DatabaseService = __decorate([
    (0, common_1.Injectable)()
], DatabaseService);
//# sourceMappingURL=database.service.js.map