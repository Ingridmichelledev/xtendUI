import path from 'path'

const buttonMd = require('components/snippets/classes').buttonMd
const buttonDefault = require('components/snippets/classes').buttonDefault
const buttonPrimary = require('components/snippets/classes').buttonPrimary
const inputDefault = require('components/snippets/classes').inputDefault
const iconSearch = require('components/snippets/icons').iconSearch

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<form class="text-sm">

  <div class="xt-list xt-list-2 flex-col">

    <div class="xt-list-inner">
      <button type="button" class="xt-button ${buttonMd()} rounded-tl-md rounded-bl-md ${buttonDefault()}">
        ${iconSearch({ classes: 'text-xl -my-1' })}
      </button>
      <input type="text" class="xt-input rounded-tr-md rounded-br-md ${inputDefault()}" aria-label="Search" placeholder="Seach Catalog" />
    </div>

    <button type="button" class="xt-button ${buttonMd()} ${buttonPrimary()}">
      Search
    </button>

  </div>

</form>
`
