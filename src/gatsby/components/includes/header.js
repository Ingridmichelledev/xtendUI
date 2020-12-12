import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql, Link } from 'gatsby'

import { markdownSlug } from 'components/snippets/markdown-slug'
import { typeSort } from 'components/snippets/type-sort'
const cardBlack = require('components/snippets/classes/card-black').default
const iconPackage = require('components/snippets/icons').iconPackage
const iconGithub = require('components/snippets/icons').iconGithub

export default function Header({ page }) {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          npm
          github
          twitter
          download
        }
      }
    }
  `)
  return (
    <div className="gatsby_site_article_sidebar">
      <div className="gatsby_site_article_sidebar_inner">
        <header className="gatsby_site_header" data-xt-sticky="{ sticky: 'fixed', hide: 'down' }">
          <div className="gatsby_site_header_inner">
            <div>
              <div className="gatsby_site_header_content">
                <div className="gatsby_site_header_logo">
                  <Link
                    to="/"
                    title="Xtend UI"
                    className={`gatsby_logo-icon
                                    ${site.siteMetadata.title.toLowerCase() === 'home' ? 'active' : ''}`}
                  >
                    <img src={'/logo-white.svg'} loading="eager" alt={site.siteMetadata.title} />
                  </Link>
                </div>
                <div className="gatsby_site_header_top_social_container">
                  <div className="gatsby_site_header_top_social">
                    <div data-xt-tooltip="{ position: 'bottom-end' }">
                      <a
                        href={site.siteMetadata.npm}
                        target="_blank"
                        rel="noreferrer"
                        className="btn gatsby_btn-site_header_top_social"
                        title="Npm"
                        dangerouslySetInnerHTML={{ __html: iconPackage() }}
                      ></a>
                      <div className="tooltip group" data-xt-duration="200">
                        <div
                          className={`tooltip-sm rounded shadow-tooltip ${cardBlack()} transform transition duration-200 opacity-0 translate-y-2 group-active:opacity-100 group-active:translate-y-0`}
                        >
                          Visit on Npm
                        </div>
                      </div>
                    </div>
                    <span data-xt-tooltip="{ position: 'bottom-end' }">
                      <a
                        href={site.siteMetadata.github}
                        target="_blank"
                        rel="noreferrer"
                        className="btn gatsby_btn-site_header_top_social"
                        title="Github"
                        dangerouslySetInnerHTML={{ __html: iconGithub() }}
                      ></a>
                      <div className="tooltip group" data-xt-duration="200">
                        <div
                          className={`tooltip-sm rounded shadow-tooltip ${cardBlack()} transform transition duration-200 opacity-0 translate-y-2 group-active:opacity-100 group-active:translate-y-0`}
                        >
                          Visit on Github
                        </div>
                      </div>
                    </span>
                  </div>
                </div>
                <div className="gatsby_site_header_menu_link">
                  <button
                    type="button"
                    className="btn btn-md rounded-md ${btnPrimary()}"
                    data-xt-overlay="{ targets: '#gatsby_menu--overlay', appendTo: false }"
                    aria-label="Menu"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="3" y1="12" x2="21" y2="12"></line>
                      <line x1="3" y1="6" x2="21" y2="6"></line>
                      <line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="overlay text-white links-inverse" id="gatsby_menu--overlay">
          <div className="overlay-container p-0 max-w-xs ml-auto mr-0">
            <div className="overlay-inner">
              <div className="design-setup"></div>
              <div className="card">
                <div className="btn btn-close p-5 text-2xl fixed z-last mr-2" aria-label="Close">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon"
                    width="44"
                    height="44"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#2c3e50"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </div>
                <div className="mt-6">
                  <div className="gatsby_site_header_links_container">
                    <div className="gatsby_site_header_links">
                      {page.menus.posts.map(({ post }, i) => (
                        <div key={i}>
                          <Link
                            to={markdownSlug(post)}
                            title={post.frontmatter.description}
                            className={`btn gatsby_btn-site_header_link ${
                              page && page.post
                                ? markdownSlug(page.post) === markdownSlug(post)
                                  ? 'active'
                                  : post.frontmatter.type === page.post.frontmatter.type
                                  ? 'current'
                                  : ''
                                : ''
                            }`}
                          >
                            <span>{post.frontmatter.title}</span>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                  {page && page.post ? (
                    <nav className="gatsby_site_header_listing">
                      {page.categories.category.sort(typeSort).map((category, i) => (
                        <div key={i}>
                          <div className="gatsby_site_header_cat">
                            <div className="gatsby_cat--site_article_sidebar">{category.title.split('-').pop()}</div>
                            <div className="gatsby_site_header_sub">
                              <div className="gatsby_site_header_item">
                                {category.posts.map(({ post }, z) =>
                                  post.frontmatter.parent === post.frontmatter.title ? (
                                    <div className="gatsby_site_header_item_container" key={z}>
                                      {post.frontmatter.link ? (
                                        <div>
                                          <a
                                            href={post.frontmatter.link}
                                            rel="noreferrer"
                                            target="_blank"
                                            title={post.frontmatter.description}
                                            className={`btn gatsby_btn-site_article_sidebar gatsby_btn-site_article_sidebar--sub ${
                                              markdownSlug(page.post) === markdownSlug(post)
                                                ? 'active'
                                                : page.post.frontmatter.parent === post.frontmatter.parent &&
                                                  post.frontmatter.category === page.post.frontmatter.category
                                                ? 'current'
                                                : ''
                                            }`}
                                          >
                                            <span>{post.frontmatter.title}</span>
                                          </a>
                                          <div className="gatsby_site_header_adiacent_inner">
                                            <div className="gatsby_site_header_item"></div>
                                          </div>
                                        </div>
                                      ) : (
                                        <div>
                                          <Link
                                            to={markdownSlug(post)}
                                            title={post.frontmatter.description}
                                            className={`btn gatsby_btn-site_article_sidebar gatsby_btn-site_article_sidebar--sub ${
                                              markdownSlug(page.post) === markdownSlug(post)
                                                ? 'active'
                                                : page.post.frontmatter.parent === post.frontmatter.parent &&
                                                  post.frontmatter.category === page.post.frontmatter.category
                                                ? 'current'
                                                : ''
                                            }`}
                                          >
                                            <span>{post.frontmatter.title}</span>
                                          </Link>
                                          <div className="gatsby_site_header_adiacent_inner">
                                            <div className="gatsby_site_header_item"></div>
                                          </div>
                                        </div>
                                      )}
                                      {post.frontmatter.parent === page.post.frontmatter.parent &&
                                      post.frontmatter.category === page.post.frontmatter.category ? (
                                        <div className="gatsby_site_header_adiacent active">
                                          <div className="gatsby_site_header_item">
                                            {page.postsAdiacent.posts.map(({ post: adiacent }, i) =>
                                              adiacent.frontmatter.title !== post.frontmatter.parent ? (
                                                !adiacent.frontmatter.demos ? (
                                                  <div key={i}>
                                                    <Link
                                                      to={markdownSlug(adiacent)}
                                                      className={`btn gatsby_btn-site_article_sidebar gatsby_btn-site_article_sidebar--adiacent ${
                                                        page.post.frontmatter.title === adiacent.frontmatter.title &&
                                                        post.frontmatter.category === page.post.frontmatter.category
                                                          ? 'active'
                                                          : ''
                                                      }`}
                                                    >
                                                      <span>
                                                        {adiacent.frontmatter.title
                                                          .split(/[\s-]+/)
                                                          .map(item => item.charAt(0).toUpperCase() + item.slice(1).toLowerCase())
                                                          .join(' ')}
                                                      </span>
                                                    </Link>
                                                    <div className="gatsby_site_header_adiacent_inner">
                                                      <div className="gatsby_site_header_item"></div>
                                                    </div>
                                                  </div>
                                                ) : null
                                              ) : null
                                            )}
                                          </div>
                                        </div>
                                      ) : null}
                                    </div>
                                  ) : null
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </nav>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
          <div className="backdrop transition-none"></div>
        </div>
      </div>
    </div>
  )
}

Header.propTypes = {
  page: PropTypes.shape({
    menus: PropTypes.shape({
      posts: PropTypes.arrayOf(
        PropTypes.shape({
          post: PropTypes.shape({
            frontmatter: PropTypes.shape({
              parent: PropTypes.string,
              title: PropTypes.string.isRequired,
              description: PropTypes.string,
            }),
          }),
        })
      ),
    }),
    categories: PropTypes.shape({
      category: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string.isRequired,
          posts: PropTypes.arrayOf(
            PropTypes.shape({
              post: PropTypes.shape({
                frontmatter: PropTypes.shape({
                  type: PropTypes.string.isRequired,
                  category: PropTypes.string,
                  parent: PropTypes.string,
                  title: PropTypes.string.isRequired,
                  description: PropTypes.string,
                }),
              }),
            })
          ),
        })
      ),
    }),
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
    postsAdiacent: PropTypes.shape({
      posts: PropTypes.arrayOf(
        PropTypes.shape({
          post: PropTypes.shape({
            frontmatter: PropTypes.shape({
              type: PropTypes.string.isRequired,
              category: PropTypes.string,
              parent: PropTypes.string,
              title: PropTypes.string.isRequired,
              description: PropTypes.string,
              demos: PropTypes.array,
            }),
          }),
        })
      ),
    }),
  }),
}
