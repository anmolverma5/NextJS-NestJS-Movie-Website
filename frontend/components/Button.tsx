import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost';
  size?: 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}) => {
  const baseStyles = 'appearance-none border-0 rounded-xl font-bold cursor-pointer inline-flex items-center justify-center transition-all';
  
  const variantStyles = {
    primary: 'bg-gradient-to-b from-[#34d887] to-[#2bd07b] text-white shadow-[0_6px_0_rgba(0,0,0,0.18)] hover:shadow-[0_4px_0_rgba(0,0,0,0.18)] hover:translate-y-[2px]',
    ghost: 'bg-transparent text-white border-2 border-white/12 hover:border-white/20',
  };

  const sizeStyles = {
    md: 'px-7 py-3.5',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

