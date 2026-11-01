/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    screens: {
      'xs': '320px',
      'sm': '375px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1440px',
    },
    extend: {
      colors: {
        midnight: {
          50: '#f0f3fa',
          100: '#dce3f3',
          200: '#bdcbe7',
          300: '#90a9d5',
          400: '#5e82be',
          500: '#3d63a5',
          600: '#2f4d87',
          700: '#273e6e',
          800: '#23365c',
          900: '#0f172a',
          950: '#070b14',
        },
        primary: {
          50: 'var(--color-primary-50, #fdf2f8)',
          100: 'var(--color-primary-100, #fce7f3)',
          500: 'var(--color-primary-500, #ec4899)',
          600: 'var(--color-primary-600, #db2777)',
          700: 'var(--color-primary-700, #be185d)',
        },
        surface: {
          50: 'var(--color-surface-50, #f8fafc)',
          100: 'var(--color-surface-100, #f1f5f9)',
          800: 'var(--color-surface-800, #1e293b)',
          900: 'var(--color-surface-900, #0f172a)',
          950: 'var(--color-surface-950, #070b14)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['Playfair Display', 'Cormorant Garamond', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
      animation: {
        'pulse-glow': 'pulseGlow 2.5s ease-in-out infinite',
        'float': 'float 3.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
