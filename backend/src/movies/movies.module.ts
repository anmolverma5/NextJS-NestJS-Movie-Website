import { Module } from '@nestjs/common';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';
import { DatabaseService } from './database.service';

@Module({
  controllers: [MoviesController],
  providers: [MoviesService, DatabaseService],
  exports: [MoviesService],
})
export class MoviesModule {}

