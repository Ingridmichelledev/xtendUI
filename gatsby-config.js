/**
 * https://www.gatsbyjs.org/docs/gatsby-config/
 */

const fs = require('fs')
const path = require('path')
const version = JSON.parse(fs.readFileSync('package.json').toString()).version

module.exports = {
  siteMetadata: {
    title: 'Xtend',
    description: 'Xtend advanded frontend library',
    author: 'Riccardo Caroli',
    version: version,
    npm: 'https://www.npmjs.com/package/xtend-library',
    github: 'https://github.com/minimit/xtend-library',
    download: 'https://github.com/minimit/xtend-library/releases',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-less',
    // manifest
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Xtend',
        short_name: 'docs',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#0078ff',
        display: 'minimal-ui',
        icon: 'src/gatsby/assets/images/favicon.png',
      },
    },
    // resolve
    {
      resolve: 'gatsby-plugin-module-resolver',
      options: {
        root: './',
        aliases: {
          assets: './src/gatsby/assets',
          components: './src/gatsby/components',
          // resolve xtend-library js and less import
          'xtend-library': path.resolve(__dirname, './'),
        },
      },
    },
    // resolve graphql
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: './src/',
      },
    },
    // pages
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: './src/gatsby/components/pages/',
      },
    },
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: './src/gatsby/code/',
        ignore: ['vanilla/**/**'],
      },
    },
    // remark
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-component',
            options: { components: ['demo'] },
          },
          {
            resolve: 'gatsby-remark-custom-blocks',
            options: {
              blocks: {
                noteDefault: {
                  classes: 'note note-default note-background gatbsy_note',
                },
                notePrimary: {
                  classes: 'note note-primary note-background gatbsy_note',
                },
                noteError: {
                  classes: 'note note-error note-background gatbsy_note',
                },
                noteSuccess: {
                  classes: 'note note-success note-background gatbsy_note',
                },
              },
            },
          },
        ],
      },
    },
  ],
}
