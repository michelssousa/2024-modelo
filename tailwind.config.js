const konsta = require('konsta/config')
const colors = require("tailwindcss/colors")
module.exports = konsta({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}", 
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {},
    screens: {
      '2xl': { 'max': '1535px' },
      'xl': { 'max': '1279px' },
      'my': { 'max': '940px' },
      'lg': { 'max': '1023px' },
      'md': { 'max': '767px' },
      'sm': { 'max': '639px' },
      'xsm': { 'max': '400px' },
      'xxsm': { 'max': '250px' },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
})