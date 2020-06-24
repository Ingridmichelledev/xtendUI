import { Xt } from 'xtend-library/src/xt.js'
import 'xtend-library/src/variables.js'
import 'xtend-library/src/addons/animation/scroll-to-anchor.js'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin.js'

Xt.mount.push({
  matches: 'a[href*="#"]',
  mount: object => {
    // init

    const self = new Xt.ScrollToAnchor(object, {})

    // change

    const eventChange = e => {
      // @FIX double initialization don't know why it does
      if (self.target) {
        const distanceY = 50
        const posY = self.target.offsetTop - self.scrollAdd - distanceY
        const durationY = Xt.vars.timeLarge
        gsap.to(window, { scrollTo: posY, duration: durationY, ease: 'quart.inOut' })
      }
    }

    self.object.addEventListener('change.xt.scrolltoanchor', eventChange)
  },
})