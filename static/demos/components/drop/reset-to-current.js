import { Xt } from 'xtendui'
import 'xtendui/src/drop'

Xt.mount({
  matches: '.demo--drop-reset-to-current',
  mount: ({ ref }) => {
    const unmountDrops = mountDrops({ ref })

    // unmount

    return () => {
      unmountDrops()
    }
  },
})

/* mountDrops */

const mountDrops = ({ ref }) => {
  // mount granularly

  Xt.mount({
    root: ref,
    raf: false,
    matches: '[data-xt-drop]',
    mount: ({ ref }) => {
      return mountDrop({ ref })
    },
  })

  // unmount

  return () => {}
}

/* mountDrop */

const mountDrop = ({ ref }) => {
  // vars

  const drop = ref
  let self

  // init

  const init = () => {
    self = Xt.get({ name: 'xt-drop', el: drop })
  }

  drop.addEventListener('init.xt.drop', init)

  // off

  const off = e => {
    const tr = e.target
    /***/
    // check because of event propagation
    if (self.targets.includes(tr)) {
      // reset to current when no activation
      if (self.index === null) {
        const current = self.targets.filter(x => x.classList.contains('current'))[0]
        current.dispatchEvent(new CustomEvent('on.trigger.xt.drop'))
      }
    }
    /***/
  }

  const initOff = () => {
    for (const tr of self.targets) {
      tr.addEventListener('off.xt.drop', off)
    }
  }

  drop.addEventListener('init.xt.drop', initOff)

  // unmount

  return () => {}
}
