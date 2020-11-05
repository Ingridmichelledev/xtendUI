import path from 'path'
const btnPrimary = require('components/snippets/classes/btn-primary').default

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="relative block overflow-hidden w-full">
  <div class="media-container" style="padding-bottom: 75%;">
    <div class="media-inner">
      <img class="media object-cover object-center" src="/img.svg" loading="lazy" alt="">
    </div>
  </div>
  <div class="container z-active md:absolute inset-0 flex items-end justify-center text-center">
    <a href="#" class="group block w-full max-w-xl py-10 md:py-16 md:text-white md:links-inverse">
      <div class="h1 h1-display">
        Lorem ipsum
      </div>
    </a>
  </div>
</div>

<div class="relative block overflow-hidden w-full">
  <div class="media-container" style="padding-bottom: 75%;">
    <div class="media-inner">
      <img class="media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="">
    </div>
  </div>
  <div class="container z-active md:absolute inset-0 flex items-end justify-center text-center">
    <a href="#" class="group block w-full max-w-xl py-10 md:py-16 md:text-white md:links-inverse">
      <div class="h1">
        Lorem ipsum dolor sit amet
      </div>
      <div class="list list-2 justify-center">
        <div class="btn btn-md ${btnPrimary()}">
            Lorem ipsum
        </div>
      </div>
    </a>
  </div>
</div>

`
