import { Xt } from 'xtend-library'
import 'xtend-library/src/extension/scroll/scroll.js'
import { TweenMax } from 'gsap/TweenMax'

/**
 * .demo--parallax_title
 */

Xt.mount.push({
  matches: '.demo--parallax_title',
  mount: function (object) {
    // init

    let self = new Xt.Scroll(object, {
      sticky: 'fixed',
      end: 350
    })

    // change

    const eventChange = function () {
      const el = this;
      TweenMax.set(el, { transformOrigin: 'left center' })
      TweenMax.set(el, { opacity: self.detail.ratioInverse, scale: 0.9 + 0.1 * self.detail.ratioInverse })
    }

    for (const el of self.elements) {
      el.addEventListener('change.xt.scroll', eventChange)
    }

    // unmount

    return function unmount () {
      for (const el of self.elements) {
        el.removeEventListener('change.xt.scroll', eventChange)
      }
      self.destroy()
      self = null
    }
  }
})

/**
 * .demo--parallax_img
 */

Xt.mount.push({
  matches: '.demo--parallax_img',
  mount: function (object) {
    // init

    let self = new Xt.Scroll(object, {
      sticky: 'fixed',
      end: 350
    })

    // change

    const eventChange = function () {
      const el = this;
      TweenMax.set(el, { y: 100 * self.detail.ratio, opacity: self.detail.ratioInverse })
    }

    for (const el of self.elements) {
      el.addEventListener('change.xt.scroll', eventChange)
    }

    // unmount

    return function unmount () {
      for (const el of self.elements) {
        el.removeEventListener('change.xt.scroll', eventChange)
      }
      self.destroy()
      self = null
    }
  }
})

/**
 * .demo--parallax_footer
 */

Xt.mount.push({
  matches: '.demo--parallax_footer',
  mount: function (object) {
    // init

    let self = new Xt.Scroll(object, {
      sticky: true,
      start: '125%'
    })

    // change

    const eventChange = function () {
      const el = this;
      TweenMax.set(el, { opacity: self.detail.ratio, scale: 0.9 + 0.1 * self.detail.ratio })
    }

    for (const el of self.elements) {
      el.addEventListener('change.xt.scroll', eventChange)
    }

    // unmount

    return function unmount () {
      for (const el of self.elements) {
        el.removeEventListener('change.xt.scroll', eventChange)
      }
      self.destroy()
      self = null
    }
  }
})