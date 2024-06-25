/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  darkmode: false,
  theme: {
    extend: {},
  },
  variants: {    
    extend: {},
  },
  plugins: [
    require('flowbite/plugin') 
  ],
}