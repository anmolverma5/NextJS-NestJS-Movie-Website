export interface Movie {
  id: string;
  title: string;
  publishingYear: number;
  poster: string;
  images?: string[];
  createdAt?: string;
  updatedAt?: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface CreateMovieDto {
  title: string;
  publishingYear: number;
  images?: File[];
}

export interface UpdateMovieDto {
  title?: string;
  publishingYear?: number;
  images?: File[];
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

