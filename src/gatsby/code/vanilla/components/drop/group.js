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
<div class="drop-container" data-xt-drop>
  <button type="button" class="btn btn-primary">
    group
  </button>
  <div class="drop drop-default drop-size-large">
    <div class="drop-inner">
      <div class="drop-design"></div>
      <div class="drop-content">

        <div class="card card-drop">
          <div class="card-design"></div>
          <div class="btn btn-close" aria-label="Close"></div>
          <div class="card-inner">
            <div class="card-content">
              <div class="card-item-nested card-item card-group-sm">
                <div class="card-block card-item">
                  <div class="card-title">Lorem ipsum</div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis. Sed pulvinar hendrerit mauris at pharetra. Suspendisse vel aliquam quam, non tincidunt sem.</p>
                </div>
                <div class="card-block card-item">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis. Sed pulvinar hendrerit mauris at pharetra. Suspendisse vel aliquam quam, non tincidunt sem.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</div>
`
