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
        primary: 'var(--gl-color-primary)',
        secondary: 'var(--gl-color-secondary)',
        text: 'var(--gl-color-text)',
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
