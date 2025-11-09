import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  UseInterceptors,
  UploadedFile,
  UploadedFiles,
  Query,
  DefaultValuePipe,
  ParseIntPipe,
} from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth, ApiConsumes, ApiBody } from '@nestjs/swagger';
import { MoviesService } from './movies.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { v4 as uuidv4 } from 'uuid';

@ApiTags('movies')
@ApiBearerAuth()
@Controller('movies')
@UseGuards(JwtAuthGuard)
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Post()
  @UseInterceptors(
    FilesInterceptor('images', 10, {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          const uniqueName = `${uuidv4()}${extname(file.originalname)}`;
          cb(null, uniqueName);
        },
      }),
      fileFilter: (req, file, cb) => {
        if (!file.mimetype.match(/\/(jpg|jpeg|png|gif)$/)) {
          return cb(new Error('Only image files are allowed!'), false);
        }
        cb(null, true);
      },
      limits: { fileSize: 5 * 1024 * 1024 }, // 5MB per file
    }),
  )
  @ApiOperation({ 
    summary: 'Create a new movie',
    description: 'Create a new movie with title, publishing year, and optional images. Images must be JPG, PNG, or GIF format, max 5MB each. Up to 10 images allowed.'
  })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
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
  })
  @ApiResponse({ 
    status: 201, 
    description: 'Movie created successfully',
    type: Movie
  })
  @ApiResponse({ status: 400, description: 'Validation error - Invalid input data' })
  @ApiResponse({ status: 401, description: 'Unauthorized - Invalid or missing JWT token' })
  async create(
    @Body() createMovieDto: CreateMovieDto,
    @UploadedFiles() files: Express.Multer.File[],
  ) {
    const imageUrls = files && files.length > 0 
      ? files.map(file => `/uploads/${file.filename}`)
      : [];
    const posterUrl = imageUrls.length > 0 ? imageUrls[0] : '';
    return this.moviesService.create(createMovieDto, posterUrl, imageUrls);
  }

  @Get()
  @ApiOperation({ 
    summary: 'Get all movies with pagination',
    description: 'Retrieve a paginated list of all movies. Supports pagination with page and limit query parameters.'
  })
  @ApiResponse({ 
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
  })
  @ApiResponse({ status: 401, description: 'Unauthorized - Invalid or missing JWT token' })
  async findAll(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number = 1,
    @Query('limit', new DefaultValuePipe(8), ParseIntPipe) limit: number = 8,
  ) {
    return this.moviesService.findAll(page, limit);
  }

  @Get(':id')
  @ApiOperation({ 
    summary: 'Get a movie by ID',
    description: 'Retrieve a single movie by its unique identifier'
  })
  @ApiResponse({ 
    status: 200, 
    description: 'Movie retrieved successfully',
    type: Movie
  })
  @ApiResponse({ status: 404, description: 'Movie not found' })
  @ApiResponse({ status: 401, description: 'Unauthorized - Invalid or missing JWT token' })
  async findOne(@Param('id') id: string) {
    return this.moviesService.findOne(id);
  }

  @Patch(':id')
  @UseInterceptors(
    FilesInterceptor('images', 10, {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          const uniqueName = `${uuidv4()}${extname(file.originalname)}`;
          cb(null, uniqueName);
        },
      }),
      fileFilter: (req, file, cb) => {
        if (!file.mimetype.match(/\/(jpg|jpeg|png|gif)$/)) {
          return cb(new Error('Only image files are allowed!'), false);
        }
        cb(null, true);
      },
      limits: { fileSize: 5 * 1024 * 1024 }, // 5MB per file
    }),
  )
  @ApiOperation({ 
    summary: 'Update a movie',
    description: 'Update an existing movie. All fields are optional. Only provided fields will be updated. Up to 10 images allowed.'
  })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
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
  })
  @ApiResponse({ 
    status: 200, 
    description: 'Movie updated successfully',
    type: Movie
  })
  @ApiResponse({ status: 404, description: 'Movie not found' })
  @ApiResponse({ status: 400, description: 'Validation error - Invalid input data' })
  @ApiResponse({ status: 401, description: 'Unauthorized - Invalid or missing JWT token' })
  async update(
    @Param('id') id: string,
    @Body() updateMovieDto: UpdateMovieDto,
    @UploadedFiles() files?: Express.Multer.File[],
  ) {
    const imageUrls = files && files.length > 0 
      ? files.map(file => `/uploads/${file.filename}`)
      : undefined;
    const posterUrl = imageUrls && imageUrls.length > 0 ? imageUrls[0] : undefined;
    return this.moviesService.update(id, updateMovieDto, posterUrl, imageUrls);
  }

  @Delete(':id')
  @ApiOperation({ 
    summary: 'Delete a movie',
    description: 'Permanently delete a movie from the database. This action cannot be undone.'
  })
  @ApiResponse({ 
    status: 200, 
    description: 'Movie deleted successfully',
    schema: {
      type: 'object',
      properties: {
        message: { type: 'string', example: 'Movie deleted successfully' },
        id: { type: 'string', example: '1' }
      }
    }
  })
  @ApiResponse({ status: 404, description: 'Movie not found' })
  @ApiResponse({ status: 401, description: 'Unauthorized - Invalid or missing JWT token' })
  async remove(@Param('id') id: string) {
    await this.moviesService.remove(id);
    return { message: 'Movie deleted successfully', id };
  }
}
