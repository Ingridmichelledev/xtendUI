const classes = require('src/gatsby/components/snippets/classes').classes

const html = /* HTML */ `
  <div id="ref--">
    <form class="text-sm">
      <div class="xt-row xt-row-x-6 xt-row-y-4">
        <div class="w-full">
          <div class="xt-row xt-row-x-6 xt-row-y-4">
            <div class="w-full md:w-2/12 md:self-center">
              <label class="xt-label ${classes.labelDefault()}"> Lorem ipsum </label>
            </div>

            <div class="w-full md:w-10/12">
              <input type="text" class="xt-input rounded-md ${classes.inputDefault()}" aria-label="Lorem ipsum" />
            </div>
          </div>
        </div>

        <div class="w-full">
          <div class="xt-row xt-row-x-6 xt-row-y-4">
            <div class="w-full md:w-2/12 md:self-center">
              <label class="xt-label ${classes.labelDefault()}"> Dolor sit amet </label>
            </div>

            <div class="w-full md:w-10/12">
              <input type="text" class="xt-input rounded-md ${classes.inputDefault()}" aria-label="Dolor sit amet" />
            </div>
          </div>
        </div>

        <div class="w-full md:w-6/12">
          <div class="xt-row xt-row-x-6 xt-row-y-4">
            <div class="w-full md:w-4/12 md:self-center">
              <label class="xt-label ${classes.labelDefault()}"> Lorem ipsum </label>
            </div>

            <div class="w-full md:w-8/12">
              <input type="text" class="xt-input rounded-md ${classes.inputDefault()}" aria-label="Lorem ipsum" />
            </div>
          </div>
        </div>

        <div class="w-full md:w-6/12">
          <div class="xt-row xt-row-x-6 xt-row-y-4">
            <div class="w-full md:w-4/12 md:self-center">
              <label class="xt-label ${classes.labelDefault()}"> Dolor sit amet </label>
            </div>

            <div class="w-full md:w-8/12">
              <input type="text" class="xt-input rounded-md ${classes.inputDefault()}" aria-label="Dolor sit amet" />
            </div>
          </div>
        </div>

        <div class="w-full">
          <div class="xt-row xt-row-x-6 xt-row-y-4">
            <div class="w-full md:w-2/12 md:self-baseline">
              <label class="xt-label ${classes.labelDefault()}"> Checkbox </label>
            </div>

            <div class="w-full md:w-10/12">
              <div class="xt-row xt-row-x-8 xt-row-y-2">
                <div class="w-full">
                  <label class="xt-label-check">
                    <input
                      type="checkbox"
                      class="xt-check xt-checkbox rounded-md ${classes.checkDefault()}"
                      checked
                      disabled
                    />
                    <span class="xt-check-content"
                      ><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                      suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed
                      mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</span
                    >
                  </label>
                </div>

                <div class="w-full">
                  <label class="xt-label-check">
                    <input type="checkbox" class="xt-check xt-checkbox rounded-md ${classes.checkDefault()}" />
                    <span class="xt-check-content"
                      ><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                      suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed
                      mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</span
                    >
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full">
          <div class="xt-row xt-row-x-6 xt-row-y-4">
            <div class="w-full md:w-2/12 md:self-baseline">
              <label class="xt-label ${classes.labelDefault()}"> Radio </label>
            </div>

            <div class="w-full md:w-10/12">
              <div class="xt-row xt-row-x-8 xt-row-y-2">
                <div class="w-full">
                  <label class="xt-label-check">
                    <input
                      type="radio"
                      class="xt-check xt-radio rounded-full ${classes.radioDefault()}"
                      name="radio-horizontal"
                      checked
                    />
                    <span class="xt-check-content"
                      ><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                      suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed
                      mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</span
                    >
                  </label>
                </div>

                <div class="w-full">
                  <label class="xt-label-check">
                    <input
                      type="radio"
                      class="xt-check xt-radio rounded-full ${classes.radioDefault()}"
                      name="radio-horizontal"
                    />
                    <span class="xt-check-content"
                      ><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                      suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed
                      mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</span
                    >
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full">
          <div class="xt-row xt-row-x-6 xt-row-y-4">
            <div class="w-full md:w-2/12 md:self-baseline">
              <label class="xt-label ${classes.labelDefault()}"> Switch </label>
            </div>

            <div class="w-full md:w-10/12">
              <div class="xt-row xt-row-x-8 xt-row-y-2">
                <div class="w-full">
                  <label class="xt-label-check">
                    <input type="checkbox" class="xt-check xt-switch rounded-full ${classes.switchDefault()}" />
                    <span class="xt-check-content"
                      ><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                      suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed
                      mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</span
                    >
                  </label>
                </div>

                <div class="w-full">
                  <label class="xt-label-check">
                    <input
                      type="radio"
                      class="xt-check xt-switch rounded-full ${classes.switchDefault()}"
                      name="switch-horizontal"
                    />
                    <span class="xt-check-content"
                      ><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                      suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed
                      mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</span
                    >
                  </label>
                </div>

                <div class="w-full">
                  <label class="xt-label-check">
                    <input
                      type="radio"
                      class="xt-check xt-switch rounded-full ${classes.switchDefault()}"
                      name="switch-horizontal"
                    />
                    <span class="xt-check-content"
                      ><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                      suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed
                      mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</span
                    >
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full">
          <button type="submit" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonPrimary()}">
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
