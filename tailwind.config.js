/** @type {import('tailwindcss').Config} */
export default {
  purge: {
    enabled: process.env.NODE_ENV === 'publish',
    content: ['./src/**/*.{js,jsx,ts,tsx}']
  },
  content: [
    "./index.html",
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}