module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        header: '#7F1D1D',
        background: '#F3F4F6',
        title: '#B91C1C',
        accent: '#047857'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
