/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#253D7D',
        secondary: '#252B44',
        lightBlue:'#D8E8F1', 
        darkBlue: '#153F69'
      }
    },
  },
  plugins: [],
}