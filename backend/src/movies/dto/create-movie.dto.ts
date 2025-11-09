import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsInt, Min, Max } from 'class-validator';

export class CreateMovieDto {
  @ApiProperty({ example: 'The Matrix' })
  @IsString({ message: 'Title must be a text value' })
  @IsNotEmpty({ message: 'Title is required' })
  title: string;

  @ApiProperty({ example: 1999 })
  @IsInt({ message: 'Publishing year must be a whole number (e.g., 1999, 2000)' })
  @Min(1000, { message: 'Publishing year must be between 1000 and 2035' })
  @Max(2035, { message: 'Publishing year must be between 1000 and 2035' })
  publishingYear: number;
}

