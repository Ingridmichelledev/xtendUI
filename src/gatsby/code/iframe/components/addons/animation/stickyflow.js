import React from 'react'
import path from 'path'

const buttonLg = require('components/snippets/classes').buttonLg
const cardSm = require('components/snippets/classes').cardSm
const buttonPrimary = require('components/snippets/classes').buttonPrimary
const cardDefault = require('components/snippets/classes').cardDefault
const cardPrimary = require('components/snippets/classes').cardPrimary

import DemoVanillaIframe from 'components/demo/demo-vanilla-iframe'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  container: false,
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `

<header class="site-header">
  <div class="xt-card ${cardSm()} ${cardPrimary()}">
    <div class="xt-h4">Header</div>
  </div>
</header>

<main class="site-main">

  <div class="container">
    <div class="xt-row xt-row-8 lg:xt-row-12 items-stretch">

      <div class="w-full md:w-6/12 lg:w-7/12">
        <div class="relative pt-6 md:py-6">

          <div class="xt-list flex-col">

            <div class="w-full">
              <div class="xt-media-container bg-gray-200">
                <div class="xt-media-inner relative">
                  <img class="xt-media" id="product-image-5" src="/img.svg" loading="lazy" alt=""/>
                </div>
              </div>
            </div>

            <div class="w-full">
              <div class="xt-media-container bg-gray-200">
                <div class="xt-media-inner relative">
                  <img class="xt-media" id="product-image-5" src="/img.svg" loading="lazy" alt=""/>
                </div>
              </div>
            </div>

            <div class="w-full">
              <div class="xt-media-container bg-gray-200">
                <div class="xt-media-inner relative">
                  <img class="xt-media" id="product-image-5" src="/img.svg" loading="lazy" alt=""/>
                </div>
              </div>
            </div>

            <div class="w-full">
              <div class="xt-media-container bg-gray-200">
                <div class="xt-media-inner relative">
                  <img class="xt-media" id="product-image-5" src="/img.svg" loading="lazy" alt=""/>
                </div>
              </div>
            </div>

            <div class="w-full">
              <div class="xt-media-container bg-gray-200">
                <div class="xt-media-inner relative">
                  <img class="xt-media" id="product-image-5" src="/img.svg" loading="lazy" alt=""/>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

      <div class="w-full md:w-6/12 lg:w-5/12" data-xt-stickyflow>
        <div class="stickyflow-filler pointer-events-none absolute md:relative"></div>
        <div class="md:py-12 md:sticky stickyflow">

          <h1 class="xt-h2">
            Lorem ipsum dolor sit amet
          </h1>

          <div class="xt-h5  mb-6">
            €&nbsp;229,00
          </div>

          <a href="#" class="xt-button ${buttonLg()} rounded-md mb-6 ${buttonPrimary()}">
            Add to cart
          </a>

          <div class="text-opacity-75">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec mauris est. Etiam egestas efficitur semper. Donec imperdiet eget justo at pellentesque. Proin a ultricies orci. Vivamus ut scelerisque lorem. Suspendisse lobortis consequat magna ut ultricies. Duis consequat vitae justo nec commodo. Vestibulum id eros eu sapien aliquam feugiat. Aenean id accumsan orci, nec elementum ex. Fusce a dolor in lacus facilisis vulputate vitae vitae nunc. Phasellus odio quam, semper in finibus at, consequat quis lacus. Sed varius sem commodo tellus pretium, posuere pharetra mauris elementum. Nunc et aliquam velit, quis suscipit justo. Ut ac pretium massa. Aenean ullamcorper mollis urna eu pharetra.</p>
            <p>Proin eget lectus pharetra, pretium nunc sed, pulvinar nibh. Quisque ac tellus ac mi posuere tristique. Ut dictum elit sed facilisis rutrum. In sagittis ac ante at blandit. Sed at felis fermentum, semper lorem sed, sagittis lacus. Cras justo massa, molestie sit amet lacinia a, luctus ac velit. Cras tristique, urna in hendrerit laoreet, nisi sem interdum urna, rutrum elementum nisl turpis id est.</p>
          </div>

        </div>
      </div>

    </div>
  </div>

</main>

<footer class="site-footer">
  <div class="xt-card ${cardSm()} ${cardDefault()}">
    <div class="xt-h4">Footer</div>
  </div>
</footer>

</div>
`

class Page extends React.Component {
  render() {
    return <DemoVanillaIframe demo={demo} />
  }
}

export default Page
