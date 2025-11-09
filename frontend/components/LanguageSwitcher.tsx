'use client';

import React from 'react';
import { i18n, Locale, useI18n } from '@/lib/i18n';

const FLAGS: Record<Locale, string> = {
  en: '🇺🇸',
  es: '🇪🇸',
  fr: '🇫🇷',
};

const LANGUAGE_NAMES: Record<Locale, string> = {
  en: 'English',
  es: 'Español',
  fr: 'Français',
};

export const LanguageSwitcher: React.FC = () => {
  const { locale } = useI18n();

  const changeLanguage = (newLocale: Locale) => {
    i18n.setLocale(newLocale);
  };

  return (
    <div className="flex items-center gap-1.5">
      {(['en', 'es', 'fr'] as Locale[]).map((loc) => (
        <button
          key={loc}
          onClick={() => changeLanguage(loc)}
          className={`px-2.5 py-1.5 rounded-md text-sm font-medium transition-all flex items-center gap-1.5 ${
            locale === loc
              ? 'bg-[#33d583] text-[#06343a] shadow-md'
              : 'bg-white/10 text-white/70 hover:text-white hover:bg-white/20'
          }`}
          title={LANGUAGE_NAMES[loc]}
        >
          <span className="text-base leading-none">{FLAGS[loc]}</span>
          <span className="hidden sm:inline">{loc.toUpperCase()}</span>
        </button>
      ))}
    </div>
  );
};

