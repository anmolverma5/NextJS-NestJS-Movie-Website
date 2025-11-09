import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsOptional, IsInt, Min, Max } from 'class-validator';

export class UpdateMovieDto {
  @ApiPropertyOptional({ example: 'The Matrix Reloaded' })
  @IsString({ message: 'Title must be a text value' })
  @IsOptional()
  title?: string;

  @ApiPropertyOptional({ example: 2003 })
  @IsInt({ message: 'Publishing year must be a whole number (e.g., 1999, 2000)' })
  @Min(1000, { message: 'Publishing year must be between 1000 and 2035' })
  @Max(2035, { message: 'Publishing year must be between 1000 and 2035' })
  @IsOptional()
  publishingYear?: number;
}

