/*! xtend (https://getxtend.com/)
@copyright (c) 2017 - 2018 Riccardo Caroli
@license MIT (https://github.com/minimit/xtend-library/blob/master/LICENSE) */

'use strict';

import 'babel-polyfill';

import {XtToggle, XtDrop, XtOverlay, XtFade, XtSticky} from './xtend';

//////////////////////
// constructor
//////////////////////

const XtUtil = {};

//////////////////////
// properties
//////////////////////

// Xt currents based on namespace (so shared between Xt objects)

XtUtil.currents = {};

//////////////////////
// methods
//////////////////////

/**
 * init all data-xt classes
 */
XtUtil.initAll = function (container = document) {
  // xt-toggle
  Array.from(container.querySelectorAll('[data-xt-toggle]')).forEach(function (el) {
    new XtToggle(el);
  });
  Array.from(container.querySelectorAll('[data-xt-drop]')).forEach(function (el) {
    new XtDrop(el);
  });
  Array.from(container.querySelectorAll('[data-xt-overlay]')).forEach(function (el) {
    new XtOverlay(el);
  });
  Array.from(container.querySelectorAll('[data-xt-fade]')).forEach(function (el) {
    new XtFade(el);
  });
  Array.from(container.querySelectorAll('[data-xt-sticky]')).forEach(function (el) {
    new XtSticky(el);
  });
};

/**
 * request animation frame
 * @returns {Number} animationFrameID
 * USAGE: let animationFrame = XtUtil.requestAnimationFrame.call(window, function () {});
 */
XtUtil.requestAnimationFrame = function () {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) {
    window.setTimeout(callback, 1000 / 60);
  };
}();

/**
 * cancel animation frame
 * USAGE: XtUtil.cancelAnimationFrame.call(window, animationFrameID);
 */
XtUtil.cancelAnimationFrame = function () {
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
XtUtil.checkInside = function (e, targets) {
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
XtUtil.checkOutside = function (e, targets) {
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
 * @returns {Number} Scrollbar width
 */
XtUtil.scrollbarWidth = function () {
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
  return widthNoScroll - widthWithScroll;
};

/**
 * Get unique id
 * @returns {String} Unique id
 */
XtUtil.getUniqueID = function () {
  XtUtil.uid = XtUtil.uid !== undefined ? XtUtil.uid : 0;
  return 'unique-id-' + (XtUtil.uid++);
};

/**
 * Get unique number
 * @returns {Number} Unique number
 */
XtUtil.getUniqueNum = function () {
  XtUtil.unumber = XtUtil.unumber !== undefined ? XtUtil.unumber : 0;
  return XtUtil.unumber++;
};

/**
 * Merge objects
 * @param {Array} arr Array of objects to merge
 * @returns {Object} Merged object
 */
XtUtil.merge = function (arr) {
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
XtUtil.arrSingle = function (element) {
  if (element.length === undefined) {
    let arr = new Array(1);
    arr[0] = element;
    return arr;
  } else {
    return element;
  }
};

/**
 * Create DOM element from html string
 * @param {String} str Html string (only 1 root html tag)
 * @return {Node|HTMLElement} DOM element
 */
XtUtil.createElement = function (str) {
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
XtUtil.parents = function (element, query) {
  let parents = [];
  while (element = element.parentElement.closest(query)) {
    parents.push(element);
  }
  return parents;
};

/**
 * Get element index
 * @param {Node|HTMLElement} node Element to check the index of
 * @return {Number} Element's index
 */
/*
XtUtil.getElementIndex = function (node) {
  let index = 0;
  while ((node = node.previousElementSibling)) {
    index++;
  }
  return index;
};
*/

/**
 * dataStorage
 * https://stackoverflow.com/questions/29222027/vanilla-alternative-to-jquery-data-function-any-native-javascript-alternati
 * USAGE: XtUtil.dataStorage.put(element, 'key', value);
 */
XtUtil.dataStorage = {
  _storage: new WeakMap(),
  put: function (element, key, obj) {
    if (!this._storage.has(key)) {
      this._storage.set(element, new Map());
    }
    this._storage.get(element).set(key, obj);
    return this._storage.get(element).get(key);
  },
  get: function (element, key) {
    return this._storage.get(element).get(key);
  },
  has: function (element, key) {
    return this._storage.get(element).has(key);
  },
  remove: function (element, key) {
    let ret = this._storage.get(element).delete(key);
    if (!this._storage.get(key).size === false) {
      this._storage.delete(element);
    }
    return ret;
  }
};

//////////////////////
// api
//////////////////////

window.XtUtil = XtUtil;
export {XtUtil};

//////////////////////
// scope polyfill
// https://stackoverflow.com/questions/6481612/queryselector-search-immediate-children
// USAGE: querySelectorAll(':scope > .selector');
//////////////////////

(function (doc, proto) {
  try { // check if browser supports :scope natively
    doc.querySelector(':scope body');
  } catch (err) { // polyfill native methods if it doesn't
    ['querySelector', 'querySelectorAll'].forEach(function (method) {
      let nativ = proto[method];
      proto[method] = function (selectors) {
        if (/(^|,)\s*:scope/.test(selectors)) { // only if selectors contains :scope
          let id = this.id; // remember current element id
          this.id = 'ID_' + Date.now(); // assign new unique id
          selectors = selectors.replace(/((^|,)\s*):scope/g, '$1#' + this.id); // replace :scope with #ID
          let result = doc[method](selectors);
          this.id = id; // restore previous id
          return result;
        } else {
          return nativ.call(this, selectors); // use native code for other selectors
        }
      }
    });
  }
})(window.document, Element.prototype);

//////////////////////
// matches polyfill
// https://github.com/jonathantneal/closest
// USAGE: element.matches(query);
//////////////////////

(function (proto) {
  if (typeof proto.matches !== 'function') {
    proto.matches = proto.msMatchesSelector || proto.webkitMatchesSelector || function matches(query) {
      let el = this;
      let els = (el.document || el.ownerDocument).querySelectorAll(query);
      let index = 0;
      while (els[index] && els[index] !== el) {
        ++index;
      }
      return Boolean(els[index]);
    };
  }
})(Element.prototype);

//////////////////////
// closest polyfill
// https://github.com/jonathantneal/closest
// USAGE: element.closest(query);
//////////////////////

(function (proto) {
  if (typeof proto.closest !== 'function') {
    proto.closest = function closest(query) {
      let el = this;
      while (el && el.nodeType === 1) {
        if (el.matches(query)) {
          return el;
        }
        el = el.parentNode;
      }
      return null;
    };
  }
})(Element.prototype);

//////////////////////
// CustomEvent polyfill
// https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent
//////////////////////

(function () {
  if (typeof window.CustomEvent === "function") {
    return false;
  }

  function CustomEvent(event, params) {
    params = params || {bubbles: false, cancelable: false, detail: undefined};
    let evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
    return evt;
  }

  CustomEvent.prototype = window.Event.prototype;
  window.CustomEvent = CustomEvent;
})();

//////////////////////
// scrollingElement polyfill
// https://github.com/yangg/scrolling-element
//////////////////////

(function () {
  if (document.scrollingElement) {
    return;
  }
  let element = null;

  function scrollingElement() {
    if (element) {
      return element;
    } else if (document.body.scrollTop) {
      // speed up if scrollTop > 0
      return (element = document.body);
    }
    let iframe = document.createElement('iframe');
    iframe.style.height = '1px';
    document.documentElement.appendChild(iframe);
    let doc = iframe.contentWindow.document;
    doc.write('<!DOCTYPE html><div style="height:9999em">x</div>');
    doc.close();
    let isCompliant = doc.documentElement.scrollHeight > doc.body.scrollHeight;
    iframe.parentNode.removeChild(iframe);
    return (element = isCompliant ? document.documentElement : document.body);
  }

  Object.defineProperty(document, 'scrollingElement', {
    get: scrollingElement
  })
})();
