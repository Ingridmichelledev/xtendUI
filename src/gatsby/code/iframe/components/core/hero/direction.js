import React from 'react'
import path from 'path'

const buttonMd = require('components/snippets/classes').buttonMd
const buttonPrimary = require('components/snippets/classes').buttonPrimary

import DemoVanillaIframe from 'components/demo/demo-vanilla-iframe'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  container: false,
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="hero relative block overflow-hidden w-full">
  <div class="xt-media-container bg-gray-200 h-screen">
    <div class="xt-media-inner">
      <img class="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="">
    </div>
  </div>
  <div class="container absolute inset-0 flex items-end justify-start text-left">
    <div class="block w-full py-8 md:py-12 text-white xt-links-inverse">
      <h2 class="xt-h1 max-w-2xl mr-auto">
        Lorem ipsum dolor sit amet
      </h2>
      <h3 class="xt-p max-w-lg mr-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis.
      </h3>
      <div class="xt-list xt-list-3 justify-start max-w-2xl mr-auto">
        <a href="#" class="xt-button ${buttonMd()} rounded-md ${buttonPrimary()}">
          Lorem ipsum
        </a>
        <a href="#" class="xt-button ${buttonMd()} rounded-md ${buttonPrimary()}">
          Dolor sit amet
        </a>
      </div>
    </div>
  </div>
</div>

<div class="hero relative block overflow-hidden w-full">
  <div class="xt-media-container bg-gray-200 h-screen">
    <div class="xt-media-inner">
      <img class="xt-media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="">
    </div>
  </div>
  <div class="container absolute inset-0 flex items-center justify-start text-left">
    <div class="block w-full py-8 md:py-12 text-white xt-links-inverse">
      <h2 class="xt-h1 max-w-2xl mr-auto">
        Lorem ipsum dolor sit amet
      </h2>
      <h3 class="xt-p max-w-lg mr-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis.
      </h3>
      <div class="xt-list xt-list-3 justify-start max-w-2xl mr-auto">
        <a href="#" class="xt-button ${buttonMd()} rounded-md ${buttonPrimary()}">
          Lorem ipsum
        </a>
        <a href="#" class="xt-button ${buttonMd()} rounded-md ${buttonPrimary()}">
          Dolor sit amet
        </a>
      </div>
    </div>
  </div>
</div>

<div class="hero relative block overflow-hidden w-full">
  <div class="xt-media-container bg-gray-200 h-screen">
    <div class="xt-media-inner">
      <img class="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="">
    </div>
  </div>
  <div class="container absolute inset-0 flex items-center justify-end text-right">
    <div class="block w-full py-8 md:py-12 text-white xt-links-inverse">
      <h2 class="xt-h1 max-w-2xl ml-auto">
        Lorem ipsum dolor sit amet
      </h2>
      <h3 class="xt-p max-w-lg ml-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis.
      </h3>
      <div class="xt-list xt-list-3 justify-end max-w-2xl ml-auto">
        <a href="#" class="xt-button ${buttonMd()} rounded-md ${buttonPrimary()}">
          Lorem ipsum
        </a>
        <a href="#" class="xt-button ${buttonMd()} rounded-md ${buttonPrimary()}">
          Dolor sit amet
        </a>
      </div>
    </div>
  </div>
</div>
`

class Page extends React.Component {
  render() {
    return <DemoVanillaIframe demo={demo} />
  }
}

export default Page
