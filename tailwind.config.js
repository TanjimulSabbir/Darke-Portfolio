/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'sm': '576px',
        'lg': '1250px',
      },
      colors: {
        Primary: "#999999",
        Green: "#28e98c",
        Secondary: "#656565",
        BlackOffset: "#000"
      },
      borderColor: {
        Primary: "#565656",
      },
      fontFamily: {
        Inter: "Inter, sans-serif"
      }
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    require("daisyui")
  ],
}
