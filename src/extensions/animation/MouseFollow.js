import { Xt } from 'xtend-library'

class MouseFollow {
  /**
   * constructor
   * @param {Node|HTMLElement|EventTarget|Window} object Base node
   * @param {Node|HTMLElement|EventTarget|Window} container Container node
   * @param {Object} optionsJs User options
   * @constructor
   */
  constructor (object, container, optionsJs = {}) {
    const self = this
    self.object = object
    self.container = container
    self.options = optionsJs
    self.mouseCheck = self.options.mouseCheck
    // @FIX multiple initializations
    const alreadyDefinedInstance = Xt.get(self.componentName, self.object)
    if (!alreadyDefinedInstance) {
      // set
      Xt.set(self.componentName, self.object, self)
      // init
      self.init()
    } else {
      return alreadyDefinedInstance
    }
  }

  //
  // init
  //

  /**
   * init
   */
  init () {
    const self = this
    self.container.addEventListener('mousemove', self.mousemove.bind(self))
    self.container.addEventListener('mouseenter', self.mouseenter.bind(self))
    self.container.addEventListener('mouseleave', self.mouseleave.bind(self))
  }

  //
  // methods
  //

  /**
   * mousemove
   */
  mousemove (e) {
    const self = this
    // fix initial
    if (self.width === undefined) {
      self.mouseenter(e)
    }
    // position
    Xt.friction(self.object, {
      x: e.clientX + self.width / 2,
      y: e.clientY + self.height / 2
    })
  }

  /**
   * mouseenter
   */
  mouseenter (e) {
    const self = this
    const options = self.options
    if (self.mouseCheck(options)) {
      // size
      const rect = self.object.getBoundingClientRect()
      self.width = rect.width
      self.height = rect.height
      // class
      self.object.classList.add('active')
      self.object.classList.remove('out')
      // initial
      Xt.friction(self.object, {
        x: e.clientX - self.width / 2,
        y: e.clientY - self.height / 2,
        friction: 'return delta'
      })
    }
  }

  /**
   * mouseleave
   */
  mouseleave () {
    const self = this
    const options = self.options
    if (self.mouseCheck(options)) {
      // class
      self.object.classList.remove('active')
      self.object.classList.add('out')
    }
  }

  //
  // destroy
  //

  /**
   * destroy
   */
  destroy () {
    const self = this
    self.container.removeEventListener('mousemove', self.mousemove.bind(self))
    self.container.removeEventListener('mouseenter', self.mouseenter.bind(self))
    self.container.removeEventListener('mouseleave', self.mouseleave.bind(self))
  }
}

//
// export
//

Xt.MouseFollow = MouseFollow