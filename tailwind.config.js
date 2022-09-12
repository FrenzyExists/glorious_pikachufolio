/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'blue': '#6A8CBC',
      'purple': '#8787BF',
      'orange': '#D66652',
      'green': '#7D9685',
      'yellow': '#DE956F',
      'white': '#E6E6F1',
      'gray': '#414560',
      'light-gray': '#CCCBD9'
    },
    fontFamily: {
      'mali': [ 'Mali', 'cursive' ],
      'dosis': ['Dosis', 'sans-serif']
    }
  },
  plugins: [],
}