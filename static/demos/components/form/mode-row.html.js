const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <form class="text-sm">
      <div class="*** xt-row xt-row-x-6 xt-row-y-4 ***">
        <div class="*** w-full ***">
          <label class="${classes.label()} mb-3 ${classes.labelDefault()}"> Lorem ipsum </label>
          <input
            type="text"
            class="${classes.input()} ${classes.inputRadius()} ${classes.inputDefault()}"
            aria-label="Lorem ipsum"
          />
        </div>

        <div class="*** w-full ***">
          <label class="${classes.label()} mb-3 ${classes.labelDefault()}"> Dolor sit amet </label>
          <input
            type="text"
            class="${classes.input()} ${classes.inputRadius()} ${classes.inputDefault()}"
            aria-label="Dolor sit amet"
          />
        </div>

        <div class="*** w-full md:w-6/12 ***">
          <label class="${classes.label()} mb-3 ${classes.labelDefault()}"> Lorem Ipsum </label>
          <input
            type="text"
            class="${classes.input()} ${classes.inputRadius()} ${classes.inputDefault()}"
            aria-label="Lorem ipsum"
          />
        </div>

        <div class="*** w-full md:w-6/12 ***">
          <label class="${classes.label()} mb-3 ${classes.labelDefault()}"> Dolor sit amet </label>
          <input
            type="text"
            class="${classes.input()} ${classes.inputRadius()} ${classes.inputDefault()}"
            aria-label="Dolor sit amet"
          />
        </div>

        <div class="*** w-full ***">
          <label class="${classes.label()} mb-3 ${classes.labelDefault()}"> Checkbox </label>

          <div class="*** xt-row xt-row-x-8 xt-row-y-2 ***">
            <div class="*** w-full ***">
              <label class="${classes.checkLabel()}">
                <input
                  type="checkbox"
                  class="xt-check xt-checkbox ${classes.checkRadius()} ${classes.checkDefault()}"
                  checked
                  disabled
                />
                <span class="${classes.checkContent()}"
                  ><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                  suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                  augue, sagittis vitae magna eget, vehicula scelerisque elit.</span
                >
              </label>
            </div>

            <div class="*** w-full ***">
              <label class="${classes.checkLabel()}">
                <input
                  type="checkbox"
                  class="xt-check xt-checkbox ${classes.checkRadius()} ${classes.checkDefault()}"
                />
                <span class="${classes.checkContent()}"
                  ><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                  suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                  augue, sagittis vitae magna eget, vehicula scelerisque elit.</span
                >
              </label>
            </div>
          </div>
        </div>

        <div class="*** w-full ***">
          <label class="${classes.label()} mb-3 ${classes.labelDefault()}"> Radio </label>

          <div class="*** xt-row xt-row-x-8 xt-row-y-2 ***">
            <div class="*** w-full md:w-6/12 ***">
              <label class="${classes.checkLabel()}">
                <input
                  type="radio"
                  class="xt-check xt-radio ${classes.radioRadius()} ${classes.radioDefault()}"
                  name="radio-row"
                  checked
                />
                <span class="${classes.checkContent()}"
                  ><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                  suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                  augue, sagittis vitae magna eget, vehicula scelerisque elit.</span
                >
              </label>
            </div>

            <div class="*** w-full md:w-6/12 ***">
              <label class="${classes.checkLabel()}">
                <input
                  type="radio"
                  class="xt-check xt-radio ${classes.radioRadius()} ${classes.radioDefault()}"
                  name="radio-row"
                />
                <span class="${classes.checkContent()}"
                  ><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                  suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                  augue, sagittis vitae magna eget, vehicula scelerisque elit.</span
                >
              </label>
            </div>
          </div>
        </div>

        <div class="*** w-full ***">
          <label class="${classes.label()} mb-3 ${classes.labelDefault()}"> Switch </label>

          <div class="*** xt-row xt-row-x-8 xt-row-y-2 ***">
            <div class="*** w-full ***">
              <label class="${classes.checkLabel()}">
                <input
                  type="checkbox"
                  class="xt-check xt-switch ${classes.switchRadius()} ${classes.switchDefault()}"
                />
                <span class="${classes.checkContent()}"
                  ><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                  suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                  augue, sagittis vitae magna eget, vehicula scelerisque elit.</span
                >
              </label>
            </div>

            <div class="*** w-full md:w-6/12 ***">
              <label class="${classes.checkLabel()}">
                <input
                  type="radio"
                  class="xt-check xt-switch ${classes.switchRadius()} ${classes.switchDefault()}"
                  name="switch-row"
                  checked
                />
                <span class="${classes.checkContent()}"
                  ><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                  suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                  augue, sagittis vitae magna eget, vehicula scelerisque elit.</span
                >
              </label>
            </div>

            <div class="*** w-full md:w-6/12 ***">
              <label class="${classes.checkLabel()}">
                <input
                  type="radio"
                  class="xt-check xt-switch ${classes.switchRadius()} ${classes.switchDefault()}"
                  name="switch-row"
                />
                <span class="${classes.checkContent()}"
                  ><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                  suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                  augue, sagittis vitae magna eget, vehicula scelerisque elit.</span
                >
              </label>
            </div>
          </div>
        </div>

        <div class="*** w-full ***">
          <button
            type="submit"
            class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonPrimary()}"
          >
            submit
          </button>
        </div>
      </div>
    </form>
  </div>
`

export const object = {
  html: html,
}
