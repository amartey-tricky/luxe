"use client";

import { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'ghost';
  size?: 'default' | 'lg' | 'icon';
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  href?: string;
}

export function Button({
  children,
  variant = 'primary',
  size = 'default',
  className,
  as = 'button',
  href,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-md font-medium transition-all duration-200',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2',
        {
          'bg-purple-600 text-white hover:bg-purple-700 active:bg-purple-800': variant === 'primary',
          'text-gray-700 hover:bg-gray-100/50 active:bg-gray-200/50': variant === 'ghost',
          'h-10 px-4 py-2': size === 'default',
          'h-12 px-6 py-3 text-lg': size === 'lg',
          'h-10 w-10': size === 'icon',
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
