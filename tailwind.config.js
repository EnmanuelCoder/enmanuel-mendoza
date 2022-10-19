const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      "primary": "#191c32",
      "secondary": "#2e3257",
      "logo": "#5761AD",
      "cards": "#11131f",
      "white": "#ffffff",
      colors

    },
    fontFamily: { 
      Montserrat: ["'Montserrat', sans-serif"],
    },
    extend: {
     
    },
  },
  plugins: [
    
  ],
}