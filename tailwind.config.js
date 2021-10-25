module.exports = {
  purge: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['Poppins', 'Arial', 'sans-serif']
    },
    screens: {
      'sm': {'min': '320px', 'max': '375px'},
      'md': {'min': '425px', 'max': '768px'},
      'lg': {'min': '769px', 'max': '1023px'},
      'xl': {'min': '1024px', 'max': '1439px'},
      '2xl': {'min': '1440px'},
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
