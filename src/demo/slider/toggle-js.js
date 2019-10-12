import { Xt } from 'xtend-library'
import 'xtend-library/src/extension/slider/slider.js'
import { TweenMax, Ease } from 'gsap/TweenMax'
import BezierEasing from 'bezier-easing'

Xt.mount.push({
  matches: '.demo--slider--toggle-js',
  mount: function (object) {
    // vars

    const time = 0.8
    const timeMask = 0.8
    const timeContent = 0.8
    const sizeContent = 100
    const easeOut = new Ease(BezierEasing(0.14, 0.63, 0, 1))

    // init

    let self = new Xt.Slider(object, {
      durationOn: time * 1000,
      durationOff: time * 1000,
      instant: false
    })

    // drag

    const eventDrag = function () {
      const target = self.targets.filter(x => self.hasCurrent(x))[0]
      const ratio = Math.abs(self.detail.xStart - self.detail.xCurrent) / target.clientWidth
      // direction
      let direction = 1
      if (self.detail.xStart - self.detail.xCurrent > 0) {
        direction = -1
      }
      // mask
      TweenMax.set(target, { x: -self.detail.xPos + 'px', opacity: 1 })
      TweenMax.set(self.dragger, { x: self.detail.xPos })
      // content
      const contents = target.querySelectorAll('.card_content > *')
      for (const content of contents) {
        TweenMax.set(content, { x: sizeContent * ratio * direction, opacity: 1 })
      }
    }

    const eventDragReset = function () {
      const target = self.targets.filter(x => self.hasCurrent(x))[0]
      // mask
      TweenMax.set(target, { x: -self.detail.xPosOld + 'px' })
      TweenMax.to(target, timeMask, { x: 0, opacity: 1, ease: easeOut })
      TweenMax.set(self.dragger, { x: self.detail.xPosOld })
      TweenMax.to(self.dragger, timeMask, { x: 0, ease: easeOut })
      // content
      const contents = target.querySelectorAll('.card_content > *')
      for (const content of contents) {
        TweenMax.to(content, timeContent, { x: 0, opacity: 1, ease: easeOut })
      }
    }

    self.dragger.addEventListener('drag.xt.slider', eventDrag)
    self.dragger.addEventListener('dragreset.xt.slider', eventDragReset)

    // activation

    const eventOn = function (e) {
      const tr = e.target
      if (self.targets.includes(tr)) { // event bubbles
        const xMax = tr.clientWidth
        // direction
        let direction = 1
        if (tr.classList.contains('inverse')) {
          direction = -1
        }
        if (self.initial) {
          // mask
          TweenMax.set(tr, { x: 0, opacity: 1, ease: easeOut })
          TweenMax.set(self.dragger, { x: 0, ease: easeOut })
          // content
          const contents = tr.querySelectorAll('.card_content > *')
          for (const content of contents) {
            TweenMax.set(content, { x: 0, opacity: 1, ease: easeOut })
          }
        } else {
          // setup
          TweenMax.set(tr, { opacity: 0 })
          // mask
          TweenMax.set(tr, { x: -xMax * direction })
          TweenMax.to(tr, timeMask, { x: 0, opacity: 1, ease: easeOut })
          TweenMax.set(self.dragger, { x: xMax * direction })
          TweenMax.to(self.dragger, timeMask, { x: 0, ease: easeOut })
          // content
          const contents = tr.querySelectorAll('.card_content > *')
          for (const content of contents) {
            TweenMax.set(content, { x: sizeContent * direction, opacity: 0 })
            TweenMax.to(content, timeContent, { x: 0, opacity: 1, ease: easeOut })
          }
        }
      }
    }

    const eventOff = function (e) {
      const tr = e.target
      if (self.targets.includes(tr)) { // event bubbles
        const xMax = tr.clientWidth
        // direction
        let direction = 1
        if (tr.classList.contains('inverse')) {
          direction = -1
        }
        // mask
        TweenMax.to(tr, timeMask, { x: xMax * direction, opacity: 0, ease: easeOut })
        TweenMax.to(self.dragger, timeMask, { x: -xMax * direction, ease: easeOut })
        // content
        const contents = tr.querySelectorAll('.card_content > *')
        for (const content of contents) {
          TweenMax.to(content, timeContent, { x: -sizeContent * direction, opacity: 0, ease: easeOut })
        }
      }
    }

    self.object.addEventListener('on.xt', eventOn)
    self.object.addEventListener('off.xt', eventOff)

    // unmount

    return function unmount () {
      self.dragger.removeEventListener('drag.xt.slider', eventDrag)
      self.dragger.removeEventListener('dragreset.xt.slider', eventDragReset)
      self.object.removeEventListener('on.xt', eventOn)
      self.object.removeEventListener('off.xt', eventOff)
      self.destroy()
      self = null
    }
  }
})