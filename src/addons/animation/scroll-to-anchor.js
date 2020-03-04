import { Xt } from 'xtend-library'
import 'xtend-library/src/vars.js'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin.js'

Xt.mount.push({
  matches: 'a[href*="#"]',
  mount: function(object) {
    // click

    const eventClick = e => {
      if (object.hash) {
        const target = document.querySelector(object.hash)
        if (target) {
          e.preventDefault()
          // stop xt-smooth if present
          const self = Xt.get('xt-smooth', object)
          if (self) {
            self.eventWheelstop()
          }
          // sticky space
          const stickys = document.querySelectorAll('.xt-sticky.xt-clone.active')
          let stickyHeight = 0
          for (const sticky of stickys) {
            stickyHeight += sticky.clientHeight
          }
          // scrollTo
          const distanceY = 0
          const posY = target.offsetTop - stickyHeight - distanceY
          const durationY = Xt.vars.timeLarge
          gsap.to(window, { scrollTo: posY, duration: durationY, ease: 'penguin' })
        }
      }
    }

    object.addEventListener('click', eventClick)
  },
})
