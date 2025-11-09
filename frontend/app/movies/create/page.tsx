'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
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

const createMovieSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  publishingYear: z
    .number({
      required_error: 'Publishing year is required',
      invalid_type_error: 'Publishing year must be a number',
    })
    .int('Publishing year must be a whole number (e.g., 1999, 2000)')
    .min(1000, 'Publishing year must be between 1000 and 2035')
    .max(2035, 'Publishing year must be between 1000 and 2035'),
});

type CreateMovieFormData = z.infer<typeof createMovieSchema>;

export default function CreateMoviePage() {
  const router = useRouter();
  const { t } = useI18n();
  const { isAuthenticated } = useAuthStore();
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [imageFiles, setImageFiles] = useState<File[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<CreateMovieFormData>({
    resolver: zodResolver(createMovieSchema),
  });

  React.useEffect(() => {
    const { initialize, isAuthenticated: auth } = useAuthStore.getState();
    initialize();
    if (!auth) {
      router.push('/login');
    }
  }, [router]);

  const onSubmit = async (data: CreateMovieFormData) => {
    try {
      setIsLoading(true);
      setError('');
      await moviesApi.create({
        title: data.title,
        publishingYear: data.publishingYear,
        images: imageFiles,
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
        setError(err.response?.data?.message || 'Failed to create movie. Please check your input.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    router.push('/movies');
  };

  return (
    <section className="form-page px-4 sm:px-7 py-8 sm:py-12 pb-[120px] sm:pb-[160px] relative">
      <div className="absolute top-4 right-4">
        <LanguageSwitcher />
      </div>
      <h2 className="form-page__title text-[32px] sm:text-[40px] md:text-[48px] mb-6 sm:mb-8 m-0 font-bold">
        {t('movies.create')}
      </h2>
      <div className="form-grid grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-8 sm:gap-12 items-start">
        <MultipleImageUpload
          value={imageFiles}
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
              {isLoading ? t('actions.loading') : t('actions.submit')}
            </Button>
          </div>
        </form>
      </div>
      <FooterWave />
    </section>
  );
}

