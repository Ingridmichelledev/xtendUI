import { Xt } from 'xtendui'
import 'xtendui/src/drop'

/* mountDrops */

const mountDrops = ({ ref }) => {
  // mount granularly

  Xt.mount({
    root: ref,
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
  const self = Xt.get({ name: 'xt-drop', el: drop })

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

  for (const tr of self.targets) {
    tr.addEventListener('off.xt.drop', off)
  }

  // unmount

  return () => {}
}

/* mount */

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
