/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'estrel': {
          dark: '#1A1A1A',
          light: '#F5F5F5',
          accent: '#C4A462', // Gold accent color
          'gray-dark': '#2D2D2D',
          'gray-light': '#E5E5E5',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
};