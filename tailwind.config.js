const themeColors = require('./theme/colors.json');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: themeColors
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
