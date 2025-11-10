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
exports.Movie = void 0;
const swagger_1 = require("@nestjs/swagger");
class Movie {
    id;
    title;
    publishingYear;
    poster;
    images;
    createdAt;
    updatedAt;
}
exports.Movie = Movie;
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1', description: 'Unique movie identifier' }),
    __metadata("design:type", String)
], Movie.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'The Matrix', description: 'Movie title' }),
    __metadata("design:type", String)
], Movie.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1999, description: 'Year the movie was published' }),
    __metadata("design:type", Number)
], Movie.prototype, "publishingYear", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '/uploads/image.jpg',
        description: 'URL path to the primary movie poster image (first image)',
        required: false
    }),
    __metadata("design:type", String)
], Movie.prototype, "poster", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: ['/uploads/image1.jpg', '/uploads/image2.jpg'],
        description: 'Array of URL paths to movie images',
        required: false,
        type: [String]
    }),
    __metadata("design:type", Array)
], Movie.prototype, "images", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2024-01-01T00:00:00.000Z', description: 'Date when movie was created' }),
    __metadata("design:type", Date)
], Movie.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2024-01-01T00:00:00.000Z', description: 'Date when movie was last updated' }),
    __metadata("design:type", Date)
], Movie.prototype, "updatedAt", void 0);
//# sourceMappingURL=movie.entity.js.map