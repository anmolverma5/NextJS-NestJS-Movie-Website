'use client';

import React, { useCallback, useState, useRef, useEffect } from 'react';
import Image from 'next/image';

interface MultipleImageUploadProps {
  value?: (File | string)[];
  onChange: (files: File[]) => void;
  error?: string;
  maxImages?: number;
}

export const MultipleImageUpload: React.FC<MultipleImageUploadProps> = ({
  value = [],
  onChange,
  error,
  maxImages = 10,
}) => {
  const [previews, setPreviews] = useState<(string | File)[]>(value);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setPreviews(value);
  }, [value]);

  const handleFiles = useCallback((files: FileList | null) => {
    if (!files) return;
    
    const fileArray = Array.from(files).filter(file => file.type.startsWith('image/'));
    const currentFiles = previews.filter(p => p instanceof File) as File[];
    const totalFiles = currentFiles.length + fileArray.length;
    
    if (totalFiles > maxImages) {
      alert(`You can only upload up to ${maxImages} images. You already have ${currentFiles.length} images.`);
      return;
    }

    const newFiles: File[] = [...currentFiles, ...fileArray];
    const newPreviews: (string | File)[] = [...previews];

    fileArray.forEach((file) => {
      newPreviews.push(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviews(prev => {
          const updated = [...prev];
          const index = updated.findIndex(p => p === file);
          if (index !== -1) {
            updated[index] = reader.result as string;
          }
          return updated;
        });
      };
      reader.readAsDataURL(file);
    });

    setPreviews(newPreviews);
    onChange(newFiles);
  }, [previews, onChange, maxImages]);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    handleFiles(e.dataTransfer.files);
  }, [handleFiles]);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleFileInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    handleFiles(e.target.files);
  }, [handleFiles]);

  const removeImage = useCallback((index: number) => {
    const updated = previews.filter((_, i) => i !== index);
    setPreviews(updated);
    const files = updated.filter(p => p instanceof File) as File[];
    onChange(files);
  }, [previews, onChange]);

  return (
    <div className="w-full">
      <div
        className={`min-h-[300px] sm:min-h-[400px] md:min-h-[520px] rounded-xl border-4 border-dashed ${
          isDragging ? 'border-white/30 bg-black/12' : 'border-white/12'
        } flex flex-col items-center justify-center text-white/45 bg-black/6 text-center cursor-pointer transition-colors relative overflow-hidden p-4 ${
          error ? 'border-red-500' : ''
        }`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onClick={() => fileInputRef.current?.click()}
      >
        {previews.length > 0 ? (
          <div className="w-full h-full grid grid-cols-2 sm:grid-cols-3 gap-4 overflow-y-auto">
            {previews.map((preview, index) => (
              <div key={index} className="relative aspect-square rounded-lg overflow-hidden group">
                <Image
                  src={typeof preview === 'string' ? preview : URL.createObjectURL(preview)}
                  alt={`Preview ${index + 1}`}
                  fill
                  className="object-cover"
                  unoptimized
                />
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    removeImage(index);
                  }}
                  className="absolute top-2 right-2 w-8 h-8 bg-red-500/80 hover:bg-red-500 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  ×
                </button>
              </div>
            ))}
            {previews.length < maxImages && (
              <div className="aspect-square rounded-lg border-2 border-dashed border-white/20 flex items-center justify-center hover:border-white/40 transition-colors">
                <div className="text-center">
                  <div className="text-2xl mb-2">+</div>
                  <div className="text-xs">Add Image</div>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center">
            <div className="text-xl mb-2">↓</div>
            <div className="text-sm">Drop images here or click to upload</div>
            <div className="text-xs mt-2 text-white/30">Up to {maxImages} images</div>
          </div>
        )}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          multiple
          className="hidden"
          onChange={handleFileInput}
        />
      </div>
      {error && (
        <p className="mt-1 text-sm text-red-400">{error}</p>
      )}
      {previews.length > 0 && (
        <p className="mt-2 text-xs text-white/50">
          {previews.length} / {maxImages} images
        </p>
      )}
    </div>
  );
};

