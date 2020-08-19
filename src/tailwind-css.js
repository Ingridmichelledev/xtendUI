// rema and em
// https://github.com/tailwindlabs/tailwindcss-typography/blob/master/src/styles.js
const round = num =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, '$1')
    .replace(/\.0$/, '')
const rem = px => `${round(px / 16)}rem`
const em = (px, base) => `${round(px / base)}em`

module.exports = theme => ({
  utilities: {
    structure: {
      '.container-reset': {
        padding: 0,
        width: 'auto',
        maxWidth: 'none',
      },
      '.mt-reset': {
        '&:first-child': {
          marginTop: theme('spacing.0'),
        },
      },
      '.mb-reset': {
        '&:last-child': {
          marginBottom: theme('spacing.0'),
        },
      },
    },
    typography: {
      '.text-reset': {
        fontFamily: 'inherit',
        fontStyle: 'inherit',
        fontWeight: 'inherit',
        fontSize: 'inherit',
        lineHeight: 'inherit',
        letterSpacing: 'inherit',
        textTransform: 'inherit',
      },
      '.text-default': {
        color: theme('colors.black'),
        'a:not([class]), .link': {
          color: theme('colors.accent.500'),
        },
      },
      '.text-inverse': {
        color: theme('colors.white'),
        'a:not([class]), .link': {
          color: theme('colors.white'),
        },
      },
    },
    list: {
      space: {
        px: '1px',
        '0': '0',
        '0.5': '0.125rem',
        '1': '0.25rem',
        '1.5': '0.375rem',
        '2': '0.5rem',
        '2.5': '0.625rem',
        '3': '0.75rem',
        '3.5': '0.875rem',
        '4': '1rem',
        '5': '1.25rem',
        '6': '1.5rem',
        '7': '1.75rem',
        '8': '2rem',
        '9': '2.25rem',
        '10': '2.5rem',
        '11': '2.75rem',
        '12': '3rem',
        '13': '3.25rem',
        '14': '3.5rem',
        '15': '3.75rem',
        '16': '4rem',
      },
    },
    row: {
      space: {
        px: '1px',
        '0': '0',
        '0.5': '0.125rem',
        '1': '0.25rem',
        '1.5': '0.375rem',
        '2': '0.5rem',
        '2.5': '0.625rem',
        '3': '0.75rem',
        '3.5': '0.875rem',
        '4': '1rem',
        '5': '1.25rem',
        '6': '1.5rem',
        '7': '1.75rem',
        '8': '2rem',
        '9': '2.25rem',
        '10': '2.5rem',
        '11': '2.75rem',
        '12': '3rem',
        '13': '3.25rem',
        '14': '3.5rem',
        '15': '3.75rem',
        '16': '4rem',
      },
    },
    toggle: {
      '.toggle-block': {
        display: 'none',
        '&.active, &.out': {
          display: 'block',
        },
      },
      '.toggle-flex': {
        display: 'none',
        '&.active, &.out': {
          display: 'flex',
        },
      },
    },
  },
  components: {
    // structure
    structure: {
      html: {
        lineHeight: 1.8,
        fontSize: rem(14),
        '@screen sm': {
          fontSize: rem(15),
        },
        '@screen lg': {
          fontSize: rem(16),
        },
        '@screen xl': {
          fontSize: rem(17),
        },
      },
    },
    // typography
    typography: {
      'a:not([class]), .link': {
        '@apply text-reset !important': {},
        wordWrap: 'break-word',
        overflowWrap: 'break-word',
        color: theme('colors.accent.500'),
        textDecoration: 'underline',
        transitionProperty: theme('transitionProperty.colors'),
        transitionDuration: theme('transitionDuration.500'),
        transitionTimingFunction: theme('transitionTimingFunction.ease.out'),
        '&:hover': {
          color: theme('colors.accent.600'),
          transitionTimingFunction: theme('transitionTimingFunction.ease.in'),
        },
        '&:active': {
          color: theme('colors.accent.400'),
          transitionTimingFunction: theme('transitionTimingFunction.ease.in'),
        },
      },
      'p, .p': {
        marginBottom: theme('spacing.5'),
        '@apply text-reset mb-reset': {},
      },
      'h1, .h1': {
        marginTop: theme('spacing.8'),
        marginBottom: theme('spacing.6'),
        '@apply mt-reset mb-reset': {},
        fontFamily: theme('fontFamily.sans').toString(),
        fontWeight: theme('fontWeight.semibold'),
        lineHeight: theme('lineHeight.tight'),
        letterSpacing: theme('letterSpacing.normal'),
        textTransform: 'none',
        fontSize: rem(30),
        '@screen lg': {
          fontSize: rem(40),
        },
      },
      'h2, .h2': {
        marginTop: theme('spacing.8'),
        marginBottom: theme('spacing.6'),
        '@apply mt-reset mb-reset': {},
        fontFamily: theme('fontFamily.sans').toString(),
        fontWeight: theme('fontWeight.semibold'),
        lineHeight: theme('lineHeight.tight'),
        letterSpacing: theme('letterSpacing.normal'),
        textTransform: 'none',
        fontSize: rem(30),
        '@screen lg': {
          fontSize: rem(35),
        },
      },
      'h3, .h3': {
        marginTop: theme('spacing.8'),
        marginBottom: theme('spacing.6'),
        '@apply mt-reset mb-reset': {},
        fontFamily: theme('fontFamily.sans').toString(),
        fontWeight: theme('fontWeight.semibold'),
        lineHeight: theme('lineHeight.tight'),
        letterSpacing: theme('letterSpacing.normal'),
        textTransform: 'none',
        fontSize: rem(25),
        '@screen lg': {
          fontSize: rem(30),
        },
      },
      'h4, .h4': {
        marginTop: theme('spacing.8'),
        marginBottom: theme('spacing.6'),
        '@apply mt-reset mb-reset': {},
        fontFamily: theme('fontFamily.sans').toString(),
        fontWeight: theme('fontWeight.semibold'),
        lineHeight: theme('lineHeight.tight'),
        letterSpacing: theme('letterSpacing.normal'),
        textTransform: 'none',
        fontSize: rem(20),
      },
      'h5, .h5': {
        marginTop: theme('spacing.8'),
        marginBottom: theme('spacing.6'),
        '@apply mt-reset mb-reset': {},
        fontFamily: theme('fontFamily.sans').toString(),
        fontWeight: theme('fontWeight.semibold'),
        lineHeight: theme('lineHeight.tight'),
        letterSpacing: theme('letterSpacing.normal'),
        textTransform: 'none',
        fontSize: rem(16),
      },
      'h6, .h6': {
        marginTop: theme('spacing.8'),
        marginBottom: theme('spacing.6'),
        '@apply mt-reset mb-reset': {},
        fontFamily: theme('fontFamily.sans').toString(),
        fontWeight: theme('fontWeight.semibold'),
        lineHeight: theme('lineHeight.tight'),
        letterSpacing: theme('letterSpacing.wide'),
        textTransform: 'uppercase',
        fontSize: '13px',
      },
      '.h-block': {
        marginTop: theme('spacing.8'),
        marginBottom: theme('spacing.6'),
        paddingTop: theme('spacing.4'),
        paddingBottom: theme('spacing.4'),
        paddingLeft: theme('spacing.6'),
        paddingRight: theme('spacing.6'),
        backgroundColor: theme('colors.gray.200'),
        textAlign: 'center',
      },
    },
    // list
    list: {
      '.list': {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'flex-start',
        /*
        '&, > *': {
          '> a:not(.btn), > button:not(.btn)': {
          }
        }
        */
      },
      '.list-block': {
        display: 'flex',
        flexWrap: 'nowrap',
        flexDirection: 'column',
        alignItems: 'flex-start',
      },
    },
    // row
    row: {
      '.row': {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'flex-start',
      },
      '.row-stretch': {
        alignItems: 'stretch',
        '> *': {
          display: 'flex',
          alignItems: 'stretch',
          '> *': {
            minHeight: '100%',
          },
        },
      },
    },
    // btn
    btn: {
      button: {
        '&:focus': {
          outline: 'none',
        },
      },
      '.btn': {
        // setup
        cursor: 'pointer',
        display: 'inline-flex',
        position: 'relative',
        verticalAlign: 'middle',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        zIndex: theme('zIndex.base'),
        '&:hover, &:active': {
          zIndex: theme('zIndex.active'),
        },
        // styles
        padding: `${em(8, 12)} ${em(16, 12)}`,
        fontSize: rem(12),
        borderWidth: theme('borderWidth.default'),
        borderColor: theme('borderColor.transparent'),
        borderRadius: theme('borderRadius.md'),
        fontFamily: theme('fontFamily.sans').toString(),
        fontWeight: theme('fontWeight.semibold'),
        lineHeight: theme('lineHeight.tight'),
        letterSpacing: theme('letterSpacing.wider'),
        textTransform: 'uppercase',
        // animation
        transitionProperty: theme('transitionProperty.all'),
        transitionDuration: theme('transitionDuration.500'),
        transitionTimingFunction: theme('transitionTimingFunction.out'),
        '&:hover': {
          transitionTimingFunction: theme('transitionTimingFunction.in'),
        },
        '&:active': {
          transitionTimingFunction: theme('transitionTimingFunction.in'),
        },
      },
      // variant
      /*
      '.btn-default': {
        borderColor: theme('colors.gray.300'),
        backgroundColor: theme('colors.gray.300'),
        color: theme('textColor.black'),
        '&:hover': {
          borderColor: theme('colors.gray.400'),
          backgroundColor: theme('colors.gray.300'),
        },
        '&:active': {
          borderColor: theme('colors.gray.400'),
          backgroundColor: theme('colors.gray.400'),
        },
      },
      '.btn-primary': {
        borderColor: theme('colors.accent.500'),
        backgroundColor: theme('colors.accent.500'),
        color: theme('textColor.white'),
        '&:hover': {
          borderColor: theme('colors.accent.600'),
          backgroundColor: theme('colors.accent.500'),
        },
        '&:active': {
          borderColor: theme('colors.accent.600'),
          backgroundColor: theme('colors.accent.600'),
        },
      },
      */
      // size
      /*
      '.btn-tiny': {
        padding: '.5em 1em',
        fontSize: '10px',
      },
      '.btn-small': {
        padding: '.6em 1.2em',
        fontSize: rem(11),
      },
      '.btn-medium': {
        padding: '.6em 1.2em',
        fontSize: rem(12),
      },
      '.btn-large': {
        padding: '.6em 1.2em',
        fontSize: rem(13),
      },
      '.btn-big': {
        padding: '.6em 1.2em',
        fontSize: rem(14),
      },
      */
    },
    // card
    card: {
      '.card': {
        // setup
        '@apply: flex-auto': '',
        position: 'relative',
        display: 'flex',
        alignItems: 'flex-start',
        width: '100%',
        zIndex: theme('zIndex.base'),
        '&:hover, &:active': {
          zIndex: theme('zIndex.active'),
        },
        // animation
        '.card-design': {
          transitionProperty: theme('transitionProperty.all'),
          transitionDuration: theme('transitionDuration.500'),
          transitionTimingFunction: theme('transitionTimingFunction.out'),
        },
        '&:hover': {
          '.card-design': {
            transitionTimingFunction: theme('transitionTimingFunction.in'),
          },
        },
        '&:active': {
          '.card-design': {
            transitionTimingFunction: theme('transitionTimingFunction.in'),
          },
        },
      },
      '.card-inner': {
        // setup
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        minHeight: '100%',
      },
      '.card-content': {
        // setup
        '@apply: flex-auto': '',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
      },
      '.card-block': {
        padding: `${em(24, 12)}`,
        fontSize: rem(14),
      },
      '.card-title': {
        marginTop: theme('spacing.6'),
        marginBottom: theme('spacing.4'),
        '@apply mt-reset mb-reset': {},
        fontFamily: theme('fontFamily.sans').toString(),
        fontWeight: theme('fontWeight.semibold'),
        lineHeight: theme('lineHeight.tight'),
        letterSpacing: theme('letterSpacing.normal'),
        textTransform: 'none',
        fontSize: rem(20),
      },
      // variant
      /*
      '.card-default': {
        '@apply text-default': {},
        '.card-design': {
          borderColor: theme('colors.gray.300'),
          backgroundColor: theme('colors.gray.300'),
        },
        // interactive
        'a&, label&': {
          '&:hover': {
            '.card-design': {
              borderColor: theme('colors.gray.400'),
              backgroundColor: theme('colors.gray.300'),
            },
          },
          '&:active': {
            '.card-design': {
              borderColor: theme('colors.gray.400'),
              backgroundColor: theme('colors.gray.400'),
            },
          },
        },
      },
      '.card-primary': {
        '@apply text-inverse': {},
        '.card-design': {
          borderColor: theme('colors.accent.500'),
          backgroundColor: theme('colors.accent.500'),
        },
        // interactive
        'a&, label&': {
          '&:hover': {
            '.card-design': {
              borderColor: theme('colors.accent.600'),
              backgroundColor: theme('colors.accent.500'),
            },
          },
          '&:active': {
            '.card-design': {
              borderColor: theme('colors.accent.600'),
              backgroundColor: theme('colors.accent.600'),
            },
          },
        },
      },
      */
      // size
      /*
      '.card-tiny': {
        padding: '.5em 1em',
        fontSize: '10px',
      },
      '.card-small': {
        padding: '.6em 1.2em',
        fontSize: rem(11),
      },
      '.card-medium': {
        padding: '.6em 1.2em',
        fontSize: rem(12),
      },
      '.card-large': {
        padding: '.6em 1.2em',
        fontSize: rem(13),
      },
      '.card-big': {
        padding: '.6em 1.2em',
        fontSize: rem(14),
      },
      */
    },
  },
})
