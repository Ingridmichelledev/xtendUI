import path from 'path'
const btnDefault = require('components/snippets/classes/btn-default').default
const cardDefault = require('components/snippets/classes/card-default').default

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="list list-space-2 items-center"
  data-xt-toggle="{ elements: ':scope > .btn', targets: ':scope > .demo--toggle-custom-options' }">

  <button type="button" class="btn btn-medium ${btnDefault()}">
    Toggle 0
  </button>

  <button type="button" class="btn btn-medium ${btnDefault()}">
    Toggle 1
  </button>

  <button type="button" class="btn btn-medium ${btnDefault()}">
    Toggle 2
  </button>

  <div class="card card-block card-block-small text-sm demo--toggle-custom-options ${cardDefault()}">
    Target 0
  </div>

  <div class="card card-block card-block-small text-sm demo--toggle-custom-options ${cardDefault()}">
    Target 1
  </div>

  <div class="card card-block card-block-small text-sm demo--toggle-custom-options ${cardDefault()}">
    Target 2
  </div>

</div>
`
