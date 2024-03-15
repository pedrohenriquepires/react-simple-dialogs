/** @type {import('tailwindcss').Config} */
export default {
  prefix: 'rsd-',
  content: [
    "./index.html",
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      colors: {
        'primary': 'var(--rsd-primary-color)',
        'primary-hover': 'var(--rsd-primary-hover-color)',
        'backdrop': 'var(--rsd-backdrop-color)'
      },
      animation: {
        'slide-down': 'slide-down .3s cubic-bezier(0.175, 0.885, 0.32, 1.575) forwards',
        'fade-in': 'fade-in .2s linear forwards'
      },
      keyframes: {
        'slide-down': {
          '0%': { transform: 'translateY(-100px)' },
          '100%': { transform: 'translateY(50px)' }
        },
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        }
      }
    },
  },
  plugins: [],
}