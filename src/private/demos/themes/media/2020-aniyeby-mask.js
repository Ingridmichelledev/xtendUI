import { Xt } from 'xtend-library'
import 'xtend-library/src/vars.js'
import 'xtend-library/src/extensions/slider/slider.js'
import 'xtend-library/src/addons/slider/navigation-sides.js'
import gsap from 'gsap'

/**
 * .demo--2020-aniyeby-mask
 */

Xt.mount.push({
  matches: '.demo--2020-aniyeby-mask .block-listing_item',
  mount: object => {
    // append

    if (!object.querySelector('.media_mask')) {
      console.log(object.querySelector('.media-container'))
      object.querySelector('.media-container').prepend(Xt.createElement('<span class="media_mask"></span>'))
    }

    // vars

    const imgScaleContainer = 0.03
    const imgScale = 0.06

    const maskOpacityOn = 0.2
    const maskOpacityOff = 0.4

    // enter

    const eventEnter = e => {
      const tr = e.target
      // img
      const img = tr.querySelector('.media-container')
      gsap.to(img, { scale: 1 + imgScaleContainer, duration: Xt.vars.timeSmall, ease: 'expo.out' })
      const imgInner = tr.querySelector('.media-inner')
      gsap.to(imgInner, { scale: 1 + imgScale, duration: Xt.vars.timeBig, ease: 'expo.out' })
      // mask
      const mask = tr.querySelector('.media_mask')
      gsap.set(mask, { height: 0, y: '100%', skewY: 0, opacity: maskOpacityOff })
      gsap.to(mask, { height: '125%', y: 0, opacity: maskOpacityOn, duration: Xt.vars.timeSmall, ease: 'expo.out' }) // @FIX to cover skew: 125%
      gsap.to(mask, { skewY: -10, duration: Xt.vars.timeSmall / 2, ease: 'expo.out' }).eventCallback('onComplete', () => {
        gsap.to(mask, { skewY: 0, duration: Xt.vars.timeSmall / 2, ease: 'expo.out' })
      })
    }

    object.addEventListener('mouseenter', eventEnter)

    // leave

    const eventLeave = e => {
      const tr = e.target
      // img
      const img = tr.querySelector('.media-container')
      gsap.to(img, { scale: 1, duration: Xt.vars.timeSmall, ease: 'expo.out' })
      const imgInner = tr.querySelector('.media-inner')
      gsap.to(imgInner, { scale: 1, duration: Xt.vars.timeBig, ease: 'expo.out' })
      // mask
      const mask = tr.querySelector('.media_mask')
      gsap.to(mask, { height: 0, y: 0, opacity: maskOpacityOff, duration: Xt.vars.timeSmall, ease: 'expo.out' })
      gsap.to(mask, { skewY: 10, duration: Xt.vars.timeSmall / 2, ease: 'expo.out' }).eventCallback('onComplete', () => {
        gsap.to(mask, { skewY: 0, duration: Xt.vars.timeSmall / 2, ease: 'expo.out' })
      })
    }

    object.addEventListener('mouseleave', eventLeave)

    // unmount

    const unmount = () => {
    }
    return unmount
  },
})
