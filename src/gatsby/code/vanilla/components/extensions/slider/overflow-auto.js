import path from 'path'
const markupSlider = require('components/snippets/components/markup-slider-overflow').default
const indentString = require('indent-string')

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="slider demo--overflow-auto"
    data-xt-slider="{ align: 'center', drag: { wrap: true } }">
${indentString(markupSlider(), 2)}
</div>
`
