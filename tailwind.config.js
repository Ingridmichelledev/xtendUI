const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  presets: [require('tailwindcss/defaultConfig'), require('./tailwind.preset')],
  purge: {
    content: ['./src/**/*.css', './src/**/*.js'],
    options: {
      safelist: {
        greedy: [
          // popperjs
          /^data-popper-/,
          // code
          /pre/,
          /code/,
          /token/,
          // demos
          /^iframe--/,
        ],
      },
    },
  },
  theme: {
    extend: {
      colors: {
        code: '#2d3748',
        gray: {
          50: '#FCFDFF',
          100: '#FAFCFF',
          200: '#F2F6FF',
          300: '#EAF1FF',
          400: '#DBE7FF',
          500: '#CBDCFF',
          600: '#B7C6E6',
          700: '#7A8499',
          800: '#5B6373',
          900: '#3D424D',
        },
      },
      fontFamily: {
        sans: ['"Inter"', ...defaultTheme.fontFamily.sans],
      },
      borderWidth: {
        3: '3px',
      },
      borderColor: theme => ({
        DEFAULT: theme('colors.gray.300', 'currentColor'),
      }),
      xtendui: {
        link: {
          utility: theme => ({
            '.xt-links-default': {
              code: {
                color: theme('colors.primary.600'),
              },
            },
            '.xt-links-inverse': {
              code: {
                color: theme('colors.white'),
                opacity: '0.8',
              },
            },
          }),
        },
        typography: {
          component: {
            body: {
              '@apply text-base xl:text-lg': '',
            },
            code: {
              fontSize: '0.85em',
            },
          },
        },
      },
    },
  },
}
