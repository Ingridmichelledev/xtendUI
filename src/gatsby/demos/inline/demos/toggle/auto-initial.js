import path from 'path'

const dirs = path.dirname(__filename).split('/');
export const demo = {
  name: path.basename(__filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `
  <div class="list list-space--small align-items--center"
       data-xt-toggle='{"auto": {"time": 2000, "initial": false}}'>
    <button type="button" class="btn">
      Toggle 0
    </button>
    <button type="button" class="btn">
      Toggle 1
    </button>
    <button type="button" class="btn">
      Toggle 2
    </button>
    <button type="button" class="btn">
      Toggle 3
    </button>
    <div class="alert toggle--block">
      <div class="alert_content">
        Target 0
      </div>
    </div>
    <div class="alert toggle--block">
      <div class="alert_content">
        Target 1
      </div>
    </div>
    <div class="alert toggle--block">
      <div class="alert_content">
        Target 2
      </div>
    </div>
    <div class="alert toggle--block">
      <div class="alert_content">
        Target 3
      </div>
    </div>
  </div>
`
