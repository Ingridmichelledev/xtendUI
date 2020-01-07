import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `
<div class="list list-default list-space-small align-items-center">

  <button type="button" class="btn btn-default"
          data-xt-toggle="{ targets: '#toggle_unique-2, #toggle_unique-3' }">
    Toggle
  </button>

  <button type="button" class="btn btn-default"
          data-xt-toggle="{ targets: '#toggle_unique-2, #toggle_unique-3' }">
    Toggle
  </button>

  <div class="note note-default note-background toggle-block" id="toggle_unique-2">
    Target 0
  </div>

  <div class="note note-default note-background toggle-block" id="toggle_unique-3">
    Target 1
  </div>

</div>
`