module.exports = {
  theme: {
    extend: {
      container: {
        center: true,
        fluid: true,
        padding: {
          DEFAULT: '1.25rem',
          sm: '1.5rem',
          md: '2rem',
          lg: '3rem',
          xl: '4rem',
        },
      },
      fontSize: {
        '3xs': ['0.6875rem', { lineHeight: '1rem' }], // 11px
        '2xs': ['0.75rem', { lineHeight: '1rem' }], // 12px
        xs: ['0.8125rem', { lineHeight: '1rem' }], // 13px
      },
      colors: {
        success: '#22c55e',
        error: '#ef4444',
        primary: {
          50: '#F2F8FF',
          100: '#E6F2FF',
          200: '#BFDDFF',
          300: '#99C9FF',
          400: '#4DA1FF',
          500: '#0078FF',
          600: '#006CE6',
          700: '#004899',
          800: '#003673',
          900: '#00244D',
        },
      },
      zIndex: {
        below: '-1',
        slide: '200', // same as options.zIndex.targets.start
        drop: '400', // same as options.zIndex.targets.start
        tooltip: '500', // same as options.zIndex.targets.start
        sticky: '900',
        above: '1000', // this is the z-index above all page content
        overlay: '5000', // same as options.zIndex.targets.start
        last: '10000', // this is the z-index above all xtendui zIndex
      },
      flex: {
        full: '1 1 100%',
      },
      inset: {
        100: '100%',
      },
      borderRadius: {
        inherit: 'inherit',
      },
      cursor: {
        none: 'none',
      },
      boxShadow: {
        ...require('./src/drop.css.js').boxShadow,
        ...require('./src/overlay.css.js').boxShadow,
        ...require('./src/tooltip.css.js').boxShadow,
      },
      transitionDelay: {
        ...require('./src/animation.css.js').transitionDelay,
      },
      transitionDuration: {
        ...require('./src/animation.css.js').transitionDuration,
      },
      transitionTimingFunction: {
        ...require('./src/animation.css.js').transitionTimingFunction,
      },
      animation: {
        ...require('./src/animation.css.js').animation,
      },
      keyframes: theme => ({
        ...require('./src/animation.css.js').keyframes(theme),
      }),
    },
  },
  variants: {
    backgroundColor: ({ after, before }) =>
      after(
        ['group-on'],
        'hover',
        after(
          ['on'],
          'hover',
          after(
            ['group-in'],
            'hover',
            after(
              ['in'],
              'hover',
              after(
                ['group-out'],
                'hover',
                after(
                  ['out'],
                  'hover',
                  after(['group-active'], 'hover', after(['active'], 'hover', before(['group-hover'], 'hover')))
                )
              )
            )
          )
        )
      ),
    backgroundOpacity: ({ after, before }) =>
      after(
        ['group-on'],
        'hover',
        after(
          ['on'],
          'hover',
          after(
            ['group-in'],
            'hover',
            after(
              ['in'],
              'hover',
              after(
                ['group-out'],
                'hover',
                after(
                  ['out'],
                  'hover',
                  after(['group-active'], 'hover', after(['active'], 'hover', before(['group-hover'], 'hover')))
                )
              )
            )
          )
        )
      ),
    borderColor: ({ after, before }) =>
      after(
        ['group-on'],
        'hover',
        after(
          ['on'],
          'hover',
          after(
            ['group-in'],
            'hover',
            after(
              ['in'],
              'hover',
              after(
                ['group-out'],
                'hover',
                after(
                  ['out'],
                  'hover',
                  after(['group-active'], 'hover', after(['active'], 'hover', before(['group-hover'], 'hover')))
                )
              )
            )
          )
        )
      ),
    borderOpacity: ({ after, before }) =>
      after(
        ['group-on'],
        'hover',
        after(
          ['on'],
          'hover',
          after(
            ['group-in'],
            'hover',
            after(
              ['in'],
              'hover',
              after(
                ['group-out'],
                'hover',
                after(
                  ['out'],
                  'hover',
                  after(['group-active'], 'hover', after(['active'], 'hover', before(['group-hover'], 'hover')))
                )
              )
            )
          )
        )
      ),
    boxShadow: ({ after, before }) =>
      after(
        ['group-on'],
        'hover',
        after(
          ['on'],
          'hover',
          after(
            ['group-in'],
            'hover',
            after(
              ['in'],
              'hover',
              after(
                ['group-out'],
                'hover',
                after(
                  ['out'],
                  'hover',
                  after(['group-active'], 'hover', after(['active'], 'hover', before(['group-hover'], 'hover')))
                )
              )
            )
          )
        )
      ),
    gradientColorStops: ({ after, before }) =>
      after(
        ['group-on'],
        'hover',
        after(
          ['on'],
          'hover',
          after(
            ['group-in'],
            'hover',
            after(
              ['in'],
              'hover',
              after(
                ['group-out'],
                'hover',
                after(
                  ['out'],
                  'hover',
                  after(['group-active'], 'hover', after(['active'], 'hover', before(['group-hover'], 'hover')))
                )
              )
            )
          )
        )
      ),
    margin: ({ after, before }) =>
      after(
        ['group-on'],
        'hover',
        after(
          ['on'],
          'hover',
          after(
            ['group-in'],
            'hover',
            after(
              ['in'],
              'hover',
              after(
                ['group-out'],
                'hover',
                after(
                  ['out'],
                  'hover',
                  after(['group-active'], 'hover', after(['active'], 'hover', before(['group-hover'], 'hover')))
                )
              )
            )
          )
        )
      ),
    opacity: ({ after, before }) =>
      after(
        ['group-on'],
        'hover',
        after(
          ['on'],
          'hover',
          after(
            ['group-in'],
            'hover',
            after(
              ['in'],
              'hover',
              after(
                ['group-out'],
                'hover',
                after(
                  ['out'],
                  'hover',
                  after(['group-active'], 'hover', after(['active'], 'hover', before(['group-hover'], 'hover')))
                )
              )
            )
          )
        )
      ),
    padding: ({ after, before }) =>
      after(
        ['group-on'],
        'hover',
        after(
          ['on'],
          'hover',
          after(
            ['group-in'],
            'hover',
            after(
              ['in'],
              'hover',
              after(
                ['group-out'],
                'hover',
                after(
                  ['out'],
                  'hover',
                  after(['group-active'], 'hover', after(['active'], 'hover', before(['group-hover'], 'hover')))
                )
              )
            )
          )
        )
      ),
    scale: ({ after, before }) =>
      after(
        ['group-on'],
        'hover',
        after(
          ['on'],
          'hover',
          after(
            ['group-in'],
            'hover',
            after(
              ['in'],
              'hover',
              after(
                ['group-out'],
                'hover',
                after(
                  ['out'],
                  'hover',
                  after(['group-active'], 'hover', after(['active'], 'hover', before(['group-hover'], 'hover')))
                )
              )
            )
          )
        )
      ),
    rotate: ({ after, before }) =>
      after(
        ['group-on'],
        'hover',
        after(
          ['on'],
          'hover',
          after(
            ['group-in'],
            'hover',
            after(
              ['in'],
              'hover',
              after(
                ['group-out'],
                'hover',
                after(
                  ['out'],
                  'hover',
                  after(['group-active'], 'hover', after(['active'], 'hover', before(['group-hover'], 'hover')))
                )
              )
            )
          )
        )
      ),
    skew: ({ after, before }) =>
      after(
        ['group-on'],
        'hover',
        after(
          ['on'],
          'hover',
          after(
            ['group-in'],
            'hover',
            after(
              ['in'],
              'hover',
              after(
                ['group-out'],
                'hover',
                after(
                  ['out'],
                  'hover',
                  after(['group-active'], 'hover', after(['active'], 'hover', before(['group-hover'], 'hover')))
                )
              )
            )
          )
        )
      ),
    textColor: ({ after, before }) =>
      after(
        ['group-on'],
        'hover',
        after(
          ['on'],
          'hover',
          after(
            ['group-in'],
            'hover',
            after(
              ['in'],
              'hover',
              after(
                ['group-out'],
                'hover',
                after(
                  ['out'],
                  'hover',
                  after(['group-active'], 'hover', after(['active'], 'hover', before(['group-hover'], 'hover')))
                )
              )
            )
          )
        )
      ),
    textDecoration: ({ after, before }) =>
      after(
        ['group-on'],
        'hover',
        after(
          ['on'],
          'hover',
          after(
            ['group-in'],
            'hover',
            after(
              ['in'],
              'hover',
              after(
                ['group-out'],
                'hover',
                after(
                  ['out'],
                  'hover',
                  after(['group-active'], 'hover', after(['active'], 'hover', before(['group-hover'], 'hover')))
                )
              )
            )
          )
        )
      ),
    textOpacity: ({ after, before }) =>
      after(
        ['group-on'],
        'hover',
        after(
          ['on'],
          'hover',
          after(
            ['group-in'],
            'hover',
            after(
              ['in'],
              'hover',
              after(
                ['group-out'],
                'hover',
                after(
                  ['out'],
                  'hover',
                  after(['group-active'], 'hover', after(['active'], 'hover', before(['group-hover'], 'hover')))
                )
              )
            )
          )
        )
      ),
    translate: ({ after, before }) =>
      after(
        ['group-on'],
        'hover',
        after(
          ['on'],
          'hover',
          after(
            ['group-in'],
            'hover',
            after(
              ['in'],
              'hover',
              after(
                ['group-out'],
                'hover',
                after(
                  ['out'],
                  'hover',
                  after(['group-active'], 'hover', after(['active'], 'hover', before(['group-hover'], 'hover')))
                )
              )
            )
          )
        )
      ),
    transitionProperty: ({ after, before }) =>
      after(
        ['group-on'],
        'hover',
        after(
          ['on'],
          'hover',
          after(
            ['group-in'],
            'hover',
            after(
              ['in'],
              'hover',
              after(
                ['group-out'],
                'hover',
                after(
                  ['out'],
                  'hover',
                  after(
                    ['group-active'],
                    'hover',
                    after(['active'], 'hover', before(['group-hover'], 'hover', after(['hover'], 'responsive')))
                  )
                )
              )
            )
          )
        )
      ),
    transitionTimingFunction: ({ after, before }) =>
      after(
        ['group-on'],
        'hover',
        after(
          ['on'],
          'hover',
          after(
            ['group-in'],
            'hover',
            after(
              ['in'],
              'hover',
              after(
                ['group-out'],
                'hover',
                after(
                  ['out'],
                  'hover',
                  after(
                    ['group-active'],
                    'hover',
                    after(['active'], 'hover', before(['group-hover'], 'hover', after(['hover'], 'responsive')))
                  )
                )
              )
            )
          )
        )
      ),
    transitionDuration: ({ after, before }) =>
      after(
        ['group-on'],
        'hover',
        after(
          ['on'],
          'hover',
          after(
            ['group-in'],
            'hover',
            after(
              ['in'],
              'hover',
              after(
                ['group-out'],
                'hover',
                after(
                  ['out'],
                  'hover',
                  after(
                    ['group-active'],
                    'hover',
                    after(['active'], 'hover', before(['group-hover'], 'hover', after(['hover'], 'responsive')))
                  )
                )
              )
            )
          )
        )
      ),
    transitionDelay: ({ after, before }) =>
      after(
        ['group-on'],
        'hover',
        after(
          ['on'],
          'hover',
          after(
            ['group-in'],
            'hover',
            after(
              ['in'],
              'hover',
              after(
                ['group-out'],
                'hover',
                after(
                  ['out'],
                  'hover',
                  after(
                    ['group-active'],
                    'hover',
                    after(['active'], 'hover', before(['group-hover'], 'hover', after(['hover'], 'responsive')))
                  )
                )
              )
            )
          )
        )
      ),
    zIndex: ({ after, before }) =>
      after(
        ['group-on'],
        'hover',
        after(
          ['on'],
          'hover',
          after(
            ['group-in'],
            'hover',
            after(
              ['in'],
              'hover',
              after(
                ['group-out'],
                'hover',
                after(
                  ['out'],
                  'hover',
                  after(
                    ['group-active'],
                    'hover',
                    after(['active'], 'hover', before(['group-hover'], 'hover', after(['hover'], 'responsive')))
                  )
                )
              )
            )
          )
        )
      ),
    display: ({ after, before }) =>
      after(
        ['group-on'],
        'hover',
        after(
          ['on'],
          'hover',
          after(
            ['group-in'],
            'hover',
            after(
              ['in'],
              'hover',
              after(
                ['group-out'],
                'hover',
                after(
                  ['out'],
                  'hover',
                  after(
                    ['group-active'],
                    'hover',
                    after(['active'], 'hover', before(['group-hover'], 'hover', after(['hover'], 'responsive')))
                  )
                )
              )
            )
          )
        )
      ),
  },
  plugins: [require('./tailwind.plugin')],
}
