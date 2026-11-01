/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        saffron: {
          50: '#fff9eb',
          100: '#ffefc6',
          200: '#fedd88',
          300: '#fdc44a',
          400: '#fba71b',
          500: '#f58206',
          600: '#d95f02',
          700: '#b44105',
          800: '#90330b',
          900: '#762b0c',
        },
        warmcream: {
          50: '#fdfcf9',
          100: '#faf7f0',
          200: '#f5efe0',
          300: '#ede2cb',
          400: '#dfcdab',
          500: '#cbb387',
        },
        curry: {
          500: '#d97706',
          600: '#b45309',
        },
        herb: {
          50: '#f0fdf4',
          100: '#dcfce7',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        serif: ['Playfair Display', 'Merriweather', 'Georgia', 'serif'],
      },
      boxShadow: {
        'card': '0 2px 10px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.03)',
        'card-hover': '0 12px 28px -4px rgba(217, 95, 2, 0.12), 0 6px 12px -2px rgba(0, 0, 0, 0.04)',
        'modal': '0 20px 40px rgba(0, 0, 0, 0.2)',
      }
    },
  },
  plugins: [],
}
