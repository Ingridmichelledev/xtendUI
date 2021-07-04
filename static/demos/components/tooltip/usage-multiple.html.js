const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div data-xt-tooltip="{ elements: '[data-xt-tooltip-el]', targets: '[data-xt-tooltip-tr]' }">
      Lorem ipsum
      <span data-xt-tooltip-el>
        <a href="#">dolor</a>

        <div class="*** xt-tooltip *** p-2" data-xt-tooltip-tr>
          <div class="relative ${classes.tooltipMd()} ${classes.tooltipRadius()} shadow-tooltip ${classes.cardBlack()}">
            Lorem ipsum dolor sit amet
          </div>
        </div>
      </span>
      sit
      <span data-xt-tooltip-el>
        <a href="#">amet</a>

        <div class="*** xt-tooltip *** p-2" data-xt-tooltip-tr>
          <div class="relative ${classes.tooltipMd()} ${classes.tooltipRadius()} shadow-tooltip ${classes.cardBlack()}">
            Consectetur adipiscing elit
          </div>
        </div>
      </span>
    </div>
  </div>
`

export const object = {
  html: html,
}
