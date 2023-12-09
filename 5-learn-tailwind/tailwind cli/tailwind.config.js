/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  darkMode: 'class',
  theme: {
    fontFamily: {
      'poppins': ['Poppins', "sans-serif"]
    },
    extend: {
      colors: {
        primary: {
          100: "#cfe2ff",
          200: "#9ec5fe",
          300: "#6ea8fe",
          400: "#3d8bfd",
          500: "#0d6efd",
          600: "#0a58ca",
          700: "#084298",
          800: "#052c65",
          900: "#031633"
        },
        secondary: '#9c1de7',
        brown: {
          50: '#fdf8f6',
          100: '#f2e8e5',
          200: '#eaddd7',
          300: '#e0cec7',
          400: '#d2bab0',
          500: '#bfa094',
          600: '#a18072',
          700: '#977669',
          800: '#846358',
          900: '#43302b',
        },
      }
    },
  },
  plugins: [],
}

