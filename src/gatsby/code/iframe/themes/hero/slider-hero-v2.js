import React from 'react'
import path from 'path'
const btnPrimary = require('components/snippets/classes/btn-primary').default
const iconArrowLeft = require('components/snippets/icons').iconArrowLeft
const iconArrowRight = require('components/snippets/icons').iconArrowRight

import DemoVanillaIframe from 'components/demo/demo-vanilla-iframe'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  container: false,
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="slider slider-absolute">

  <div class="slides">
    <div class="slides-inner duration-none transform-none">

      <div class="slide w-full">
        <div class="hero relative block overflow-hidden w-full">
          <div class="hero-inner">
            <div class="media-container bg-gray-700 h-screen">
              <div class="media-inner">
                <img class="media object-cover object-center" src="/img.svg" loading="lazy" alt="">
              </div>
            </div>
            <div class="hero-content container absolute inset-0 flex items-end justify-center text-center">
              <a href="#" class="group block w-full py-8 md:py-12 max-w-2xl mx-auto text-white links-inverse">
                <h2 class="h1 font-black text-4xl md:text-5xl lg:text-6xl">
                  Lorem ipsum
                </h2>
              </a>
            </div>
          </div>
        </div>
        <div class="hero-cover absolute inset-0 pointer-events-none bg-accent-500 transform translate-x-full"></div>
      </div>

      <div class="slide w-full">
        <div class="hero relative block overflow-hidden w-full">
          <div class="hero-inner">
            <div class="media-container bg-gray-700 h-screen">
              <div class="media-inner">
                <img class="media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="">
              </div>
            </div>
            <div class="hero-content container absolute inset-0 flex items-end justify-center text-center md:justify-start md:text-left">
              <a href="#" class="group block w-full py-8 md:py-12 max-w-2xl mx-auto md:ml-0 text-white links-inverse">
                <h2 class="h1">
                  Lorem ipsum dolor sit amet
                </h2>
                <h3 class="p max-w-lg mx-auto md:ml-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis.
                </h3>
              </a>
            </div>
          </div>
        </div>
        <div class="hero-cover absolute inset-0 pointer-events-none bg-accent-500 transform translate-x-full"></div>
      </div>

      <div class="slide w-full">
        <div class="hero relative block overflow-hidden w-full">
          <div class="hero-inner">
            <div class="media-container bg-gray-700 h-screen">
              <div class="media-inner">
                <img class="media object-cover object-center" src="/img.svg" loading="lazy" alt="">
              </div>
            </div>
            <div class="hero-content container absolute inset-0 flex items-end justify-center text-center md:items-center md:justify-start md:text-left">
              <div class="block w-full py-8 md:py-12 max-w-2xl mx-auto md:ml-0 text-white links-inverse">
                <h2 class="h1">
                  Lorem ipsum dolor sit amet
                </h2>
                <h3 class="p max-w-lg mx-auto md:ml-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis.
                </h3>
                <div class="list list-3 justify-center md:justify-start">
                  <a href="#" class="btn text-xs py-2 px-3.5 rounded-md ${btnPrimary()}">
                    Lorem ipsum
                  </a>
                  <a href="#" class="btn text-xs py-2 px-3.5 rounded-md ${btnPrimary()}">
                    Dolor sit amet
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="hero-cover absolute inset-0 pointer-events-none bg-accent-500 transform translate-x-full"></div>
      </div>

      <div class="slide w-full">
        <div class="hero relative block overflow-hidden w-full">
          <div class="hero-inner">
            <div class="media-container bg-gray-700 h-screen">
              <div class="media-inner">
                <img class="media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="">
              </div>
            </div>
            <div class="hero-content container absolute inset-0 flex items-end justify-center text-center md:items-center md:justify-end md:text-right">
              <div class="block w-full py-8 md:py-12 max-w-2xl mx-auto md:mr-0 text-white links-inverse">
                <h2 class="h1">
                  Lorem ipsum dolor sit amet
                </h2>
                <h3 class="p max-w-lg mx-auto md:mr-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis.
                </h3>
                <div class="list list-3 justify-center md:justify-end">
                  <a href="#" class="btn text-xs py-2 px-3.5 rounded-md ${btnPrimary()}">
                    Lorem ipsum
                  </a>
                  <a href="#" class="btn text-xs py-2 px-3.5 rounded-md ${btnPrimary()}">
                    Dolor sit amet
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="hero-cover absolute inset-0 pointer-events-none bg-accent-500 transform translate-x-full"></div>
      </div>

    </div>
  </div>

  <button type="button" class="slider-ui hidden md:block cursor-none z-top absolute top-0 left-0 w-24 h-full group" data-xt-nav="-1" aria-label="Previous slide" data-xt-mousefollow="{ targets: '.mousefollow' }">
    <div class="mousefollow text-white text-4xl transition-opacity opacity-0 active:opacity-100">
      ${iconArrowLeft({ classes: 'transform transition-all group-active:opacity-75 group-active:scale-75' })}
    </div>
  </button>

  <button type="button" class="slider-ui hidden md:block cursor-none z-top absolute top-0 right-0 w-24 h-full group" data-xt-nav="-1" aria-label="Next slide" data-xt-mousefollow="{ targets: '.mousefollow' }">
    <div class="mousefollow text-white text-4xl transition-opacity opacity-0 active:opacity-100">
      ${iconArrowRight({ classes: 'transform transition-all group-active:opacity-75 group-active:scale-75' })}
    </div>
  </button>

  <nav class="slider-pagination slider-ui hidden">
    <button type="button" class="btn xt-ignore" data-xt-pag title="Slide xt-num">
    </button>
  </nav>

</div>
`

class Page extends React.Component {
  render() {
    return <DemoVanillaIframe demo={demo} />
  }
}

export default Page
