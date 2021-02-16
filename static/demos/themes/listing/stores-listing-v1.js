import { Xt } from 'xtendui'

/**
 * .xt-listing-item activation
 */

Xt.mount.push({
  matches: '#iframe--stores-listing-v1 .xt-listing-item',
  mount: ({ object }) => {
    // vars

    const actionBtn = object.querySelector('.xt-listing-action')
    const closeBtn = object.querySelector('.xt-dismiss')

    // eventClick

    const eventClick = e => {
      e.stopPropagation()
      object.classList.add('active')
    }

    actionBtn.addEventListener('click', eventClick)

    // eventClose

    const eventClose = e => {
      e.stopPropagation()
      object.classList.remove('active')
    }

    closeBtn.addEventListener('click', eventClose)
  },
})
