import path from 'path'

const buttonMd = require('components/snippets/classes').buttonMd
const buttonDefault = require('components/snippets/classes').buttonDefault
const cardToggle = require('components/snippets/classes').cardToggle

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="xt-list xt-list-3 items-center" data-xt-toggle>

  <button type="button" class="xt-button ${buttonMd()} rounded-md ${buttonDefault()}">
    Toggle 0
  </button>

  <button type="button" class="xt-button ${buttonMd()} rounded-md ${buttonDefault()}">
    Toggle 1
  </button>

  <div class="xt-card xt-toggle rounded-md ${cardToggle()} transform transition ease-out duration-500 opacity-0 -translate-x-4 active:opacity-100 active:translate-x-0" data-xt-duration="500">
    Target 0
  </div>

  <div class="xt-card xt-toggle rounded-md ${cardToggle()} transform transition ease-out duration-500 opacity-0 -translate-x-4 active:opacity-100 active:translate-x-0" data-xt-duration="500">
    Target 1
  </div>

</div>
`
