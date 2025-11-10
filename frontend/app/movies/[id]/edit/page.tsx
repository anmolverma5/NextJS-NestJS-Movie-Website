'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { MultipleImageUpload } from '@/components/MultipleImageUpload';
import { FooterWave } from '@/components/FooterWave';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { moviesApi } from '@/lib/api/movies';
import { useAuthStore } from '@/lib/store';
import { useI18n } from '@/lib/i18n';

const updateMovieSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  publishingYear: z
    .number()
    .int('Publishing year must be a whole number (e.g., 1999, 2000)')
    .min(1000, 'Publishing year must be between 1000 and 2035')
    .max(2035, 'Publishing year must be between 1000 and 2035'),
});

type UpdateMovieFormData = z.infer<typeof updateMovieSchema>;

export default function EditMoviePage() {
  const router = useRouter();
  const { t } = useI18n();
  const params = useParams();
  const movieId = params.id as string;
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingMovie, setIsLoadingMovie] = useState(true);
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [existingImages, setExistingImages] = useState<string[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm<UpdateMovieFormData>({
    resolver: zodResolver(updateMovieSchema),
  });

  useEffect(() => {
    const { initialize, isAuthenticated: auth } = useAuthStore.getState();
    initialize();
    if (!auth) {
      router.push('/login');
      return;
    }
    loadMovie();
  }, [movieId, router]);

  const loadMovie = async () => {
    try {
      setIsLoadingMovie(true);
      const movie = await moviesApi.getById(movieId);
      reset({
        title: movie.title,
        publishingYear: movie.publishingYear,
      });
      setExistingImages(movie.images || [movie.poster].filter(Boolean));
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to load movie');
    } finally {
      setIsLoadingMovie(false);
    }
  };

  const onSubmit = async (data: UpdateMovieFormData) => {
    try {
      setIsLoading(true);
      setError('');
      await moviesApi.update(movieId, {
        title: data.title,
        publishingYear: data.publishingYear,
        images: imageFiles.length > 0 ? imageFiles : undefined,
      });
      router.push('/movies');
    } catch (err: any) {
      // Format backend validation errors with proper spacing
      if (err.response?.data?.errors && Array.isArray(err.response.data.errors)) {
        const errorMessages = err.response.data.errors
          .map((e: any) => e.message)
          .filter((msg: string) => msg) // Remove empty messages
          .join('\n'); // Use newline for better spacing
        setError(errorMessages);
      } else {
        setError(err.response?.data?.message || 'Failed to update movie. Please check your input.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    router.push('/movies');
  };

  if (isLoadingMovie) {
    return (
      <section className="form-page px-7 py-12 pb-[160px] relative">
        <div className="flex items-center justify-center min-h-[400px]">
          <p className="text-white/70">{t('actions.loading')}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="form-page px-4 sm:px-7 py-8 sm:py-12 pb-[120px] sm:pb-[160px] relative">
      <div className="absolute top-4 right-4">
        <LanguageSwitcher />
      </div>
      <h2 className="form-page__title text-[32px] sm:text-[40px] md:text-[48px] mb-6 sm:mb-8 m-0 font-bold">
        {t('movies.edit')}
      </h2>
      <div className="form-grid grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-8 sm:gap-12 items-start">
        <MultipleImageUpload
          value={[...existingImages, ...imageFiles]}
          onChange={setImageFiles}
          maxImages={10}
        />
        <form
          className="form flex flex-col gap-[18px] items-start w-full max-w-[560px]"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            placeholder={t('movies.title')}
            {...register('title')}
            error={errors.title?.message}
          />
          <Input
            type="number"
            placeholder={t('movies.publishingYear')}
            {...register('publishingYear', { valueAsNumber: true })}
            error={errors.publishingYear?.message}
          />
          {error && (
            <div className="w-full max-w-[320px] p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
              <div className="space-y-2">
                {(typeof error === 'string' ? error : String(error))
                  .split('\n')
                  .filter((msg) => msg.trim())
                  .map((msg, index) => (
                    <p key={index} className="text-red-400 text-sm font-medium">
                      • {msg.trim()}
                    </p>
                  ))}
              </div>
            </div>
          )}
          <div className="form-actions flex gap-[18px] mt-[22px]">
            <Button variant="ghost" type="button" onClick={handleCancel}>
              {t('actions.cancel')}
            </Button>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? t('actions.loading') : t('actions.update')}
            </Button>
          </div>
        </form>
      </div>
      <FooterWave />
    </section>
  );
}

