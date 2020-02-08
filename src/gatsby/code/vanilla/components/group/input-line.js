import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `
<form class="form-default">
  <div class="form-group">
    <div class="group">
      <div class="group-inner">
        <button type="button" class="btn btn-default btn-big">
          Lorem
        </button>
      </div>
      <div class="group-inner">
        <button type="button" class="btn btn-primary btn-big">
          ipsum
        </button>
      </div>
      <div class="group-inner">
        <input type="text" class="form-item" />
      </div>
    </div>
  </div>
</div>
`
