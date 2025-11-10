import { DatabaseService } from './database.service';
import { Movie } from './entities/movie.entity';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
export declare class MoviesService {
    private databaseService;
    constructor(databaseService: DatabaseService);
    findAll(page?: number, limit?: number): Promise<{
        data: Movie[];
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    }>;
    findOne(id: string): Promise<Movie>;
    create(createMovieDto: CreateMovieDto, posterUrl: string, imageUrls?: string[]): Promise<Movie>;
    update(id: string, updateMovieDto: UpdateMovieDto, posterUrl?: string, imageUrls?: string[]): Promise<Movie>;
    remove(id: string): Promise<void>;
}
