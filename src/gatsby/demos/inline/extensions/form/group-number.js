import path from 'path'

const dirs = path.dirname(__filename).split('/')
export const demo = {
  name: path.basename(__filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop()
}

demo.htmlSource = `
<h4>Line</h4>

<div class="group group-number group-number-line group--light">
    <div class="group_inner">
      <button type="button" class="btn group-number-remove">
        -
      </button>
    </div>
  <input type="number" class="form-item" value="3" min="1" max="100" step="2">
  <div class="group_inner">
      <button type="button" class="btn group-number-add">
        +
      </button>
    </div>
</div>

<h4>Stack</h4>

<div class="group group-number group-number-stack group--light">
  <input type="number" class="form-item" value="3" min="1" max="100" step="2">
  <div class="group_inner">
      <button type="button" class="btn btn--short btn--narrow group-number-add">
        +
      </button>
      <button type="button" class="btn btn--short btn--narrow group-number-remove">
        -
      </button>
    </div>
</div>
`