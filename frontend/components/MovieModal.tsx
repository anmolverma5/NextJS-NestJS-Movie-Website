'use client';

import React from 'react';
import { Movie } from '@/lib/types';
import { Button } from './Button';
import { ImageGallery } from './ImageGallery';
import { useI18n } from '@/lib/i18n';

interface MovieModalProps {
  movie: Movie | null;
  isOpen: boolean;
  onClose: () => void;
  onEdit?: (movie: Movie) => void;
  onDelete?: (movie: Movie) => void;
}

export const MovieModal: React.FC<MovieModalProps> = ({
  movie,
  isOpen,
  onClose,
  onEdit,
  onDelete,
}) => {
  const { t } = useI18n();
  if (!isOpen || !movie) return null;

  return (
    <div
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-[#0f4b51] rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative p-4">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          {(movie.images && movie.images.length > 0) || movie.poster ? (
            <ImageGallery
              images={movie.images && movie.images.length > 0 ? movie.images : [movie.poster].filter(Boolean)}
              title={movie.title}
            />
          ) : (
            <div className="w-full h-[400px] bg-gray-800 flex items-center justify-center rounded-xl">
              <span className="text-white/50">{t('movies.noImage')}</span>
            </div>
          )}
        </div>
        <div className="p-6 sm:p-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">{movie.title}</h2>
          <p className="text-white/70 text-lg mb-6">{t('movies.published')}: {movie.publishingYear}</p>
          {movie.createdAt && (
            <p className="text-white/50 text-sm mb-6">
              {t('movies.added')}: {new Date(movie.createdAt).toLocaleDateString()}
            </p>
          )}
          <div className="flex flex-col sm:flex-row gap-4">
            {onEdit && (
              <Button onClick={() => onEdit(movie)} className="flex-1">
                {t('actions.edit')} {t('movies.movie')}
              </Button>
            )}
            {onDelete && (
              <Button
                variant="ghost"
                onClick={() => {
                  if (confirm(t('movies.deleteConfirm'))) {
                    onDelete(movie);
                  }
                }}
                className="flex-1"
              >
                {t('movies.delete')}
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

