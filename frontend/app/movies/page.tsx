'use client';

import React, { useEffect, useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/lib/store';
import { useMoviesStore } from '@/lib/store/movies';
import { moviesApi } from '@/lib/api/movies';
import { Movie } from '@/lib/types';
import { MovieCard } from '@/components/MovieCard';
import { Button } from '@/components/Button';
import { FooterWave } from '@/components/FooterWave';
import { SearchBar } from '@/components/SearchBar';
import { YearFilter } from '@/components/YearFilter';
import { MovieModal } from '@/components/MovieModal';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { useI18n } from '@/lib/i18n';

export default function MoviesPage() {
  const router = useRouter();
  const { t } = useI18n();
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const logout = useAuthStore((state) => state.logout);
  const [allMovies, setAllMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [error, setError] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterYear, setFilterYear] = useState<number | null>(null);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const { initialize } = useAuthStore.getState();
    initialize();
  }, []);

  useEffect(() => {
    const { isAuthenticated: auth } = useAuthStore.getState();
    if (!auth) {
      router.push('/login');
      return;
    }
    loadMovies();
  }, []);

  // Reset page when filters change
  useEffect(() => {
    setPage(1);
  }, [searchQuery, filterYear]);

  const loadMovies = async () => {
    try {
      setLoading(true);
      setError('');
      // Load all movies for search/filter
      const allResponse = await moviesApi.getAll(1, 1000);
      setAllMovies(allResponse.data);
      
      // Load paginated movies
      const response = await moviesApi.getAll(page, 8);
      setTotalPages(response.totalPages);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to load movies');
    } finally {
      setLoading(false);
    }
  };

  // Filter and search movies
  const filteredMovies = useMemo(() => {
    let filtered = allMovies;

    if (searchQuery) {
      filtered = filtered.filter((movie) =>
        movie.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (filterYear) {
      filtered = filtered.filter((movie) => movie.publishingYear === filterYear);
    }

    return filtered;
  }, [allMovies, searchQuery, filterYear]);

  // Paginate filtered results
  const paginatedMovies = useMemo(() => {
    const itemsPerPage = 8;
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredMovies.slice(startIndex, endIndex);
  }, [filteredMovies, page]);

  const filteredTotalPages = Math.ceil(filteredMovies.length / 8);

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  const handleCreate = () => {
    router.push('/movies/create');
  };

  const handleEdit = (movie: Movie) => {
    router.push(`/movies/${movie.id}/edit`);
  };

  const handleView = (movie: Movie) => {
    setSelectedMovie(movie);
    setIsModalOpen(true);
  };

  const handleDelete = async (movie: Movie) => {
    try {
      await moviesApi.delete(movie.id);
      setIsModalOpen(false);
      setSelectedMovie(null);
      loadMovies();
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to delete movie');
    }
  };

  if (loading) {
    return (
      <main className="container max-w-[1200px] mx-auto mt-9 px-7">
        <div className="flex items-center justify-center min-h-[400px]">
          <p className="text-white/70">{t('actions.loading')}</p>
        </div>
      </main>
    );
  }

  if (error && allMovies.length === 0) {
    return (
      <main className="container max-w-[1200px] mx-auto mt-9 px-7">
        <div className="flex items-center justify-center min-h-[400px]">
          <p className="text-red-400">{error}</p>
        </div>
      </main>
    );
  }

  if (allMovies.length === 0 && !loading) {
    return (
      <section className="hero hero--empty flex flex-col items-center justify-center text-center px-4 py-[100px] sm:py-[160px] pb-[120px] sm:pb-[160px] relative min-h-[420px]">
        <h2 className="hero__title text-[32px] sm:text-[48px] md:text-[64px] font-bold mb-5 sm:mb-7 text-white leading-none tracking-[-0.02em] m-0">
          {t('movies.empty')}
        </h2>
        <Button onClick={handleCreate} size="md">
          {t('movies.addNew')}
        </Button>
        <FooterWave />
      </section>
    );
  }

  return (
    <main className="container max-w-[1200px] mx-auto mt-4 sm:mt-9 px-4 sm:px-7 relative pb-[120px] sm:pb-[160px]">
      <header className="topbar flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 my-6 sm:my-9">
        <h2 className="page-title text-[28px] sm:text-[36px] md:text-[40px] font-bold m-0 flex items-center">
          {t('movies.myMovies')}
          <span
            className="plus ml-2 font-bold opacity-90 cursor-pointer text-[28px] sm:text-[36px] md:text-[40px] hover:opacity-100 transition-opacity"
            onClick={handleCreate}
            title={t('movies.addNew')}
          >
            +
          </span>
        </h2>
        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <a
            className="logout text-white/90 no-underline font-semibold cursor-pointer hover:text-white transition-colors text-sm sm:text-base"
            onClick={handleLogout}
          >
            {t('actions.logout')} ↗
          </a>
        </div>
      </header>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6 sm:mb-8">
        <SearchBar value={searchQuery} onChange={setSearchQuery} placeholder={t('movies.search')} />
        <YearFilter value={filterYear} onChange={setFilterYear} />
        {(searchQuery || filterYear) && (
          <Button
            variant="ghost"
            onClick={() => {
              setSearchQuery('');
              setFilterYear(null);
              setPage(1);
            }}
            className="whitespace-nowrap"
          >
            {t('movies.clearFilters')}
          </Button>
        )}
      </div>

      {error && (
        <div className="mb-4 p-4 bg-red-500/20 border border-red-500 rounded-lg">
          <p className="text-red-400 text-sm">{error}</p>
        </div>
      )}

      {/* Results count */}
      {(searchQuery || filterYear) && (
        <div className="mb-4 text-white/70 text-sm">
          {t('movies.found')} {filteredMovies.length} {filteredMovies.length !== 1 ? t('movies.movies') : t('movies.movie')}
        </div>
      )}

      {paginatedMovies.length === 0 && !loading && (searchQuery || filterYear) ? (
        <div className="text-center py-12">
          <p className="text-white/70 text-lg mb-4">{t('movies.noResults')}</p>
          <Button variant="ghost" onClick={() => {
            setSearchQuery('');
            setFilterYear(null);
            setPage(1);
          }}>
            {t('movies.clearFilters')}
          </Button>
        </div>
      ) : (
        <>
          <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-7 mb-8 sm:mb-12">
            {paginatedMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} onEdit={() => handleView(movie)} />
            ))}
          </section>

          {filteredTotalPages > 1 && (
            <nav className="pagination flex flex-wrap justify-center gap-2 mb-[80px] sm:mb-[120px]">
              <button
                className="pager bg-transparent border-0 text-white/90 px-3 py-2 rounded-md font-semibold cursor-pointer hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
              >
                {t('actions.prev')}
              </button>
              {Array.from({ length: Math.min(filteredTotalPages, 10) }, (_, i) => {
                let pageNum;
                if (filteredTotalPages <= 10) {
                  pageNum = i + 1;
                } else if (page <= 5) {
                  pageNum = i + 1;
                } else if (page >= filteredTotalPages - 4) {
                  pageNum = filteredTotalPages - 9 + i;
                } else {
                  pageNum = page - 5 + i;
                }
                return (
                  <button
                    key={pageNum}
                    className={`pager bg-transparent border-0 text-white/90 px-3 py-2 rounded-md font-semibold cursor-pointer hover:text-white transition-colors text-sm sm:text-base ${
                      pageNum === page
                        ? 'bg-[#33d583] font-bold text-[#06343a]'
                        : ''
                    }`}
                    onClick={() => setPage(pageNum)}
                  >
                    {pageNum}
                  </button>
                );
              })}
              <button
                className="pager bg-transparent border-0 text-white/90 px-3 py-2 rounded-md font-semibold cursor-pointer hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                onClick={() => setPage((p) => Math.min(filteredTotalPages, p + 1))}
                disabled={page === filteredTotalPages}
              >
                {t('actions.next')}
              </button>
            </nav>
          )}
        </>
      )}

      <FooterWave />

      <MovieModal
        movie={selectedMovie}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedMovie(null);
        }}
        onEdit={(movie) => {
          setIsModalOpen(false);
          handleEdit(movie);
        }}
        onDelete={handleDelete}
      />
    </main>
  );
}

