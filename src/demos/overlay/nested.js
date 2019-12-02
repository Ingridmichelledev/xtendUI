import { Xt } from 'xtend-library'

Xt.mount.push({
  matches: '#overlay--nested-toggle',
  mount: function(object) {
    // event

    function click() {
      console.log(document.querySelector('#overlay--nested'))
      document.querySelector('#overlay--nested').dispatchEvent(new CustomEvent('on.xt'))
    }

    object.addEventListener('click', click)

    // unmount

    return function unmount() {
      object.removeEventListener('click', click)
    }
  },
})
