module.exports = {
  prefix: 'gl-',
  purge: {
    enabled: process.env.NODE_ENV === 'development',
    content: ['./src/**/*.html', './src/**/*.js'],
    options: {
      keyframes: true,
    },
  },
  darkMode: false,
  theme: {
    extend: {},
    fill: {
      current: 'currentColor',
    },
    colors: {
      white: '#fff',
      black: '#000',
      row: 'var(--gl-color-row)',
      body: 'var(--gl-color-body)',
      primary: 'var(--gl-color-primary)',
      gray: '#98a9bc',
      'gray-light': '#e8ecef',
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
