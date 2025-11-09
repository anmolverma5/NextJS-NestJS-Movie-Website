import api from '../api';
import { Movie, CreateMovieDto, UpdateMovieDto, PaginatedResponse } from '../types';

export const moviesApi = {
  getAll: async (page: number = 1, limit: number = 8): Promise<PaginatedResponse<Movie>> => {
    const response = await api.get(`/movies?page=${page}&limit=${limit}`);
    return response.data;
  },

  getById: async (id: string): Promise<Movie> => {
    const response = await api.get(`/movies/${id}`);
    return response.data;
  },

  create: async (data: CreateMovieDto): Promise<Movie> => {
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('publishingYear', data.publishingYear.toString());
    if (data.images && data.images.length > 0) {
      data.images.forEach((image) => {
        formData.append('images', image);
      });
    }

    const response = await api.post('/movies', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },

  update: async (id: string, data: UpdateMovieDto): Promise<Movie> => {
    const formData = new FormData();
    if (data.title) formData.append('title', data.title);
    if (data.publishingYear) formData.append('publishingYear', data.publishingYear.toString());
    if (data.images && data.images.length > 0) {
      data.images.forEach((image) => {
        formData.append('images', image);
      });
    }

    const response = await api.patch(`/movies/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },

  delete: async (id: string): Promise<void> => {
    await api.delete(`/movies/${id}`);
  },
};

