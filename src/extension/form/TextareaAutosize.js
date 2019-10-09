import { Xt } from 'xtend-library'
import RJSON from 'relaxed-json'

class TextareaAutosize {
  /**
   * constructor
   * @param {Node|HTMLElement|EventTarget|Window} object Base node
   * @param {Object} optionsCustom User options
   * @constructor
   */
  constructor (object, optionsCustom = {}) {
    const self = this
    self.object = object
    self.optionsCustom = optionsCustom
    Xt.checkDefined(self, function () {
      self.init()
    })
  }

  //
  // init
  //

  /**
   * init
   */
  init () {
    const self = this
    // options
    self.options = Xt.merge([self.constructor.optionsDefault, self.optionsCustom])
    // key
    self.object.addEventListener('keydown', self.keychange.bind(self))
    self.object.addEventListener('keyup', self.keychange.bind(self))
    // form
    const form = self.object.closest('form')
    if (form) {
      form.addEventListener('reset', self.keychange.bind(self))
    }
    // initial
    self.keychange.bind(self)()
  }

  //
  // methods
  //

  /**
   * keychange
   */
  keychange () {
    const self = this
    self.object.style.height = '5px'
    self.object.style.height = (self.object.scrollHeight) + 'px' // fixes both safari RAF and form reset
    requestAnimationFrame(function () {
      self.object.style.height = '5px' // fixes both safari RAF and form reset
      self.object.style.height = (self.object.scrollHeight) + 'px'
    })
  }

  //
  // destroy
  //

  /**
   * destroy
   */
  destroy () {
    const self = this
    // key
    self.object.removeEventListener('keydown', self.keychange.bind(self))
    self.object.removeEventListener('keyup', self.keychange.bind(self))
    // form
    const form = self.object.closest('form')
    if (form) {
      form.removeEventListener('reset', self.keychange.bind(self))
    }
  }
}

//
// option
//

TextareaAutosize.componentName = 'xt-textarea-autosize'
TextareaAutosize.optionsDefault = {
}

//
// export
//

Xt.TextareaAutosize = TextareaAutosize

//
// observe
//

Xt.mount.push({
  matches: '[data-' + Xt.TextareaAutosize.componentName + ']',
  mount: function (object) {
    // vars

    const optionsMarkup = object.getAttribute('data-' + Xt.TextareaAutosize.componentName)
    const options = optionsMarkup ? RJSON.parse(optionsMarkup) : {}

    // init

    let self = new Xt.TextareaAutosize(object, options)

    // unmount

    return function unmount () {
      self.destroy()
      self = null
    }
  }
})
