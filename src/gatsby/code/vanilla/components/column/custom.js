import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename ).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `
<div class="row">
  <div class="demo--col-custom-percent"></div>
  <div class="demo--col-custom-px"></div>
  <div class="col-auto"></div>
</div>
`
