import React from 'react';
import { Movie } from '@/lib/types';
import Image from 'next/image';
import { uploadBaseUrl } from '@/lib/api';

interface MovieCardProps {
  movie: Movie;
  onEdit?: (movie: Movie) => void;
}

export const MovieCard: React.FC<MovieCardProps> = ({ movie, onEdit }) => {
  // Use first image from images array if available, otherwise use poster
  const displayImage = (movie.images && movie.images.length > 0) 
    ? movie.images[0] 
    : movie.poster;

  const getImageUrl = (image: string) => {
    if (image.startsWith('http')) return image;
    return `${uploadBaseUrl}${image}`;
  };

  return (
    <article
      className="bg-black/12 rounded-[14px] overflow-visible shadow-[0_16px_0_rgba(0,0,0,0.22)] flex flex-col min-h-[350px] transition-transform hover:translate-y-[-6px] cursor-pointer"
      onClick={() => onEdit?.(movie)}
    >
      <div className="h-[350px] m-3 rounded-xl bg-cover bg-center shadow-[0_10px_0_rgba(0,0,0,0.35)] relative overflow-hidden">
        {displayImage ? (
          <Image
            src={getImageUrl(displayImage)}
            alt={movie.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            unoptimized
          />
        ) : (
          <div className="w-full h-full bg-gray-800 flex items-center justify-center">
            <span className="text-white/50">No Image</span>
          </div>
        )}
        {movie.images && movie.images.length > 1 && (
          <div className="absolute top-2 right-2 bg-black/50 px-2 py-1 rounded text-white text-xs">
            {movie.images.length} images
          </div>
        )}
      </div>
      <div className="px-[18px] pb-[18px] flex flex-col justify-end bg-gradient-to-b from-black/4 to-transparent rounded-b-[14px]">
        <h3 className="text-base mb-2 font-semibold text-white opacity-95 m-0">
          {movie.title}
        </h3>
        <time className="text-white/50 text-[13px]">
          {movie.publishingYear}
        </time>
      </div>
    </article>
  );
};

