/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        goldStart: '#F95454',
        goldEnd: '#C62E2E',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(to right, #F95454, #C62E2E)',
      },
    },
  },
  plugins: [],
}

