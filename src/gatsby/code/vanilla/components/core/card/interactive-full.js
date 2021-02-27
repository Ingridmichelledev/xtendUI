import path from 'path'

const cardMd = require('components/snippets/classes').cardMd
const cardDefaultFullInteractive = require('components/snippets/classes').cardDefaultFullInteractive
const cardPrimaryFullInteractive = require('components/snippets/classes').cardPrimaryFullInteractive

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="xt-row">

  <div class="w-full md:w-6/12">
    <a role="button" class="xt-card rounded-md ${cardDefaultFullInteractive()}">
      <div class="${cardMd()}">
        <div class="xt-h4">Default</div>
        <p><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
      </div>
    </a>
  </div>

  <div class="w-full md:w-6/12">
    <a role="button" class="xt-card rounded-md ${cardPrimaryFullInteractive()}">
      <div class="${cardMd()}">
        <div class="xt-h4">Primary</div>
        <p><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
      </div>
    </a>
  </div>

</div>
`
