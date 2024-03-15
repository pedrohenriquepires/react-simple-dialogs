/** @type {import('tailwindcss').Config} */
export default {
  prefix: 'rsd-',
  important: true,
  content: [
    "./index.html",
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      colors: {
        'primary': 'var(--rsd-primary-color)',
        'primary-hover': 'var(--rsd-primary-hover-color)'
      }
    },
  },
  plugins: [],
}