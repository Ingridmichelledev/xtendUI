import React from 'react'
import { Link } from 'gatsby'
import kebabCase from 'lodash.kebabcase'
import { markdownSlug } from 'components/snippets/markdown-slug.js'

class DocHead extends React.Component {
  render() {
    const { page, seo } = this.props
    const postsAdiacentFiltered = page.postsAdiacent.posts.filter(x => !x.post.frontmatter.demos)
    return (
      <div>
        <header className="gatsby_site_article_hero">
          <h1>
            {page.post.frontmatter.parent && page.post.frontmatter.parent !== page.post.frontmatter.title
              ? page.post.frontmatter.parent + ' ' + seo.title
              : seo.title}
          </h1>
          {page.post.frontmatter.parent && page.post.frontmatter.parent !== page.post.frontmatter.title ? (
            <p>{page.post.frontmatter.parent + ' ' + seo.title}</p>
          ) : (
            <p>{seo.description}</p>
          )}
          {page.post.frontmatter.parent ? (
            <nav className="gatsby_site_article_hero_links">
              <div className="row">
                <div>
                  {page.post.frontmatter.parent === page.post.frontmatter.title ? (
                    <Link to={kebabCase(page.post.frontmatter.type)} className="btn">
                      <span className="icon-arrow-left icon--left"></span>
                      {page.post.frontmatter.type}
                    </Link>
                  ) : (
                    page.postsAdiacent.posts.map(({ post: adiacent }, i) => {
                      if (page.post.frontmatter.parent === adiacent.frontmatter.title) {
                        return (
                          <div key={i}>
                            <Link to={markdownSlug(adiacent)} className="btn">
                              <span className="icon-arrow-left icon--left"></span>
                              {adiacent.frontmatter.title}
                            </Link>
                          </div>
                        )
                      }
                    })
                  )}
                </div>

                <div>
                  {page.post.frontmatter.type !== 'Themes'
                    ? postsAdiacentFiltered.map(({ post: adiacent }, i) => {
                        if (postsAdiacentFiltered.length > 0 && markdownSlug(adiacent) === markdownSlug(page.post)) {
                          let index = i + 1
                          index = index >= postsAdiacentFiltered.length ? 0 : index
                          const nextAdiacent = postsAdiacentFiltered[index].post
                          if (nextAdiacent.frontmatter.parent !== nextAdiacent.frontmatter.title) {
                            return (
                              <div key={index}>
                                <Link to={markdownSlug(nextAdiacent)} className="btn btn--right">
                                  {nextAdiacent.frontmatter.title}
                                  <span className="icon-arrow-right icon--right"></span>
                                </Link>
                              </div>
                            )
                          }
                        }
                      })
                    : null}
                </div>
              </div>
            </nav>
          ) : null}
        </header>
      </div>
    )
  }
}

export default DocHead
