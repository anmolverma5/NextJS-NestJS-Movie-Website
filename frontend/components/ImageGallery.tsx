'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { uploadBaseUrl } from '@/lib/api';

interface ImageGalleryProps {
  images: string[];
  title?: string;
}

export const ImageGallery: React.FC<ImageGalleryProps> = ({ images, title }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  if (!images || images.length === 0) {
    return null;
  }

  const getImageUrl = (image: string) => {
    if (image.startsWith('http')) return image;
    return `${uploadBaseUrl}${image}`;
  };

  return (
    <div className="w-full">
      {/* Main Image Display */}
      <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-4 bg-gray-800">
        <Image
          src={getImageUrl(images[selectedIndex])}
          alt={title || `Image ${selectedIndex + 1}`}
          fill
          className="object-cover"
          sizes="100vw"
          unoptimized
        />
        {images.length > 1 && (
          <>
            <button
              onClick={() => setSelectedIndex((prev) => (prev - 1 + images.length) % images.length)}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
            >
              ‹
            </button>
            <button
              onClick={() => setSelectedIndex((prev) => (prev + 1) % images.length)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
            >
              ›
            </button>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === selectedIndex ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Thumbnail Grid */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-colors ${
                index === selectedIndex ? 'border-[#33d583]' : 'border-transparent hover:border-white/30'
              }`}
            >
              <Image
                src={getImageUrl(image)}
                alt={`Thumbnail ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 25vw, 16vw"
                unoptimized
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

