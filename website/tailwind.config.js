module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      chaney: ['chaney', 'ui-sans-serif', 'system-ui']
    },
    extend: {
      colors: {
        header: '#dd5979',
        background: '#f9fafc',
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
