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
    <div
      class="xt-list xt-list-3 items-center"
      data-xt-toggle="{ min: 1, on: 'mouseenter', off: 'mouseleave', autoDisable: false, preventEvent: true }"
    >
      <a
        href="#toggle--prevent-event-1-hover"
        class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}"
      >
        Toggle 1 hover
      </a>

      <a
        href="#toggle--prevent-event-2-hover"
        class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}"
      >
        Toggle 2 hover
      </a>

      <div class="xt-card xt-toggle rounded-md ${classes.cardToggle()}">Target 1 hover</div>

      <div class="xt-card xt-toggle rounded-md ${classes.cardToggle()}">Target 2 hover</div>
    </div>
  </div>
`

export const object = {
  html: html,
}
