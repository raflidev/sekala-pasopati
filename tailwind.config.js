/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'roboto' : ['Roboto', 'sans-serif'],
        'circular': ['CircularStd'],
        'larken': ['LarkenDemo'],
      },
      colors:{
        'primary-second': "#536A6E",
        'primary': "#28515B",
        'light': '#C1D5DA',
      },
      screens:{
        '3xl': '1920px',
      }
    },
  },
  plugins: [],
}
