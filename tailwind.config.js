module.exports = {
  prefix: 'gl-',
  purge: {
    content: ['./src/**/*.html', './src/**/*.js'],
    options: {
      keyframes: true,
    },
  },
  darkMode: false,
  theme: {
    extend: {
      colors: {
        row: 'var(--gl-color-row)',
        text: 'var(--gl-color-text)',
        primary: 'var(--gl-color-primary)',
        gray: 'var(--gl-color-gray)',
      },
    },
    backgroundColor: (theme) => ({
      ...theme('colors'),
    }),
    fontFamily: {
      main: 'var(--gl-font-main)',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
