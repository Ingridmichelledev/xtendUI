import { Xt } from 'xtendui'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

/**
 * .listing-item
 */

Xt.mount.push({
  matches: '#iframe--furniture-listing-v1 .listing-item',
  mount: object => {
    // vars

    const mediaScale = 0.04
    const mediaOpacityIn = 0.75
    const mediaOpacityOut = 1
    const contentY = -10

    // enter

    const eventEnter = e => {
      const tr = e.target
      // media
      const media = tr.querySelector('.media-container')
      gsap.to(media, { opacity: mediaOpacityIn, scale: 1 - mediaScale, duration: 0.5, ease: 'expo.out' })
      const mediaInner = tr.querySelector('.media-inner')
      gsap.to(mediaInner, { scale: 1 + mediaScale, duration: 0.5, ease: 'expo.out' })
      // content
      const content = tr.querySelector('.listing-content')
      if (content) {
        gsap.to(content, { y: contentY, duration: 0.5, ease: 'expo.out' })
      }
    }

    object.addEventListener('mouseenter', eventEnter)

    // leave

    const eventLeave = e => {
      const tr = e.target
      // media
      const media = tr.querySelector('.media-container')
      gsap.to(media, { opacity: mediaOpacityOut, scale: 1, duration: 0.75, ease: 'expo.out' })
      const mediaInner = tr.querySelector('.media-inner')
      gsap.to(mediaInner, { scale: 1, duration: 0.75, ease: 'expo.out' })
      // content
      const content = tr.querySelector('.listing-content')
      if (content) {
        gsap.to(content, { y: 0, duration: 0.5, ease: 'expo.out' })
      }
    }

    object.addEventListener('mouseleave', eventLeave)
  },
})

/**
 * fade
 */

Xt.mount.push({
  matches: '#iframe--furniture-listing-v1 body',
  mount: object => {
    // add here all fade selectors css and js

    const triggers = object.querySelectorAll(`.listing-item`)

    // vars

    const scrollY = 30

    // fade

    ScrollTrigger.batch(triggers, {
      once: true,
      start: 'top bottom-=10%',
      end: 'bottom top+=10%',
      onEnter: (batch, scrollTriggers) => {
        const direction = scrollTriggers[0].direction
        const y = direction > 0 ? -scrollY : scrollY
        gsap.killTweensOf(batch)
        gsap.set(batch, { y: y })
        gsap.to(batch, { opacity: 1, y: 0, duration: 0.5, ease: 'quart.out', stagger: 0.15 })
      },
    })
  },
})
