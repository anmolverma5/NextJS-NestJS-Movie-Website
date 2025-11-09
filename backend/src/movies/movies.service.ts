import { Injectable, NotFoundException } from '@nestjs/common';
import { DatabaseService } from './database.service';
import { Movie } from './entities/movie.entity';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Injectable()
export class MoviesService {
  constructor(private databaseService: DatabaseService) {}

  async findAll(page: number = 1, limit: number = 8) {
    return this.databaseService.findAll(page, limit);
  }

  async findOne(id: string): Promise<Movie> {
    const movie = this.databaseService.findOne(id);
    if (!movie) {
      throw new NotFoundException(`Movie with ID ${id} not found`);
    }
    return movie;
  }

  async create(createMovieDto: CreateMovieDto, posterUrl: string, imageUrls: string[] = []): Promise<Movie> {
    return this.databaseService.create({
      title: createMovieDto.title,
      publishingYear: createMovieDto.publishingYear,
      poster: posterUrl,
      images: imageUrls,
    });
  }

  async update(id: string, updateMovieDto: UpdateMovieDto, posterUrl?: string, imageUrls?: string[]): Promise<Movie> {
    const movie = this.databaseService.findOne(id);
    if (!movie) {
      throw new NotFoundException(`Movie with ID ${id} not found`);
    }

    const updates: any = {};
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
      // Update poster to first image if images are provided
      if (imageUrls.length > 0) {
        updates.poster = imageUrls[0];
      }
    }

    const updated = this.databaseService.update(id, updates);
    if (!updated) {
      throw new NotFoundException(`Movie with ID ${id} not found`);
    }

    return updated;
  }

  async remove(id: string): Promise<void> {
    const deleted = this.databaseService.remove(id);
    if (!deleted) {
      throw new NotFoundException(`Movie with ID ${id} not found`);
    }
  }
}

