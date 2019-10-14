import path from 'path'

const dirs = path.dirname(__filename).split('/')
export const demo = {
  name: path.basename(__filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop()
}

demo.htmlSource = `
<form>
  <div class="form-group form-group--small">
    <label class="form-label">
      Small
    </label>
    <input type="text" class="form-item">
    <div class="form-text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus laoreet leo sit amet iaculis.
    </div>
  </div>
  
  <div class="form-group form-group--medium">
    <label class="form-label">
      Medium
    </label>
    <input type="text" class="form-item">
    <div class="form-text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus laoreet leo sit amet iaculis.
    </div>
  </div>
  
  <div class="form-group form-group--big">
    <label class="form-label">
      Big
    </label>
    <input type="text" class="form-item">
    <div class="form-text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus laoreet leo sit amet iaculis.
    </div>
  </div>
</form>
`
