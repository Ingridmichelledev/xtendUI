/*import { Xt } from 'xtendui'

Xt.mount.push({
  matches: '.demo--scroll-direction',
  mount: object => {
    // init

    let self = new Xt.Scroll(object, {
      elements: '.card',
      delayOn: current => {
        return Math.min((current + 1) * 75, 300)
      },
      delayOff: (current, total) => {
        return Math.min((total - (current + 1)) * 75, 300)
      },
    })

    // unmount

    return () => {
      self.destroy()
      self = null
    }
  },
})
*/
