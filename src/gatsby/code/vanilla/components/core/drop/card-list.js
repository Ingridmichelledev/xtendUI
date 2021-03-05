import path from 'path'

const buttonMd = require('components/snippets/classes').buttonMd
const cardMd = require('components/snippets/classes').cardMd
const buttonPrimary = require('components/snippets/classes').buttonPrimary
const cardWhite = require('components/snippets/classes').cardWhite
const iconPackage = require('components/snippets/icons').iconPackage
const iconChevronRight = require('components/snippets/icons').iconChevronRight

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="xt-list xt-list-3 items-center">

  <div data-xt-drop>

    <button type="button" class="xt-button ${buttonMd()} rounded-md ${buttonPrimary()}">
      list
    </button>

    <div class="xt-drop p-4">
      <div class="xt-card w-96 rounded-md shadow-drop ${cardWhite()}">
        <div class="${cardMd()}">
          <div class="xt-list xt-list-6 md:flex-nowrap items-baseline">
            <div>
              ${iconPackage({ classes: 'text-3xl' })}
            </div>
            <div>
              <div class="xt-h4">Lorem ipsum</div>
              <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis.</p>
            </div>
            <div class="self-end justify-self-end">
              ${iconChevronRight({ classes: 'text-3xl' })}
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>

</div>
`
