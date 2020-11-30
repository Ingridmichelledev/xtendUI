import path from 'path'
const btnPrimary = require('components/snippets/classes/btn-primary').default
const cardBlack = require('components/snippets/classes/card-black').default

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="list list-2 items-center" data-xt-tooltip="{ elements: ':scope > a, :scope > button', targets: ':scope > .tooltip' }">

  <button type="button" class="btn btn-md rounded-md ${btnPrimary()}">
    tooltip
  </button>

  <div class="tooltip transform transition duration-200 opacity-0 translate-y-2 active:opacity-100 active:translate-y-0">
    <div class="tooltip-md rounded shadow-tooltip ${cardBlack()}">
      Lorem ipsum dolor sit amet
    </div>
  </div>

  <button type="button" class="btn btn-md rounded-md ${btnPrimary()}">
    tooltip
  </button>

  <div class="tooltip transform transition duration-150 opacity-0 translate-y-2 active:opacity-100 active:translate-y-0">
    <div class="tooltip-md rounded shadow-tooltip ${cardBlack()}">
      Consectetur adipiscing elit
    </div>
  </div>

</div>
`
