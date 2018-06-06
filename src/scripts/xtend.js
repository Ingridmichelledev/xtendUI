/* xtend (https://getxtend.com/)
@copyright (c) 2017 - 2018 Riccardo Caroli
@license MIT (https://github.com/minimit/xtend-library/blob/master/LICENSE) */

'use strict';

import {XtUtil} from './xtend-utils';

//////////////////////
// Xt
//////////////////////

class Xt {

  /**
   * constructor
   * @param {Element} object Base element
   * @param {Object} options User options
   * @param {String} attr Attribute name with json options
   * @constructor
   */
  constructor(object, jsOptions, attr) {
    this.object = object;
    this.defaults = this.constructor.defaults;
    // js options
    this.options = XtUtil.merge([this.defaults, jsOptions || {}]);
    // markup options
    let markupOptions = this.object.getAttribute(attr);
    this.options = XtUtil.merge([this.options, markupOptions ? JSON.parse(markupOptions) : {}]);
    // classes
    if (this.options.class) {
      this.options.classes = [...this.options.class.split(' ')];
    }
    // init
    this.initSetup();
    this.initScope();
  }

  //////////////////////
  // init
  //////////////////////

  /**
   * setup namespace, container and options
   */
  initSetup() {
    let options = this.options;
    // setup (based on xtend mode)
    if (options.targets && options.targets.indexOf('#') !== -1) {
      // xtend all mode
      this.mode = 'all';
      this.container = document;
      options.max = Infinity;
      this.namespace = options.targets.toString() + '-' + options.classes.toString();
    } else {
      // xtend unique mode
      this.mode = 'unique';
      this.container = this.object;
      this.namespace = XtUtil.getUniqueID();
    }
    // final namespace
    this.namespace = this.namespace.replace(/\W+/g, '');
    // currents array based on namespace (so shared between Xt objects)
    if (!this.getCurrents()) {
      this.setCurrents([]);
    }
  }

  /**
   * init elements, targets and currents
   */
  initScope() {
    let self = this;
    let options = this.options;
    // elements
    this.elements = [];
    if (options.elements) {
      this.elements = XtUtil.arrSingle(this.container.querySelectorAll(options.elements));
    }
    if (!this.elements.length) {
      this.elements = XtUtil.arrSingle(this.object);
      // @FIX on next frame set all elements querying the namespace
      XtUtil.requestAnimationFrame.call(window, function () {
        self.elements = XtUtil.arrSingle(document.querySelectorAll('[data-xt-namespace=' + self.namespace + ']'));
      });
    }
    // targets
    if (options.targets) {
      let arr = Array.from(this.container.querySelectorAll(options.targets));
      arr = arr.filter(x => !XtUtil.parents(x, options.targets).length); // filter out parent
      this.targets = XtUtil.arrSingle(arr);
    }
    // appendTo
    if (options.appendTo) {
      let appendToTarget = document.querySelectorAll(options.appendTo);
      if (appendToTarget.length) {
        this.targets.forEach(function (el) {
          appendToTarget[0].appendChild(el);
        });
      }
    }
    // @FIX set namespace for next frame
    for (let el of this.elements) {
      el.setAttribute('data-xt-namespace', self.namespace);
    }
    // currents
    XtUtil.requestAnimationFrame.call(window, function () {
      if (self.elements.length) {
        // activate options.class
        let classes = self.options.classes;
        for (let el of self.elements) {
          if (el.classList.contains(...classes)) {
            self.eventOn(el);
          }
        }
        // if currents < min
        let todo = options.min - self.getCurrents().length;
        if (todo) {
          for (let i = 0; i < todo; i++) {
            self.eventOn(self.elements[i]);
          }
        }
      }
    });
  }

  /**
   * init events
   */
  initEvents() {
    let self = this;
    let options = this.options;
    // on and off
    for (let el of this.elements) {
      if (options.on) {
        let events = [...options.on.split(' ')];
        for (let event of events) {
          el.xtUtilOff(event + '.xtend');
          el.xtUtilOn(event + '.xtend', function (e) {
            if (options.onOutside) {
              if (XtUtil.checkOutside(e, self.container.querySelectorAll(options.targets))) {
                self.eventOn(this);
              }
            } else {
              self.eventOn(this);
            }
          });
        }
      }
      if (options.off) {
        let events = [...options.on.split(' ')];
        for (let event of events) {
          el.xtUtilOff(event + '.xtend');
          el.xtUtilOn(event + '.xtend', function (e) {
            if (options.offOutside) {
              if (XtUtil.checkOutside(e, self.container.querySelectorAll(options.targets))) {
                self.eventOff(this);
              }
            } else {
              self.eventOff(this);
            }
          });
        }
      }
    }
  }

  //////////////////////
  // utils
  //////////////////////

  /**
   * choose which elements to activate/deactivate (based on xtend mode and containers)
   * @param {Element} element Element that triggered interaction
   * @returns {Object} object.all and object.single
   */
  getElements(element) {
    if (!this.elements || !this.elements.length) {
      return {all: [], single: null};
    }
    if (this.mode === 'all') {
      // choose all elements
      return {all: this.elements, single: this.elements[0]};
    } else if (this.mode === 'unique') {
      // choose element by group
      let group = element.getAttribute('data-group');
      if (group) {
        // all group elements if group
        let groupElements = Array.from(this.elements).filter(x => x.getAttribute('data-group') === group);
        let final = XtUtil.arrSingle(groupElements);
        return {all: final, single: final[0]};
      } else {
        // element if not group
        let final = element;
        return {all: XtUtil.arrSingle(final), single: final};
      }
    }
  }

  /**
   * choose which targets to activate/deactivate (based on xtend mode and containers)
   * @param {Element} element Element that triggered interaction
   * @returns {Array}
   */
  getTargets(element) {
    if (!this.targets || !this.targets.length) {
      return [];
    }
    if (this.mode === 'all') {
      // choose all targets
      return this.targets;
    } else if (this.mode === 'unique') {
      // choose only target by group
      let group = element.getAttribute('data-group');
      let groupElements = Array.from(this.elements).filter(x => x.getAttribute('data-group') === group);
      let groupTargets = Array.from(this.targets).filter(x => x.getAttribute('data-group') === group);
      if (group) {
        // all group targets if group
        let final = groupTargets;
        return XtUtil.arrSingle(final);
      } else {
        // not group targets by index if not group
        let index = groupElements.findIndex(x => x === element);
        let final = groupTargets[index];
        return XtUtil.arrSingle(final);
      }
    }
  }

  /**
   * additional elements to activate/deactivate
   * @returns {Element}
   */
  getAdditional() {
    let options = this.options;
    return this.object.querySelectorAll(options.additional);
  }

  /**
   * get currents based on namespace (so shared between Xt objects)
   * @returns {Element}
   */
  getCurrents() {
    return XtUtil.currents[this.namespace];
  }

  /**
   * set currents based on namespace (so shared between Xt objects)
   * @param {Array} arr
   */
  setCurrents(arr) {
    XtUtil.currents[this.namespace] = arr;
  }

  /**
   * add current based on namespace (so shared between Xt objects)
   * @param {Element} element To be added
   */
  addCurrent(element) {
    let arr = XtUtil.currents[this.namespace];
    arr.push(element);
  }

  /**
   * remove currents based on namespace (so shared between Xt objects)
   * @param {Element} element To be removed
   */
  removeCurrent(element) {
    XtUtil.currents[this.namespace] = XtUtil.currents[this.namespace].filter(x => x !== element);
  }

  //////////////////////
  // events
  //////////////////////

  /**
   * element on
   * @param {Element} element To be activated
   */
  eventOn(element) {
    let self = this;
    let options = this.options;
    // activate or deactivate
    if (!element.classList.contains(...this.options.classes)) {
      let fElements = this.getElements(element);
      this.addCurrent(fElements.single);
      let targets = this.getTargets(element);
      let additional = this.getAdditional(fElements.single);
      let activationDelay = {
        elements: function () {
          self.activationOn(fElements.all, fElements, 'elements');
        },
        targets: function () {
          self.activationOn(targets, fElements, 'targets');
        },
        additional: function () {
          self.activationOn(additional, fElements, 'additional');
        },
      };
      // if currents > max
      let currents = this.getCurrents();
      if (currents.length > options.max) {
        this.eventOff(currents[0], activationDelay);
      } else {
        activationDelay.elements();
        activationDelay.targets();
        activationDelay.additional();
      }
    } else {
      this.eventOff(element);
    }
  }

  /**
   * element off
   * @param {Element} element To be deactivated
   */
  eventOff(element, activationDelay) {
    let options = this.options;
    // if currents < min
    let todo = options.min - this.getCurrents().length;
    if (!todo) {
      return;
    }
    // deactivate
    if (element.classList.contains(...this.options.classes)) {
      let fElements = this.getElements(element);
      this.removeCurrent(fElements.single);
      this.activationOff(fElements.all, fElements, 'elements', activationDelay);
      let targets = this.getTargets(element);
      this.activationOff(targets, fElements, 'targets', activationDelay);
      let additional = this.getAdditional(fElements.all);
      this.activationOff(additional, fElements, 'additional', activationDelay);
    }
  }

  //////////////////////
  // activation
  //////////////////////

  /**
   * element on activation
   * @param {Element} element To be activated
   */
  activationOn(els, fElements, type) {
    let self = this;
    let options = this.options;
    // activate
    for (let el of els) {
      el.classList.add(...options.classes);
      el.classList.remove('out');
      self.activationOnAnimate(el, type);
      // specials
      if (type === 'targets') {
        self.specialClassHtmlOn();
        self.specialBackdrop(el);
        self.specialCenterOn(el);
        self.specialMiddleOn(el);
        self.specialCollapseOn(el);
        self.specialCloseOn(el, fElements.single);
        self.specialScrollbarOn();
      }
    }
  }

  /**
   * element on animation
   * @param {Element} element To be animated
   */
  activationOnAnimate(el, type) {
    // onDone
    let onDone = function (el, type) {
      // collapse-width and collapse-height
      if (el.classList.contains('collapse-height')) {
        el.style.height = 'auto';
      }
      if (el.classList.contains('collapse-width')) {
        el.style.width = 'auto';
      }
    };
    // delay onDone
    let timing = this.activationTiming(el);
    clearTimeout(parseFloat(el.getAttribute('xt-activation-animation-timeout')));
    if (!timing) {
      onDone(el, type);
    } else {
      let timeout = setTimeout(function (el, type) {
        onDone(el, type);
      }, timing, el, type);
      el.setAttribute('xt-activation-animation-timeout', timeout);
    }
  }

  /**
   * element off activation
   * @param {Element} element To be deactivated
   */
  activationOff(els, fElements, type, activationDelay) {
    let self = this;
    let options = this.options;
    // deactivate
    for (let el of els) {
      el.classList.remove(...options.classes);
      el.classList.add('out');
      self.activationOffAnimate(el, type, activationDelay);
      // activationDelay
      if (activationDelay && activationDelay[type]) {
        if (options.instant && options.instant[type]) {
          activationDelay[type]();
        }
      }
      // specials
      if (type === 'targets') {
        self.specialClassHtmlOff();
        self.specialCollapseOff(el);
        self.specialCloseOff(el);
      }
    }
  }

  /**
   * element off animation
   * @param {Element} element To be animated
   */
  activationOffAnimate(el, type, activationDelay) {
    let self = this;
    let options = this.options;
    // onDone
    let onDone = function (el, type) {
      el.classList.remove('out');
      // specials
      if (type === 'targets') {
        self.specialScrollbarOff();
      }
      // activationDelay
      if (activationDelay && activationDelay[type]) {
        if (!options.instant || !options.instant[type]) {
          activationDelay[type]();
        }
      }
    };
    // delay onDone
    let timing = this.activationTiming(el);
    clearTimeout(parseFloat(el.getAttribute('xt-activation-animation-timeout')));
    if (!timing) {
      onDone(el, type);
    } else {
      let timeout = setTimeout(function (el, type) {
        onDone(el, type);
      }, timing, el, type);
      el.setAttribute('xt-activation-animation-timeout', timeout);
    }
  }

  /**
   * get transition or animation timing
   * @param {Element} element To be animated
   * @returns {Number} Milliseconds
   */
  activationTiming(el) {
    let options = this.options;
    // timing
    let timing = options.timing;
    let transition = parseFloat(getComputedStyle(el)['transitionDuration']) + parseFloat(getComputedStyle(el)['transitionDelay']);
    let animation = parseFloat(getComputedStyle(el)['animationDuration']) + parseFloat(getComputedStyle(el)['animationDelay']);
    if (transition || animation) {
      timing = Math.max(transition, animation);
    }
    return timing * 1000;
  }

  //////////////////////
  // activation specials
  //////////////////////

  /**
   * add html class
   */
  specialClassHtmlOn() {
    let options = this.options;
    if (options.classHtml) {
      var container = document.documentElement;
      container.classList.add(...options.classHtml.split(' '));
    }
  }

  /**
   * remove html class
   */
  specialClassHtmlOff() {
    let options = this.options;
    if (options.classHtml) {
      var container = document.documentElement;
      container.classList.remove(...options.classHtml.split(' '));
    }
  }

  /**
   * backdrop append to element
   * @param {Element} element
   */
  specialBackdrop(el) {
    let options = this.options;
    if (options.backdrop) {
      let elements;
      if (options.backdrop === 'object') {
        elements = XtUtil.arrSingle(this.object);
      } else if (options.backdrop === 'targets') {
        elements = XtUtil.arrSingle(el);
      } else {
        elements = el.querySelectorAll(options.backdrop);
        if (!elements.length) {
          elements = this.object.querySelectorAll(options.backdrop);
        }
      }
      for (let element of elements) {
        let backdrop = element.querySelectorAll('.xt-backdrop');
        if (!backdrop.length) {
          backdrop = XtUtil.createElement('<div class="xt-backdrop"></div>');
          element.append(backdrop);
        }
      }
    }
  }

  /**
   * center position on activation
   * @param {Element} element
   */
  specialCenterOn(el) {
    if (el.classList.contains('drop-center')) {
      let add = this.object.clientWidth;
      let remove = el.clientWidth;
      el.style.left = ((add - remove) / 2) + 'px';
    }
  }

  /**
   * middle position on activation
   * @param {Element} element
   */
  specialMiddleOn(el) {
    if (el.classList.contains('drop-middle')) {
      let add = this.object.clientHeight;
      let remove = el.clientHeight;
      el.style.top = ((add - remove) / 2) + 'px';
    }
  }

  /**
   * open collapse on activation
   * @param {Element} element
   */
  specialCollapseOn(el) {
    if (el.classList.contains('collapse-height')) {
      el.classList.add('no-transition');
      el.style.height = 'auto';
      el.style.paddingTop = '';
      el.style.paddingBottom = '';
      let h = el.clientHeight + 'px';
      let pt = el.style.paddingTop;
      let pb = el.style.paddingBottom;
      XtUtil.requestAnimationFrame.call(window, function () {
        el.style.height = '0';
        el.style.paddingTop = '0';
        el.style.paddingBottom = '0';
        XtUtil.requestAnimationFrame.call(window, function () {
          el.classList.remove('no-transition');
          el.style.height = h;
          el.style.paddingTop = pt;
          el.style.paddingBottom = pb;
        });
      });
    }
    if (el.classList.contains('collapse-width')) {
      el.style.width = 'auto';
      el.style.paddingLeft = '';
      el.style.paddingRight = '';
      let w = el.clientHeight + 'px';
      let pl = el.style.paddingLeft;
      let pr = el.style.paddingRight;
      XtUtil.requestAnimationFrame.call(window, function () {
        el.style.width = '0';
        el.style.paddingLeft = '0';
        el.style.paddingRight = '0';
        XtUtil.requestAnimationFrame.call(window, function () {
          el.classList.remove('no-transition');
          el.style.width = w;
          el.style.paddingLeft = pl;
          el.style.paddingRight = pr;
        });
      });
    }
  }

  /**
   * close collapse on deactivation
   * @param {Element} element
   */
  specialCollapseOff(el) {
    if (el.classList.contains('collapse-height')) {
      let h = el.clientHeight + 'px';
      let pt = el.style.paddingTop;
      let pb = el.style.paddingBottom;
      XtUtil.requestAnimationFrame.call(window, function () {
        el.style.height = h;
        el.style.paddingTop = pt;
        el.style.paddingBottom = pb;
        XtUtil.requestAnimationFrame.call(window, function () {
          el.style.height = '0';
          el.style.paddingTop = '0';
          el.style.paddingBottom = '0';
        });
      });
    }
    if (el.classList.contains('collapse-width')) {
      let w = el.clientWidth + 'px';
      let pl = el.style.paddingLeft;
      let pr = el.style.paddingRight;
      XtUtil.requestAnimationFrame.call(window, function () {
        el.style.width = w;
        el.style.paddingLeft = pl;
        el.style.paddingRight = pr;
        XtUtil.requestAnimationFrame.call(window, function () {
          el.style.width = '0';
          el.style.paddingLeft = '0';
          el.style.paddingRight = '0';
        });
      });
    }
  }

  /**
   * add close events on element
   * @param {Element} element
   */
  specialCloseOn(el, toggle) {
    let self = this;
    let options = this.options;
    // closeInside
    if (options.closeInside) {
      let closeElements = el.querySelectorAll(options.closeInside);
      XtUtil.requestAnimationFrame.call(window, function () {
        for (let closeElement of closeElements) {
          closeElement.xtUtilOff('click.xtend.' + self.namespace);
          closeElement.xtUtilOn('click.xtend.' + self.namespace, function (e) {
            if (XtUtil.checkInside(e, XtUtil.arrSingle(this))) {
              self.eventOff(toggle);
            }
          });
        }
      });
    }
    // closeOutside
    if (options.closeOutside) {
      let closeElements = document.documentElement.querySelectorAll(options.closeOutside);
      XtUtil.requestAnimationFrame.call(window, function () {
        for (let closeElement of closeElements) {
          closeElement.xtUtilOff('click.xtend.' + self.namespace);
          closeElement.xtUtilOn('click.xtend.' + self.namespace, function (e) {
            if (XtUtil.checkOutside(e, XtUtil.arrSingle(el))) {
              self.eventOff(toggle);
            }
          });
        }
      });
    }
  }

  /**
   * remove close events on element
   * @param {Element} element
   */
  specialCloseOff(el) {
    let options = this.options;
    // closeInside
    if (options.closeInside) {
      let closeElements = el.querySelectorAll(options.closeInside);
      for (let closeElement of closeElements) {
        closeElement.xtUtilOff('click.xtend.' + this.namespace);
      }
    }
    // closeOutside
    if (options.closeOutside) {
      let closeElements = document.documentElement.querySelectorAll(options.closeOutside);
      for (let closeElement of closeElements) {
        closeElement.xtUtilOff('click.xtend.' + this.namespace);
      }
    }
  }

  /**
   * scrollbar activation
   * @param {Element} element
   */
  specialScrollbarOn() {
    let options = this.options;
    if (options.scrollbar) {
      var width = XtUtil.scrollbarWidth();
      // scroll
      var container = document.documentElement;
      container.style.paddingRight = width + 'px';
      container.classList.add('xt-scrollbar');
      // check fixed
      var elements = document.documentElement.querySelectorAll('.xt-check-fixed > *');
      for (let element of elements) {
        var style = window.getComputedStyle(element);
        if (style.position === 'fixed') {
          element.classList.add('xt-fixed');
        } else {
          element.classList.remove('xt-fixed');
        }
      }
      // fixed
      var elements = document.documentElement.querySelectorAll('.xt-fixed');
      for (let element of elements) {
        element.style.paddingRight = '';
        var style = window.getComputedStyle(element);
        var padding = style.paddingRight;
        var str = 'calc(' + padding + ' + ' + width + 'px)';
        element.classList.add('no-transition');
        element.style.paddingRight = str;
        XtUtil.requestAnimationFrame.call(window, function () {
          element.classList.remove('no-transition');
        });
      }
      // backdrop
      var elements = document.documentElement.querySelectorAll('.xt-backdrop');
      for (let element of elements) {
        element.style.right = width + 'px';
      }
    }
  }

  /**
   * scrollbar deactivation
   * @param {Element} element
   */
  specialScrollbarOff() {
    let options = this.options;
    if (options.scrollbar) {
      // scroll
      var container = document.documentElement;
      container.style.paddingRight = '';
      container.classList.remove('xt-scrollbar');
      // fixed
      var elements = document.documentElement.querySelectorAll('.xt-fixed');
      for (let element of elements) {
        element.classList.add('no-transition');
        XtUtil.requestAnimationFrame.call(window, function () {
          element.style.paddingRight = '';
          XtUtil.requestAnimationFrame.call(window, function () {
            element.classList.remove('no-transition');
          });
        });
      }
      // backdrop
      var elements = document.documentElement.querySelectorAll('.xt-backdrop');
      for (let element of elements) {
        element.style.right = '';
      }
    }
  }

}

// default

Xt.defaults = {
  "class": "active",
};

// export

window.Xt = Xt;
export {Xt};

//////////////////////
// XtToggle
//////////////////////

class XtToggle extends Xt {

  /**
   * constructor
   * @param {Element} object Base element
   * @param {Object} options User options
   * @constructor
   */
  constructor(object, jsOptions) {
    super(object, jsOptions, 'data-xt-toggle');
    this.initEvents();
  }

}

// default

XtToggle.defaults = {
  "elements": ":scope > a, :scope > button",
  "targets": ":scope > [class^=\"toggle-\"], :scope > [class*=\" toggle-\"]",
  "class": "active",
  "instant": { "elements": true },
  "on": "click",
  "min": 0,
  "max": 1
};

// export

window.XtToggle = XtToggle;
export {XtToggle};

//////////////////////
// XtDrop
//////////////////////

class XtDrop extends Xt {

  /**
   * constructor
   * @param {Element} object Base element
   * @param {Object} options User options
   * @constructor
   */
  constructor(object, jsOptions) {
    super(object, jsOptions, 'data-xt-drop');
    this.initEvents();
  }

}

// default

XtDrop.defaults = {
  "elements": ":scope",
  "targets": ":scope > .drop",
  "additional": ":scope > a, :scope > button",
  "class": "active",
  "instant": { "elements": true },
  "on": "click",
  "onOutside": true, "offOutside": true,
  "min": 0,
  "max": 1,
  "closeOutside": "body"
};

// export

window.XtDrop = XtDrop;
export {XtDrop};

//////////////////////
// XtOverlay
//////////////////////

class XtOverlay extends Xt {

  /**
   * constructor
   * @param {Element} object Base element
   * @param {Object} options User options
   * @constructor
   */
  constructor(object, jsOptions) {
    super(object, jsOptions, 'data-xt-overlay');
    this.initEvents();
  }

}

// default

XtOverlay.defaults = {
  "elements": ":scope > a, :scope > button",
  "targets": ":scope > .overlay-outer",
  "class": "active",
  "instant": { "elements": true },
  "on": "click",
  "min": 0,
  "max": 1,
  "appendTo": "body",
  "backdrop": "targets",
  "closeInside": ".overlay-dismiss, :scope > .xt-backdrop, :scope .overlay-inner > .btn-close",
  "scrollbar": true
};

// export

window.XtOverlay = XtOverlay;
export {XtOverlay};

//////////////////////
// XtSticky
//////////////////////

class XtSticky extends Xt {

  /**
   * constructor
   * @param {Element} object Base element
   * @param {Object} options User options
   * @constructor
   */
  constructor(object, jsOptions) {
    super(object, jsOptions, 'data-xt-sticky');
    this.initEvents();
  }

  //////////////////////
  // init
  //////////////////////

  /**
   * init elements, targets and currents
   */
  initScope() {
    super.initScope();
    // mode
    this.mode = 'all';
    // container
    this.container = XtUtil.parents(this.object, '.xt-container');
    if (!this.container.length) {
      this.container = XtUtil.createElement('<div class="xt-container xt-check-fixed"></div>');
      this.object.before(this.container);
      this.container.append(this.object);
      this.container = XtUtil.parents(this.object, '.xt-container');
    }
    // targets
    this.targets = this.container[0].querySelectorAll('.xt-clone');
    if (this.targets) {
      this.targets = this.object.cloneNode(true);
      this.targets.classList.add('xt-clone');
      this.container[0].append(this.targets);
    }
    this.targets = XtUtil.arrSingle(this.targets);
    // xt-fixed
    this.object.classList.add('xt-fixed');
  }

  /**
   * init events
   */
  initEvents() {
    let self = this;
    let options = this.options;
    // events
    let events = [...options.on.split(' ')];
    for (let event of events) {
      window.xtUtilOff(event + '.xtend' + this.namespace);
      window.xtUtilOn(event + '.xtend' + this.namespace, function (e) {
        self.eventScroll(self.object);
      });
    }
  }

  //////////////////////
  // events
  //////////////////////

  /**
   * window scroll
   * @param {Element} element To be activated or deactivated
   */
  eventScroll(element) {
    let self = this;
    let options = this.options;
    // scroll
    let scrollTopReal = document.documentElement.scrollTop;
    let scrollTop = scrollTopReal;
    XtUtil.cancelAnimationFrame.call(window, this.scrollFrame);
    this.scrollFrame = XtUtil.requestAnimationFrame.call(window, function () {
      let el = self.object;
      let rectEl = el.getBoundingClientRect();
      let rectContainer = self.container[0].getBoundingClientRect();
      let bottom = self.eventScrollBottom(options.bottom, Infinity, scrollTop, el.clientHeight);
      let top = self.eventScrollTop(options.top, rectContainer.top, scrollTop);
      // add from contain
      let add = 0;
      let addTop = 0;
      let addBottom = 0;
      if (options.contain) {
        addBottom = self.eventScrollAdd(options.contain['bottom'], 0);
        addTop = self.eventScrollAdd(options.contain['top'], 0);
      }
      if (scrollTopReal > self.scrollTopOld) {
        add = addBottom;
      } else {
        add = addTop;
      }
      // add
      if (scrollTop >= top - add && scrollTop < bottom + add) {
        // if inside scrolling
        if (scrollTop <= top) {
          // if inside scrolling plus add current position before add
          if (el.getAttribute('xt-scroll-add') !== 'block-add-inside') {
            el.setAttribute('xt-scroll-add', 'block-add-inside');
            el.classList.add('no-transition');
            el.style.top = rectEl.top + 'px';
            XtUtil.requestAnimationFrame.call(window, function () {
              el.classList.remove('no-transition');
              el.style.top = add + 'px';
            });
          }
        } else {
          el.setAttribute('xt-scroll-add', '');
          // if inside scrolling not inside add use add
          el.style.top = add + 'px';
        }
      } else {
        // if outside scrolling
        if (scrollTop >= top - addTop) {
          // if outside scrolling plus add
          if (el.getAttribute('xt-scroll-add') !== 'block-add-outside') {
            el.setAttribute('xt-scroll-add', 'block-add-outside');
            el.classList.add('no-transition');
            el.style.top = rectEl.top - rectContainer.top + 'px';
            console.log(el.style.top, rectEl.top, rectContainer.top);
            XtUtil.requestAnimationFrame.call(window, function () {
              el.classList.remove('no-transition');
              el.style.top = add + 'px';
            });
          }
        } else {
          el.setAttribute('xt-scroll-add', '');
          // if outside scrolling not inside add
          el.style.top = '';
        }
      }
      // direction
      if (scrollTopReal > self.scrollTopOld) {
        el.classList.remove('sticky-up');
        el.classList.add('sticky-down');
      } else {
        el.classList.remove('sticky-down');
        el.classList.add('sticky-up');
      }
      // activation
      if (scrollTop >= top - add && scrollTop < bottom + add) {
        // inside
        if (!element.classList.contains(...self.options.classes)) {
          self.eventOn(element);
          // direction
          el.classList.remove('sticky-off');
          el.classList.add('sticky-on');
        }
      } else {
        // outside
        if (element.classList.contains(...self.options.classes)) {
          self.eventOff(element);
          // direction
          el.classList.remove('sticky-on');
          el.classList.add('sticky-off');
        }
      }
      // save for direction
      self.scrollTopOld = scrollTopReal;
    });
  }

  /**
   * get add position of option
   * @param {String|Number|Element} option
   * @param {Number} val Default add
   * @returns {Number} value Option's position (px)
   */
  eventScrollAdd(option, val) {
    if (option) {
      if (!isNaN(parseFloat(option))) {
        val = option;
      } else {
        let el = document.querySelectorAll(option);
        if (el.length) {
          el = el[0];
          if (el.classList.contains('active')) {
            val = el.clientHeight;
          }
        }
      }
    }
    return val;
  }

  /**
   * get bottom position of option
   * @param {String|Number|Element} option
   * @param {Number} val Default bottom
   * @param {Number} scrollTop Window's scrollTop
   * @returns {Number} value Option's position (px)
   */
  eventScrollBottom(option, val, scrollTop, remove) {
    if (option) {
      if (!isNaN(parseFloat(option))) {
        val = option;
      } else {
        let el = document.querySelectorAll(option);
        if (el.length) {
          let rectBottom = el[0].getBoundingClientRect();
          val = rectBottom.top + scrollTop - remove;
        } else if (this.targets.length) {
          let rectBottom = this.targets[0].getBoundingClientRect();
          val = rectBottom.top + scrollTop;
        }
      }
    }
    return val;
  }

  /**
   * get top position of option
   * @param {String|Number|Element} option
   * @param {Number} val Default top
   * @param {Number} scrollTop Window's scrollTop
   * @returns {Number} value Option's position (px)
   */
  eventScrollTop(option, val, scrollTop) {
    if (!isNaN(parseFloat(option))) {
      val = option;
    } else {
      let el = document.querySelectorAll(option);
      if (el.length) {
        let rectTop = el[0].getBoundingClientRect();
        val = rectTop.top + scrollTop;
      } else if (this.targets.length) {
        let rectTop = this.targets[0].getBoundingClientRect();
        val = rectTop.top + scrollTop;
      }
    }
    return val;
  }

}

// default

XtSticky.defaults = {
  "class": "active",
  "on": "scroll resize",
  "min": 0,
  "max": Infinity,
  contain: false
};

// export

window.XtSticky = XtSticky;
export {XtSticky};