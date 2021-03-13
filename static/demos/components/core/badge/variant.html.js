const classes = require('src/gatsby/components/snippets/classes').classes

const html = `
  <div id="ref--">
    <div class="xt-list xt-list-3 items-center">
      <div class="xt-badge ${classes.badgeMd()} ${classes.badgeDefault()}">Gray</div>

      <div class="xt-badge ${classes.badgeMd()} ${classes.badgePrimary()}">Primary</div>
    </div>
  </div>
`

export const object = {
  html: html,
}
