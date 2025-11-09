import { Injectable } from '@nestjs/common';
import { Movie } from './entities/movie.entity';

@Injectable()
export class DatabaseService {
  private movies: Movie[] = [];
  private nextId = 1;

  findAll(page: number = 1, limit: number = 8): {
    data: Movie[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  } {
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

  findOne(id: string): Movie | undefined {
    return this.movies.find((movie) => movie.id === id);
  }

  create(movie: Omit<Movie, 'id' | 'createdAt' | 'updatedAt'>): Movie {
    const newMovie: Movie = {
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

  update(id: string, updates: Partial<Omit<Movie, 'id' | 'createdAt'>>): Movie | null {
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

  remove(id: string): boolean {
    const index = this.movies.findIndex((movie) => movie.id === id);
    if (index === -1) {
      return false;
    }
    this.movies.splice(index, 1);
    return true;
  }
}

