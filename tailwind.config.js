const colors = require('tailwindcss/colors');

module.exports = {
  purge: [
    './pages/**/*.{tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      screens: {
        sm: { max: '325px' },
        md: { min: '425px' },
        lg: { min: '768px' },
        xl: { min: '1024px' },
        '2xl': { min: '1440px' },
        '3xl': { min: '1441px' },
      },
      colors: {
        trueGray: colors.trueGray,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
