import React from 'react'
import path from 'path'
const img = require('components/snippets/img').default

import DemoVanillaIframe from 'components/demo/demo-vanilla-iframe'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  container: false,
  full: true,
  name: path.basename(filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `
<div class="slider demo--2020-euroricambi">

    <nav class="slider-pagination">
        <button type="button" class="btn" data-xt-nav="-1" title="Previous slide">
            <span class="icon-xt-chevron-left"></span>
        </button>
        <button type="button" class="btn xt-ignore" data-xt-pag title="Slide xt-num">
            xt-content
        </button>
        <button type="button" class="btn" data-xt-nav="1" title="Next slide">
            <span class="icon-xt-chevron-right"></span>
        </button>
    </nav>

    <div class="slides">
        <ul class="slides-inner">

            <li class="slide">
                <div class="container">
                    <div class="slide-inner">
                        <div class="slide_item">

                            <div class="slide-pagination-content">
                                Slide 1
                            </div>

                            <div class="slider_imgs--desktop">
                                <div class="row row-default">
                                    <div class="col-12 col-8-sm">
                                        <div class="slider_img">
                                            <div class="slider_img_background"></div>
                                            ${img({ classes: 'media-cover' })}
                                        </div>
                                    </div>
                                    <div class="col-12 col-4-sm">
                                        <div class="slider_img">
                                            <div class="slider_img_background"></div>
                                            ${img({ classes: 'media-cover' })}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="slider_imgs--mobile">
                                <div class="slider_img">
                                    <div class="slider_img_background"></div>
                                    ${img({ classes: 'media-cover' })}
                                </div>
                            </div>

                            <div class="slider_card">
                                <div class="card card-default">
                                    <div class="card-design"></div>
                                    <div class="card-inner">
                                        <div class="card-content">
                                            <div class="card-block card-item">
                                                <h3 class="card-title">Slide 1</h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lacinia rutrum ornare.</p>
                                                <a href="#" class="btn btn-primary btn-giant">
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
            </li>

            <li class="slide">
                <div class="container">
                    <div class="slide-inner">
                        <div class="slide_item">

                            <div class="slide-pagination-content">
                                Slide 2
                            </div>

                            <div class="slider_imgs--desktop">
                                <div class="row row-default">
                                    <div class="col-12 col-4-sm">
                                        <div class="slider_img">
                                            <div class="slider_img_background"></div>
                                            ${img({ classes: 'media-cover' })}
                                        </div>
                                    </div>
                                    <div class="col-12 col-8-sm">
                                        <div class="slider_img">
                                            <div class="slider_img_background"></div>
                                            ${img({ classes: 'media-cover' })}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="slider_imgs--mobile">
                                <div class="slider_img">
                                    <div class="slider_img_background"></div>
                                    ${img({ classes: 'media-cover' })}
                                </div>
                            </div>

                            <div class="slider_card">
                                <div class="card card-default">
                                    <div class="card-design"></div>
                                    <div class="card-inner">
                                        <div class="card-content">
                                            <div class="card-block card-item">
                                                <h3 class="card-title">Slide 2</h3>
                                                <p>Lorem ipsum dolor sit amet</p>
                                                <a href="#" class="btn btn-primary btn-giant">
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
            </li>

            <li class="slide">
                <div class="container">
                    <div class="slide-inner">
                        <div class="slide_item">

                            <div class="slide-pagination-content">
                                Slide 3
                            </div>

                            <div class="slider_imgs--desktop">
                                <div class="row row-default">
                                    <div class="col-12 col-8-sm">
                                        <div class="slider_img">
                                            <div class="slider_img_background"></div>
                                            ${img({ classes: 'media-cover' })}
                                        </div>
                                    </div>
                                    <div class="col-12 col-4-sm">
                                        <div class="slider_img">
                                            <div class="slider_img_background"></div>
                                            ${img({ classes: 'media-cover' })}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="slider_imgs--mobile">
                                <div class="slider_img">
                                    <div class="slider_img_background"></div>
                                    ${img({ classes: 'media-cover' })}
                                </div>
                            </div>

                            <div class="slider_card">
                                <div class="card card-default">
                                    <div class="card-design"></div>
                                    <div class="card-inner">
                                        <div class="card-content">
                                            <div class="card-block card-item">
                                                <h3 class="card-title">Slide 3</h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lacinia rutrum ornare.</p>
                                                <a href="#" class="btn btn-primary btn-giant">
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
            </li>

        </ul>
    </div>

</div>
`

class Page extends React.Component {
  render() {
    return <DemoVanillaIframe demo={demo} />
  }
}

export default Page