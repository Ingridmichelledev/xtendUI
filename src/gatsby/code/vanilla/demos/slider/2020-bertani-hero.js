import path from 'path'
const img = require('components/snippets/img').default

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
  full: true,
}

demo.htmlSource = `
<div class="slider demo--2020-bertani-hero">

  <div class="slides">
    <ul class="slides-inner">

      <li class="slide">
        <div class="slide-inner">
          <a href="#" class="slide_item">
            <div class="slide_item_inner">
              <div class="slide_item_img">
                ${img({ classes: 'media-cover' })}
              </div>
              <div class="slide_item_text">
                <div class="container">
                  <div class="slide_item_text_inner">
                    <h1 class="h1">Lorem ipsum</h1>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </li>

      <li class="slide">
        <div class="slide-inner">
          <a href="#" class="slide_item">
            <div class="slide_item_inner">
              <div class="slide_item_img">
                ${img({ classes: 'media-cover' })}
              </div>
              <div class="slide_item_text">
                <div class="container">
                  <div class="slide_item_text_inner">
                    <h2 class="h1">Dolor sit amet</h2>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </li>

      <li class="slide">
        <div class="slide-inner">
          <a href="#" class="slide_item">
            <div class="slide_item_inner">
              <div class="slide_item_img">
                ${img({ classes: 'media-cover' })}
              </div>
              <div class="slide_item_text">
                <div class="container">
                  <div class="slide_item_text_inner">
                    <h2 class="h1">Consectetur adipiscing elit</h2>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </li>

    </ul>
  </div>

  <nav class="slider-pagination display-none">
    <button type="button" class="btn btn-default xt-ignore" data-xt-pag title="Slide xt-num">
    </button>
  </nav>

  <div class="slider-navigation-sides slider-navigation-sides-prev" data-xt-nav="-1" aria-label="previous slide">
    <div class="slider-navigation-sides-btn">
      <span><span class="icon-arrow-left"></span></span>
    </div>
  </div>

  <div class="slider-navigation-sides slider-navigation-sides-next" data-xt-nav="1" aria-label="next slide">
    <div class="slider-navigation-sides-btn">
      <span><span class="icon-arrow-right"></span></span>
    </div>
  </div>

</div>
`
