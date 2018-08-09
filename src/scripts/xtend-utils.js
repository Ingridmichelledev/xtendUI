/*! xtend (https://getxtend.com/)
@copyright (c) 2017 - 2018 Riccardo Caroli
@license MIT (https://github.com/minimit/xtend-library/blob/master/LICENSE) */

'use strict';

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
  for (let el of container.querySelectorAll('[data-xt-toggle]')) {
    new XtToggle(el);
  }
  for (let el of container.querySelectorAll('[data-xt-drop]')) {
    new XtDrop(el);
  }
  for (let el of container.querySelectorAll('[data-xt-overlay]')) {
    new XtOverlay(el);
  }
  for (let el of container.querySelectorAll('[data-xt-fade]')) {
    new XtFade(el);
  }
  for (let el of container.querySelectorAll('[data-xt-sticky]')) {
    new XtSticky(el);
  }
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
  return 'xt-' + (XtUtil.uid++);
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

/**
 * Add html.xt-focus when tab focusing and remember XtUtil.focus
 */
let xtFocus = function(e) {
  let code = e.keyCode ? e.keyCode : e.which;
  if (code === 9) {
    if (!document.documentElement.classList.contains('xt-focus')) {
      document.documentElement.classList.add('xt-focus');
    }
    if (!XtUtil.focusBlock) {
      XtUtil.focus = document.activeElement;
    }
  }
};

XtUtil.focus = null;
XtUtil.focusBlock = false;

let xtFocusHandler = XtUtil.dataStorage.put(document, 'xtFocusHandler', xtFocus);
document.removeEventListener('keyup', xtFocusHandler);
document.addEventListener('keyup', xtFocusHandler);

//////////////////////
// api
//////////////////////

window.XtUtil = XtUtil;
export {XtUtil};

//////////////////////
// closest polyfill
// https://github.com/jonathantneal/closest
// USAGE: element.closest(query);
//////////////////////

(function (ElementProto) {
  if (typeof ElementProto.matches !== 'function') {
    ElementProto.matches = ElementProto.msMatchesSelector || ElementProto.mozMatchesSelector || ElementProto.webkitMatchesSelector || function matches(selector) {
      var element = this;
      var elements = (element.document || element.ownerDocument).querySelectorAll(selector);
      var index = 0;
      while (elements[index] && elements[index] !== element) {
        ++index;
      }
      return Boolean(elements[index]);
    };
  }
  if (typeof ElementProto.closest !== 'function') {
    ElementProto.closest = function closest(selector) {
      var element = this;
      while (element && element.nodeType === 1) {
        if (element.matches(selector)) {
          return element;
        }
        element = element.parentNode;
      }
      return null;
    };
  }
})(window.Element.prototype);

//////////////////////
// scope polyfill
// https://github.com/jonathantneal/element-qsa-scope
// USAGE: querySelectorAll(':scope > .selector');
//////////////////////

(function (ElementPrototype) {
  try {
    // test for scope support
    document.querySelector(':scope *');
  } catch (error) {
    let polyfill = function (qsa) {
      return function (selectors) {
        // whether the selectors contain :scope
        let hasScope = selectors && scope.test(selectors);
        if (hasScope) {
          // fallback attribute
          let attr = 'q' + Math.floor(Math.random() * 9000000) + 1000000;
          // replace :scope with the fallback attribute
          arguments[0] = selectors.replace(scope, '[' + attr + ']');
          // add the fallback attribute
          this.setAttribute(attr, '');
          // results of the qsa
          let elementOrNodeList = qsa.apply(this, arguments);
          // remove the fallback attribute
          this.removeAttribute(attr);
          // return the results of the qsa
          return elementOrNodeList;
        } else {
          // return the results of the qsa
          return qsa.apply(this, arguments);
        }
      };
    }
    // scope regex
    let scope = /:scope(?![\w-])/gi;
    // polyfill Element#querySelector
    let querySelectorWithScope = polyfill(ElementPrototype.querySelector);
    ElementPrototype.querySelector = function querySelector(selectors) {
      return querySelectorWithScope.apply(this, arguments);
    };
    // polyfill Element#querySelectorAll
    let querySelectorAllWithScope = polyfill(ElementPrototype.querySelectorAll);
    ElementPrototype.querySelectorAll = function querySelectorAll(selectors) {
      return querySelectorAllWithScope.apply(this, arguments);
    };
    // polyfill Element#matches
    if (ElementPrototype.matches) {
      let matchesWithScope = polyfill(ElementPrototype.matches);
      ElementPrototype.matches = function matches(selectors) {
        return matchesWithScope.apply(this, arguments);
      };
    }
    // polyfill Element#closest
    if (ElementPrototype.closest) {
      let closestWithScope = polyfill(ElementPrototype.closest);
      ElementPrototype.closest = function closest(selectors) {
        return closestWithScope.apply(this, arguments);
      };
    }
  }
})(Element.prototype);

//////////////////////
// prepend polyfill
// https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/prepend
//////////////////////

(function (arr) {
  arr.forEach(function (item) {
    if (item.hasOwnProperty('prepend')) {
      return;
    }
    Object.defineProperty(item, 'prepend', {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function prepend() {
        var argArr = Array.prototype.slice.call(arguments),
          docFrag = document.createDocumentFragment();

        argArr.forEach(function (argItem) {
          var isNode = argItem instanceof Node;
          docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
        });

        this.insertBefore(docFrag, this.firstChild);
      }
    });
  });
})([Element.prototype, Document.prototype, DocumentFragment.prototype]);

//////////////////////
// append polyfill
// https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/append
//////////////////////

(function (arr) {
  arr.forEach(function (item) {
    if (item.hasOwnProperty('append')) {
      return;
    }
    Object.defineProperty(item, 'append', {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function append() {
        let argArr = Array.prototype.slice.call(arguments),
          docFrag = document.createDocumentFragment();

        argArr.forEach(function (argItem) {
          let isNode = argItem instanceof Node;
          docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
        });

        this.appendChild(docFrag);
      }
    });
  });
})([Element.prototype, Document.prototype, DocumentFragment.prototype]);

//////////////////////
// before polyfill
// https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/before
//////////////////////

(function (arr) {
  arr.forEach(function (item) {
    if (item.hasOwnProperty('before')) {
      return;
    }
    Object.defineProperty(item, 'before', {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function before() {
        let argArr = Array.prototype.slice.call(arguments),
          docFrag = document.createDocumentFragment();

        argArr.forEach(function (argItem) {
          let isNode = argItem instanceof Node;
          docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
        });

        this.parentNode.insertBefore(docFrag, this);
      }
    });
  });
})([Element.prototype, CharacterData.prototype, DocumentType.prototype]);

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
