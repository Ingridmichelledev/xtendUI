import path from 'path'

const dirs = path.dirname(__filename).split('/')
export const demo = {
  name: path.basename(__filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `
<div class="list list--default list-space--small align-items--center demo--toggle-timing-delay-fnc">
  <button type="button" class="btn btn--default">
    Toggle 0
  </button>
  <button type="button" class="btn btn--default" data-xt-group="0">
    Group 0
  </button>
  <button type="button" class="btn btn--default" data-xt-group="1">
    Group 1
  </button>
  <div class="note note--default note--background toggle-block">
    Target 0
  </div>
  <div class="note note--default note--background toggle-block" data-xt-group="0">
    Group 0a
  </div>
  <div class="note note--default note--background toggle-block" data-xt-group="1">
    Group 1a
  </div>
  <div class="note note--default note--background toggle-block" data-xt-group="0">
    Group 0b
  </div>
  <div class="note note--default note--background toggle-block" data-xt-group="1">
    <div class="alert-content">
      Group 1b
    </div>
  </div>
  <div class="note note--default note--background toggle-block" data-xt-group="0">
    Group 0c
  </div>
  <div class="note note--default note--background toggle-block" data-xt-group="1">
    Group 1c
  </div>
</div>

<br>

<div class="list list--default list-space--small align-items--center demo--toggle-timing-delay-fnc--hover">
  <button type="button" class="btn btn--default">
    Toggle 0
  </button>
  <button type="button" class="btn btn--default" data-xt-group="0">
    Group 0
  </button>
  <button type="button" class="btn btn--default" data-xt-group="1">
    Group 1
  </button>
  <div class="note note--default note--background toggle-block">
    Target 0
  </div>
  <div class="note note--default note--background toggle-block" data-xt-group="0">
    Group 0a
  </div>
  <div class="note note--default note--background toggle-block" data-xt-group="1">
    Group 1a
  </div>
  <div class="note note--default note--background toggle-block" data-xt-group="0">
    Group 0b
  </div>
  <div class="note note--default note--background toggle-block" data-xt-group="1">
    Group 1b
  </div>
  <div class="note note--default note--background toggle-block" data-xt-group="0">
    Group 0c
  </div>
  <div class="note note--default note--background toggle-block" data-xt-group="1">
    Group 1c
  </div>
</div>
`
