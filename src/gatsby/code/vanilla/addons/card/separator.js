import path from 'path'
const img = require('components/snippets/img').default

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `
<div class="card card-default card-separator">
  <div class="card-design"></div>
  <div class="card-inner">
    <div class="card-asset">
      ${img({ classes: 'media-cover', ratio: '15%' })}
    </div>
    <div class="card-content">
      <div class="card-item-nested card-item card-group-sm">
        <div class="card-block card-item">
          <div class="card-title">Lorem ipsum</div>
          <p><strong>Lorem ipsum</strong> dolor sit amet, consectetur <a href="#">adipiscing elit</a>. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
        </div>
        <div class="card-block card-item">
          <div class="card-title">Lorem ipsum</div>
          <p><strong>Lorem ipsum</strong> dolor sit amet, consectetur <a href="#">adipiscing elit</a>. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
        </div>
      </div>
    </div>
    <div class="card-asset">
      ${img({ classes: 'media-cover', ratio: '15%' })}
    </div>
  </div>
</div>
`
