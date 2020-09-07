import path from 'path'
const btnDefault = require('components/snippets/classes/btn-default').default

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<nav class="list list-space-2">

  <button type="button" class="btn btn-medium ${btnDefault()}">
    Lorem Ipsum
  </button>

  <button type="button" class="btn btn-medium ${btnDefault()}">
    Dolor sit
  </button>

  <button type="button" class="btn btn-medium ${btnDefault()}">
    Amet
  </button>

</nav>
`
