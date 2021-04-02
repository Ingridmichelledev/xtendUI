module.exports = {
  component: theme => ({
    '.xt-slider': {
      position: 'relative',
    },
    '.xt-slides': {
      position: 'relative',
      display: 'inline-block', // fix autoheight values
      verticalAlign: 'top', // fix inline-block margin below
      width: '100%',
      // styles
      transitionProperty: 'height',
      transitionDuration: theme('transitionDuration.500'),
      transitionTimingFunction: theme('transitionTimingFunction.out'),
    },
    '.xt-slide': {
      position: 'relative',
      zIndex: theme('zIndex.slide'),
    },
    '.xt-slider-absolute': {
      overflow: 'hidden',
      '.xt-slide': {
        position: 'relative',
        '&:not(.in):not(.active):not(.out)': {
          display: 'none',
        },
        '&:not(.in)': {
          position: 'absolute',
          top: '0',
          left: '0',
        },
      },
      // fix page load height without .active slides
      '&:not(.xt-slider)': {
        '.xt-slide': {
          '&:first-child': {
            display: 'block !important',
            position: 'relative !important',
          },
        },
      },
    },
    '.xt-slides-inner': {
      flexWrap: 'nowrap',
      alignItems: 'flex-start',
      // prevent browser selection
      '-webkit-user-select': 'none',
      '-moz-user-select': 'none',
      '-ms-user-select': 'none',
      'user-select': 'none',
    },
  }),
}
