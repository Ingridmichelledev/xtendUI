const classes = require('src/gatsby/components/snippets/classes').classes

const html = /* HTML */ `
  <div class="CCC--">
    <form class="text-sm">
      <button type="button" class="xt-list flex-col group">
        <div class="xt-button ${classes.buttonMd()} rounded-t-md ${classes.buttonPrimaryGroup()}">Search</div>

        <div class="xt-button ${classes.buttonMd()} rounded-b-md ${classes.buttonDefaultGroup()}">
          ${classes.iconSearch({ classes: 'text-xl -my-1' })}
        </div>
      </button>
    </form>
  </div>
`

export const object = {
  html: html,
}
