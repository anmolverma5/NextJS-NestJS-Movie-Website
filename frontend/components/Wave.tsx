import React from 'react';

interface WaveProps {
  variant?: 'default' | 'large';
}

export const Wave: React.FC<WaveProps> = ({ variant = 'default' }) => {
  return (
    <div
      className={`wave wave--bottom ${variant === 'large' ? 'large' : ''}`}
    />
  );
};

