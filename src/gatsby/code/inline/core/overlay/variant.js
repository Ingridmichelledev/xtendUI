import path from 'path'

const dirs = path.dirname(__filename).split('/')
export const demo = {
  name: path.basename(__filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop()
}

demo.htmlSource = `
  <div class="list list--default list-space--small align-items--center demo-source-from">
    <div data-xt-overlay>
      <button type="button" class="btn btn--primary">
        default
      </button>
      <div class="overlay overlay--default">
        <div class="overlay-container">
          <div class="overlay-inner">
            <div class="overlay-design"></div>
            <div class="overlay-close xt-fixed--check">
              <button type="button" class="btn btn-close" aria-label="Close"></button>
            </div>
            <div class="overlay-content">
              <div class="h2">Lorem ipsum</div>
              <div class="h5">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus, lectus quis ornare volutpat,
                ligula nulla sollicitudin nunc, ut commodo nulla enim nec nisi.</p>
              <p>Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin dui sem id
                justo.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus, lectus quis ornare volutpat,
                ligula nulla sollicitudin nunc, ut commodo nulla enim nec nisi.</p>
              <p>Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin dui sem id
                justo.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div data-xt-overlay>
      <button type="button" class="btn btn--primary">
        dark
      </button>
      <div class="overlay overlay--dark">
        <div class="overlay-container">
          <div class="overlay-inner">
            <div class="overlay-design"></div>
            <div class="overlay-close xt-fixed--check">
              <button type="button" class="btn btn-close" aria-label="Close"></button>
            </div>
            <div class="overlay-content">
              <div class="h2">Lorem ipsum</div>
              <div class="h5">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus, lectus quis ornare volutpat,
                ligula nulla sollicitudin nunc, ut commodo nulla enim nec nisi.</p>
              <p>Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin dui sem id
                justo.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus, lectus quis ornare volutpat,
                ligula nulla sollicitudin nunc, ut commodo nulla enim nec nisi.</p>
              <p>Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin dui sem id
                justo.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
`
