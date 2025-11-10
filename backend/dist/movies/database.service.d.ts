import { Movie } from './entities/movie.entity';
export declare class DatabaseService {
    private movies;
    private nextId;
    findAll(page?: number, limit?: number): {
        data: Movie[];
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    };
    findOne(id: string): Movie | undefined;
    create(movie: Omit<Movie, 'id' | 'createdAt' | 'updatedAt'>): Movie;
    update(id: string, updates: Partial<Omit<Movie, 'id' | 'createdAt'>>): Movie | null;
    remove(id: string): boolean;
}
