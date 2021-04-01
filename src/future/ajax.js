import { Xt } from '../xt'
import '../toggle'

/**
 * Ajax
 */
class Ajax extends Xt.Toggle {
  /**
   * constructor
   * @param {Node|HTMLElement|EventTarget|Window} object Base node
   * @param {Object} optionsCustom User options
   * @constructor
   */
  constructor(object, optionsCustom = {}) {
    super(object, optionsCustom)
  }

  //
  // init
  //

  /**
   * init
   */
  init() {
    const self = this
    // vars
    self.locationFrom = self.locationTo || null // fix popstate
    self.locationTo = null
    // super
    super.init()
  }

  /**
   * init setup
   */
  initSetup() {
    super.initSetup()
    const self = this
    const options = self.options
    // queryElement
    self.queryElement = self.object.querySelector(options.query) || self.object
  }

  /**
   * init elements
   */
  initScopeElements() {
    super.initScopeElements()
    const self = this
    // remove external links
    for (const element of self.elements) {
      if (location.hostname !== element.hostname || element.getAttribute('href').split('#')[0] === '') {
        self.elements = Array.from(self.elements).filter(x => x !== element)
      }
    }
    // generate groups
    self.groupUrl = []
    for (const element of self.elements) {
      // populate
      const url = element.getAttribute('href').split('#')[0]
      if (!self.groupUrl[url]) {
        self.groupUrl[url] = []
      }
      self.groupUrl[url].push(element)
      // assign group
      element.setAttribute('data-xt-group', `${self.ns}-${url}`)
    }
  }

  /**
   * init start
   */
  initStart() {
    const self = this
    // initial
    self.initial = true
    self.currentIndex = null
    self.oldIndex = null
    // automatic initial currents
    const elements = self.getElementsGroups()
    if (elements.length) {
      let found = false
      for (const element of elements) {
        const loc = location.pathname + location.search
        const url = element.pathname + element.search
        if (url !== '') {
          if (loc === url) {
            found = true
            // activation
            self.eventOn(element, true)
          } else {
            // deactivate
            self.eventOff(element, true)
          }
        }
      }
      if (!found) {
        self.initial = false
      }
    } else {
      self.initial = false
    }
    // detect url
    let url
    if (history.state && history.state.url) {
      // detect from history
      url = history.state.url
    } else {
      // detect from url location (absolute url without domain name)
      url = location.pathname + location.search
    }
    // set pushstate
    if (!self.locationFrom) {
      self.locationFrom = new URL(url, location)
    }
    self.pushState(url, document.title)
  }

  /**
   * init events
   */
  initEvents() {
    super.initEvents()
    const self = this
    // event popstate
    window.onpopstate = self.eventPopstateHandler.bind(self)
  }

  //
  // handler
  //

  /**
   * element on handler
   * @param {Node|HTMLElement|EventTarget|Window} element
   * @param {Event} e
   */
  eventOnHandler(element, e) {
    // not when opening in new tab
    if (e.metaKey || e.ctrlKey) {
      return
    }
    // prevent links (needed for xt-ajax to go to links and propagate event if inside targets)
    e.preventDefault()
    // super
    super.eventOnHandler(element, e)
  }

  /**
   * element popstate handler
   * @param {Event} e
   */
  eventPopstateHandler() {
    const self = this
    // handler
    if (history.state && history.state.url) {
      // reinit currents
      self.initStart()
      // request set
      requestAnimationFrame(() => {
        self.ajaxRequest(null, history.state.url)
      })
    }
  }

  //
  // queue
  //

  /**
   * logic to execute on queue complete
   * @param {String} actionCurrent Current action
   * @param {Object} obj Queue object
   */
  queueComplete(actionCurrent, obj) {
    const self = this
    if (actionCurrent === 'On') {
      if (!self.initial) {
        // trigger ajax request
        self.ajaxRequest(obj.elements.queueEls[0], null)
      }
    }
    super.queueComplete(actionCurrent, obj)
  }

  //
  // special
  //

  /**
   * ajax request
   * @param {Node|HTMLElement|EventTarget|Window} element Base node
   * @param {String} url Url to get
   */
  ajaxRequest(element, url) {
    const self = this
    const options = self.options
    // url
    if (element) {
      url = element.getAttribute('href').split('#')[0]
    }
    // location
    self.locationFrom = self.locationTo || self.locationFrom // fix fast change page
    self.locationTo = new URL(url, location)
    // closeauto
    dispatchEvent(new CustomEvent('closeauto.trigger.xt'))
    // listener dispatch
    self.object.dispatchEvent(new CustomEvent(`request.${self.componentNs}`))
    // duration
    self.detail.requestDate = new Date()
    clearTimeout(Xt.dataStorage.get(self.object, `${self.ns}AjaxDurationTimeout`))
    if (self.detail.request) {
      self.detail.request.abort()
    } // fix fast change page
    requestAnimationFrame(() => {
      self.detail.requestDuration = options.duration || Xt.animTime(self.queryElement)
      // request
      const request = new XMLHttpRequest()
      request.open('GET', url, true)
      request.onload = () => {
        self.ajaxResponse(element, url, request, self.detail.requestDate)
      }
      request.onerror = () => {
        self.ajaxResponse(element, url, request, self.detail.requestDate)
      }
      // console.debug('xt-ajax request', request)
      // send
      request.send()
      self.detail.request = request
    })
  }

  /**
   * ajax response
   * @param {Node|HTMLElement|EventTarget|Window} element Base node
   * @param {String} url Url to get
   * @param {XMLHttpRequest} request Html response
   * @param {Date} date Html response
   */
  ajaxResponse(element, url, request, date) {
    const self = this
    // listener dispatch
    self.object.dispatchEvent(new CustomEvent('response.xt.ajax'))
    // duration
    self.detail.requestDuration -= new Date() - date
    if (self.detail.requestDuration > 0) {
      Xt.dataStorage.set(
        self.object,
        `${self.ns}AjaxDurationTimeout`,
        setTimeout(() => {
          // request
          if (request.status >= 200 && request.status <= 300) {
            self.ajaxSuccess(element, url, request, date)
          } else {
            self.ajaxError(element, url, request)
          }
        }, self.detail.requestDuration)
      )
    } else {
      // request
      if (request.status >= 200 && request.status <= 300) {
        self.ajaxSuccess(element, url, request, date)
      } else {
        self.ajaxError(element, url, request)
      }
    }
  }

  /**
   * ajax success
   * @param {Node|HTMLElement|EventTarget|Window} element Base node
   * @param {String} url Url to get
   * @param {XMLHttpRequest} request Html response
   * @param {Date} date Html response
   */
  ajaxSuccess(element, url, request, date) {
    const self = this
    const options = self.options
    // console.debug('xt-ajax request success', request)
    // set substitute
    let html = document.createElement('html')
    html.innerHTML = request.responseText.trim()
    const title = html.querySelector('head title').innerHTML
    let replace = html.querySelector(options.query)
    // populate dom
    self.queryElement.outerHTML = replace.outerHTML
    // queryElement
    self.queryElement = self.object.querySelector(options.query) || self.object
    // pushstate
    self.pushState(url, title)
    // garbage collector
    html = null
    replace = null
    // listener dispatch
    self.object.dispatchEvent(new CustomEvent('populate.xt.ajax'))
    // reinit
    if (!self.initial && date === self.detail.requestDate) {
      // fix fast change page
      requestAnimationFrame(() => {
        self.initial = true
        self.init()
      })
    }
  }

  /**
   * ajax error
   * @param {Node|HTMLElement|EventTarget|Window} element Base node
   * @param {String} url Url to get
   * @param {XMLHttpRequest} request Html response
   */
  ajaxError() {
    const self = this
    // reinit currents
    self.initStart()
    // listener dispatch
    self.object.dispatchEvent(new CustomEvent('populate.xt.ajax'))
  }

  /**
   * history pushstate
   */
  pushState(url, title) {
    // push object state
    if (!history.state || !history.state.url || history.state.url !== url) {
      document.title = title
      history.pushState({ url: url, title: title }, title, url)
    } else {
      document.title = history.state.title
    }
  }

  //
}

//
// options
//

Ajax.componentName = 'xt-ajax'
Ajax.optionsDefault = {
  // ajax
  query: 'body', // needs to be unique
  baseUrl: '/',
  // element
  elements: 'a[href]:not([href^="#"])',
  targets: false,
  // class
  class: 'in in-ajax',
  // quantity
  min: 0,
  max: 1,
  // event
  on: 'click',
  off: false,
  // timing
  queue: false,
  duration: false,
  // other
  aria: false,
}

//
// export
//

Xt.Ajax = Ajax
