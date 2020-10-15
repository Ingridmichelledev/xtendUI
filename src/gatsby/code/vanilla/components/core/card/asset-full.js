import path from 'path'
const img = require('components/snippets/img').default
const cardDefaultFull = require('components/snippets/classes/card-default-full').default

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="row row-3">

  <div class="w-full md:w-6/12">
    <div class="card ${cardDefaultFull()}">
      <div class="card-asset rounded-md">
        ${img({ classes: 'object-cover object-center', ratio: '37.5%' })}
      </div>
    </div>
  </div>

  <div class="w-full md:w-6/12">
    <div class="card ${cardDefaultFull()}">
      <div class="card-asset rounded">
        ${img({ classes: 'object-cover object-center', ratio: '37.5%' })}
      </div>
      <div class="card-block py-8 px-0 pb-0">
        <div class="h4">Lorem ipsum</div>
        <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
      </div>
    </div>
  </div>

</div>
`
