'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { FooterWave } from '@/components/FooterWave';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { authApi } from '@/lib/api/auth';
import { useAuthStore } from '@/lib/store';
import { useI18n } from '@/lib/i18n';

const loginSchema = z.object({
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Please enter a valid email address (e.g., user@example.com)')
    .toLowerCase()
    .trim(),
  password: z
    .string()
    .min(1, 'Password is required')
    .min(6, 'Password must be at least 6 characters long')
    .max(100, 'Password is too long'),
  rememberMe: z.boolean().optional(),
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const router = useRouter();
  const login = useAuthStore((state) => state.login);
  const { t } = useI18n();
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      setIsLoading(true);
      setError('');
      const response = await authApi.login(data.email, data.password);
      login(response.user.email, response.access_token);
      router.push('/movies');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="hero hero--auth flex flex-col items-center justify-center text-center px-4 py-[80px] sm:py-[120px] pb-[120px] sm:pb-[160px] relative min-h-[100vh] sm:min-h-[520px]">
      <div className="absolute top-4 right-4">
        <LanguageSwitcher />
      </div>
      <h1 className="hero__title text-[40px] sm:text-[56px] md:text-[64px] font-bold mb-5 sm:mb-7 text-white leading-none tracking-[-0.02em] m-0">
        {t('auth.signIn')}
      </h1>
      <form
        className="form form--auth flex flex-col gap-[18px] items-center mt-2 w-full"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          type="email"
          placeholder={t('auth.email')}
          {...register('email')}
          error={errors.email?.message}
        />
        <Input
          type="password"
          placeholder={t('auth.password')}
          {...register('password')}
          error={errors.password?.message}
        />
        <label className="remember flex gap-2.5 items-center text-white/70 cursor-pointer">
          <input
            type="checkbox"
            {...register('rememberMe')}
            className="w-3.5 h-3.5"
          />
          {t('auth.rememberMe')}
        </label>
        {error && (
          <div className="w-full max-w-[320px] p-3 bg-red-500/10 border border-red-500/30 rounded-lg">
            <p className="text-red-400 text-sm font-medium">{error}</p>
          </div>
        )}
        <Button type="submit" disabled={isLoading}>
          {isLoading ? t('auth.loggingIn') : t('auth.login')}
        </Button>
      </form>
      <FooterWave />
    </section>
  );
}

