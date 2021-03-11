import path from 'path'

const classes = require('components/snippets/classes').classes

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div data-xt-tooltip="{ on: 'click', off: 'click' }">

  <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonPrimary()}">
    click
  </button>

  <div class="xt-tooltip p-2">
    <div class="relative ${classes.tooltipMd()} rounded-md shadow-tooltip ${classes.cardBlack()}">
      Lorem ipsum dolor sit amet

      <div class="inline-block" data-xt-tooltip="{ on: 'click', off: 'click', position: 'auto' }">

        <a href="#">nested</a>

        <div class="xt-tooltip p-2">
          <div class="relative ${classes.tooltipMd()} rounded-md shadow-tooltip ${classes.cardBlack()}">
              Consectetur adipiscing elit
          </div>
        </div>

      </div>

    </div>
  </div>

</div>

<form class="text-sm mt-4">

  <div data-xt-tooltip="{ elements: ':scope > input', on: 'focus', off: 'blur' }">

    <input type="text" class="xt-input rounded-md ${classes.inputDefault()}" aria-label="Focus" placeholder="Focus">

    <div class="xt-tooltip p-2">
      <div class="relative ${classes.tooltipMd()} rounded-md shadow-tooltip ${classes.cardBlack()}">
        Lorem ipsum dolor sit amet
      </div>
    </div>

  </div>

</form>
`
