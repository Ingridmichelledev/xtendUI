import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="media-container">
  <div class="media-inner relative">
    <img class="media" src="/img.svg" loading="lazy" alt=""/>
  </div>
</div>
`
