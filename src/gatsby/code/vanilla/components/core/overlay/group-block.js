import path from 'path'
const img = require('components/snippets/img').default
const btnPrimary = require('components/snippets/classes/btn-primary').default
const cardDefaultOverlay = require('components/snippets/classes/card-default-overlay').default

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div data-xt-overlay>

  <button type="button" class="btn btn-md ${btnPrimary()}">
    block side
  </button>

  <div class="overlay">
    <div class="overlay-container max-w-4xl">
      <div class="overlay-inner">

        <div class="card ${cardDefaultOverlay()}">
          <div class="btn btn-close" aria-label="Close"><span class="icon-close"></span></div>
          <div class="sm:card-group">
            <div class="card-block card-block-md sm:w-7/12 bg-gray-400 sm:rounded-tl-md">
              <div class="h3">Lorem ipsum</div>
              <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
            </div>
            <div class="sm:w-5/12">
              <div class="card-block card-block-md bg-gray-500 sm:rounded-tr-md">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis.</p>
              </div>
              <div class="card-block card-block-md">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis.</p>
              </div>
            </div>
          </div>
          <div class="card-asset rounded-b-md">
            ${img({ classes: 'object-cover object-center', ratio: '15%' })}
          </div>
        </div>

      </div>
    </div>
  </div>

</div>
`
