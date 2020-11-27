import { Xt } from 'xtendui'
import 'xtendui/src/core/toggle'
import 'xtendui/src/addons/scroll-to-anchor'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
gsap.registerPlugin(ScrollToPlugin)
const iconLink = require('components/snippets/icons').iconLink

import 'assets/scripts/shared'

/**
 * #gatsby_open-full-triggergrop
 */

Xt.mount.push({
  matches: '#gatsby_open-full-trigger',
  mount: object => {
    // init

    let self = new Xt.Toggle(object, {
      targets: '#gatsby_open-full',
      closeInside: ':scope > .btn-close',
      closeAuto: true, // needed for onPreRouteUpdate gatsby-browser.js
      scrollbar: true,
    })

    // unmount

    return () => {
      self.destroy()
      self = null
    }
  },
})

/**
 * xt-scroll-to-anchor
 */

Xt.mount.push({
  matches: '.gatsby_site_article',
  mount: object => {
    // vars

    object = object.closest('body')

    // init

    let self = new Xt.ScrollToAnchor(object, {
      elements: '[href^="#"]:not([aria-controls])',
      scrollDistance: () => {
        return window.innerHeight / 10
      },
      scrollSpace: () => {
        return 0
      },
    })

    // change

    const eventChange = () => {
      // val
      const scrollingElement = self.scrollElementCurrent
      let pos = self.position - self.scrollSpace - self.scrollDistance
      const min = 0
      const max = scrollingElement.scrollHeight - scrollingElement.offsetHeight
      pos = pos < min ? min : pos
      pos = pos > max ? max : pos
      // scroll
      gsap.to(scrollingElement, { scrollTo: pos, duration: 1, ease: 'quart.inOut' })
    }

    self.object.addEventListener('change.xt.scrolltoanchor', eventChange)

    // unmount

    return () => {
      self.object.removeEventListener('change.xt.scrolltoanchor', eventChange)
      self.destroy()
      self = null
    }
  },
})

//
// makeDocument
//

const makeDocument = () => {
  // .gatsby_make-line
  for (const el of document.querySelectorAll('.gatsby_site_article_content_inner > * > h2, .gatsby_site_article_content_inner > * > h4')) {
    el.classList.add('gatsby_make-line')
  }
  for (const el of document.querySelectorAll('.gatsby_make-line')) {
    el.innerHTML = `<span class="gatsby_make-line_line">${el.innerHTML}</span>`
    el.innerHTML = `<span class="gatsby_make-line_container">${el.innerHTML}</span>`
  }
  // .gatsby_make-anchor
  for (const el of document.querySelectorAll('.gatsby_site_article_content_inner > * > h2, .gatsby_site_article_content_inner > * > h4')) {
    el.classList.add('gatsby_make-line')
    // previous h2 if h4
    let prevElement
    if (el.tagName === 'H4') {
      prevElement = el
      while (prevElement.previousElementSibling) {
        if (prevElement.tagName === 'H2') {
          break
        }
        prevElement = prevElement.previousElementSibling
      }
    }
    // id
    let id = ''
    if (prevElement) {
      id += `${prevElement.textContent.trim().replace(/\W/g, '-').toLowerCase()}-`
    }
    id += el.textContent.trim().replace(/\W/g, '-').toLowerCase()
    // sidebar links
    if (el.tagName === 'H2') {
      let container = document.querySelector('.gatsby_btn-site_article_sidebar--adiacent.active ~ .gatsby_site_header_adiacent_inner')
      container = container ? container : document.querySelector('.gatsby_btn-site_article_sidebar--sub.active ~ .gatsby_site_header_adiacent_inner')
      if (container) {
        const item = Xt.createElement(
          `<div><a href="#" class="btn gatsby_btn-site_article_sidebar gatsby_btn-site_article_sidebar--adiacent_inner"><span></span></button></div>`
        )
        container.classList.add('active')
        container.querySelector('.gatsby_site_header_item').append(item)
        item.querySelector('a').setAttribute('href', `#${encodeURIComponent(id)}`)
        item.querySelector('span').textContent = el.textContent.trim()
      }
    }
    // gatsby_make-anchor
    el.setAttribute('id', id)
    el.classList.add('gatsby_make-anchor')
    // wrapInner
    const link = Xt.createElement(`<a href="#"></a>`)
    link.setAttribute('href', `#${encodeURIComponent(id)}`)
    el.classList.add('xt-ignore')
    el.before(link)
    const inner = el.querySelector(':scope > *')
    el.append(link)
    link.append(inner)
    el.append(
      Xt.createElement(`
<span class="gatsby_site_article_anchor">
  <span class="btn btn-default">
  ${iconLink()}
  </span>
</span>`)
    )
  }
  // docs tables
  const docs = document.querySelector('.gatsby_site_article_content_inner')
  if (docs) {
    const tables = docs.querySelectorAll('table')
    for (const table of tables) {
      table.classList.add('table', 'gatsby_table')
      for (const el of table.querySelectorAll('tr td:first-child')) {
        el.outerHTML = el.outerHTML.replace(/(<\s*\/?\s*)td(\s*([^>]*)?\s*>)/gi, '$1th$2') // regex replace tagname
        el.setAttribute('scope', 'row')
      }
    }
  }
  // scrollSidebarToContent
  require('assets/scripts/gatsby.js').gatsbySidebar()
  // restart xt-scroll-to-anchor
  const gatsby = document.querySelector('.gatsby_site_wrapper')
  if (gatsby) {
    const scrollToAnchor = Xt.get('xt-scroll-to-anchor', gatsby.closest('body'))
    if (scrollToAnchor) {
      scrollToAnchor.eventStart()
    }
  }
}

export { makeDocument }
