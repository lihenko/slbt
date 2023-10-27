/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js,php}"],
  theme: {
    extend: {},
    colors: {
      'blue': '#0B4595',
      'grey': '#A6A5AC',
      'white' : '#ffffff',
      'violete' : '#2D2377',
      'black' : '#000000',
    },
    fontFamily: {
      'sans': ['Quattrocento Sans', 'sans-serif'],
      'quattrocento': ['Quattrocento Sans', 'sans-serif'],
      'poppins': ['Poppins', 'sans-serif'],
      'body': ['Quattrocento Sans', 'sans-serif'],
    },
    fontSize: {
      micro:['12px', '13px'],
      sm: ['14px', '22px'],
      base: ['16px', '24px'],
      lg: ['18px', '30px'],
      xl: ['20px', '30px'],
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '992px',
      'xl': '1250px',
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
  corePlugins: {
    placeholderColor: false,
    placeholderOpacity: false,
  },
};
