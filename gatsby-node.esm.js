import path from 'path'
import { markdownSlug } from './src/gatsby/templates/snippets/markdown-slug.js'

// webpack config

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        // resolve xtendui import js and css
        xtendui: path.resolve(__dirname, './'),
      },
    },
  })
}

exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPreset({
    name: `babel-preset-gatsby`, // https://github.com/gatsbyjs/gatsby/blob/master/packages/babel-preset-gatsby/README.md
  })
  actions.setBabelPreset({
    name: `@babel/preset-env`,
    options: {
      useBuiltIns: 'entry',
      corejs: 3,
    },
  })
}

// markdown

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const docPageTemplate = path.resolve('src/gatsby/templates/doc-page.js')
  const docCategoryTemplate = path.resolve('src/gatsby/templates/doc-category.js')
  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              type
              category
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
      let slug = markdownSlug(node)
      createPage({
        path: slug,
        component: node.frontmatter.parent ? docPageTemplate : docCategoryTemplate,
        context: {
          // for graphql query($type: String)
          title: node.frontmatter.title,
          type: node.frontmatter.type,
          category: node.frontmatter.category,
          parent: node.frontmatter.parent,
          parents: `/^${node.frontmatter.parent}$/`,
        },
      })
    })
  })
}

// contentful dummy content https://www.gatsbyjs.com/docs/recipes/sourcing-data/

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  const contentfulAssets = [{ title: 'Dummu Asset', localFile: { url: 'dummy-url' } }]
  contentfulAssets.forEach(contentfulAsset => {
    const node = {
      title: contentfulAsset.title,
      localFile: contentfulAsset.localFile,
      id: createNodeId(`ContentfulAsset-${contentfulAsset.name}`),
      internal: {
        type: 'ContentfulAsset',
        contentDigest: createContentDigest(contentfulAsset),
      },
    }
    actions.createNode(node)
  })
}
