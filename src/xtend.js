/*! Xtend (https://getxtend.com/)
@copyright (c) 2017 - 2019 Riccardo Caroli
@license MIT (https://github.com/minimit/xtend-library/blob/master/LICENSE) */

//////////////////////
// import
//////////////////////

import './polyfill';

//////////////////////
// constructor
//////////////////////

export const Xt = {};

//////////////////////
// vars
//////////////////////

Xt.debug = true;
Xt.mount = [];
Xt.unmount = [];
Xt.currents = {}; // Xt currents based on namespace (so shared between Xt objects)
Xt.resizeDelay = 100;
Xt.scrollDelay = false;
Xt.imageLoadedDelay = 50;
Xt.focusables = 'a, button, details, input, iframe, select, textarea';

//////////////////////
// call only if in browser mode
// https://www.gatsbyjs.org/docs/debugging-html-builds/#how-to-check-if-code-classlanguage-textwindowcode-is-defined
//////////////////////

if (typeof window !== 'undefined') {

  //////////////////////
  // initialization
  //////////////////////

  /**
   * ready
   * @param {Function} fnc Function to execute on dom ready
   */
  Xt.ready = function (fnc) {
    if (document.readyState === 'complete') {
      requestAnimationFrame(function () {
        fnc();
      });
    } else {
      document.addEventListener('readystatechange', function () {
        if (document.readyState === 'complete') {
          requestAnimationFrame(function () {
            fnc();
          });
        }
      });
    }
  };

  /**
   * init
   */
  Xt.ready(function () {
    Xt.stickyIndex = 500;
    Xt.setScrollbarWidth();
    Xt.windowHeightSet();
    Xt.mountCheck(document.documentElement);
    Xt.observer.disconnect();
    Xt.observer.observe(document.documentElement, {
      characterData: false,
      attributes: false,
      childList: true,
      subtree: true
    });
  });

  //////////////////////
  // observer
  //////////////////////

  /**
   * observer
   */
  Xt.observer = new MutationObserver(function (mutationsList) {
    for (let mutation of mutationsList) {
      if (mutation.type === 'childList') {
        // added
        for (let added of mutation.addedNodes) {
          if (added.nodeType === 1) {
            Xt.mountCheck(added);
          }
        }
        // removed
        for (let removed of mutation.removedNodes) {
          if (removed.nodeType === 1) {
            Xt.unmountCheck(removed);
          }
        }
      }
    }
  });

  /**
   * mountCheck
   * @param {Node|HTMLElement|EventTarget|Window} added
   */
  Xt.mountCheck = function (added = document.documentElement) {
    let addedIgnore = added.closest('.xt-ignore');
    if (addedIgnore) {
      Xt.ignoreOnce(addedIgnore); // @FIX ignore once for mount when moving
      return false;
    }
    for (let obj of Xt.mount) {
      // check
      let els = [];
      if (added.matches(obj.matches)) {
        els.push(added);
      }
      for (let element of added.querySelectorAll(obj.matches)) {
        els.push(element);
      }
      // call
      if (els.length) {
        for (let [i, el] of els.entries()) {
          let elIgnore = el.closest('.xt-ignore');
          if (elIgnore) {
            Xt.ignoreOnce(elIgnore); // @FIX ignore once for mount when moving
            continue;
          }
          // call
          requestAnimationFrame(function () { // @FIX react when componentDidMount
            let destroy = obj.fnc(el, i, obj.matches); // object, index, matches
            if (destroy) {
              Xt.unmount.push({
                object: el,
                fnc: destroy
              });
            }
          });
        }
      }
    }
  };

  /**
   * unmountCheck
   * @param {Node|HTMLElement|EventTarget|Window} removed
   */
  Xt.unmountCheck = function (removed = document.documentElement) {
    if (removed.closest('.xt-ignore')) {
      return false;
    }
    for (let obj of Xt.unmount) {
      // check
      if (removed === obj.element || removed.contains(obj.element)) {
        if (obj.element.closest('.xt-ignore')) {
          return false;
        }
        // call
        obj.fnc();
      }
    }
  };

  //////////////////////
  // component
  //////////////////////

  /**
   * set component
   * @param {String} name Component name
   * @param {Node|HTMLElement|EventTarget|Window} element Component's element
   * @param {Object} self Component' self
   */
  Xt.set = function (name, element, self) {
    Xt.dataStorage.set(element, name, self);
  };

  /**
   * get component
   * @param {String} name Component name
   * @param {Node|HTMLElement|EventTarget|Window} element Component's element
   */
  Xt.get = function (name, element) {
    return Xt.dataStorage.get(element, name);
  };

  /**
   * remove component
   * @param {String} name Component name
   * @param {Node|HTMLElement|EventTarget|Window} element Component's element
   */
  Xt.remove = function (name, element) {
    return Xt.dataStorage.remove(element, name);
  };

  //////////////////////
  // dataStorage
  // map storage for HTML elements
  //////////////////////

  Xt.dataStorage = {

    /**
     * properties
     */
    _storage: new Map(),

    /**
     * set key/obj pair on element's map
     * @param {Node|HTMLElement|EventTarget|Window} el
     * @param {String} key
     * @param {Object|Function} obj
     * @returns {Object|Function}
     */
    set: function (el, key, obj) {
      // new map if not already there
      if (!this._storage.has(el)) {
        this._storage.set(el, new Map());
      }
      // set
      let getEl = this._storage.get(el);
      getEl.set(key, obj);
      // return
      return getEl.get(key);
    },

    /**
     * put key/obj pair on element's map, return old if exist already
     * @param {Node|HTMLElement|EventTarget|Window} el
     * @param {String} key
     * @param {Object|Function} obj
     * @returns {Object|Function}
     */
    put: function (el, key, obj) {
      // new map if not already there
      if (!this._storage.has(el)) {
        this._storage.set(el, new Map());
      }
      // return if already set
      let getEl = this._storage.get(el);
      let getKey = getEl.get(key);
      if (getKey) {
        return getKey;
      }
      // set
      getEl.set(key, obj);
      // return
      return getEl.get(key);
    },

    /**
     * get obj from key on element's map
     * @param {Node|HTMLElement|EventTarget|Window} el
     * @param {String} key
     * @returns {Object|Function}
     */
    get: function (el, key) {
      let getEl = this._storage.get(el);
      // null if empty
      if (!getEl) {
        return null;
      }
      // return
      return getEl.get(key);
    },

    /**
     * get all obj/key on element's map
     * @param {Node|HTMLElement|EventTarget|Window} el
     * @returns {Object|Function}
     */
    getAll: function (el) {
      let getEl = this._storage.get(el);
      // null if empty
      if (!getEl) {
        return null;
      }
      // return
      return getEl;
    },

    /**
     * has key on element's map
     * @param {Node|HTMLElement|EventTarget|Window} el
     * @param {String} key
     * @returns {Boolean}
     */
    has: function (el, key) {
      // return
      return this._storage.get(el).has(key);
    },

    /**
     * remove element's map key
     * @param {Node|HTMLElement|EventTarget|Window} el
     * @param {String} key
     * @returns {Boolean}
     */
    remove: function (el, key) {
      let getEl = this._storage.get(el);
      // null if empty
      if (!getEl) {
        return null;
      }
      // remove
      let ret = getEl.delete(key);
      // remove storage if empty
      if (getEl.size === false) {
        this._storage.delete(el);
      }
      // return
      return ret;
    }

  };

  //////////////////////
  // scrollbar
  // util to remember scrollbar state
  //////////////////////

  Xt.scrollbar = {

    /**
     * properties
     */
    currents: [],

    /**
     * get scrollbar currents
     * @returns {Array} Currents
     */
    get: function () {
      return Xt.scrollbar.currents;
    },

    /**
     * add scrollbar currents
     * @param {Node|HTMLElement|EventTarget|Window} el Elements to be deactivated
     */
    add: function (el) {
      Xt.scrollbar.currents.push(el);
    },

    /**
     * remove scrollbar currents
     * @param {Node|HTMLElement|EventTarget|Window} el Elements to be deactivated
     */
    remove: function (el) {
      Xt.scrollbar.currents = Xt.scrollbar.currents.filter(x => x !== el);
    }


  };

  //////////////////////
  // focus
  // util to remember focus on key or interactions events
  //////////////////////

  Xt.focus = {

    /**
     * properties
     */
    block: false,
    current: null,

    /**
     * enable focus change events
     */
    on: function () {
      // event key
      let focusChangeKeyHandler = Xt.dataStorage.put(document, 'keyup.focus',
        Xt.focus.changeKey);
      document.addEventListener('keyup', focusChangeKeyHandler);
      // event mouse
      let focusChangeOtherHandler = Xt.dataStorage.get(document, 'mousedown touchstart pointerdown.focus');
      document.removeEventListener('mousedown', focusChangeOtherHandler);
      document.removeEventListener('touchstart', focusChangeOtherHandler);
      document.removeEventListener('pointerdown', focusChangeOtherHandler);
    },

    /**
     * disable focus change events
     */
    off: function () {
      // event
      let focusChangeKeyHandler = Xt.dataStorage.get(document, 'keyup.focus');
      document.removeEventListener('keyup', focusChangeKeyHandler);
      // event mouse
      let focusChangeOtherHandler = Xt.dataStorage.put(document, 'mousedown touchstart pointerdown.focus',
        Xt.focus.changeOther);
      document.addEventListener('mousedown', focusChangeOtherHandler);
      document.addEventListener('touchstart', focusChangeOtherHandler, Xt.passiveSupported ? {passive: true} : false);
      document.addEventListener('pointerdown', focusChangeOtherHandler, Xt.passiveSupported ? {passive: true} : false);
    },

    /**
     * focus change on key events
     * @param {Event} e Event
     */
    changeKey: function (e) {
      let code = e.keyCode ? e.keyCode : e.which;
      if (code === 9) {
        if (!Xt.focus.block) {
          // remember Xt.focus
          Xt.focus.current = document.activeElement;
        }
        if (!document.documentElement.classList.contains('xt-focus')) {
          // html.xt-focus
          document.documentElement.classList.add('xt-focus');
          // switch mode
          Xt.focus.off();
        }
      }
    },

    /**
     * focus change on other events
     * @param {Event} e Event
     */
    changeOther: function (e) {
      if (!Xt.focus.block) {
        // remember Xt.focus
        Xt.focus.current = e.target;
      }
      if (document.documentElement.classList.contains('xt-focus')) {
        // html.xt-focus
        document.documentElement.classList.remove('xt-focus');
        // switch mode
        Xt.focus.on();
      }
    }

  };

  requestAnimationFrame(function () {
    Xt.focus.on();
  });

  //////////////////////
  // focusLimit
  // util to limit focus inside HTML elements
  //////////////////////

  Xt.focusLimit = {

    /**
     * activate focusLimit to an element
     * @param {Node|HTMLElement|EventTarget|Window} el Element
     */
    on: function (el) {
      // @FIX Xt.focus when clicking and not used tab before
      Xt.focus.current = Xt.focus.current ? Xt.focus.current : document.activeElement;
      // vars
      let focusables = el.querySelectorAll(Xt.focusables);
      focusables = Array.from(focusables).filter(x => x.matches(':not([disabled]), :not([tabindex="-1"])')); // filter out parent
      if (focusables.length) {
        let first = focusables[0];
        let last = focusables[focusables.length - 1];
        // event
        let focusLimitHandler = Xt.dataStorage.put(document, 'keyup.focusLimit',
          Xt.focusLimit.limit.bind(this).bind(this, focusables, first, last));
        document.addEventListener('keyup', focusLimitHandler);
      }
    },

    /**
     * deactivate focusLimit to an element
     */
    off: function () {
      // event
      let focusLimitHandler = Xt.dataStorage.get(document, 'keyup.focusLimit');
      document.removeEventListener('keyup', focusLimitHandler);
    },

    /**
     * limit even on focus when activated
     * @param {NodeList|Array} focusables Focusables elements
     * @param {Node|HTMLElement|EventTarget|Window} first First focusable element
     * @param {Node|HTMLElement|EventTarget|Window} last Last focusable element
     * @param {Event} e Event
     */
    limit: function (focusables, first, last, e) {
      let code = e.keyCode ? e.keyCode : e.which;
      if (code === 9) {
        if (!focusables.includes(document.activeElement)) {
          if (e.shiftKey) {
            last.focus();
            e.preventDefault();
          } else {
            first.focus();
            e.preventDefault();
          }
        }
      }
    }

  };

  //////////////////////
  // textareaAutosize
  /////////////////////

  Xt.textareaAutosize = {

    /**
     * init
     * @param {Node|HTMLElement|EventTarget|Window} el Element
     */
    init: function (el) {
      // @FIX ignore
      if (el.closest('.xt-ignore')) {
        return false;
      }
      // init
      if (!Xt.dataStorage.get(el, 'xtTextareaAutosizeDone')) {
        Xt.dataStorage.set(el, 'xtTextareaAutosizeDone', true);
        // key
        el.addEventListener('keydown', Xt.textareaAutosize.keychange.bind(el));
        el.addEventListener('keyup', Xt.textareaAutosize.keychange.bind(el));
        // form
        let form = el.closest('form');
        if (form) {
          form.addEventListener('reset', Xt.textareaAutosize.keychange.bind(el));
        }
        // initial
        Xt.textareaAutosize.keychange.bind(el)();
      }
    },

    /**
     * destroy
     * @param {Node|HTMLElement|EventTarget|Window} el Element
     */
    destroy: function (el) {
      if (Xt.dataStorage.get(el, 'xtTextareaAutosizeDone')) {
        Xt.dataStorage.remove(el, 'xtTextareaAutosizeDone');
        // key
        el.removeEventListener('keydown', Xt.textareaAutosize.keychange.bind(el));
        el.removeEventListener('keyup', Xt.textareaAutosize.keychange.bind(el));
        // form
        let form = el.closest('form');
        if (form) {
          form.removeEventListener('reset', Xt.textareaAutosize.keychange.bind(el));
        }
      }
    },

    /**
     * event keychange
     */
    keychange: function () {
      let el = this;
      el.style.height = '5px';
      el.style.height = (el.scrollHeight) + 'px'; // fixes both safari RAF and form reset
      requestAnimationFrame(function () {
        el.style.height = '5px'; // fixes both safari RAF and form reset
        el.style.height = (el.scrollHeight) + 'px';
      });
    }

  };

  //////////////////////
  // media
  /////////////////////

  Xt.media = {

    /**
     * init
     * @param {Node|HTMLElement|EventTarget|Window} el Element
     */
    init: function (el) {
      // @FIX ignore
      if (el.closest('.xt-ignore')) {
        return false;
      }
      // init
      el.classList.remove('media-loaded');
      // img
      let img = el.querySelector('img');
      if (img) {
        if (img.complete) {
          Xt.media.load.bind(img).bind(img, el)();
        } else {
          img.addEventListener('load', Xt.media.load.bind(img).bind(img, el));
        }
      }
      // video
      let video = el.querySelector('video');
      if (video) {
        if (video.readyState >= 3) {
          Xt.media.load.bind(video).bind(video, el)();
        } else {
          video.addEventListener('loadeddata', Xt.media.load.bind(video).bind(video, el));
        }
      }
    },

    /**
     * destroy
     * @param {Node|HTMLElement|EventTarget|Window} el Element
     */
    destroy: function (el) {
      // img
      let img = el.querySelector('img');
      if (img) {
        img.removeEventListener('load', Xt.media.load.bind(img).bind(img, el));
      }
      // video
      let video = el.querySelector('video');
      if (video) {
        video.removeEventListener('loadeddata', Xt.media.load.bind(video).bind(video, el));
      }
    },

    /**
     * event load
     * @param {Node|HTMLElement|EventTarget|Window} el Element container
     * @param {Event|Object} e Event
     */
    load: function (el, e) {
      el.classList.add('media-loaded');
    }

  };

  //////////////////////
  // btnMerge
  // pass .hover and .active classes to .btn inside
  //////////////////////

  Xt.btnMerge = {

    /**
     * init to pass .hover and .active to .btn inside Element
     * @param {Node|HTMLElement|EventTarget|Window} el Element
     */
    init: function (el) {
      // @FIX ignore
      if (el.closest('.xt-ignore')) {
        return false;
      }
      // init
      if (!Xt.dataStorage.get(el, 'xtBtnMergeDone')) {
        Xt.dataStorage.set(el, 'xtBtnMergeDone', true);
        el.addEventListener('mouseenter', Xt.btnMerge.hoverOn);
        el.addEventListener('mouseleave', Xt.btnMerge.hoverOff);
        el.addEventListener('mousedown', Xt.btnMerge.activeOn);
        addEventListener('mouseup', Xt.btnMerge.activeOff.bind(el));
      }
    },

    /**
     * destroy
     * @param {Node|HTMLElement|EventTarget|Window} el Element
     */
    destroy: function (el) {
      if (Xt.dataStorage.get(el, 'xtBtnMergeDone')) {
        Xt.dataStorage.remove(el, 'xtBtnMergeDone');
        el.removeEventListener('mouseenter', Xt.btnMerge.hoverOn);
        el.removeEventListener('mouseleave', Xt.btnMerge.hoverOff);
        el.removeEventListener('mousedown', Xt.btnMerge.activeOn);
        removeEventListener('mouseup', Xt.btnMerge.activeOff.bind(el));
      }
    },

    /**
     * event hover on
     */
    hoverOn: function () {
      let els = this.querySelectorAll('.btn');
      for (let el of els) {
        el.classList.add('hover');
      }
    },

    /**
     * event hover off
     */
    hoverOff: function () {
      let els = this.querySelectorAll('.btn');
      for (let el of els) {
        el.classList.remove('hover');
      }
    },

    /**
     * event active on
     */
    activeOn: function () {
      let els = this.querySelectorAll('.btn');
      for (let el of els) {
        el.classList.add('active');
      }
    },

    /**
     * event active off
     */
    activeOff: function () {
      let els = this.querySelectorAll('.btn');
      for (let el of els) {
        el.classList.remove('active');
      }
    }

  };

  //////////////////////
  // friction
  // util to friction values
  //////////////////////

  Xt.friction = function (el, obj) {
    let xCurrent = Xt.getTranslate(el)[0];
    let yCurrent = Xt.getTranslate(el)[1];
    let xDist = obj.x - xCurrent;
    let yDist = obj.y - yCurrent;
    // momentum
    let fncFriction = obj.friction || "return delta / 9";
    if (typeof fncFriction === 'string') {
      fncFriction = new Function('delta', fncFriction);
    }
    xCurrent += fncFriction(Math.abs(xDist)) * Math.sign(xDist);
    yCurrent += fncFriction(Math.abs(yDist)) * Math.sign(yDist);
    // set
    el.style.transform = 'translateX(' + xCurrent + 'px) translateY(' + yCurrent + 'px)';
    // loop
    let frictionLimit = obj.frictionLimit || 1.5;
    xDist = obj.x - xCurrent;
    yDist = obj.y - yCurrent;
    cancelAnimationFrame(Xt.dataStorage.get(el, 'xtFrictionFrame'));
    if (Math.abs(xDist) >= frictionLimit || Math.abs(yDist >= frictionLimit)) {
      Xt.dataStorage.set(el, 'xtFrictionFrame', requestAnimationFrame(function () {
        Xt.friction(el, obj);
      }));
    }
  };

  //////////////////////
  // util
  //////////////////////

  /**
   * Return translate values https://gist.github.com/aderaaij/a6b666bf756b2db1596b366da921755d
   * @param {Node|HTMLElement|EventTarget|Window} element Element to check target
   * @return {Array} Values [x, y]
   */
  /*
  USAGE:
  Xt.getTranslate(el)[0]; // for translateX
  Xt.getTranslate(el)[1]; // for translateY
  */

  Xt.getTranslate = function (element) {
    let transArr = [];
    let style = getComputedStyle(element);
    let transform = style.transform;
    let mat = transform.match(/^matrix3d\((.+)\)$/);
    if (mat) {
      transArr.push(parseFloat(mat[1].split(', ')[13]));
    } else {
      mat = transform.match(/^matrix\((.+)\)$/);
      mat ? transArr.push(parseFloat(mat[1].split(', ')[4])) : transArr.push(0);
      mat ? transArr.push(parseFloat(mat[1].split(', ')[5])) : transArr.push(0);
    }
    return transArr;
  };

  /**
   * Check if event target is inside elements
   * @param {Node|HTMLElement|EventTarget|Window} element Element to check target
   * @param {NodeList|Array} targets Elements to check inside
   * @return {Boolean}
   */
  Xt.checkNested = function (element, targets) {
    let result = false;
    for (let t of targets) {
      if (element === t || t.contains(element)) {
        result = true;
      }
    }
    return result;
  };

  /**
   * Get unique id
   * @returns {String} Unique id
   */
  Xt.getuniqueId = function () {
    Xt.uid = Xt.uid !== undefined ? Xt.uid : 0;
    return 'xt-' + (Xt.uid++);
  };

  /**
   * Get unique number
   * @returns {Number} Unique number
   */
  Xt.getStickyIndex = function () {
    return Xt.stickyIndex--;
  };

  /**
   * Merge objects
   * @param {Array} arr Array of objects to merge
   * @returns {Object} Merged object
   */
  Xt.merge = function (arr) {
    let final = {};
    for (let obj of arr) {
      if (obj) {
        for (let [key, value] of Object.entries(obj)) {
          if (value !== null && typeof value === 'object'
            && !value.nodeName // not HTML element
            && value !== window) { // not window
            final[key] = Xt.merge([final[key], value]);
          } else {
            final[key] = value;
          }
        }
      }
    }
    return final;
  };

  /**
   * Make an array when element is only one
   * @param {NodeList|Array|Node|HTMLElement|EventTarget|Window} el
   * @returns {NodeList|Array}
   */
  Xt.arrSingle = function (el) {
    if (!el) {
      return [];
    }
    if (el.length === undefined || el.tagName === 'FORM') {
      let arr = new Array(1);
      arr[0] = el;
      return arr;
    } else {
      return el;
    }
  };

  /**
   * Create HTML elements from html string
   * @param {String} str Html string (only 1 root html tag)
   * @return {Node} HTML elements
   */
  Xt.createElement = function (str) {
    let div = document.createElement('div');
    div.innerHTML = str.trim();
    return div.firstChild;
  };

  /**
   * autoClose inside Element
   * @param {Node|HTMLElement|EventTarget|Window} el Element container
   */
  Xt.autoClose = function (el) {
    let query = '[data-xt-namespace^="drop-xt-"]';
    for (let drop of el.querySelectorAll(query)) {
      drop.dispatchEvent(new CustomEvent('off.xt'));
    }
  };

  /**
   * Set scrollbar width of document
   * @param {Boolean} force Force recalc
   */
  Xt.setScrollbarWidth = function (force = false) {
    if (Xt.scrollbarWidth === undefined) {
      let scrollbarWidthHandler = Xt.dataStorage.put(window, 'resize.scrollbar',
        Xt.setScrollbarWidth.bind(this, true));
      addEventListener('resize', scrollbarWidthHandler);
    }
    if (force || Xt.scrollbarWidth === undefined) {
      // add outer
      let outer = document.createElement('div');
      outer.style.visibility = 'hidden';
      outer.style.width = '100%';
      outer.style.msOverflowStyle = 'scrollbar'; // needed for WinJS apps
      outer.classList.add('xt-ignore', 'overflow-style');
      document.body.appendChild(outer);
      // force scrollbars
      outer.style.overflow = 'scroll';
      // add inner
      let inner = document.createElement('div');
      inner.style.width = '100%';
      inner.classList.add('xt-ignore');
      outer.appendChild(inner);
      // return
      let widthNoScroll = outer.offsetWidth;
      let widthWithScroll = inner.offsetWidth;
      Xt.scrollbarWidth = widthNoScroll - widthWithScroll;
      // remove
      outer.remove();
    }
  };

  /**
   * if full width return '' else return value in px
   * @param {Number|String} width
   * @returns {String} Value in px
   */
  Xt.normalizeWidth = function (width) {
    width = parseFloat(width);
    if (width + Xt.scrollbarWidth >= window.innerWidth) {
      width = '';
    } else {
      width += 'px';
    }
    return width;
  };

  /**
   * fix scrollbar spacing when changing overflow adding padding
   * @param {Array|Node|HTMLElement|EventTarget|Window} elements Elements to add padding
   */
  Xt.scrollbarSpaceOn = function (container) {
    let width = Xt.scrollbarWidth;
    container.style.paddingRight = width + 'px';
    // backdrop
    let backdrops = container.querySelectorAll('.backdrop');
    for (let backdrop of backdrops) {
      backdrop.style.right = width + 'px';
    }
    // xt-fixed
    let elements = container.querySelectorAll('.xt-fixed');
    for (let element of elements) {
      element.style.paddingRight = '';
      let style = getComputedStyle(element);
      if (Xt.normalizeWidth(element.clientWidth) === '' || getComputedStyle(element).right) { // only if full width or right position
        let padding = style.paddingRight;
        let str = 'calc(' + padding + ' + ' + width + 'px)';
        element.classList.add('transition-none');
        requestAnimationFrame(function () {
          element.style.paddingRight = str;
          requestAnimationFrame(function () {
            element.classList.remove('transition-none');
          });
        });
      }
    }
  };

  /**
   * fix scrollbar spacing when changing overflow adding padding
   * @param {Array} elements Elements to remove padding
   */
  Xt.scrollbarSpaceOff = function (container) {
    container.style.paddingRight = '';
    // backdrop
    let backdrops = container.querySelectorAll('.backdrop');
    for (let backdrop of backdrops) {
      backdrop.style.right = '';
    }
    // xt-fixed
    let elements = container.querySelectorAll('.xt-fixed');
    for (let element of elements) {
      element.classList.add('transition-none');
      requestAnimationFrame(function () {
        element.style.paddingRight = '';
        requestAnimationFrame(function () {
          element.classList.remove('transition-none');
        });
      });
    }
  };

  /**
   * ignoreOnce
   * @param {Node|HTMLElement|EventTarget|Window} el
   */
  Xt.ignoreOnce = function (el) {
    if (el.classList.contains('xt-ignore--once')) {
      requestAnimationFrame(function () { // @FIX react when componentDidMount
        requestAnimationFrame(function () { // @FIX react when componentDidMount
          el.classList.remove('xt-ignore', 'xt-ignore--once');
        });
      });
    }
  }

  /**
   * get transition or animation time
   * @param {Node|HTMLElement|EventTarget|Window} el Element animating
   * @param {Number} timing Force duration in milliseconds
   * @returns {Number} Time in milliseconds
   */
  Xt.animTime = function (el, timing = null) {
    if (timing || timing === 0) {
      return timing;
    } else {
      let style = getComputedStyle(el);
      let transition = parseFloat(style.transitionDuration) + parseFloat(style.transitionDelay);
      let animation = parseFloat(style.animationDuration) + parseFloat(style.animationDelay);
      if (transition || animation) {
        timing = Math.max(transition, animation);
      }
      return timing * 1000;
    }
  };

  /**
   * execute function after transition or animation
   * @param {Node|HTMLElement|EventTarget|Window} el Element animating
   * @param {Function} func Function to execute after transition or animation
   * @param {String} suffix Timeout suffix
   */
  Xt.animTimeout = function (el, func, suffix = '') {
    clearTimeout(Xt.dataStorage.get(el, 'xtAnimTimeout' + suffix));
    Xt.dataStorage.set(el, 'xtAnimTimeout' + suffix, setTimeout(func, Xt.animTime(el)));
  };

  /**
   * clear animTimeout
   * @param {Node|HTMLElement|EventTarget|Window} el Element animating
   * @param {String} suffix Timeout suffix
   */
  Xt.animTimeoutClear = function (el, suffix = '') {
    clearTimeout(Xt.dataStorage.get(el, 'xtAnimTimeout' + suffix));
  };

  /**
   * return window percent if percent string
   * @param {Number|String} num Number to check
   * @returns {Number}
   */
  Xt.windowPercent = function (num) {
    if (typeof num == 'string' || num instanceof String) {
      if (num.indexOf('%') !== -1) {
        num = Xt.windowHeight * parseFloat(num) / 100;
      }
    }
    return num;
  };

  /**
   * query array of elements or element
   * @param {Node|HTMLElement|NodeList|Array} element Element to search from
   * @param {String} query Query for querySelectorAll
   * @returns {Array}
   */
  Xt.queryAll = function (element, query) {
    if (!query) {
      return [];
    }
    if (!element.length) {
      // search element
      return Xt.arrSingle(element.querySelectorAll(query));
    } else {
      // search array
      let arr = [];
      for (let el of element) {
        arr.push(...el.querySelectorAll(query));
      }
      return arr;
    }
  };

  /**
   * check element visibility
   * @param {Node|HTMLElement|EventTarget|Window} el Element animating
   * @returns {Boolean}
   */
  Xt.visible = function (el) {
    return !!(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
  };

  /**
   * Fix resize event multiple calls and adds delay on resize and scroll events
   * @param {Event|Object} e Event
   * @param {Node|HTMLElement|EventTarget|Window} element Element to save timeout
   * @param {Function} func Function to execute
   * @param {String} prefix Timeout prefix
   * @param {Boolean} instant If instant
   */
  Xt.eventDelay = function (e, element, func, prefix = '', instant = false) {
    let container = document.documentElement;
    if (e && e.type && (e.type === 'resize' || e.type === 'scroll')) {
      let delay = instant ? false : Xt[e.type + 'Delay'];
      if (e.type === 'resize') {
        // multiple calls check
        if (window.innerWidth === Xt.dataStorage.get(container, 'xtEventDelay')) { // only width no height because it changes on scroll on mobile
          return false;
        }
        // save after a frame to execute all eventDelay
        cancelAnimationFrame(Xt.dataStorage.get(container, 'xtEventDelayFrame'));
        Xt.dataStorage.set(container, 'xtEventDelayFrame', requestAnimationFrame(function () {
          Xt.dataStorage.set(container, 'xtEventDelay', window.innerWidth);
        }));
      }
      // delay
      if (delay === false) {
        // func
        func(e);
      } else {
        clearTimeout(Xt.dataStorage.get(element, 'xt' + e.type + prefix + 'Timeout'));
        Xt.dataStorage.set(element, 'xt' + e.type + prefix + 'Timeout', setTimeout(function () {
          // func
          func(e);
        }, delay))
      }
    } else {
      // func
      func(e);
    }
  };

  Xt.dataStorage.set(document.documentElement, 'xtEventDelay', window.innerWidth);

  /**
   * Xt.windowHeight
   * vindow height value only on width resize to fix mobile window height changes
   */

  addEventListener('resize', function (e) {
    Xt.eventDelay(e, document.documentElement, function () {
      Xt.windowHeightSet();
    }, 'xtWindowHeight' + 'Resize', true);
  });

  Xt.windowHeightSet = function () {
    Xt.windowHeight = window.innerHeight;
    /* https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
     * height: 100vh;
     * height: calc(var(--vh, 1vh) * 100);
     */
    document.documentElement.style.setProperty('--vh', (Xt.windowHeight * 0.01) + 'px');
  };

  /**
   * passive events
   * https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Safely_detecting_option_support
   */

  Xt.passiveSupported = false;

  try {
    let options = {
      get passive() {
        Xt.passiveSupported = true;
      }
    };
    addEventListener('test', options, options);
    removeEventListener('test', options, options);
  } catch (err) {
    Xt.passiveSupported = false;
  }

  //////////////////////

}

//////////////////////
// export
//////////////////////

typeof define === 'function' && define.amd ? define(Xt) :
  global.Xt = Xt;
