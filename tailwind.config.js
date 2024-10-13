/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': 'Helvetica, Arial, sans-serif',
      }
    },
  },
  plugins: [],
  darkMode: 'class'
}

