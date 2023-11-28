/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      greenBucks: '#007042',
      greyFooter: '#F0F0F0',
      lightGreyFooter: '#F7F7F7',
      transparent: 'transparent', 
      current: 'currentColor', 
      black: colors.black, 
      white: colors.white, 
      emerald: colors.emerald, 
      indigo: colors.indigo, 
      yellow: colors.yellow, 
      stone: colors.warmGray, 
      sky: colors.lightBlue, 
      neutral: colors.trueGray, 
      gray: colors.coolGray, 
      slate: colors.blueGray, 
      lime: colors.lime, 
      rose: colors.rose, 
    }
  },
  plugins: [],
}

