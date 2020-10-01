## Boilerplate

If you want we have some boilerplate projects to start a project all ready to go!

* [xtend-theme-vanilla](https://github.com/minimit/xtend-theme-vanilla)

## Css Installation

#### Tailwind

Follow the instructions to [install tailwind](https://tailwindcss.com/docs/installation).

```Shell
npm install tailwindcss --save-dev
```

Install **postcss import** and **postcss nesting**.

```Shell
npm install postcss-import postcss-nesting --save-dev
```

Then in `postcss.config.js` set up compilation.

```jsx
const postcssImport = require(`postcss-import`)
const postcssNesting = require('postcss-nesting')
const tailwindcss = require(`tailwindcss`)

module.exports = {
  map: true,
  plugins: [postcssImport(), tailwindcss(), postcssNesting()],
}
```

Then you can use css with tailwind.

```css
@import "tailwindcss/base";

@import "tailwindcss/components";

@import "./custom.css"; /* custom code here */

@import "tailwindcss/utilities";
```

#### Xtend

Install **xtend**.

```Shell
npm install xtend-library --save
```

Then add **xtend** plugins and variables inside `tailwind.config.js`, with this special format that merges your configuration with xtend configuration.

```jsx
module.exports = {
  purge: [],
  theme: require('xtend-library/src/tailwind-theme')({
    // add here your theme settings
    extend: {
      // add here your theme extend settings
    },
  }),
  variants: require('xtend-library/src/tailwind-variants')({
    // add here your variants
  }),
  plugins: [require('xtend-library/src/tailwind-plugin')],
  experimental: {
    applyComplexClasses: true,
    extendedSpacingScale: true,
    defaultLineHeights: true,
    removeDeprecatedGapUtilities: true,
  },
}
```

## Js Installation

You need to install [core-js](https://www.npmjs.com/package/core-js), [@babel/core](https://www.npmjs.com/package/@babel/core), [@babel/preset-env](https://www.npmjs.com/package/@babel/preset-env), [@babel/plugin-transform-runtime](https://www.npmjs.com/package/@babel/plugin-transform-runtime), [babel-plugin-module-resolver](https://www.npmjs.com/package/babel-plugin-module-resolver).

```Shell
npm install core-js@3 @babel/core @babel/preset-env @babel/plugin-transform-runtime babel-plugin-module-resolver --save-dev
```

Then in the root of your project set up polyfills with `babel.config.js`.

```jsx
const path = require('path')

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'entry',
        corejs: 3,
      },
    ],
  ],
  plugins: [
    [require.resolve('@babel/plugin-transform-runtime')],
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        alias: {
          // if you want to fork javascript file add a local path.resolve as first in array
          'xtend-library': [path.resolve(__dirname, './node_modules/xtend-library')],
        },
      },
    ],
  ],
}
```

You need also to set a `.browserslistrc` in the root of your project.

```
Chrome >= 38
Safari >= 10
iOS >= 10
Firefox >= 38
Edge >= 12
Opera >= 25
```

#### Xtend

You need to import the **polyfills** and the **main js** file.

```jsx
import 'core-js'
import { Xt } from 'xtend-library'
```

Then you can import the **components you need** as described in the docs:

```jsx
import 'xtend-library/src/core/toggle'
import 'xtend-library/src/core/slider'
```

#### Gsap

This library in the demos uses [gsap](https://github.com/greensock/GSAP) and [bezier-easing](https://github.com/gre/bezier-easing) for javascript animations.

```
npm install gsap bezier-easing --save
```

## Css Customization

To **customize the theme** use [tailwind theme configuration](https://tailwindcss.com/docs/theme) in the theme section of your `tailwind.config.js` file, with this special format that merges your configuration with xtend configuration..

```jsx
module.exports = {
  theme: require('xtend-library/src/tailwind-theme')({
    // extend theme in node_modules/xtend-library/src/tailwind-theme.js
    extend: {
      colors: {
        accent: {
          100: '#F1F0FE',
          200: '#DDD9FD',
          300: '#C8C2FC',
          400: '#9E95FA',
          500: '#7567F8',
          600: '#695DDF',
          700: '#463E95',
          800: '#352E70',
          900: '#231F4A',
        },
      },
    },
  },
}
```

To **see the xtend theme options** see the source code of `node_modules/xtend-library/src/tailwind-theme.js`.

To **customize the utilities and components** add your overrides under the **xtend key** in the theme section of your `tailwind.config.js` file, with this special format that merges your configuration with xtend configuration..

```jsx
module.exports = {
  theme: require('xtend-library/src/tailwind-theme')({
    // xtend utilities and components in node_modules/xtend-library/src/tailwind-xtend.js
    xtend: theme => ({
      utilities: {
        // disable utility
        utilityName: false,
        // modify utility
        utilityName: {
          '.selector': {
            myStyle: 'myStyleValue',
          },
        },
      },
      components: {
        // disable component
        componentName: false,
        // modify component
        componentName: {
          '.selector': {
            myStyle: 'myStyleValue',
          },
        },
      },
      addons: {
        // disable addon
        addonName: false,
        // modify addon
        addonName: {
          '.selector': {
            myStyle: 'myStyleValue',
          },
        },
      },
    }),
  },
}
```

To **see the default values** see the source code of `node_modules/xtend-library/src/tailwind-xtend.js`.

## Browser support

Supported browsers are as follow: **chrome 38**, **safari 10**, **ios 10**, **firefox 38**, **edge 12**, **opera 25**.

## Documentation

We use [gatsby](https://www.npmjs.com/package/gatsby) to serve the docs:

* Install required npm packages with `npm install`
* Use `npm run build` to build the docs in `/public`
* Use `npm run dev` to serve a develop version
* Use `npm run serve` to serve a production version

## Copyright

Licensed under [MIT license](https://github.com/minimit/xtend-library/blob/master/LICENSE).
Docs licensed under [CC BY 3.0](https://github.com/minimit/xtend-library/blob/master/LICENSE-DOCS).
