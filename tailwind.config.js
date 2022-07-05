const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        gray: colors.coolGray,
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
