import path from 'path'

const dirs = path.dirname(__filename).split('/')
export const demo = {
  name: path.basename(__filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `
<ul class="list list--default" style="flex-wrap: wrap-reverse">
  <li>
    <button type="button">
      Lorem Ipsum
    </button>
  </li>
  <li>
    <button type="button">
      Dolor sit
    </button>
  </li>
  <li>
    <button type="button">
      Amet
    </button>
  </li>
  <li>
    <button type="button">
      Lorem Ipsum
    </button>
  </li>
  <li>
    <button type="button">
      Dolor sit
    </button>
  </li>
  <li>
    <button type="button">
      Amet
    </button>
  </li>
  <li>
    <button type="button">
      Lorem Ipsum
    </button>
  </li>
  <li>
    <button type="button">
      Dolor sit
    </button>
  </li>
  <li>
    <button type="button">
      Amet
    </button>
  </li>
</ul>
`