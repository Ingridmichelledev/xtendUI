const moduleParents = Object.values(require.cache).filter(m => m.children && m.children.includes(module))
let resolve
if (moduleParents.length) {
  resolve = moduleParents[0].resolve
}

const classes = resolve
  ? require(`${resolve}components/snippets/classes`).classes
  : require('components/snippets/classes').classes

const html = /* HTML */ `
  <div id="ref--">
    <form class="text-sm">
      <div class="xt-list flex-col">
        <div class="xt-list-inner">
          <button type="button" class="xt-button ${classes.buttonMd()} rounded-tl-md ${classes.buttonDefault()}">
            ${classes.iconSearch({ classes: 'text-xl -my-1' })}
          </button>
          <input
            type="text"
            class="xt-input rounded-tr-md ${classes.inputDefault()}"
            aria-label="Search"
            placeholder="Seach Catalog"
          />
        </div>

        <button type="button" class="xt-button ${classes.buttonMd()} rounded-b-md ${classes.buttonPrimary()}">
          Search
        </button>
      </div>
    </form>
  </div>
`

export const object = {
  html: html,
}
