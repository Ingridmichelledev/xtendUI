/*! xtend (https://getxtend.com/)
@copyright (c) 2017 - 2018 Riccardo Caroli
@license MIT (https://github.com/minimit/xtend-library/blob/master/LICENSE) */

'use strict';

//////////////////////
// constructor
//////////////////////

const Xt = {};

//////////////////////
// properties
//////////////////////

Xt.currents = {}; // Xt currents based on namespace (so shared between Xt objects)

//////////////////////
// init
//////////////////////

/**
 * init all data-xt classes
 */
Xt.init = function (containers = document.documentElement) {
  containers = Xt.arrSingle(containers);
  for (let container of containers) {
    // xt
    for (let el of container.querySelectorAll('[data-xt-toggle]')) {
      new Xt.Toggle(el);
    }
    for (let el of container.querySelectorAll('[data-xt-drop]')) {
      new Xt.Drop(el);
    }
    for (let el of container.querySelectorAll('[data-xt-overlay]')) {
      new Xt.Overlay(el);
    }
    for (let el of container.querySelectorAll('[data-xt-slider]')) {
      new Xt.Slider(el);
    }
    for (let el of container.querySelectorAll('[data-xt-fade]')) {
      new Xt.Fade(el);
    }
    for (let el of container.querySelectorAll('[data-xt-sticky]')) {
      new Xt.Sticky(el);
    }
    for (let el of Array.from(container.querySelectorAll('a, button')).filter(x => x.querySelectorAll('.btn').length !== 0)) {
      Xt.btnMerge.init(el);
    }
  }
};

// init all

if (document.readyState === "loading") {
  document.addEventListener('DOMContentLoaded', function () {
    Xt.init();
  });
} else {
  Xt.requestAnimationFrame.call(window, function () {
    Xt.init();
  });
}

// mutation observer

Xt.initObserver = new MutationObserver(function (mutationsList) {
  for (let mutation of mutationsList) {
    if (mutation.type == 'childList') {
      for (let added of mutation.addedNodes) {
        if (added.nodeType === 1) {
          //console.log(added);
          Xt.init(added);
        }
      }
    }
  }
});
Xt.initObserver.observe(document, {characterData: false, attributes: false, childList: true, subtree: true});

//////////////////////
// btnMerge
// pass .hover and .active classes to .btn inside
//////////////////////

Xt.btnMerge = {

  /**
   * init to pass .hover and .active to .btn inside Element
   * @param {Node|HTMLElement} el Element
   */
  init: function (el) {
    if (!el.dataset.xtBtnMerge) {
      el.dataset.xtBtnMerge = 'true';
      el.removeEventListener('mouseenter', Xt.btnMerge.hoverOn);
      el.addEventListener('mouseenter', Xt.btnMerge.hoverOn);
      el.removeEventListener('mouseleave', Xt.btnMerge.hoverOff);
      el.addEventListener('mouseleave', Xt.btnMerge.hoverOff);
      el.removeEventListener('mousedown', Xt.btnMerge.activeOn);
      el.addEventListener('mousedown', Xt.btnMerge.activeOn);
      window.removeEventListener('mouseup', Xt.btnMerge.activeOff.bind(el));
      window.addEventListener('mouseup', Xt.btnMerge.activeOff.bind(el));
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
// dataStorage
// map storage for HTML elements
//////////////////////

Xt.dataStorage = {

  /**
   * properties
   */
  _storage: new WeakMap(),

  /**
   * put key/obj pair on element's map
   * @param {Node|HTMLElement|Window} element
   * @param {String} key
   * @param {Object|Function} obj
   * @returns {Object|Function}
   */
  put: function (element, key, obj) {
    // new map if not already there
    if (!this._storage.has(key)) {
      this._storage.set(element, new Map());
    }
    // if already there return
    if (this._storage.get(element).get(key)) {
      return this._storage.get(element).get(key);
    }
    // else put
    this._storage.get(element).set(key, obj);
    return this._storage.get(element).get(key);
  },

  /**
   * get obj from key on element's map
   * @param {Node|HTMLElement|Window} element
   * @param {String} key
   * @returns {Object|Function}
   */
  get: function (element, key) {
    // if no map return null
    if (!this._storage.get(element)) {
      return null;
    }
    // else get
    return this._storage.get(element).get(key);
  },

  /**
   * has key on element's map
   * @param {Node|HTMLElement|Window} element
   * @param {String} key
   * @returns {Boolean}
   */
  has: function (element, key) {
    // has
    return this._storage.get(element).has(key);
  },

  /**
   * remove element's map key
   * @param {Node|HTMLElement|Window} element
   * @param {String} key
   * @returns {Boolean}
   */
  remove: function (element, key) {
    // remove
    let ret = this._storage.get(element).delete(key);
    if (!this._storage.get(key).size === false) {
      this._storage.delete(element);
    }
    return ret;
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
    let focusChangeKeyHandler = Xt.dataStorage.put(document, 'focusChangeKeyHandler', Xt.focus.changeKey);
    document.removeEventListener('keyup', focusChangeKeyHandler);
    document.addEventListener('keyup', focusChangeKeyHandler);
    // event mouse
    let focusChangeOtherHandler = Xt.dataStorage.get(document, 'focusChangeOtherHandler');
    document.removeEventListener('mousedown', focusChangeOtherHandler);
    document.removeEventListener('touchstart', focusChangeOtherHandler);
    document.removeEventListener('pointerdown', focusChangeOtherHandler);
  },

  /**
   * disable focus change events
   */
  off: function () {
    // event
    let focusChangeKeyHandler = Xt.dataStorage.get(document, 'focusChangeKeyHandler');
    document.removeEventListener('keyup', focusChangeKeyHandler);
    // event mouse
    let focusChangeOtherHandler = Xt.dataStorage.put(document, 'focusChangeOtherHandler', Xt.focus.changeOther);
    document.addEventListener('mousedown', focusChangeOtherHandler);
    document.addEventListener('touchstart', focusChangeOtherHandler);
    document.addEventListener('pointerdown', focusChangeOtherHandler);
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

Xt.focus.on();

//////////////////////
// focusLimit
// util to limit focus inside HTML elements
//////////////////////

Xt.focusLimit = {

  /**
   * activate focusLimit to an element
   * @param {Node|HTMLElement} element Element
   */
  on: function (element) {
    // @FIX Xt.focus when clicking and not used tab before
    Xt.focus.current = Xt.focus.current ? Xt.focus.current : document.activeElement;
    // vars
    let focusable = Array.from(element.querySelectorAll('a, button, details, input, iframe, select, textarea'));
    focusable = focusable.filter(x => x.matches(':not([disabled]), :not([tabindex="-1"])')); // filter out parent
    let first = focusable[0];
    let last = focusable[focusable.length - 1];
    // event
    let focusLimitHandler = Xt.dataStorage.put(document, 'focusLimitHandler', Xt.focusLimit.limit.bind(this).bind(this, focusable, first, last));
    document.removeEventListener('keyup', focusLimitHandler);
    document.addEventListener('keyup', focusLimitHandler);
  },

  /**
   * deactivate focusLimit to an element
   */
  off: function () {
    // event
    let focusLimitHandler = Xt.dataStorage.get(document, 'focusLimitHandler');
    document.removeEventListener('keyup', focusLimitHandler);
  },

  /**
   * limit even on focus when activated
   * @param {NodeList|Array} focusable Focusable elements
   * @param {Node|HTMLElement} first First focusable element
   * @param {Node|HTMLElement} last Last focusable element
   * @param {Event} e Event
   */
  limit: function (focusable, first, last, e) {
    let code = e.keyCode ? e.keyCode : e.which;
    if (code === 9) {
      if (!focusable.includes(document.activeElement)) {
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
// utils
//////////////////////

/**
 * request animation frame
 * @returns {Number} animationFrameID
 * USAGE: let animationFrame = Xt.requestAnimationFrame.call(window, function () {});
 */
Xt.requestAnimationFrame = function () {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) {
    window.setTimeout(callback, 1000 / 60);
  };
}();

/**
 * cancel animation frame
 * USAGE: Xt.cancelAnimationFrame.call(window, animationFrameID);
 */
Xt.cancelAnimationFrame = function () {
  return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || function (callback) {
    window.clearTimeout(id);
  };
}();

/**
 * Check if event target is inside elements
 * @param {Event} e Event to check target
 * @param {NodeList|Array} targets Elements to check inside
 * @return {Boolean}
 */
Xt.checkInside = function (e, targets) {
  let result = false;
  for (let t of targets) {
    if (e.target === t || t.contains(e.target)) {
      result = true;
    }
  }
  return result;
};

/**
 * Check if event target is outside elements
 * @param {Event} e Event to check target
 * @param {NodeList|Array} targets Elements to check Outside
 * @return {Boolean}
 */
Xt.checkOutside = function (e, targets) {
  let result = true;
  for (let t of targets) {
    if (e.target === t || t.contains(e.target)) {
      result = false;
    }
  }
  return result;
};

/**
 * Get scrollbar width of document
 * @param {Boolean} force Force recalc
 * @returns {Number} Scrollbar width
 */
Xt.scrollbarWidth = function (force = false) {
  if (Xt.scrollbarWidthVal === undefined) {
    let scrollbarWidthHandler = Xt.dataStorage.put(window, 'scrollbarWidthHandler', Xt.scrollbarWidth.bind(this, true));
    window.removeEventListener('resize', scrollbarWidthHandler);
    window.addEventListener('resize', scrollbarWidthHandler);
  }
  if (force || Xt.scrollbarWidthVal === undefined) {
    // add outer
    let outer = document.createElement('div');
    outer.style.visibility = 'hidden';
    outer.style.width = '100px';
    outer.style.msOverflowStyle = 'scrollbar'; // needed for WinJS apps
    document.body.appendChild(outer);
    let widthNoScroll = outer.offsetWidth;
    // force scrollbars
    outer.style.overflow = 'scroll';
    // add inner
    let inner = document.createElement('div');
    inner.style.width = '100%';
    outer.appendChild(inner);
    let widthWithScroll = inner.offsetWidth;
    // remove
    outer.parentNode.removeChild(outer);
    // return
    Xt.scrollbarWidthVal = widthNoScroll - widthWithScroll;
  }
  return Xt.scrollbarWidthVal;
};

/**
 * Get unique id
 * @returns {String} Unique id
 */
Xt.getUniqueID = function () {
  Xt.uid = Xt.uid !== undefined ? Xt.uid : 0;
  return 'xt-' + (Xt.uid++);
};

/**
 * Get unique number
 * @returns {Number} Unique number
 */
Xt.getUniqueNum = function () {
  Xt.unumber = Xt.unumber !== undefined ? Xt.unumber : 0;
  return Xt.unumber++;
};

/**
 * Merge objects
 * @param {Array} arr Array of objects to merge
 * @returns {Object} Merged object
 */
Xt.merge = function (arr) {
  let final = {};
  for (let obj of arr) {
    for (let [key, value] of Object.entries(obj)) {
      final[key] = value;
    }
  }
  return final;
};

/**
 * Make an array when element is only one
 * @param {Object|Array} element
 * @returns {Array}
 */
Xt.arrSingle = function (element) {
  if (!element) {
    return [];
  }
  if (element.length === undefined) {
    let arr = new Array(1);
    arr[0] = element;
    return arr;
  } else {
    return element;
  }
};

/**
 * Create HTML elements from html string
 * @param {String} str Html string (only 1 root html tag)
 * @return {Node|HTMLElement} HTML elements
 */
Xt.createElement = function (str) {
  let div = document.createElement('div');
  div.innerHTML = str.trim();
  return div.firstChild;
};

/**
 * Query element's parents
 * @param {Node|HTMLElement} element Child element
 * @param {String} query Query parents
 * @return {Array} Parents elements by query
 */
Xt.parents = function (element, query) {
  let parents = [];
  while (element = element.parentElement.closest(query)) {
    parents.push(element);
  }
  return parents;
};

/**
 * get transition or animation duration
 * @param {Node|HTMLElement} el Element animating
 * @param {Number} timing Force duration
 * @returns {Number} Time in milliseconds
 */
Xt.animDuration = function (el, timing = null) {
  if (timing) {
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

//////////////////////
// export
//////////////////////

export {Xt};
global.Xt = Xt;
