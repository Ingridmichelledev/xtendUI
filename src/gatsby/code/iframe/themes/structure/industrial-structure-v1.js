import React from 'react'
import path from 'path'

import DemoVanillaIframe from 'components/demo/demo-vanilla-iframe'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  container: false,
  full: false,
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="slider">

  <nav class="slider-pagination w-full list list-2">

    <div>
      <button type="button" class="btn btn-circle" data-xt-nav="-1" title="Previous slide">
        <span class="icon-arrow-left"></span>
      </button>
    </div>

    <div class="slider-pagination w-full list list-2_inner">
      <div class="slider-pagination w-full list list-2_scroll">
        <button type="button" class="btn xt-ignore" data-xt-pag title="Slide xt-num">
            xt-content
        </button>
      </div>
    </div>

    <div>
      <button type="button" class="btn btn-circle" data-xt-nav="1" title="Next slide">
        <span class="icon-arrow-right"></span>
      </button>
    </div>

  </nav>

  <div class="slides">
    <nav class="slides-inner row row-2">

      <div class="slide">
        <div class="container">
          <div class="featured-item">

            <div class="slide-pagination-content">
              Lorem ipsum
            </div>

            <div class="featured-item_assets">
              <div class="row">
                <div class="featured-item_assets_col--big featured-item_assets_col--big">
                  <div class="featured-item_asset">
                    <div class="media-container" style="padding-bottom: 37.5%;">
                      <div class="media-inner">
                        <img class="media object-cover object-center" src="/img.svg" loading="eager" alt="">
                      </div>
                    </div>
                  </div>
                </div>
                <div class="featured-item_assets_col--sm featured-item_assets_col--sm">
                  <div class="featured-item_asset">
                    <div class="media-container" style="padding-bottom: 37.5%;">
                      <div class="media-inner">
                        <img class="media object-cover object-center" src="/img.svg" loading="eager" alt="">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="slide_card">
              <div class="card card-primary">
                <div class="card-design"></div>
                <div class="card-inner">
                  <div class="card-content">
                    <div class="card-item">
                      <h3 class="h4">
                        Lorem ipsum
                      </h3>
                      <p>
                        <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Morbi lacinia rutrum ornare.
                      </p>
                      <a href="#" class="btn btn-default btn-big">
                        Discover
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div class="slide">
        <div class="container">
          <div class="featured-item">

            <div class="slide-pagination-content">
              Dolor sit amet
            </div>

            <div class="featured-item_assets">
              <div class="row">
                <div class="featured-item_assets_col--sm">
                  <div class="featured-item_asset">
                    <div class="media-container" style="padding-bottom: 37.5%;">
                      <div class="media-inner">
                        <img class="media object-cover object-center" src="/img.svg" loading="eager" alt="">
                      </div>
                    </div>
                  </div>
                </div>
                <div class="featured-item_assets_col--big">
                  <div class="featured-item_asset">
                    <div class="media-container" style="padding-bottom: 37.5%;">
                      <div class="media-inner">
                        <img class="media object-cover object-center" src="/img.svg" loading="eager" alt="">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="slide_card">
              <div class="card card-primary">
                <div class="card-design"></div>
                <div class="card-inner">
                  <div class="card-content">
                    <div class="card-item">
                      <h3 class="h4">
                        Dolor sit amet
                      </h3>
                      <p>
                        <strong>Lorem ipsum</strong> dolor sit amet.
                      </p>
                      <a href="#" class="btn btn-default btn-big">
                        Discover
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div class="slide">
        <div class="container">
          <div class="featured-item">

            <div class="slide-pagination-content">
              Consectetur adipiscing elit
            </div>

            <div class="featured-item_assets">
              <div class="row">
                <div class="featured-item_assets_col--big">
                  <div class="featured-item_asset">
                    <div class="media-container" style="padding-bottom: 37.5%;">
                      <div class="media-inner">
                        <img class="media object-cover object-center" src="/img.svg" loading="eager" alt="">
                      </div>
                    </div>
                  </div>
                </div>
                <div class="featured-item_assets_col--sm">
                  <div class="featured-item_asset">
                    <div class="media-container" style="padding-bottom: 37.5%;">
                      <div class="media-inner">
                        <img class="media object-cover object-center" src="/img.svg" loading="eager" alt="">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="slide_card">
              <div class="card card-primary">
                <div class="card-design"></div>
                <div class="card-inner">
                  <div class="card-content">
                    <div class="card-item">
                      <h3 class="h4">
                        Consectetur adipiscing elit
                      </h3>
                      <p>
                        <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Morbi lacinia rutrum ornare.
                      </p>
                      <a href="#" class="btn btn-default btn-big">
                        Discover
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div class="slide">
        <div class="container">
          <div class="featured-item">

            <div class="slide-pagination-content">
              Nam iaculis magna eu consectetur condimentum
            </div>

            <div class="featured-item_assets">
              <div class="row">
                <div class="featured-item_assets_col--sm">
                  <div class="featured-item_asset">
                    <div class="media-container" style="padding-bottom: 37.5%;">
                      <div class="media-inner">
                        <img class="media object-cover object-center" src="/img.svg" loading="eager" alt="">
                      </div>
                    </div>
                  </div>
                </div>
                <div class="featured-item_assets_col--big">
                  <div class="featured-item_asset">
                    <div class="media-container" style="padding-bottom: 37.5%;">
                      <div class="media-inner">
                        <img class="media object-cover object-center" src="/img.svg" loading="eager" alt="">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="slide_card">
              <div class="card card-primary">
                <div class="card-design"></div>
                <div class="card-inner">
                  <div class="card-content">
                    <div class="card-item">
                      <h3 class="h4">
                        Nam iaculis magna eu consectetur condimentum
                      </h3>
                      <p>
                        <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Morbi lacinia rutrum ornare.
                      </p>
                      <a href="#" class="btn btn-default btn-big">
                        Discover
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </nav>
  </div>

</div>
`

class Page extends React.Component {
  render() {
    return <DemoVanillaIframe demo={demo} />
  }
}

export default Page
