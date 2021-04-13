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
    extend: {},
    fill: {
      current: 'currentColor',
    },
    colors: {
      white: '#fff',
      black: '#000',
      gray: '#98a9bc',
      'gray-light': '#e8ecef',
      primary: 'var(--gl-color-primary)',
      secondary: 'var(--gl-color-secondary)',
    },
    backgroundColor: (theme) => ({
      ...theme('colors'),
    }),
    fontFamily: {
      main: 'var(--gl-font-main)',
      title: 'var(--gl-font-title)',
    },
  },
  variants: {
    extend: {
      margin: ['last'],
    },
  },
  plugins: [],
}
