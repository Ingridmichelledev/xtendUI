!function(){return function t(e,i,n){function r(o,l){if(!i[o]){if(!e[o]){var s="function"==typeof require&&require;if(!l&&s)return s(o,!0);if(a)return a(o,!0);var c=new Error("Cannot find module '"+o+"'");throw c.code="MODULE_NOT_FOUND",c}var d=i[o]={exports:{}};e[o][0].call(d.exports,function(t){return r(e[o][1][t]||t)},d,d.exports,t,e,i,n)}return i[o].exports}for(var a="function"==typeof require&&require,o=0;o<n.length;o++)r(n[o]);return r}}()({1:[function(t,e,i){
/*! xtend v0.4.27 (https://getxtend.com/)
@copyright (c) 2017 - 2018 Riccardo Caroli
@license MIT (https://github.com/minimit/xtend-library/blob/master/LICENSE) */
"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.XtUtil=void 0;var n=function(){return function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var i=[],n=!0,r=!1,a=void 0;try{for(var o,l=t[Symbol.iterator]();!(n=(o=l.next()).done)&&(i.push(o.value),!e||i.length!==e);n=!0);}catch(t){r=!0,a=t}finally{try{!n&&l.return&&l.return()}finally{if(r)throw a}}return i}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),r=t("./xtend"),a={currents:{},initAll:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,e=!0,i=!1,n=void 0;try{for(var a,o=t.querySelectorAll("[data-xt-toggle]")[Symbol.iterator]();!(e=(a=o.next()).done);e=!0){var l=a.value;new r.XtToggle(l)}}catch(t){i=!0,n=t}finally{try{!e&&o.return&&o.return()}finally{if(i)throw n}}var s=!0,c=!1,d=void 0;try{for(var u,f=t.querySelectorAll("[data-xt-drop]")[Symbol.iterator]();!(s=(u=f.next()).done);s=!0){var v=u.value;new r.XtDrop(v)}}catch(t){c=!0,d=t}finally{try{!s&&f.return&&f.return()}finally{if(c)throw d}}var h=!0,y=!1,m=void 0;try{for(var p,g=t.querySelectorAll("[data-xt-overlay]")[Symbol.iterator]();!(h=(p=g.next()).done);h=!0){var w=p.value;new r.XtOverlay(w)}}catch(t){y=!0,m=t}finally{try{!h&&g.return&&g.return()}finally{if(y)throw m}}var b=!0,O=!1,S=void 0;try{for(var k,x=t.querySelectorAll("[data-xt-fade]")[Symbol.iterator]();!(b=(k=x.next()).done);b=!0){var L=k.value;new r.XtFade(L)}}catch(t){O=!0,S=t}finally{try{!b&&x.return&&x.return()}finally{if(O)throw S}}var A=!0,X=!1,U=void 0;try{for(var q,E=t.querySelectorAll("[data-xt-sticky]")[Symbol.iterator]();!(A=(q=E.next()).done);A=!0){var F=q.value;new r.XtSticky(F)}}catch(t){X=!0,U=t}finally{try{!A&&E.return&&E.return()}finally{if(X)throw U}}}};a.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)},a.cancelAnimationFrame=window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||function(t){window.clearTimeout(id)},a.checkInside=function(t,e){var i=!1,n=!0,r=!1,a=void 0;try{for(var o,l=e[Symbol.iterator]();!(n=(o=l.next()).done);n=!0){var s=o.value;(t.target===s||s.contains(t.target))&&(i=!0)}}catch(t){r=!0,a=t}finally{try{!n&&l.return&&l.return()}finally{if(r)throw a}}return i},a.checkOutside=function(t,e){var i=!0,n=!0,r=!1,a=void 0;try{for(var o,l=e[Symbol.iterator]();!(n=(o=l.next()).done);n=!0){var s=o.value;(t.target===s||s.contains(t.target))&&(i=!1)}}catch(t){r=!0,a=t}finally{try{!n&&l.return&&l.return()}finally{if(r)throw a}}return i},a.scrollbarWidth=function(){var t=document.createElement("div");t.style.visibility="hidden",t.style.width="100px",t.style.msOverflowStyle="scrollbar",document.body.appendChild(t);var e=t.offsetWidth;t.style.overflow="scroll";var i=document.createElement("div");i.style.width="100%",t.appendChild(i);var n=i.offsetWidth;return t.parentNode.removeChild(t),e-n},a.getUniqueID=function(){return a.uid=void 0!==a.uid?a.uid:0,"unique-id-"+a.uid++},a.getUniqueNum=function(){return a.unumber=void 0!==a.unumber?a.unumber:0,a.unumber++},a.merge=function(t){var e={},i=!0,r=!1,a=void 0;try{for(var o,l=t[Symbol.iterator]();!(i=(o=l.next()).done);i=!0){var s=o.value,c=!0,d=!1,u=void 0;try{for(var f,v=Object.entries(s)[Symbol.iterator]();!(c=(f=v.next()).done);c=!0){var h=n(f.value,2),y=h[0],m=h[1];e[y]=m}}catch(t){d=!0,u=t}finally{try{!c&&v.return&&v.return()}finally{if(d)throw u}}}}catch(t){r=!0,a=t}finally{try{!i&&l.return&&l.return()}finally{if(r)throw a}}return e},a.arrSingle=function(t){if(void 0===t.length){var e=new Array(1);return e[0]=t,e}return t},a.createElement=function(t){var e=document.createElement("div");return e.innerHTML=t.trim(),e.firstChild},a.parents=function(t,e){for(var i=[];t=t.parentElement.closest(e);)i.push(t);return i},a.dataStorage={_storage:new WeakMap,put:function(t,e,i){return this._storage.has(e)||this._storage.set(t,new Map),this._storage.get(t).set(e,i),this._storage.get(t).get(e)},get:function(t,e){return this._storage.get(t).get(e)},has:function(t,e){return this._storage.get(t).has(e)},remove:function(t,e){var i=this._storage.get(t).delete(e);return 0===!this._storage.get(e).size&&this._storage.delete(t),i}},window.XtUtil=a,i.XtUtil=a,function(t,e){try{t.querySelector(":scope body")}catch(a){for(var i=["querySelector","querySelectorAll"],n=function(){var n=i[r],a=e[n];e[n]=function(e){if(/(^|,)\s*:scope/.test(e)){var i=this.id;this.id="ID_"+Date.now(),e=e.replace(/((^|,)\s*):scope/g,"$1#"+this.id);var r=t[n](e);return this.id=i,r}return a.call(this,e)}},r=0;r<i.length;r++)n()}}(window.document,Element.prototype)},{"./xtend":2}],2:[function(t,e,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.XtFade=i.XtSticky=i.XtOverlay=i.XtDrop=i.XtToggle=i.Xt=void 0;var n=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),r=t("./xtend-utils");function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function l(t){if(Array.isArray(t)){for(var e=0,i=Array(t.length);e<t.length;e++)i[e]=t[e];return i}return Array.from(t)}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var c=function(){function t(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments[2];if(s(this,t),this.object=e,this.object){this.defaults=this.constructor.defaults,this.options=r.XtUtil.merge([this.defaults,i]);var a=this.object.getAttribute(n);this.options=r.XtUtil.merge([this.options,a?JSON.parse(a):{}]),this.options.class&&(this.options.classes=[].concat(l(this.options.class.split(" ")))),this.initSetup(),this.initScope(),this.initEvents()}}return n(t,[{key:"initSetup",value:function(){var t=this.options;t.targets&&-1!==t.targets.indexOf("#")?(this.mode="all",this.container=document,t.max=1/0,this.namespace=t.targets.toString()+"-"+t.classes.toString()):(this.mode="unique",this.container=this.object,this.namespace=r.XtUtil.getUniqueID()),this.namespace=this.namespace.replace(/\W+/g,""),this.getCurrents()||this.setCurrents([])}},{key:"initScope",value:function(){var t=this,e=t.options;if(this.elements=[],e.elements&&(this.elements=r.XtUtil.arrSingle(this.container.querySelectorAll(e.elements))),this.elements.length||(this.elements=r.XtUtil.arrSingle(this.object),r.XtUtil.requestAnimationFrame.call(window,function(){var e="[data-xt-id="+t.namespace+"]";t.elements=r.XtUtil.arrSingle(document.querySelectorAll(e))})),e.targets){var i=Array.from(this.container.querySelectorAll(e.targets));i=i.filter(function(t){return!r.XtUtil.parents(t,e.targets).length}),this.targets=r.XtUtil.arrSingle(i)}if(e.appendTo){var n=document.querySelectorAll(e.appendTo);n.length&&this.targets.forEach(function(t){n[0].appendChild(t)})}var a=!0,o=!1,s=void 0;try{for(var c,d=this.elements[Symbol.iterator]();!(a=(c=d.next()).done);a=!0){c.value.setAttribute("data-xt-id",t.namespace)}}catch(t){o=!0,s=t}finally{try{!a&&d.return&&d.return()}finally{if(o)throw s}}r.XtUtil.requestAnimationFrame.call(window,function(){if(t.elements.length){var i=t.options.classes,n=!0,r=!1,a=void 0;try{for(var o,s=t.elements[Symbol.iterator]();!(n=(o=s.next()).done);n=!0){var c,d=o.value;(c=d.classList).contains.apply(c,l(i))&&t.eventOn(d)}}catch(t){r=!0,a=t}finally{try{!n&&s.return&&s.return()}finally{if(r)throw a}}var u=e.min-t.getCurrents().length;if(u)for(var f=0;f<u;f++)t.eventOn(t.elements[f])}})}},{key:"initEvents",value:function(){var t=this.options,e=!0,i=!1,n=void 0;try{for(var a,o=this.elements[Symbol.iterator]();!(e=(a=o.next()).done);e=!0){var s=a.value;if(t.on){var c=r.XtUtil.dataStorage.put(s,"xtOnHandler",this.eventOnHandler.bind(this).bind(this,s)),d=[].concat(l(t.on.split(" "))),u=!0,f=!1,v=void 0;try{for(var h,y=d[Symbol.iterator]();!(u=(h=y.next()).done);u=!0){var m=h.value;s.removeEventListener(m,c),s.addEventListener(m,c)}}catch(t){f=!0,v=t}finally{try{!u&&y.return&&y.return()}finally{if(f)throw v}}s.addEventListener("on.trigger",c)}if(t.off){var p=r.XtUtil.dataStorage.put(s,"xtOffHandler",this.eventOffHandler.bind(this).bind(this,s)),g=[].concat(l(t.off.split(" "))),w=!0,b=!1,O=void 0;try{for(var S,k=g[Symbol.iterator]();!(w=(S=k.next()).done);w=!0){var x=S.value;s.removeEventListener(x,p),s.addEventListener(x,p)}}catch(t){b=!0,O=t}finally{try{!w&&k.return&&k.return()}finally{if(b)throw O}}s.addEventListener("off.trigger",p)}}}catch(t){i=!0,n=t}finally{try{!e&&o.return&&o.return()}finally{if(i)throw n}}}},{key:"eventOnHandler",value:function(t,e){var i=this.container.querySelectorAll(".event-limit");i.length?r.XtUtil.checkOutside(e,i)&&this.eventOn(t):this.eventOn(t)}},{key:"eventOffHandler",value:function(t,e){var i=this.container.querySelectorAll(".event-limit");i.length?r.XtUtil.checkOutside(e,i)&&this.eventOff(t):this.eventOff(t)}},{key:"getElements",value:function(t){if(!this.elements||!this.elements.length)return{all:[],single:null};if("all"===this.mode)return{all:this.elements,single:this.elements[0]};if("unique"===this.mode){var e=t.getAttribute("data-group");if(e){var i=Array.from(this.elements).filter(function(t){return t.getAttribute("data-group")===e}),n=r.XtUtil.arrSingle(i);return{all:n,single:n[0]}}var a=t;return{all:r.XtUtil.arrSingle(a),single:a}}}},{key:"getTargets",value:function(t){if(!this.targets||!this.targets.length)return[];if("all"===this.mode)return this.targets;if("unique"===this.mode){var e=t.getAttribute("data-group"),i=Array.from(this.elements).filter(function(t){return t.getAttribute("data-group")===e}),n=Array.from(this.targets).filter(function(t){return t.getAttribute("data-group")===e}),a=void 0;return e?(a=n,r.XtUtil.arrSingle(a)):(a=n[i.findIndex(function(e){return e===t})],r.XtUtil.arrSingle(a))}}},{key:"getAdditional",value:function(){return this.object.querySelectorAll(this.options.additional)}},{key:"getCurrents",value:function(){return r.XtUtil.currents[this.namespace]}},{key:"setCurrents",value:function(t){r.XtUtil.currents[this.namespace]=t}},{key:"addCurrent",value:function(t){r.XtUtil.currents[this.namespace].push(t)}},{key:"removeCurrent",value:function(t){r.XtUtil.currents[this.namespace]=r.XtUtil.currents[this.namespace].filter(function(e){return e!==t})}},{key:"checkOn",value:function(t){var e;return!((e=t.classList).contains.apply(e,l(this.options.classes))&&!t.classList.contains("off-block")||t.classList.contains("on-block"))}},{key:"checkOff",value:function(t){var e;return!!(this.options.min-this.getCurrents().length)&&!(!(e=t.classList).contains.apply(e,l(this.options.classes))&&!t.classList.contains("on-block")||t.classList.contains("off-block"))}},{key:"eventOn",value:function(t){var e=this,i=e.options;if(this.checkOn(t)){var n=this.getElements(t);this.addCurrent(n.single);var r=this.getTargets(t),a=this.getAdditional(),o={elements:function(){e.activationOn(n.all,n,"elements")},targets:function(){e.activationOn(r,n,"targets")},additional:function(){e.activationOn(a,n,"additional")}},l=this.getCurrents();l.length>i.max?this.eventOff(l[0],o):(o.elements(),o.targets(),o.additional())}else i.toggle&&this.eventOff(t)}},{key:"eventOff",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(this.checkOff(t)){var i=this.getElements(t);this.removeCurrent(i.single),this.activationOff(i.all,i,"elements",e);var n=this.getTargets(t);this.activationOff(n,i,"targets",e);var r=this.getAdditional();this.activationOff(r,i,"additional",e)}}},{key:"activationOn",value:function(t,e,i){var n=this.options,r=function(t,e,i,r){var a;(a=e.classList).add.apply(a,l(n.classes)),e.classList.remove("out"),t.activationOnAnimate(e,r),"targets"===r&&(t.specialClassHtmlOn(),t.specialBackdrop(e),t.specialCenterOn(e),t.specialMiddleOn(e),t.specialCollapseOn(e),t.specialCloseOn(e,i.single),t.specialScrollbarOn()),e.dispatchEvent(new Event("on"))},a=!0,o=!1,s=void 0;try{for(var c,d=t[Symbol.iterator]();!(a=(c=d.next()).done);a=!0){var u=c.value;u.classList.remove("off-block"),clearTimeout(u.dataset.xtDelayTimeout),clearTimeout(u.dataset.xtAnimTimeout);var f=u.dataset.xtOnDelay;f?(u.classList.add("on-block"),u.dataset.xtDelayTimeout=setTimeout(function(t,e,i,n){e.classList.remove("on-block"),r(t,e,i,n)},parseFloat(f),this,u,e,i).toString()):r(this,u,e,i)}}catch(t){o=!0,s=t}finally{try{!a&&d.return&&d.return()}finally{if(o)throw s}}}},{key:"activationOff",value:function(t,e,i,n){var r=this.options,a=function(t,e,i,n,a){var o;(o=e.classList).remove.apply(o,l(r.classes)),e.classList.add("out"),t.activationOffAnimate(e,n,a),a&&a[n]&&!a[n+"done"]&&r.instant&&r.instant[n]&&(a[n](),a[n+"done"]=!0),"targets"===n&&(t.specialClassHtmlOff(),t.specialCollapseOff(e),t.specialCloseOff(e)),e.dispatchEvent(new Event("off"))},o=!0,s=!1,c=void 0;try{for(var d,u=t[Symbol.iterator]();!(o=(d=u.next()).done);o=!0){var f=d.value;f.classList.remove("on-block"),clearTimeout(f.dataset.xtDelayTimeout),clearTimeout(f.dataset.xtAnimTimeout);var v=f.dataset.xtOffDelay;v?(f.classList.add("off-block"),f.dataset.xtDelayTimeout=setTimeout(function(t,e,i,n,r){e.classList.remove("off-block"),a(t,e,0,n,r)},parseFloat(v),this,f,e,i,n).toString()):a(this,f,0,i,n)}}catch(t){s=!0,c=t}finally{try{!o&&u.return&&u.return()}finally{if(s)throw c}}}},{key:"activationOnAnimate",value:function(t,e){var i=function(t,e){t.classList.contains("collapse-height")&&(t.style.height="auto"),t.classList.contains("collapse-width")&&(t.style.width="auto")},n=this.activationTiming(t);clearTimeout(t.dataset.xtAnimTimeout),n?t.dataset.xtAnimTimeout=setTimeout(function(t,e){i(t)},n,t,e).toString():i(t)}},{key:"activationOffAnimate",value:function(t,e,i){var n=this,r=n.options,a=function(t,e){t.classList.remove("out"),"targets"===e&&n.specialScrollbarOff(),i&&i[e]&&!i[e+"done"]&&(r.instant&&r.instant[e]||(i[e](),i[e+"done"]=!0))},o=this.activationTiming(t);clearTimeout(t.dataset.xtAnimTimeout),o?t.dataset.xtAnimTimeout=setTimeout(function(t,e){a(t,e)},o,t,e).toString():a(t,e)}},{key:"activationTiming",value:function(t){var e=this.options.timing;if(void 0!==e)return e;var i=getComputedStyle(t),n=parseFloat(i.transitionDuration)+parseFloat(i.transitionDelay),r=parseFloat(i.animationDuration)+parseFloat(i.animationDelay);return(n||r)&&(e=Math.max(n,r)),1e3*e}},{key:"specialClassHtmlOn",value:function(){var t,e=this.options;e.classHtml&&(t=document.documentElement.classList).add.apply(t,l(e.classHtml.split(" ")))}},{key:"specialClassHtmlOff",value:function(){var t,e=this.options;e.classHtml&&(t=document.documentElement.classList).remove.apply(t,l(e.classHtml.split(" ")))}},{key:"specialBackdrop",value:function(t){var e=this.options;if(e.backdrop){var i=void 0;"object"===e.backdrop?i=r.XtUtil.arrSingle(this.object):"targets"===e.backdrop?i=r.XtUtil.arrSingle(t):(i=t.querySelectorAll(e.backdrop)).length||(i=this.object.querySelectorAll(e.backdrop));var n=!0,a=!1,o=void 0;try{for(var l,s=i[Symbol.iterator]();!(n=(l=s.next()).done);n=!0){var c=l.value,d=c.querySelectorAll(".xt-backdrop");d.length||(d=r.XtUtil.createElement('<div class="xt-backdrop"></div>'),c.append(d))}}catch(t){a=!0,o=t}finally{try{!n&&s.return&&s.return()}finally{if(a)throw o}}}}},{key:"specialCenterOn",value:function(t){if(t.classList.contains("drop-center")){var e=this.object.clientWidth,i=t.clientWidth;t.style.left=(e-i)/2+"px"}}},{key:"specialMiddleOn",value:function(t){if(t.classList.contains("drop-middle")){var e=this.object.clientHeight,i=t.clientHeight;t.style.top=(e-i)/2+"px"}}},{key:"specialCollapseOn",value:function(t){if(t.classList.contains("collapse-height")){t.classList.add("no-transition"),t.style.height="auto",t.style.paddingTop="",t.style.paddingBottom="";var e=t.clientHeight+"px",i=t.style.paddingTop,n=t.style.paddingBottom;r.XtUtil.requestAnimationFrame.call(window,function(){t.style.height="0",t.style.paddingTop="0",t.style.paddingBottom="0",r.XtUtil.requestAnimationFrame.call(window,function(){t.classList.remove("no-transition"),t.style.height=e,t.style.paddingTop=i,t.style.paddingBottom=n})})}if(t.classList.contains("collapse-width")){t.style.width="auto",t.style.paddingLeft="",t.style.paddingRight="";var a=t.clientHeight+"px",o=t.style.paddingLeft,l=t.style.paddingRight;r.XtUtil.requestAnimationFrame.call(window,function(){t.style.width="0",t.style.paddingLeft="0",t.style.paddingRight="0",r.XtUtil.requestAnimationFrame.call(window,function(){t.classList.remove("no-transition"),t.style.width=a,t.style.paddingLeft=o,t.style.paddingRight=l})})}}},{key:"specialCollapseOff",value:function(t){if(t.classList.contains("collapse-height")){var e=t.clientHeight+"px",i=t.style.paddingTop,n=t.style.paddingBottom;r.XtUtil.requestAnimationFrame.call(window,function(){t.style.height=e,t.style.paddingTop=i,t.style.paddingBottom=n,r.XtUtil.requestAnimationFrame.call(window,function(){t.style.height="0",t.style.paddingTop="0",t.style.paddingBottom="0"})})}if(t.classList.contains("collapse-width")){var a=t.clientWidth+"px",o=t.style.paddingLeft,l=t.style.paddingRight;r.XtUtil.requestAnimationFrame.call(window,function(){t.style.width=a,t.style.paddingLeft=o,t.style.paddingRight=l,r.XtUtil.requestAnimationFrame.call(window,function(){t.style.width="0",t.style.paddingLeft="0",t.style.paddingRight="0"})})}}},{key:"specialCloseOn",value:function(t,e){var i=this,n=i.options;if(n.closeInside){var a=t.querySelectorAll(n.closeInside);r.XtUtil.requestAnimationFrame.call(window,function(){var n=!0,o=!1,l=void 0;try{for(var s,c=a[Symbol.iterator]();!(n=(s=c.next()).done);n=!0){var d=s.value,u=r.XtUtil.dataStorage.put(t,"specialCloseOnHandler",i.specialCloseOnHandler.bind(i).bind(i,d,e));d.removeEventListener("click",u),d.addEventListener("click",u)}}catch(t){o=!0,l=t}finally{try{!n&&c.return&&c.return()}finally{if(o)throw l}}})}if(n.closeOutside){var o=document.documentElement.querySelectorAll(n.closeOutside);r.XtUtil.requestAnimationFrame.call(window,function(){var n=!0,a=!1,l=void 0;try{for(var s,c=o[Symbol.iterator]();!(n=(s=c.next()).done);n=!0){var d=s.value,u=r.XtUtil.dataStorage.put(t,"specialCloseOffHandler",i.specialCloseOffHandler.bind(i).bind(i,t,e));d.removeEventListener("click",u),d.addEventListener("click",u)}}catch(t){a=!0,l=t}finally{try{!n&&c.return&&c.return()}finally{if(a)throw l}}})}}},{key:"specialCloseOff",value:function(t){var e=this.options;if(e.closeInside){var i=t.querySelectorAll(e.closeInside),n=!0,a=!1,o=void 0;try{for(var l,s=i[Symbol.iterator]();!(n=(l=s.next()).done);n=!0){var c=l.value,d=r.XtUtil.dataStorage.get(t,"specialCloseOnHandler");c.removeEventListener("click",d)}}catch(t){a=!0,o=t}finally{try{!n&&s.return&&s.return()}finally{if(a)throw o}}}if(e.closeOutside){var u=document.documentElement.querySelectorAll(e.closeOutside),f=!0,v=!1,h=void 0;try{for(var y,m=u[Symbol.iterator]();!(f=(y=m.next()).done);f=!0){var p=y.value,g=r.XtUtil.dataStorage.get(t,"specialCloseOffHandler");p.removeEventListener("click",g)}}catch(t){v=!0,h=t}finally{try{!f&&m.return&&m.return()}finally{if(v)throw h}}}}},{key:"specialCloseOnHandler",value:function(t,e,i){r.XtUtil.checkInside(i,r.XtUtil.arrSingle(t))&&this.eventOff(e)}},{key:"specialCloseOffHandler",value:function(t,e,i){r.XtUtil.checkOutside(i,r.XtUtil.arrSingle(t))&&this.eventOff(e)}},{key:"specialScrollbarOn",value:function(){var t=this;if(t.options.scrollbar){var e=void 0,i=r.XtUtil.scrollbarWidth();e=document.documentElement.querySelectorAll(".xt-check-fixed > *");var n=!0,a=!1,o=void 0;try{for(var l,s=e[Symbol.iterator]();!(n=(l=s.next()).done);n=!0){var c=l.value;"fixed"===getComputedStyle(c).position?c.classList.add("xt-fixed"):c.classList.remove("xt-fixed")}}catch(t){a=!0,o=t}finally{try{!n&&s.return&&s.return()}finally{if(a)throw o}}e=document.documentElement.querySelectorAll(".xt-fixed");var d=!0,u=!1,f=void 0;try{for(var v,h=function(){var e=v.value;if(e.style.paddingRight="",""===t.normalizeWidth(e.clientWidth)){var n="calc("+getComputedStyle(e).paddingRight+" + "+i+"px)";e.classList.add("no-transition"),r.XtUtil.requestAnimationFrame.call(window,function(){e.style.paddingRight=n,r.XtUtil.requestAnimationFrame.call(window,function(){e.classList.remove("no-transition")})})}},y=e[Symbol.iterator]();!(d=(v=y.next()).done);d=!0)h()}catch(t){u=!0,f=t}finally{try{!d&&y.return&&y.return()}finally{if(u)throw f}}e=document.documentElement.querySelectorAll(".xt-backdrop");var m=!0,p=!1,g=void 0;try{for(var w,b=e[Symbol.iterator]();!(m=(w=b.next()).done);m=!0){w.value.style.right=i+"px"}}catch(t){p=!0,g=t}finally{try{!m&&b.return&&b.return()}finally{if(p)throw g}}var O=document.documentElement;O.style.paddingRight=i+"px",O.classList.add("xt-scrollbar")}}},{key:"specialScrollbarOff",value:function(){if(this.options.scrollbar){var t=void 0,e=document.documentElement;e.style.paddingRight="",e.classList.remove("xt-scrollbar"),t=document.documentElement.querySelectorAll(".xt-fixed");var i=!0,n=!1,a=void 0;try{for(var o,l=function(){var t=o.value;t.classList.add("no-transition"),r.XtUtil.requestAnimationFrame.call(window,function(){t.style.paddingRight="",r.XtUtil.requestAnimationFrame.call(window,function(){t.classList.remove("no-transition")})})},s=t[Symbol.iterator]();!(i=(o=s.next()).done);i=!0)l()}catch(t){n=!0,a=t}finally{try{!i&&s.return&&s.return()}finally{if(n)throw a}}t=document.documentElement.querySelectorAll(".xt-backdrop");var c=!0,d=!1,u=void 0;try{for(var f,v=t[Symbol.iterator]();!(c=(f=v.next()).done);c=!0){f.value.style.right=""}}catch(t){d=!0,u=t}finally{try{!c&&v.return&&v.return()}finally{if(d)throw u}}}}},{key:"normalizeWidth",value:function(t){return(t=parseFloat(t))+r.XtUtil.scrollbarWidth()>=window.innerWidth?t="":t+="px",t}}]),t}();c.defaults={},window.Xt=c,i.Xt=c;var d=function(t){function e(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return s(this,e),a(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i,"data-xt-toggle"))}return o(e,c),e}();d.defaults={elements:":scope > a, :scope > button",targets:':scope > [class^="toggle-"], :scope > [class*=" toggle-"]',class:"active",instant:{elements:!0},on:"click",toggle:!0,min:0,max:1},window.XtToggle=d,i.XtToggle=d;var u=function(t){function e(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return s(this,e),a(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i,"data-xt-drop"))}return o(e,c),e}();u.defaults={elements:":scope",targets:":scope > .drop",additional:":scope > a, :scope > button",class:"active",instant:{elements:!0},on:"click",toggle:!0,min:0,max:1,closeOutside:"body"},window.XtDrop=u,i.XtDrop=u;var f=function(t){function e(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return s(this,e),a(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i,"data-xt-overlay"))}return o(e,c),e}();f.defaults={elements:":scope > a, :scope > button",targets:":scope > .overlay-outer",class:"active",instant:{elements:!0},on:"click",toggle:!0,min:0,max:1,appendTo:"body",backdrop:"targets",classHtml:"xt-overlay",closeInside:".overlay-dismiss, :scope > .xt-backdrop, :scope .overlay-inner > .btn-close",scrollbar:!0},window.XtOverlay=f,i.XtOverlay=f;var v=function(t){function e(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return s(this,e),a(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i,"data-xt-sticky"))}return o(e,c),n(e,[{key:"initScope",value:function(){if(function t(e,i,n){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,i);if(void 0===r){var a=Object.getPrototypeOf(e);return null===a?void 0:t(a,i,n)}if("value"in r)return r.value;var o=r.get;return void 0!==o?o.call(n):void 0}(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"initScope",this).call(this),this.mode="all",this.container=r.XtUtil.parents(this.object,".xt-container"),this.container.length||(this.container=r.XtUtil.createElement('<div class="xt-container xt-check-fixed"></div>'),this.object.before(this.container),this.container.append(this.object),this.container=r.XtUtil.parents(this.object,".xt-container")),this.targets=this.container[0].querySelectorAll(".xt-clone"),!this.targets.length){this.targets=this.object.cloneNode(!0),this.targets.classList.add("xt-clone");var t=!0,i=!1,n=void 0;try{for(var a,o=this.targets.querySelectorAll("[id]")[Symbol.iterator]();!(t=(a=o.next()).done);t=!0){var l=a.value;l.setAttribute("id",l.getAttribute("id")+"-clone")}}catch(t){i=!0,n=t}finally{try{!t&&o.return&&o.return()}finally{if(i)throw n}}var s=!0,c=!1,d=void 0;try{for(var u,f=this.targets.querySelectorAll("[name]")[Symbol.iterator]();!(s=(u=f.next()).done);s=!0){var v=u.value;v.setAttribute("name",v.getAttribute("name")+"-clone")}}catch(t){c=!0,d=t}finally{try{!s&&f.return&&f.return()}finally{if(c)throw d}}this.container[0].append(this.targets)}this.targets=r.XtUtil.arrSingle(this.targets),this.object.classList.add("xt-fixed"),"down"===this.options.hide?this.object.classList.add("sticky-hide-down"):this.object.classList.remove("sticky-hide-down"),"up"===this.options.hide?this.object.classList.add("sticky-hide-up"):this.object.classList.remove("sticky-hide-up"),this.unique=r.XtUtil.getUniqueNum(),this.object.style.zIndex=""+(100-this.unique)}},{key:"initEvents",value:function(){var t=this.options;if(t.on){var e=r.XtUtil.dataStorage.put(window,"stickyOffHandler",this.eventOnHandler.bind(this)),i=[].concat(l(t.on.split(" "))),n=!0,a=!1,o=void 0;try{for(var s,c=i[Symbol.iterator]();!(n=(s=c.next()).done);n=!0){var d=s.value;window.removeEventListener(d,e),window.addEventListener(d,e)}}catch(t){a=!0,o=t}finally{try{!n&&c.return&&c.return()}finally{if(a)throw o}}window.addEventListener("on.trigger",e)}window.dispatchEvent(new Event("on.trigger"))}},{key:"eventOnHandler",value:function(t){this.eventScroll(this.object)}},{key:"eventScroll",value:function(t){var e=this.options,i=!0,n=!1,a=!1,o=0,l=0,s=window.innerHeight,c=document.documentElement.scrollHeight,d=this.object,u=d.getBoundingClientRect().top,f=parseFloat(getComputedStyle(d).height),v=this.container[0].getBoundingClientRect().top,h=document.documentElement.scrollTop,y=this.scrollTopOld;h<y?(d.classList.remove("sticky-down"),d.classList.add("sticky-up"),a=!0):(d.classList.add("sticky-down"),d.classList.remove("sticky-up")),"down"===e.hide&&(a||(l=f)),"up"===e.hide&&a&&(l=f);var m=this.eventScrollPos(e.limit.top||this.targets,h,v),p=this.eventScrollPos(e.limit.bottom,h,1/0);"top"===e.position&&(p-=f),"bottom"===e.position&&(m-=s-f,p=Math.abs(c-s-p));var g=0,w=0;if(e.contain){if(e.contain.top){var b=this.eventScrollHeight(e.contain.top,a);null!==(g=b.val)&&g>v?(o=g,b.foundHide||(i=!1)):g=null}e.contain.bottom&&(null!==(w=this.eventScrollPos(e.contain.bottom))&&w<f+g?(o=w-f,i=!1):w=null)}d.dataset.xtAddSticky=o.toString();var O=h>=m-o+l,S=h<p+o-l;O&&S?(this.eventOn(t),l&&(n=!0)):this.eventOff(t),d.classList.contains("active")||(i=!1),g&&!d.classList.contains("active")&&(o-=v),n?(o=-l,d.classList.contains("sticky-hide")||d.classList.add("sticky-hide")):d.classList.contains("sticky-hide")&&d.classList.remove("sticky-hide"),i&&void 0!==y?d.classList.contains("sticky-anim")||d.classList.add("sticky-anim"):d.classList.contains("sticky-anim")&&d.classList.remove("sticky-anim"),O?d.classList.contains("sticky-top")&&d.classList.remove("sticky-top"):d.classList.contains("sticky-top")||d.classList.add("sticky-top"),S?d.classList.contains("sticky-bottom")&&d.classList.remove("sticky-bottom"):d.classList.contains("sticky-bottom")||d.classList.add("sticky-bottom"),o!==this.addOld&&(d.classList.add("no-transition"),void 0!==this.addOld&&(d.style[e.position]=u+"px"),r.XtUtil.cancelAnimationFrame.call(window,this.eventFrame),this.eventFrame=r.XtUtil.requestAnimationFrame.call(window,function(){d.classList.remove("no-transition"),d.style[e.position]=o+"px"}));var k=this.normalizeWidth(this.container[0].clientWidth);d.style.width!==k&&(d.style.width=k),this.addOld=o,this.scrollTopOld=h}},{key:"eventScrollPos",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(isNaN(parseFloat(t))){var n=Array.isArray(t)?t:document.querySelectorAll(t);if(n.length){var r=!1;i=0;var a=!0,o=!1,l=void 0;try{for(var s,c=n[Symbol.iterator]();!(a=(s=c.next()).done);a=!0){var d=s.value;if("none"!==getComputedStyle(d).display){r=!0;var u=parseFloat(d.dataset.xtAddSticky);if(u)i+=u;else i+=d.getBoundingClientRect().top}r?i+=e:i=null}}catch(t){o=!0,l=t}finally{try{!a&&c.return&&c.return()}finally{if(o)throw l}}}}else i=t;return i}},{key:"eventScrollHeight",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=!1;if(isNaN(parseFloat(t))){var r=Array.isArray(t)?t:document.querySelectorAll(t);if(r.length){var a=!0,o=!1,l=void 0;try{for(var s,c=r[Symbol.iterator]();!(a=(s=c.next()).done);a=!0){var d=s.value;d.classList.contains("sticky-hide-down")&&d.classList.contains("active")?e&&(i+=d.clientHeight,n=!0):d.classList.contains("sticky-hide-up")&&d.classList.contains("active")?e||(i+=d.clientHeight,n=!0):i+=d.clientHeight}}catch(t){o=!0,l=t}finally{try{!a&&c.return&&c.return()}finally{if(o)throw l}}}}else i=t;return{val:i,foundHide:n}}}]),e}();v.defaults={class:"active",on:"scroll resize",min:0,max:1/0,position:"top",limit:{bottom:1/0},contain:!1,hide:!1},window.XtSticky=v,i.XtSticky=v;var h=function(t){function e(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return s(this,e),a(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i,"data-xt-fade"))}return o(e,c),n(e,[{key:"initEvents",value:function(){var t=this.options;if(t.on){var e=r.XtUtil.dataStorage.put(window,"fadeOffHandler",this.eventOnHandler.bind(this)),i=[].concat(l(t.on.split(" "))),n=!0,a=!1,o=void 0;try{for(var s,c=i[Symbol.iterator]();!(n=(s=c.next()).done);n=!0){var d=s.value;window.removeEventListener(d,e),window.addEventListener(d,e)}}catch(t){a=!0,o=t}finally{try{!n&&c.return&&c.return()}finally{if(a)throw o}}window.addEventListener("on.trigger",e)}window.dispatchEvent(new Event("on.trigger"))}},{key:"eventOnHandler",value:function(t){this.eventScroll(this.object)}},{key:"eventScroll",value:function(){var t=this,e=t.options,i=0,n=[],a=!1,o=window.innerHeight,l=document.documentElement.scrollTop,s=t.scrollTopOld;l<s&&(a=!0);var c=!0,d=!1,u=void 0;try{for(var f,v=function(){var s=f.value;if(s.offsetParent&&!s.classList.contains("fade-block")){var c=s.offsetParent.getBoundingClientRect().top+s.offsetTop,d=parseFloat(getComputedStyle(s).height),u=!1,v=c+l,h=v+d,y=o*e.distance;l+o>=v+y&&l<h-y?(u=t.checkOn(s))&&(n.push(s),r.XtUtil.cancelAnimationFrame.call(window,s.dataset.eventFrame),s.dataset.eventFrame=r.XtUtil.requestAnimationFrame.call(window,function(){if(e.delayOn){var r=new Function("current","total",e.delayOn);s.dataset.xtOnDelay=r(i,n.length).toString(),i++}t.eventOn(s)})):(u=t.checkOff(s),s.classList.add("fade-visible"),u&&(s.classList.add("fade-scroll"),n.push(s),r.XtUtil.cancelAnimationFrame.call(window,s.dataset.eventFrame),s.dataset.eventFrame=r.XtUtil.requestAnimationFrame.call(window,function(){if(e.delayOff){var r=new Function("current","total",e.delayOff);s.dataset.xtOffDelay=r(i,n.length).toString(),i++}u=t.eventOff(s)}))),u&&(a?(s.classList.remove("fade-down"),s.classList.add("fade-up")):(s.classList.add("fade-down"),s.classList.remove("fade-up")))}},h=t.elements[Symbol.iterator]();!(c=(f=h.next()).done);c=!0)v()}catch(t){d=!0,u=t}finally{try{!c&&h.return&&h.return()}finally{if(d)throw u}}t.scrollTopOld=l}}]),e}();h.defaults={elements:".fade",class:"in",on:"scroll resize",min:0,max:1/0,distance:.2,delayOn:!1,delayOff:!1},window.XtFade=h,i.XtFade=h},{"./xtend-utils":1}]},{},[2]);
//# sourceMappingURL=xtend.js.map
