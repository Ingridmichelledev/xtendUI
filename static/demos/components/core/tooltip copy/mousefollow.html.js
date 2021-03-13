const moduleParents = Object.values(require.cache).filter(m => m.children.includes(module))
let resolve
if (moduleParents.length) {
  resolve = moduleParents[0].resolve
}

const classes = resolve
  ? require(`${resolve}components/snippets/classes`).classes
  : require('components/snippets/classes').classes

const html = /* HTML */ `
  <div id="ref--">
    <div data-xt-tooltip="{ popperjs: false }" data-xt-mousefollow>
      <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonPrimary()}">
        mouse follow
      </button>

      <div class="xt-tooltip p-2 group xt-mousefollow" data-xt-duration="300">
        <div
          class="relative ${classes.tooltipMd()} rounded-md shadow-tooltip ${classes.cardBlack()} -mt-1 ml-4 pointer-events-none transform transition duration-300 ease-in-out-quint opacity-0 translate-x-4 group-active:opacity-100 group-active:translate-x-0"
        >
          Lorem ipsum dolor sit amet
        </div>
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
