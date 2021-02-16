import path from 'path'
const btnDefault = require('components/snippets/classes/btn-default').default
const cardDefault = require('components/snippets/classes/card-default').default

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="list list-3 items-center justify-center">

  <div class="card rounded-md ${cardDefault()}">
    <div class="text-sm p-6">
      <div class="h5">Small</div>
      <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
    </div>
    <span class="loader absolute z-top inset-0 rounded-inherit overflow-hidden">
      <span class="filler absolute inset-0 m-auto text-primary-500 w-1 left-auto">
        <span class="absolute bg-current w-full right-0 animate-filler-y"></span>
        <span class="absolute bg-current opacity-25 w-full h-full right-0"></span>
      </span>
    </span>
  </div>

  <button type="button" class="btn text-xs py-2 px-3.5 rounded-md ${btnDefault()}">
    Lorem ipsum
    <span class="loader absolute z-top inset-0 rounded-inherit overflow-hidden">
      <span class="filler absolute inset-0 m-auto text-primary-500 w-1 left-auto">
        <span class="absolute bg-current w-full right-0 animate-filler-y"></span>
        <span class="absolute bg-current opacity-25 w-full h-full right-0"></span>
      </span>
    </span>
  </button>

</div>
`
