import path from 'path'
const btnPrimary = require('components/snippets/classes/btn-primary').default
const cardDefaultDrop = require('components/snippets/classes/card-default-drop').default

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="list list-2 items-center">

  <div class="drop-container" data-xt-drop>

    <button type="button" class="btn btn-md ${btnPrimary()}">
      group
    </button>

    <div class="drop">
      <div class="drop-inner">
        <div class="card w-80 ${cardDefaultDrop()} overflow-y-auto overflow-x-hidden overflow-sub max-h-96">
          <div class="media-container rounded-t-md" style="padding-bottom: 37.5%;">
            <div class="media-inner">
              <img class="media object-cover object-center" src="/img.svg" loading="lazy" alt="">
            </div>
          </div>
          <div class="card-md">
            <div class="h4">Lorem ipsum</div>
            <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
            <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
            <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
          </div>
        </div>
      </div>
    </div>

  </div>

  <div class="drop-container" data-xt-drop>

    <button type="button" class="btn btn-md ${btnPrimary()}">
      group
    </button>

    <div class="drop">
      <div class="drop-inner">
        <div class="card w-80 ${cardDefaultDrop()}">
          <div class="media-container rounded-t-md" style="padding-bottom: 37.5%;">
            <div class="media-inner">
              <img class="media object-cover object-center" src="/img.svg" loading="lazy" alt="">
            </div>
          </div>
          <div class="card-md overflow-y-auto overflow-x-hidden overflow-sub max-h-64">
            <div class="h4">Lorem ipsum</div>
            <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
            <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
            <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
          </div>
      </div>
    </div>

  </div>

</div>
`
