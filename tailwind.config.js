// const defaultTheme = require('tailwindcss/defaultTheme')
// const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  // darkMode: false, // or 'media' or 'class'
  theme: {
    // Rewrite default colors
    // colors: {
    //   ...colors,
    //   black: { ...colors.black, light: '#141414', DEFAULT: colors.black },
    // },
    extend: {
      // Add custom colors
      // colors: {
      //   black: { light: '#141414', DEFAULT: colors.black },
      //   winder: '#ff6600',
      // },
      // Add custom screen widths
      //   screens: {
      //     xs: '340px',
      //     ...defaultTheme.screens,
      //   },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
