/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      screens:{
        "lg":"1220px"
      },
      colors:{
Primary:"#999999",
Green:"#28e98c"
      },
      borderColor:{
        Primary:"#565656"
      },
      fontFamily:{
Inter:"Inter, sans-serif"
      }
    },
  },
 
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    require("daisyui")
  ],
}