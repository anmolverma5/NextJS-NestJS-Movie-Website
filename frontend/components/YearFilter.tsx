'use client';

import React from 'react';
import { useI18n } from '@/lib/i18n';

interface YearFilterProps {
  value: number | null;
  onChange: (year: number | null) => void;
}

export const YearFilter: React.FC<YearFilterProps> = ({ value, onChange }) => {
  const { t } = useI18n();
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 1000 + 1 }, (_, i) => currentYear - i);

  return (
    <div className="w-full max-w-xs">
      <select
        value={value || ''}
        onChange={(e) => onChange(e.target.value ? parseInt(e.target.value) : null)}
        className="w-full px-4 py-3 rounded-lg bg-[rgba(255,255,255,0.03)] border border-white/10 text-white focus:outline-none focus:border-[#33d583] focus:bg-[rgba(255,255,255,0.05)] transition-colors cursor-pointer"
      >
        <option value="">{t('movies.filterYear')}</option>
        {years.map((year) => (
          <option key={year} value={year} className="bg-[#06343a]">
            {year}
          </option>
        ))}
      </select>
    </div>
  );
};

