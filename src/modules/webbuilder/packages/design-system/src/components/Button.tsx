import React from 'react';
import { cn } from '../utils/cn';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive' | 'accent';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', icon, children, disabled, ...props }, ref) => {
    const variantStyles = {
      primary: 'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 shadow-sm border border-transparent',
      secondary: 'bg-slate-800 text-slate-100 hover:bg-slate-700 active:bg-slate-900 border border-slate-700',
      outline: 'bg-transparent text-slate-200 hover:bg-slate-800 hover:text-white border border-slate-700',
      ghost: 'bg-transparent text-slate-300 hover:bg-slate-800 hover:text-white',
      destructive: 'bg-red-600 text-white hover:bg-red-700 active:bg-red-800 shadow-sm',
      accent: 'bg-amber-500 text-slate-950 font-medium hover:bg-amber-400 active:bg-amber-600 shadow-sm',
    };

    const sizeStyles = {
      xs: 'text-xs px-2 py-1 gap-1 rounded',
      sm: 'text-xs px-2.5 py-1.5 gap-1.5 rounded-md font-medium',
      md: 'text-sm px-3.5 py-2 gap-2 rounded-md font-medium',
      lg: 'text-base px-5 py-2.5 gap-2.5 rounded-lg font-medium',
    };

    return (
      <button
        ref={ref}
        disabled={disabled}
        className={cn(
          'inline-flex items-center justify-center transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 focus:ring-offset-slate-950 disabled:opacity-50 disabled:pointer-events-none select-none cursor-pointer',
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      >
        {icon && <span className="shrink-0">{icon}</span>}
        {children}
      </button>
    );
  }
);
Button.displayName = 'Button';
