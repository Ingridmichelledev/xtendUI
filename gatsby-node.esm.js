/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

import path from 'path'
import glob from 'glob'
import writeFile from 'write'
import { markdownSlug } from './src/gatsby/components/markdown-slug.js'

// write xtend less

let lessCore = ''
const lessCoreGlob = new glob.Glob('src/core/**/*.less', { ignore: ['**/*-setup.less'] }, function (er, files) {
  for (const file of files) {
    lessCore += `@import '~xtend-library/${file}';\n`
  }
})
lessCoreGlob.on('end', function (filepath) {
  writeFile('./src/xtend-core.less', lessCore, function (err) {
    if (err) console.log(err)
  })
})

let lessDemos = ''
const lessDemosGlob = new glob.Glob('src/demos/**/*.less', function (er, files) {
  for (const file of files) {
    lessDemos += `@import '~xtend-library/${file}';\n`
  }
})
lessDemosGlob.on('end', function (filepath) {
  writeFile('./src/xtend-demos.less', lessDemos, function (err) {
    if (err) console.log(err)
  })
})

let lessExtensions = ''
const lessExtensionsGlob = new glob.Glob('src/extensions/**/*.less', function (er, files) {
  for (const file of files) {
    lessExtensions += `@import '~xtend-library/${file}';\n`
  }
})
lessExtensionsGlob.on('end', function (filepath) {
  writeFile('./src/xtend-extensions.less', lessExtensions, function (err) {
    if (err) console.log(err)
  })
})

// write xtend js

let jsCore = ''
const jsCoreGlob = new glob.Glob('src/core/**/*.js', function (er, files) {
  jsCore += 'if (typeof window !== \'undefined\') {\n'
  for (const file of files) {
    jsCore += `  require('xtend-library/${file}')\n`
  }
  jsCore += '}'
  jsCore += '\n'
})
jsCoreGlob.on('end', function (filepath) {
  writeFile('./src/xtend-core.js', jsCore, function (err) {
    if (err) console.log(err)
  })
})

let jsDemos = 'if (typeof window !== \'undefined\') {\n'
const jsDemosGlob = new glob.Glob('src/demos/**/*.js', function (er, files) {
  for (const file of files) {
    jsDemos += `  require('xtend-library/${file}')\n`
  }
  jsDemos += '}'
  jsDemos += '\n'
})
jsDemosGlob.on('end', function (filepath) {
  writeFile('./src/xtend-demos.js', jsDemos, function (err) {
    if (err) console.log(err)
  })
})

let jsExtensions = 'if (typeof window !== \'undefined\') {\n'
const jsExtensionsGlob = new glob.Glob('src/extensions/**/*.js', function (er, files) {
  for (const file of files) {
    // const obj = path.parse(file); ${obj.dir}/${obj.name}
    jsExtensions += `  require('xtend-library/${file}')\n`
  }
  jsExtensions += '}'
  jsExtensions += '\n'
})
jsExtensionsGlob.on('end', function (filepath) {
  writeFile('./src/xtend-extensions.js', jsExtensions, function (err) {
    if (err) console.log(err)
  })
})

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
  const docTemplate = path.resolve('src/gatsby/components/templates/doc.js')
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
      createPage({
        path: markdownSlug(node), // needs gatsby-source-filesystem resolve name
        component: docTemplate,
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