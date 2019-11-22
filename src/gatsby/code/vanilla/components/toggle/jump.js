import path from 'path'

const dirs = path.dirname(__filename).split('/')
export const demo = {
  name: path.basename(__filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `
<div class="list list--default list-space--small align-items-center"
     data-xt-toggle="{ targets: '.demo--toggle-jump', instant: true, jump: true }">
  <button type="button" class="btn btn--default">
    Toggle 0
  </button>
  <button type="button" class="btn btn--default">
    Toggle 1
  </button>
  <button type="button" class="btn btn--default">
    Toggle 2
  </button>
  <div class="note note--default note--background demo--toggle-jump">
    Target 0
  </div>
  <div class="note note--default note--background demo--toggle-jump">
    Target 1
  </div>
  <div class="note note--default note--background demo--toggle-jump">
    Target 2
  </div>
</div>
`