import path from 'path'

const dirs = path.dirname(__filename).split('/')
export const demo = {
  name: path.basename(__filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `
<div class="note note--default note--small">
  <div class="note-list">
    <div>
      <div class="note-icon">
        <span class="icon-xt-check"></span>
      </div>
    </div>
    <div>
      <div class="note-title">Small</div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis. Sed pulvinar hendrerit mauris at pharetra. Suspendisse vel aliquam quam, non tincidunt sem.</p>
    </div>
  </div>
</div>

<div class="note note--default note--medium">
  <div class="note-list">
    <div>
      <div class="note-icon">
        <span class="icon-xt-check"></span>
      </div>
    </div>
    <div>
      <div class="note-title">Medium</div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis. Sed pulvinar hendrerit mauris at pharetra. Suspendisse vel aliquam quam, non tincidunt sem.</p>
    </div>
  </div>
</div>

<div class="note note--default note--big">
  <div class="note-list">
    <div>
      <div class="note-icon">
        <span class="icon-xt-check"></span>
      </div>
    </div>
    <div>
      <div class="note-title">Big</div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis. Sed pulvinar hendrerit mauris at pharetra. Suspendisse vel aliquam quam, non tincidunt sem.</p>
    </div>
  </div>
</div>
`