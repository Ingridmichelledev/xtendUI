import path from 'path'

const buttonMd = require('components/snippets/classes').buttonMd
const cardSm = require('components/snippets/classes').cardSm
const spinner = require('components/snippets/spinner').default
const buttonDefault = require('components/snippets/classes').buttonDefault
const cardDefault = require('components/snippets/classes').cardDefault

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="xt-list xt-list-3 items-center justify-center">

  <div class="xt-card rounded-md ${cardDefault()}">
    <div class="${cardSm()}">
      <div class="xt-h5">Small</div>
      <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
    </div>
    <div class="xt-loader absolute z-above inset-0 rounded-inherit overflow-hidden">
      <div class="xt-spinner absolute inset-0 m-auto w-6 h-6 text-primary-500">
        ${spinner({ classes: 'animate-xt-spinner' })}
      </div>
    </div>
  </div>

  <button type="button" class="xt-button ${buttonMd()} rounded-md ${buttonDefault()}">
    Lorem ipsum
    <span class="xt-loader absolute z-above inset-0 rounded-inherit overflow-hidden">
      <span class="xt-spinner absolute inset-0 m-auto w-6 h-6 text-primary-500">
        ${spinner({ classes: 'animate-xt-spinner' })}
      </span>
    </span>
  </button>

</div>
`
