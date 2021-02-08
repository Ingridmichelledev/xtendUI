import path from 'path'
const btnPrimary = require('components/snippets/classes/btn-primary').default
const btnDefaultDrop = require('components/snippets/classes/btn-default-drop').default
const btnPrimaryDrop = require('components/snippets/classes/btn-primary-drop').default
const cardWhite = require('components/snippets/classes/card-white').default
const cardPrimary = require('components/snippets/classes/card-primary').default

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="list list-2 items-center">

  <div data-xt-drop>

    <button type="button" class="btn text-xs py-2 px-3.5 rounded-md ${btnPrimary()}">
      default
    </button>

    <div class="drop">
      <div class="card w-64 py-3 rounded-md shadow-drop ${cardWhite()}">
        <nav class="list flex-col">
          <a href="#" class="btn text-xxs py-1.5 px-2.5 ${btnDefaultDrop()}">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </a>
          <button type="button" class="btn text-xxs py-1.5 px-2.5 ${btnDefaultDrop()}">
            Dolor sit
          </button>
          <button type="button" class="btn text-xxs py-1.5 px-2.5 ${btnDefaultDrop()}">
            Amet
          </button>
        </nav>
      </div>
    </div>

  </div>

  <div data-xt-drop>

    <button type="button" class="btn text-xs py-2 px-3.5 rounded-md ${btnPrimary()}">
      primary
    </button>

    <div class="drop">
      <div class="card w-64 py-3 rounded-md shadow-drop ${cardPrimary()}">
        <nav class="list flex-col">
          <a href="#" class="btn text-xxs py-1.5 px-2.5 ${btnPrimaryDrop()}">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </a>
          <button type="button" class="btn text-xxs py-1.5 px-2.5 ${btnPrimaryDrop()}">
            Dolor sit
          </button>
          <button type="button" class="btn text-xxs py-1.5 px-2.5 ${btnPrimaryDrop()}">
            Amet
          </button>
        </nav>
      </div>
    </div>

  </div>

</div>
`
