import { Xt } from 'xtend-library'

Xt.mount.push({
  matches: '#demo--overlay-events, #demo--overlay-events-alt',
  mount: object => {
    // init

    let self = new Xt.Overlay(object, {
      targets: '#overlay-nested',
    })

    // log

    let logTimeout
    const log = document.querySelector('#demo--overlay-events-log')

    const logAdd = text => {
      log.innerHTML += text + '<br/>'
      // scroll
      log.scrollTo(0, log.scrollHeight)
      // hr
      clearTimeout(logTimeout)
      logTimeout = setTimeout(() => {
        log.innerHTML += '<hr/>'
      }, 1000)
    }

    // first element

    const firstEl = document.querySelector('#demo--overlay-events-first-element')

    const firstElFnc = () => {
      logAdd('<strong>1st element</strong>')
      const elements = self.elements
      elements[0].dispatchEvent(new CustomEvent('on.trigger.xt'))
    }

    firstEl.addEventListener('click', firstElFnc)

    // first target

    const firstTr = document.querySelector('#demo--overlay-events-first-target')

    const firstTrFnc = () => {
      logAdd('<strong>1st target</strong>')
      const targets = self.targets
      targets[0].dispatchEvent(new CustomEvent('on.trigger.xt'))
    }

    firstTr.addEventListener('click', firstTrFnc)

    // reinit

    const reinitBtn = document.querySelector('#demo--overlay-events-reinit')

    const reinitFnc = () => {
      clearTimeout(parseFloat(object.dataset.reinitTimeout))
      object.dataset.reinitTimeout = setTimeout(() => {
        logAdd('<strong>reinit</strong>')
        self.reinit()
      }, 1000).toString()
    }

    reinitBtn.addEventListener('click', reinitFnc)

    // restart

    const restartBtn = document.querySelector('#demo--overlay-events-restart')

    const restartFnc = () => {
      logAdd('<strong>restart</strong>')
      self.restart()
    }

    restartBtn.addEventListener('click', restartFnc)

    // destroy

    const destroyBtn = document.querySelector('#demo--overlay-events-destroy')

    const destroyFnc = () => {
      logAdd('<strong>destroy</strong>')
      self.destroy()
    }

    destroyBtn.addEventListener('click', destroyFnc)

    // unmount

    const unmountBtn = document.querySelector('#demo--overlay-events-unmount')

    const unmountFnc = () => {
      logAdd('<strong>unmount</strong>')
      unmount()
    }

    unmountBtn.addEventListener('click', unmountFnc)

    // events

    const events = e => {
      let str = 'event <strong>' + e.type + '</strong>'
      if (e.target.getAttribute('title')) {
        str += ' from <strong>' + e.target.getAttribute('title') + '</strong>'
      } else if (e.target.querySelector('.card-title')) {
        str += ' from <strong>' + e.target.querySelector('.card-title').innerHTML + '</strong>'
      } else if (!e.target.querySelector('*')) {
        str += ' from <strong>' + e.target.innerHTML + '</strong>'
      }
      logAdd(str)
    }

    object.addEventListener('init.xt', events)
    object.addEventListener('destroy.xt', events)
    document.addEventListener('on.xt', events, true)
    document.addEventListener('off.xt', events, true)

    // unmount

    const unmount = () => {
      firstEl.removeEventListener('click', firstElFnc)
      firstTr.removeEventListener('click', firstTrFnc)
      reinitBtn.removeEventListener('click', reinitFnc)
      restartBtn.removeEventListener('click', restartFnc)
      destroyBtn.removeEventListener('click', destroyFnc)
      unmountBtn.removeEventListener('click', unmountFnc)
      object.removeEventListener('init.xt', events)
      object.removeEventListener('destroy.xt', events)
      document.removeEventListener('on.xt', events, true)
      document.removeEventListener('off.xt', events, true)
      self.destroy()
      self = null
    }
    return unmount
  },
})