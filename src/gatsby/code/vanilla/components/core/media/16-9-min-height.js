import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="media-container media-container-16-9" style="min-height: 300px;">
  <div class="media-inner">
    <img class="media media-cover" src="/img.svg" loading="lazy" alt=""/>
  </div>
</div>
`
