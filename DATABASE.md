# Database Information

## Current Database Setup

### In-Memory Database (Current Implementation)

The application currently uses an **in-memory database** implemented in `backend/src/movies/database.service.ts`.

**Characteristics:**
- ✅ **Type:** In-memory array storage
- ✅ **Persistence:** Data is lost when the server restarts
- ✅ **Purpose:** Development and demonstration
- ✅ **Location:** `backend/src/movies/database.service.ts`

**How it works:**
- Movies are stored in a TypeScript array: `private movies: Movie[] = [];`
- Data persists only during the server session
- All CRUD operations work normally
- No database connection required

**Pros:**
- ✅ No setup required
- ✅ Fast for development
- ✅ No database dependencies
- ✅ Easy to test

**Cons:**
- ❌ Data is lost on server restart
- ❌ Not suitable for production
- ❌ No data persistence
- ❌ Limited scalability

## Production Database Options

For production deployment, you should replace the in-memory database with a real database. Here are recommended options:

### Option 1: PostgreSQL (Recommended) 🐘

**Best for:** Production applications, complex queries, relational data

**Setup:**
```bash
# Install dependencies
npm install @nestjs/typeorm typeorm pg
npm install --save-dev @types/pg

# Install PostgreSQL
# Windows: Download from postgresql.org
# Mac: brew install postgresql
# Linux: sudo apt-get install postgresql
```

**Configuration:**
```typescript
// app.module.ts
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT) || 5432,
      username: process.env.DB_USERNAME || 'postgres',
      password: process.env.DB_PASSWORD || 'password',
      database: process.env.DB_NAME || 'movie_database',
      entities: [Movie],
      synchronize: true, // Set to false in production
    }),
    MoviesModule,
  ],
})
```

**Environment Variables:**
```env
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=your-password
DB_NAME=movie_database
```

### Option 2: MongoDB 🍃

**Best for:** Flexible schema, document-based data, rapid development

**Setup:**
```bash
# Install dependencies
npm install @nestjs/mongoose mongoose

# Install MongoDB
# Windows: Download from mongodb.com
# Mac: brew install mongodb-community
# Linux: sudo apt-get install mongodb
```

**Configuration:**
```typescript
// app.module.ts
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URI || 'mongodb://localhost:27017/movie_database'),
    MoviesModule,
  ],
})
```

**Environment Variables:**
```env
MONGODB_URI=mongodb://localhost:27017/movie_database
```

### Option 3: MySQL 🐬

**Best for:** Traditional relational data, existing MySQL infrastructure

**Setup:**
```bash
# Install dependencies
npm install @nestjs/typeorm typeorm mysql2

# Install MySQL
# Windows: Download from mysql.com
# Mac: brew install mysql
# Linux: sudo apt-get install mysql-server
```

**Configuration:**
```typescript
// app.module.ts
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT) || 3306,
      username: process.env.DB_USERNAME || 'root',
      password: process.env.DB_PASSWORD || 'password',
      database: process.env.DB_NAME || 'movie_database',
      entities: [Movie],
      synchronize: true,
    }),
  ],
})
```

### Option 4: SQLite (Development) 💾

**Best for:** Development, testing, simple applications

**Setup:**
```bash
npm install @nestjs/typeorm typeorm sqlite3
```

**Configuration:**
```typescript
TypeOrmModule.forRoot({
  type: 'sqlite',
  database: 'movie_database.db',
  entities: [Movie],
  synchronize: true,
})
```

### Option 5: AWS DynamoDB (Serverless) ☁️

**Best for:** Serverless applications, AWS deployments, scalable applications

**Setup:**
```bash
npm install @aws-sdk/client-dynamodb @aws-sdk/lib-dynamodb
```

**Configuration:**
```typescript
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';

const client = new DynamoDBClient({
  region: process.env.AWS_REGION || 'us-east-1',
});
export const dynamoDB = DynamoDBDocumentClient.from(client);
```

## Migration Guide

### Step 1: Choose Your Database

Select one of the options above based on your needs:
- **PostgreSQL:** Best for production, complex queries
- **MongoDB:** Best for flexible schema, rapid development
- **MySQL:** Best for traditional relational data
- **SQLite:** Best for development/testing
- **DynamoDB:** Best for AWS/serverless

### Step 2: Install Dependencies

Install the required packages for your chosen database.

### Step 3: Update DatabaseService

Replace `backend/src/movies/database.service.ts` with your chosen ORM/ODM:

**For TypeORM (PostgreSQL/MySQL/SQLite):**
```typescript
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Movie } from './entities/movie.entity';

@Injectable()
export class DatabaseService {
  constructor(
    @InjectRepository(Movie)
    private movieRepository: Repository<Movie>,
  ) {}

  async findAll(page: number = 1, limit: number = 8) {
    const [data, total] = await this.movieRepository.findAndCount({
      skip: (page - 1) * limit,
      take: limit,
    });

    return {
      data,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    };
  }

  async findOne(id: string): Promise<Movie> {
    return this.movieRepository.findOne({ where: { id } });
  }

  async create(movie: Partial<Movie>): Promise<Movie> {
    return this.movieRepository.save(movie);
  }

  async update(id: string, updates: Partial<Movie>): Promise<Movie> {
    await this.movieRepository.update(id, updates);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.movieRepository.delete(id);
  }
}
```

**For Mongoose (MongoDB):**
```typescript
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Movie, MovieDocument } from './schemas/movie.schema';

@Injectable()
export class DatabaseService {
  constructor(
    @InjectModel(Movie.name)
    private movieModel: Model<MovieDocument>,
  ) {}

  async findAll(page: number = 1, limit: number = 8) {
    const skip = (page - 1) * limit;
    const data = await this.movieModel.find().skip(skip).limit(limit).exec();
    const total = await this.movieModel.countDocuments().exec();

    return {
      data,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    };
  }

  async findOne(id: string): Promise<MovieDocument> {
    return this.movieModel.findById(id).exec();
  }

  async create(movie: Partial<Movie>): Promise<MovieDocument> {
    return this.movieModel.create(movie);
  }

  async update(id: string, updates: Partial<Movie>): Promise<MovieDocument> {
    return this.movieModel.findByIdAndUpdate(id, updates, { new: true }).exec();
  }

  async remove(id: string): Promise<void> {
    await this.movieModel.findByIdAndDelete(id).exec();
  }
}
```

### Step 4: Update Entity/Schema

**For TypeORM:**
```typescript
// entities/movie.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('movies')
export class Movie {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  publishingYear: number;

  @Column()
  poster: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
```

**For Mongoose:**
```typescript
// schemas/movie.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Movie extends Document {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  publishingYear: number;

  @Prop()
  poster: string;
}

export const MovieSchema = SchemaFactory.createForClass(Movie);
```

### Step 5: Update Module

**For TypeORM:**
```typescript
// movies.module.ts
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movie } from './entities/movie.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Movie])],
  // ...
})
```

**For Mongoose:**
```typescript
// movies.module.ts
import { MongooseModule } from '@nestjs/mongoose';
import { Movie, MovieSchema } from './schemas/movie.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Movie.name, schema: MovieSchema }])],
  // ...
})
```

### Step 6: Update Environment Variables

Add database connection details to `backend/.env`:

```env
# Database Configuration
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=your-username
DB_PASSWORD=your-password
DB_NAME=movie_database
```

## Current Database Status

**Type:** In-Memory Database  
**Location:** `backend/src/movies/database.service.ts`  
**Persistence:** None (data lost on restart)  
**Status:** ✅ Working for development  
**Production Ready:** ❌ No (needs real database)

## Recommendations

1. **For Development:** Keep using in-memory database or switch to SQLite
2. **For Production:** Use PostgreSQL or MongoDB
3. **For AWS Deployment:** Consider DynamoDB for serverless
4. **For Quick Setup:** Use MongoDB with Mongoose

## Next Steps

1. Choose your database
2. Install dependencies
3. Follow migration guide above
4. Test thoroughly
5. Deploy to production

---

**Note:** The current in-memory database is perfect for development and demonstration. For production, you must migrate to a real database.

