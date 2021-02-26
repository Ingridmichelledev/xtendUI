import path from 'path'

const cardSm = require('components/snippets/classes').cardSm
const cardMd = require('components/snippets/classes').cardMd
const cardDefault = require('components/snippets/classes').cardDefault

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="xt-card rounded-md ${cardDefault()}">
  <div class="${cardMd()}">
    <div class="xt-h4 ">Lorem ipsum</div>
    <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
  </div>
  <div class="${cardSm()} pt-0">
    <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
  </div>
</div>
`
