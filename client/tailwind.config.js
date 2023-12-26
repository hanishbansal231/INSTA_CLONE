/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: '#fff',
        black: '#000',
        primary: {
          5: '#4456',
          10: '#4566',
        },

      }
    },
  },
  plugins: [],
}

