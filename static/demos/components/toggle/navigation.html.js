const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div
      class="xt-list xt-list-3 items-center"
      data-xt-toggle="{ elements: '[data-xt-toggle-el]', targets: '[data-xt-toggle-tr]', loop: true, navigation: '[data-xt-nav]' }"
    >
      <button type="button" class="xt-button ${classes.buttonToggle()}" data-xt-toggle-el>Toggle 0</button>

      <button type="button" class="xt-button ${classes.buttonToggle()}" data-xt-toggle-el>Toggle 1</button>

      <button type="button" class="xt-button ${classes.buttonToggle()}" data-xt-toggle-el>Toggle 2</button>

      <button type="button" class="xt-button ${classes.buttonToggle()}" data-xt-toggle-el>Toggle 3</button>

      <div>
        <div class="xt-list xt-list-3 items-center">
          <button
            type="button"
            class="xt-button text-2xs py-2 px-2 w-7 h-7 rounded-full ${classes.buttonDefault()}"
            data-xt-nav="-1"
            title="Previous slide"
          >
            ${classes.iconArrowLeft({ classes: 'text-xl -my-1' })}
          </button>

          <button
            type="button"
            class="xt-button text-2xs py-2 px-2 w-7 h-7 rounded-full ${classes.buttonDefault()}"
            data-xt-nav="1"
            title="Next slide"
          >
            ${classes.iconArrowRight({ classes: 'text-xl -my-1' })}
          </button>
        </div>
      </div>

      <div class="*** xt-toggle *** ${classes.cardToggle()}" data-xt-toggle-tr>Target 0</div>

      <div class="*** xt-toggle *** ${classes.cardToggle()}" data-xt-toggle-tr>Target 1</div>

      <div class="*** xt-toggle *** ${classes.cardToggle()}" data-xt-toggle-tr>Target 2</div>

      <div class="*** xt-toggle *** ${classes.cardToggle()}" data-xt-toggle-tr>Target 3</div>
    </div>
  </div>
`

export const object = {
  html: html,
}
