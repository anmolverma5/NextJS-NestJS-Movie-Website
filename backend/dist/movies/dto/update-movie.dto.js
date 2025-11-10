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
exports.UpdateMovieDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class UpdateMovieDto {
    title;
    publishingYear;
}
exports.UpdateMovieDto = UpdateMovieDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'The Matrix Reloaded' }),
    (0, class_validator_1.IsString)({ message: 'Title must be a text value' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateMovieDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 2003 }),
    (0, class_validator_1.IsInt)({ message: 'Publishing year must be a whole number (e.g., 1999, 2000)' }),
    (0, class_validator_1.Min)(1000, { message: 'Publishing year must be between 1000 and 2035' }),
    (0, class_validator_1.Max)(2035, { message: 'Publishing year must be between 1000 and 2035' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UpdateMovieDto.prototype, "publishingYear", void 0);
//# sourceMappingURL=update-movie.dto.js.map