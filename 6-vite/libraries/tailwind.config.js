/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./chart.html",
    "./wp.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    "./wp.js",
    "./chart.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ]
}

