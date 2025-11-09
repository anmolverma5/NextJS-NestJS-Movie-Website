import { ApiProperty } from '@nestjs/swagger';

export class Movie {
  @ApiProperty({ example: '1', description: 'Unique movie identifier' })
  id: string;

  @ApiProperty({ example: 'The Matrix', description: 'Movie title' })
  title: string;

  @ApiProperty({ example: 1999, description: 'Year the movie was published' })
  publishingYear: number;

  @ApiProperty({ 
    example: '/uploads/image.jpg', 
    description: 'URL path to the primary movie poster image (first image)',
    required: false
  })
  poster: string;

  @ApiProperty({ 
    example: ['/uploads/image1.jpg', '/uploads/image2.jpg'], 
    description: 'Array of URL paths to movie images',
    required: false,
    type: [String]
  })
  images: string[];

  @ApiProperty({ example: '2024-01-01T00:00:00.000Z', description: 'Date when movie was created' })
  createdAt: Date;

  @ApiProperty({ example: '2024-01-01T00:00:00.000Z', description: 'Date when movie was last updated' })
  updatedAt: Date;
}

