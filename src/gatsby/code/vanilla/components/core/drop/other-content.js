import path from 'path'
const btnPrimary = require('components/snippets/classes/btn-primary').default
const btnDefault = require('components/snippets/classes/btn-default').default
const inputDefault = require('components/snippets/classes/input-default').default
const iconSearch = require('components/snippets/icons').iconSearch

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="list list-3 items-center">

  <div data-xt-drop>

    <button type="button" class="btn text-xs py-2 px-3.5 rounded-md ${btnPrimary()}">
      list group
    </button>

    <div class="drop">
      <form class="rounded-md shadow-drop">

        <div class="list flex-nowrap max-w-sm">

          <div class="list-inner flex-auto">
            <button type="button" class="btn text-xs py-2 px-3.5 rounded-l-md ${btnDefault()}">
              ${iconSearch({ classes: 'text-xl -my-1' })}
            </button>
            <input type="text" class="form-item ${inputDefault()}" aria-label="Search" placeholder="Seach Catalog" />
          </div>

          <button type="button" class="btn text-xs py-2 px-3.5 rounded-r-md ${btnPrimary()}">
            Search
          </button>

        </div>

      </form>
    </div>

  </div>

</div>
`
