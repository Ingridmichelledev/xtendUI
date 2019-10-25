/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

import path from 'path'
import { markdownSlug } from './src/gatsby/components/markdown-slug.js'
require('./build/less.js')
require('./build/js.js')

// webpack config

exports.onCreateWebpackConfig = ({ getConfig, stage }) => {
  const config = getConfig()
  // https://github.com/gatsbyjs/gatsby/issues/11934
  if (stage.startsWith('develop') && config.resolve) {
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-dom': '@hot-loader/react-dom'
    }
  }
}

// markdown

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const docPageTemplate = path.resolve('src/gatsby/components/templates/doc-page.js')
  const docListingTemplate = path.resolve('src/gatsby/components/templates/doc-listing.js')
  const docThemeTemplate = path.resolve('src/gatsby/components/templates/doc-theme.js')
  /* COMMENTED CATEGORIES AND TAGS
  const tagTemplate = path.resolve(`src/gatsby/components/templates/doc-tag.js`)
  const categoryTemplate = path.resolve(`src/gatsby/components/templates/doc-category.js`)
  const tagSet = new Set()
  const categorySet = new Set()
  */
  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
      ) {
        edges {
          node {
            frontmatter {
              type
              parent
              title
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      let template = docPageTemplate
      if (!node.frontmatter.parent) {
        template = docListingTemplate
      } else if (node.frontmatter.type === 'Themes') {
        template = docThemeTemplate
      }
      createPage({
        path: markdownSlug(node), // needs gatsby-source-filesystem resolve name
        component: template,
        context: {
          type: node.frontmatter.type, // for query($type: String) { // put also on return graphql
          parent: node.frontmatter.parent, // for query($parent: String) { // put also on return graphql
          title: node.frontmatter.title // for query($title: String) { // put also on return graphql
        }
      })
      /* COMMENTED CATEGORIES AND TAGS
      if (node.frontmatter.tags) {
        node.frontmatter.tags.forEach(tag => {
          tagSet.add(tag)
        });
      }
      if (node.frontmatter.categories) {
        node.frontmatter.categories.forEach(category => {
          categorySet.add(category)
        })
      }
      const tagList = Array.from(tagSet)
      tagList.forEach(tag => {
        createPage({
          path: `/tags/${kebabCase(tag)}/`,
          component: tagTemplate,
          context: {
            tag
          }
        })
      })
      const categoryList = Array.from(categorySet)
      categoryList.forEach(category => {
        createPage({
          path: `/docs/${kebabCase(category)}/`,
          component: categoryTemplate,
          context: {
            category
          }
        })
      })
      */
    })
  })
}
