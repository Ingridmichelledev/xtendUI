import React from 'react'
import PropTypes from 'prop-types'

import Header from 'components/includes/header'
import Footer from 'components/includes/footer'
import DocHead from 'components/includes/doc-head'
import DocFoot from 'components/includes/doc-foot'
import DocFullscreen from 'components/includes/doc-fullscreen'

import 'assets/styles/app.css'

export default class Layout extends React.Component {
  componentDidMount() {
    if (typeof window !== 'undefined') {
      const makeDocument = require('assets/scripts/app').makeDocument
      const populateBlock = require('assets/scripts/demo').populateBlock
      populateBlock()
      makeDocument()
    }
  }
  render() {
    const { children, page, seo } = this.props
    return (
      <>
        {seo && seo.title === 'Home' ? (
          <div className="gatsby_site-wrapper">
            <div className="gatsby_site-main">
              <div className="gatsby_site-main_inner">
                <div className="gatsby_site-article gatsby_site-article--home prose max-w-none">
                  <main className="gatsby_site-article_inner" id="gatsby_open-full-inner">
                    <article className="gatsby_site-article_content">
                      <div className="gatsby_site-article_content_inner">{children}</div>
                    </article>
                    <footer className="gatsby_site-footer">
                      <div className="gatsby_site-footer_inner">
                        <Footer />
                      </div>
                    </footer>
                  </main>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="gatsby_site-wrapper">
            <div className="gatsby_site-main">
              <div className="gatsby_site-main_inner">
                <Header page={page} />
                <div className="gatsby_site-article gatsby_site-article--markdown prose max-w-none">
                  <DocFullscreen />
                  <main className="gatsby_site-article_inner" id="gatsby_open-full-inner">
                    {page && page.post ? <DocHead page={page} /> : null}
                    <article className="gatsby_site-article_content">
                      <div className="gatsby_site-article_content_inner">{children}</div>
                    </article>
                    <footer className="gatsby_site-footer">
                      <div className="gatsby_site-footer_inner">
                        {page && page.post && page.post.frontmatter.type !== page.post.frontmatter.title ? (
                          <DocFoot page={page} />
                        ) : null}
                        <Footer />
                      </div>
                    </footer>
                  </main>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  seo: PropTypes.shape({
    title: PropTypes.string,
  }),
  page: PropTypes.shape({
    post: PropTypes.shape({
      htmlAst: PropTypes.object.isRequired,
      frontmatter: PropTypes.shape({
        type: PropTypes.string.isRequired,
        category: PropTypes.string,
        parent: PropTypes.string,
        title: PropTypes.string.isRequired,
        description: PropTypes.string,
      }),
    }),
  }),
}
