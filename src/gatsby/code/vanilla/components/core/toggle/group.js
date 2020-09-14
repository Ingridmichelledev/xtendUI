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
<div class="list list-space-2 items-center" data-xt-toggle>

  <button type="button" class="btn btn-medium ${btnDefault()}" data-xt-group="0">
    Toggle Group 0
  </button>

  <button type="button" class="btn btn-medium ${btnDefault()}">
    Toggle 1
  </button>

  <button type="button" class="btn btn-medium ${btnDefault()}" data-xt-group="0">
    Toggle Group 0
  </button>

  <button type="button" class="btn btn-medium ${btnDefault()}">
    Toggle 2
  </button>

  <button type="button" class="btn btn-medium ${btnDefault()}" data-xt-group="3">
    Toggle Group 3
  </button>

  <div class="card card-block card-block-small toggle ${cardDefault()}">
    Target 1
  </div>

  <div class="card card-block card-block-small toggle ${cardDefault()}" data-xt-group="0">
    Target Group 0
  </div>

  <div class="card card-block card-block-small toggle ${cardDefault()}" data-xt-group="3">
    Target Group 3
  </div>

  <div class="card card-block card-block-small toggle ${cardDefault()}" data-xt-group="0">
    Target Group 0
  </div>

  <div class="card card-block card-block-small toggle ${cardDefault()}">
    Target 2
  </div>

  <div class="card card-block card-block-small toggle ${cardDefault()}" data-xt-group="3">
    Target Group 3
  </div>

</div>
`
