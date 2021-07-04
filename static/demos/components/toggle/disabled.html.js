const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div
      class="xt-list xt-list-3 items-center"
      data-xt-toggle="{ elements: '[data-xt-toggle-element]', targets: '[data-xt-toggle-target]', matches: { '(min-width: 768px)': { disabled: true } } }"
    >
      <button type="button" class="xt-button ${classes.buttonToggle()}" data-xt-toggle-element>Toggle 0</button>

      <button type="button" class="xt-button ${classes.buttonToggle()}" data-xt-toggle-element>Toggle 1</button>

      <div class="*** xt-toggle *** ${classes.cardToggle()}" data-xt-toggle-target>Target 0</div>

      <div class="*** xt-toggle *** ${classes.cardToggle()} *** on ***" data-xt-toggle-target>
        <div
          class="xt-list xt-list-3 items-center"
          data-xt-toggle="{ elements: '[data-xt-toggle-element-nested]', targets: '[data-xt-toggle-target-nested]', min: 1 }"
        >
          <button type="button" class="xt-button ${classes.buttonToggle()}" data-xt-toggle-element-nested>
            Toggle Nested 0
          </button>

          <button type="button" class="xt-button ${classes.buttonToggle()}" data-xt-toggle-element-nested>
            Toggle Nested 1
          </button>

          <div class="xt-toggle" data-xt-toggle-target-nested>Target Nested 0</div>

          <div class="xt-toggle" data-xt-toggle-target-nested>Target Nested 1</div>
        </div>
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
