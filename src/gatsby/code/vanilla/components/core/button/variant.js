import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="list list-default list-space-2 items-center">

  <button type="button" class="btn">
    btn
  </button>

  <button type="button" class="btn btn-default">
    default
  </button>

  <button type="button" class="btn btn-primary">
    primary
  </button>

  <button type="button" class="btn link">
    link
  </button>

</div>
`
