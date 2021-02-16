import path from 'path'
const buttonPrimary = require('components/snippets/classes/button-primary').default
const cardWhite = require('components/snippets/classes/card-white').default
const iconX = require('components/snippets/icons').iconX

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="xt-list xt-list-3 items-center">

  <div data-xt-overlay>
    <button type="button" class="xt-button text-xs py-2 px-3.5 rounded-md ${buttonPrimary()}">
      screen
    </button>
    <div class="xt-overlay">
      <div class="xt-overlay-container p-0">
        <div class="xt-overlay-inner">

          <div class="xt-card xt-min-h-screen items-center justify-center shadow-overlay ${cardWhite()}">
            <button type="button" class="xt-button xt-dismiss absolute z-last top-0 right-0 p-5 text-2xl" aria-label="Close">
              ${iconX()}
            </button>
            <div class="max-w-3xl">
              <div class="text-base p-8">
                <div class="xt-h4 ">Lorem ipsum</div>
                <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
                <p>Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin dui sem id justo.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus, lectus quis ornare volutpat, ligula nulla sollicitudin nunc, ut commodo nulla enim nec nisi.</p>
                <p>Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin dui sem id justo.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>

  <div data-xt-overlay>
    <button type="button" class="xt-button text-xs py-2 px-3.5 rounded-md ${buttonPrimary()}">
      screen full
    </button>
    <div class="xt-overlay">
      <div class="xt-overlay-container p-0">
        <div class="xt-overlay-inner">

          <div class="xt-card xt-min-h-screen items-center justify-center shadow-overlay ${cardWhite()}">
            <button type="button" class="xt-button xt-dismiss absolute z-last top-0 right-0 p-5 text-2xl" aria-label="Close">
              ${iconX()}
            </button>
            <div class="xt-media-container bg-gray-700 xt-ratio-100">
              <div class="xt-media-inner">
                <img class="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="">
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>

  <div data-xt-overlay>
    <button type="button" class="xt-button text-xs py-2 px-3.5 rounded-md ${buttonPrimary()}">
      screen group
    </button>
    <div class="xt-overlay">
      <div class="xt-overlay-container p-0">
        <div class="xt-overlay-inner">

          <div class="xt-card xt-min-h-screen items-center justify-center shadow-overlay ${cardWhite()}">
            <button type="button" class="xt-button xt-dismiss absolute z-last top-0 right-0 p-5 text-2xl" aria-label="Close">
              ${iconX()}
            </button>
            <div class="max-w-3xl">
              <div class="md:xt-card-group">
                <div class="text-base p-8 md:w-7/12">
                  <div class="xt-h4 ">Lorem ipsum</div>
                  <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
                </div>
                <div class="md:w-5/12">
                  <div class="text-sm p-6 bg-gray-500">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis.</p>
                  </div>
                  <div class="text-base p-8">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis.</p>
                  </div>
                </div>
              </div>
              <div class="xt-media-container bg-gray-700 xt-ratio-25">
                <div class="xt-media-inner">
                  <img class="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="">
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
