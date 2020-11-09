import path from 'path'
const btnPrimary = require('components/snippets/classes/btn-primary').default
const btnDefaultDrop = require('components/snippets/classes/btn-default-drop').default
const cardDefaultDropList = require('components/snippets/classes/card-default-drop-list').default

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="list list-2 items-center">

  <div data-xt-drop="{ position: 'right' }">

    <button type="button" class="btn btn-md rounded-md ${btnPrimary()}">
      right
    </button>

    <div class="drop md:drop-left md:drop-middle">
      <div class="drop-inner">
        <div class="w-64 py-3 rounded-md ${cardDefaultDropList()}">
          <nav class="list flex-col">
            <a href="#" class="btn btn-sm ${btnDefaultDrop()}">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </a>
            <button type="button" class="btn btn-sm ${btnDefaultDrop()}">
              Dolor sit
            </button>
            <button type="button" class="btn btn-sm ${btnDefaultDrop()}">
              Amet
            </button>
          </nav>
        </div>
      </div>
      <div class="drop-arrow" data-arrow></div>
    </div>

  </div>

  <div data-xt-drop="{ position: 'right-start' }">

    <button type="button" class="btn btn-md rounded-md ${btnPrimary()}">
      right start
    </button>

    <div class="drop md:drop-bottom md:drop-left">
      <div class="drop-inner">
        <div class="w-64 py-3 rounded-md ${cardDefaultDropList()}">
          <nav class="list flex-col">
            <a href="#" class="btn btn-sm ${btnDefaultDrop()}">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </a>
            <button type="button" class="btn btn-sm ${btnDefaultDrop()}">
              Dolor sit
            </button>
            <button type="button" class="btn btn-sm ${btnDefaultDrop()}">
              Amet
            </button>
          </nav>
        </div>
      </div>
      <div class="drop-arrow" data-arrow></div>
    </div>

  </div>

  <div data-xt-drop="{ position: 'right-end' }">

    <button type="button" class="btn btn-md rounded-md ${btnPrimary()}">
      right end
    </button>

    <div class="drop md:drop-top md:drop-left">
      <div class="drop-inner">
        <div class="w-64 py-3 rounded-md ${cardDefaultDropList()}">
          <nav class="list flex-col">
            <a href="#" class="btn btn-sm ${btnDefaultDrop()}">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </a>
            <button type="button" class="btn btn-sm ${btnDefaultDrop()}">
              Dolor sit
            </button>
            <button type="button" class="btn btn-sm ${btnDefaultDrop()}">
              Amet
            </button>
          </nav>
        </div>
      </div>
      <div class="drop-arrow" data-arrow></div>
    </div>

  </div>

</div>
`
