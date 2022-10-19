/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens:{
      'mobile': {
        max: '640px'
      }
    },
    extend: {},
  },
  plugins: [],
}