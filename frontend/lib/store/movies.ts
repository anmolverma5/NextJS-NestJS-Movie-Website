import { create } from 'zustand';
import { Movie } from '../types';

interface MoviesState {
  movies: Movie[];
  currentPage: number;
  totalPages: number;
  total: number;
  loading: boolean;
  error: string | null;
  searchQuery: string;
  filterYear: number | null;
  setMovies: (movies: Movie[]) => void;
  setPagination: (page: number, totalPages: number, total: number) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  setSearchQuery: (query: string) => void;
  setFilterYear: (year: number | null) => void;
  clearFilters: () => void;
}

export const useMoviesStore = create<MoviesState>((set) => ({
  movies: [],
  currentPage: 1,
  totalPages: 1,
  total: 0,
  loading: false,
  error: null,
  searchQuery: '',
  filterYear: null,
  setMovies: (movies) => set({ movies }),
  setPagination: (page, totalPages, total) => set({ currentPage: page, totalPages, total }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
  setSearchQuery: (query) => set({ searchQuery: query }),
  setFilterYear: (year) => set({ filterYear: year }),
  clearFilters: () => set({ searchQuery: '', filterYear: null }),
}));

