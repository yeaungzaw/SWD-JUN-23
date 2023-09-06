/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    "./src/*.{html,js}",
    "./src/**/*.{html,js}",
    "./src/**/**/*.{html,js}",
  ],

  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        'open-sans': ['Open Sans', 'Padauk'],
        'roboto': ['Roboto', 'Padauk'],
        'padauk': ['Padauk', 'sans-serif']
      },
    }
  },
  plugins: []
}

