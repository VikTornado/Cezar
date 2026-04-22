/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fdf8f6',
          100: '#f2e8e5',
          200: '#eaddd8',
          300: '#e0cec7',
          400: '#d2bab0',
          500: '#a3a380', /* Custom secondary/olive tone */
          600: '#9b4d36', /* Primary brand terracotta/warm */
          700: '#853e2a',
          800: '#693021',
          900: '#4d2418',
        },
        warm: {
          light: '#fdfbf7',
          default: '#f6f1e9',
          dark: '#e3dacc',
        },
        dark: {
          light: '#333333',
          default: '#1a1a1a',
          dark: '#0a0a0a',
        }
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'], // For premium headlines
      },
    },
  },
  plugins: [],
}
