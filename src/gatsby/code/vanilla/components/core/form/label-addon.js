import path from 'path'

const classes = require('components/snippets/classes').classes

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<form class="text-sm">
  <div class="xt-row xt-row-x-6 xt-row-y-4">

    <div class="w-full">
      <label class="xt-label mb-3 ${classes.labelDefault()}">
        Lorem ipsum
        <div class="ml-4">
          <div class="xt-list xt-list-3 items-center">
            <a href="#" class="xt-button xt-link">
              link #1
            </a>
            <a href="#" class="xt-button xt-link">
              link #2
            </a>
          </div>
        </div>
      </label>
      <input type="text" class="xt-input rounded-md ${classes.inputDefault()}" aria-label="Lorem ipsum"/>
    </div>

    <div class="w-full">
      <label class="xt-label mb-3 ${classes.labelDefault()}">
        Dolor sit amet
        <div class="ml-auto">
          <div class="xt-list xt-list-3 items-center">
            <a href="#" class="xt-button xt-link">
              link #1
            </a>
            <a href="#" class="xt-button xt-link">
              link #2
            </a>
          </div>
        </div>
      </label>
      <input type="text" class="xt-input rounded-md ${classes.inputDefault()}" aria-label="Dolor sit amet"/>
    </div>

    <div class="w-full">
      <div class="xt-row xt-row-x-6 xt-row-y-4">

        <div class="w-full md:w-2/12 md:self-center">
          <label class="xt-label flex-col ${classes.labelDefault()}">
            Lorem ipsum
            <div class="mt-2">
              <div class="xt-list xt-list-3 items-center">
                <a href="#" class="xt-button xt-link">
                  link #1
                </a>
                <a href="#" class="xt-button xt-link">
                  link #2
                </a>
              </div>
            </div>
          </label>
        </div>

        <div class="w-full md:w-10/12">
          <input type="text" class="xt-input rounded-md ${classes.inputDefault()}" aria-label="Lorem ipsum"/>
        </div>

      </div>
    </div>

    <div class="w-full">
      <div class="xt-row xt-row-x-6 xt-row-y-4">

        <div class="w-full md:w-2/12 md:self-center">
          <label class="xt-label flex-col ${classes.labelDefault()}">
            Dolor sit amet
            <div class="mt-auto">
              <div class="xt-list xt-list-3 items-center">
                <a href="#" class="xt-button xt-link">
                  link #1
                </a>
                <a href="#" class="xt-button xt-link">
                  link #2
                </a>
              </div>
            </div>
          </label>
        </div>

        <div class="w-full md:w-10/12">
          <input type="text" class="xt-input rounded-md ${classes.inputDefault()}" aria-label="Dolor sit amet"/>
        </div>

      </div>
    </div>

  </div>
</form>
`
