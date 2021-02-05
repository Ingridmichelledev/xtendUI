import { Xt } from 'xtendui'
import 'xtendui/src/core/drop'
import gsap from 'gsap'

Xt.mount.push({
  matches: '.demo--drop-animation-js',
  mount: ({ object }) => {
    // vars

    const targetTimeOn = 0.7
    const targetEaseOn = 'quint.out'
    const targetTimeOff = 0.7
    const targetEaseOff = 'quint.out'

    // init

    let self = new Xt.Drop(object, {
      duration: 500,
    })

    // on

    const eventOn = e => {
      const tr = e.target
      gsap.set(tr, { opacity: 0 })
      if (!self.direction < 0) {
        gsap.set(tr, { x: -15 })
      } else {
        gsap.set(tr, { x: 15 })
      }
      gsap.to(tr, {
        x: 0,
        opacity: 1,
        duration: targetTimeOn,
        ease: targetEaseOn,
      })
    }

    for (const target of self.targets) {
      target.addEventListener('on.xt.drop', eventOn)
    }

    // off

    const eventOff = e => {
      const tr = e.target
      if (!self.direction < 0) {
        gsap.to(tr, {
          x: 15,
          opacity: 0,
          duration: targetTimeOff,
          ease: targetEaseOff,
        })
      } else {
        gsap.to(tr, {
          x: -15,
          opacity: 0,
          duration: targetTimeOff,
          ease: targetEaseOff,
        })
      }
    }

    for (const target of self.targets) {
      target.addEventListener('off.xt.drop', eventOff)
    }

    // unmount

    return () => {
      self.destroy()
      self = null
    }
  },
})
