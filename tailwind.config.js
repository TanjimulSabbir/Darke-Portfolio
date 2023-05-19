/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      screens:{
        'sm': '576px',
        'lg': '1220px',
      },
      colors:{
Primary:"#999999",
Green:"#28e98c",
Secondary:"#656565"
      },
      borderColor:{
        Primary:"#565656",
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

// <576px
// Small	sm	≥576px
// Medium	md	≥768px
// Large	lg	≥992px
// Extra large	xl	≥1200px
// Extra extra large	xxl	≥1400px

// 640px	@media (min-width: 640px) { ... }
// md	768px	@media (min-width: 768px) { ... }
// lg	1024px	@media (min-width: 1024px) { ... }
// xl	1280px	@media (min-width: 1280px) { ... }
// 2xl	1536px