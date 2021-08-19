const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <nav class="xt-list xt-list-2 flex-col">
      <a
        href="#"
        type="button"
        class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonDefaultPrimary()}"
      >
        Justify default (center)<br />Text default (center) ${classes.iconSearch({ classes: 'text-xl -my-1 ml-2' })}
      </a>

      <a
        href="#"
        type="button"
        class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} *** justify-center text-center *** ${classes.buttonDefaultPrimary()}"
      >
        Justify center<br />Text center ${classes.iconSearch({ classes: 'text-xl -my-1 ml-2' })}
      </a>

      <a
        href="#"
        type="button"
        class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} *** justify-start text-left *** ${classes.buttonDefaultPrimary()}"
      >
        Justify start<br />Text left ${classes.iconSearch({ classes: 'text-xl -my-1 ml-2' })}
      </a>

      <a
        href="#"
        type="button"
        class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} *** justify-end text-right *** ${classes.buttonDefaultPrimary()}"
      >
        Justify end<br />Text right ${classes.iconSearch({ classes: 'text-xl -my-1 ml-2' })}
      </a>

      <a
        href="#"
        type="button"
        class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} *** justify-between *** ${classes.buttonDefaultPrimary()}"
      >
        Justify between ${classes.iconSearch({ classes: 'text-xl -my-1 ml-2' })}
      </a>

      <a
        href="#"
        type="button"
        class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} *** justify-around *** ${classes.buttonDefaultPrimary()}"
      >
        Justify around ${classes.iconSearch({ classes: 'text-xl -my-1 ml-2' })}
      </a>
    </nav>
  </div>
`

export const object = {
  html: html,
}
