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
        primary:"#565656"
      }
    },
  },
 
  plugins: [
    require('tailwindcss'),
    require('autoprefixer')
  ],
}