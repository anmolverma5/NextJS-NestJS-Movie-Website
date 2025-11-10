import { MoviesService } from './movies.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';
export declare class MoviesController {
    private readonly moviesService;
    constructor(moviesService: MoviesService);
    create(createMovieDto: CreateMovieDto, files: Express.Multer.File[]): Promise<Movie>;
    findAll(page?: number, limit?: number): Promise<{
        data: Movie[];
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    }>;
    findOne(id: string): Promise<Movie>;
    update(id: string, updateMovieDto: UpdateMovieDto, files?: Express.Multer.File[]): Promise<Movie>;
    remove(id: string): Promise<{
        message: string;
        id: string;
    }>;
}
