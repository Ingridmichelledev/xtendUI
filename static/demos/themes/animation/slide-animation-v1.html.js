const classes = require('src/gatsby/templates/snippets/classes').classes

const designAnim = () =>
  '*** overflow-hidden opacity-0 translate-y-full group-in:duration-300 group-in:ease-out-cubic group-in:opacity-100 group-in:translate-y-0 group-out:transition group-out:duration-300 group-out:delay-100 group-out:ease-in-out-cubic group-out:translate-y-2/4 ***'
const itemAnim = () =>
  '*** opacity-0 translate-y-2/4 group-in:transition group-in:duration-500 group-in:ease-out-cubic group-in:opacity-100 group-in:translate-y-0 group-out:transition group-out:duration-300 group-out:ease-in-out-cubic group-out:translate-y-1/4 ***'
const itemAnimOpacity = () =>
  '*** opacity-0 transition-opacity duration-300 ease-in-out-cubic group-in:ease-out-quint group-in:delay-100 group-in:opacity-100 ***'

const buttonGray = () => `${classes.buttonUpper()} ${classes.buttonGray()} ${classes.buttonGrayAnim()}`
const buttonPrimary = () => `${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}`
const buttonGrayPrimary = () => `${classes.buttonUpper()} ${classes.buttonGray()} ${classes.buttonGrayPrimaryAnim()}`
const buttonRing = () => `${classes.buttonUpper()} ${classes.buttonRing()} ${classes.buttonRingAnim()}`
const cardGray = () => `${classes.cardGray()}`
const cardWhite = () => `${classes.cardWhite()}`

const html = /* HTML */ `
  <div class="demo--slide-animation-v1">
    <div class="${classes.hBlock()}">Button</div>

    <div class="xt-list xt-list-3 items-center">
      <button type="button" class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${buttonGray()}">
        Gray
      </button>

      <button type="button" class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${buttonPrimary()}">
        Primary
      </button>

      <button
        type="button"
        class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${buttonGrayPrimary()}"
      >
        Gray Primary
      </button>

      <button
        type="button"
        class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${buttonRing()}"
      >
        Ring
      </button>

      <button
        type="button"
        class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonTextAnim()}"
      >
        Text
      </button>

      <button type="button" class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} xt-link">
        Link
      </button>
    </div>

    <div class="${classes.hBlock()}">Drop</div>

    <div class="xt-list xt-list-3 items-center">
      <div data-xt-drop="{ duration: 500 }">
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${buttonPrimary()}"
          data-xt-drop-element
        >
          Drop
        </button>

        <div class="xt-drop p-3 group" data-xt-drop-target>
          <div
            class="xt-card w-64 rounded${classes.dropRadius()} ${classes.dropShadow()} ${classes.textBlack()} ${cardGray()} ${designAnim()}"
          >
            <nav class="xt-list flex-col ${classes.groupMd()} ${itemAnim()}">
              <a
                href="#"
                class="xt-button ${classes.groupButtonMd()} rounded${classes.groupButtonRadius()} ${classes.groupButton()} ${classes.groupButtonGray()} ${classes.buttonGrayPrimaryAnim()}"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </a>
              <button
                type="button"
                class="xt-button ${classes.groupButtonMd()} rounded${classes.groupButtonRadius()} ${classes.groupButton()} ${classes.groupButtonGray()} ${classes.buttonGrayPrimaryAnim()}"
              >
                Dolor sit
              </button>
              <button
                type="button"
                class="xt-button ${classes.groupButtonMd()} rounded${classes.groupButtonRadius()} ${classes.groupButton()} ${classes.groupButtonGray()} ${classes.buttonGrayPrimaryAnim()}"
              >
                Amet
              </button>
            </nav>
          </div>
          <div class="xt-arrow -inset-1 m-3 w-3 h-3 bg-gray-100 ${itemAnimOpacity()}"></div>
        </div>
      </div>

      <div data-xt-drop="{ duration: 500 }">
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${buttonPrimary()}"
          data-xt-drop-element
        >
          Card
        </button>

        <div class="xt-drop p-3 group" data-xt-drop-target>
          <div
            class="xt-card w-64 rounded${classes.dropRadius()} ${classes.dropShadow()} ${classes.textBlack()} ${cardGray()} ${designAnim()}"
          >
            <button
              type="button"
              class="xt-button xt-dismiss absolute z-above top-0 right-0 p-5 text-2xl"
              aria-label="Close"
            >
              ${classes.iconX()}
            </button>
            <div class="${classes.cardSm()} rounded${classes.dropRadius()} ${itemAnim()}">
              <div class="xt-h5">Lorem ipsum</div>
              <p>
                <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                suscipit, velit eu tristique mollis.
              </p>
            </div>
          </div>
          <div class="xt-arrow -inset-1 m-3 w-3 h-3 bg-gray-100 ${itemAnimOpacity()}"></div>
        </div>
      </div>
    </div>

    <div class="${classes.hBlock()}">Tooltip</div>

    <div class="xt-list xt-list-3 items-center">
      <div data-xt-tooltip="{ duration: 500 }">
        <div data-xt-tooltip-element>
          <button
            type="button"
            class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${buttonPrimary()}"
          >
            Tooltip
          </button>

          <div class="xt-tooltip p-3 group" data-xt-tooltip-target>
            <div
              class="relative ${classes.tooltipMd()} rounded${classes.tooltipRadius()} ${classes.tooltipShadow()} ${classes.textWhite()} ${classes.cardBlack()} ${designAnim()}"
            >
              <div class="${itemAnim()}">Lorem ipsum dolor sit amet</div>
            </div>
            <div class="xt-arrow z-below -inset-1 m-3 w-3 h-3 bg-black ${itemAnimOpacity()}"></div>
          </div>
        </div>
      </div>

      <div data-xt-tooltip="{ duration: 500 }">
        <div data-xt-tooltip-element>
          <button
            type="button"
            class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${buttonPrimary()}"
          >
            Group
          </button>

          <div class="xt-tooltip p-3 group" data-xt-tooltip-target>
            <div
              class="rounded${classes.tooltipRadius()} ${classes.tooltipShadow()} ${classes.textBlack()} ${cardWhite()} ${designAnim()}"
            >
              <form class="text-sm">
                <div class="xt-list flex-nowrap max-w-sm ${itemAnim()}">
                  <div class="inline-flex flex-auto">
                    <button
                      type="button"
                      class="xt-button ${classes.buttonMd()} rounded-l${classes.groupButtonRadius()} ${buttonGray()}"
                    >
                      ${classes.iconSearch({ classes: 'text-xl -my-1' })}
                    </button>
                    <input
                      type="text"
                      class="${classes.input()} ${classes.inputGray()}"
                      aria-label="Search"
                      placeholder="Seach Catalog"
                    />
                  </div>

                  <button
                    type="button"
                    class="xt-button ${classes.buttonMd()} rounded-r${classes.groupButtonRadius()} ${buttonPrimary()}"
                  >
                    Search
                  </button>
                </div>
              </form>
            </div>
            <div class="xt-arrow z-below -inset-1 m-3 w-3 h-3 bg-black ${itemAnimOpacity()}"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="${classes.hBlock()}">Overlay</div>

    <div class="xt-list xt-list-3 items-center">
      <div data-xt-overlay="{ duration: 500 }">
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${buttonPrimary()}"
          data-xt-overlay-element
        >
          Contact
        </button>

        <div class="xt-overlay group" data-xt-overlay-target>
          <div class="xt-backdrop z-below bg-gray-800 transition opacity-0 group-in:opacity-25"></div>
          <div class="xt-overlay-container max-w-5xl">
            <div class="xt-overlay-inner">
              <div
                class="xt-card rounded${classes.overlayRadius()} ${classes.overlayShadow()} ${classes.textBlack()} ${cardWhite()} ${designAnim()}"
              >
                <button
                  type="button"
                  class="xt-button xt-dismiss absolute z-above top-0 right-0 p-5 text-2xl"
                  aria-label="Close"
                >
                  ${classes.iconX()}
                </button>

                <div class="md:xt-card-group rounded${classes.overlayRadius()} ${itemAnim()}">
                  <div class="${classes.cardMd()} md:w-7/12">
                    <div class="xt-h4">Contact us</div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec mauris est.</p>
                    <form class="text-sm">
                      <div class="xt-row xt-row-x-6 xt-row-y-4">
                        <div class="w-full md:w-6/12">
                          <label class="${classes.label()} mb-3 ${classes.labelGray()}"> Name </label>
                          <input
                            type="text"
                            class="${classes.input()} ${classes.inputRadius()} ${classes.inputGray()}"
                            aria-label="Name"
                          />
                        </div>

                        <div class="w-full md:w-6/12">
                          <label class="${classes.label()} mb-3 ${classes.labelGray()}"> Surname </label>
                          <input
                            type="text"
                            class="${classes.input()} ${classes.inputRadius()} ${classes.inputGray()}"
                            aria-label="Surname"
                          />
                        </div>

                        <div class="w-full md:w-6/12">
                          <label class="${classes.label()} mb-3 ${classes.labelGray()}"> Email </label>
                          <input
                            type="text"
                            class="${classes.input()} ${classes.inputRadius()} ${classes.inputGray()}"
                            aria-label="Email"
                          />
                        </div>

                        <div class="w-full md:w-6/12">
                          <label class="${classes.label()} mb-3 ${classes.labelGray()}"> Telephone </label>
                          <input
                            type="text"
                            class="${classes.input()} ${classes.inputRadius()} ${classes.inputGray()}"
                            aria-label="Telephone"
                          />
                        </div>

                        <div class="w-full">
                          <label class="${classes.label()} mb-3 ${classes.labelGray()}"> Subject </label>
                          <select
                            class="${classes.input()} xt-select ${classes.inputRadius()} ${classes.inputGray()}"
                            aria-label="Subject"
                          >
                            <option selected value="">Select an option</option>
                            <option>Test</option>
                            <option>Test</option>
                            <option>Test</option>
                          </select>
                        </div>

                        <div class="w-full">
                          <label class="${classes.label()} mb-3 ${classes.labelGray()}"> Message </label>
                          <textarea
                            class="${classes.input()} ${classes.textarea()} ${classes.inputRadius()} ${classes.inputGray()} h-24 resize-vertical"
                            aria-label="Message"
                          ></textarea>
                        </div>

                        <div class="w-full">
                          <label class="${classes.checkLabel()}">
                            <input
                              type="checkbox"
                              class="xt-check xt-checkbox ${classes.checkRadius()} ${classes.checkGray()}"
                            />
                            <span class="${classes.checkContent()}">
                              I <strong>read and accept</strong> the
                              <a href="#" target="_blank" rel="noopener">privacy policy</a>.
                            </span>
                          </label>
                        </div>

                        <div class="w-full">
                          <button
                            type="submit"
                            class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${buttonPrimary()}"
                          >
                            Send
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>

                  <div class="md:w-5/12 flex flex-col ${itemAnim()}">
                    <div class="xt-media-container bg-gray-300 h-48 md:pb-[100%]">
                      <img class="xt-media object-cover object-center" src="/img.svg" loading="eager" alt="" />
                    </div>
                    <div
                      class="${classes.cardMd()} rounded-b${classes.overlayRadius()} md:rounded-bl-none ${classes.cardWhiteAccent()} flex-auto"
                    >
                      <p class="xt-h5">Didn&apos;t find what you was looking for?</p>
                      <p>
                        Contact our customer service at <a href="tel:+39333010101">+39 333 010101</a> or email us at
                        <a href="mailto:info@info.com">info@info.com</a>.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div data-xt-overlay="{ duration: 500 }">
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${buttonPrimary()}"
          data-xt-overlay-element
        >
          Newsletter
        </button>

        <div class="xt-overlay group" data-xt-overlay-target>
          <div class="xt-backdrop z-below bg-gray-800 transition opacity-0 group-in:opacity-25"></div>
          <div class="xt-overlay-container max-w-5xl">
            <div class="xt-overlay-inner">
              <div
                class="xt-card rounded${classes.overlayRadius()} ${classes.overlayShadow()} ${classes.textBlack()} ${cardWhite()} ${designAnim()}"
              >
                <button
                  type="button"
                  class="xt-button xt-dismiss absolute z-above top-0 right-0 p-5 text-2xl"
                  aria-label="Close"
                >
                  ${classes.iconX()}
                </button>

                <div class="md:xt-card-group rounded${classes.overlayRadius()} ${itemAnim()}">
                  <div class="md:w-5/12 flex flex-col">
                    <div
                      class="xt-media-container bg-gray-300 rounded-t${classes.overlayRadius()} md:rounded-tr-none h-48 lg:pb-[100%] md:flex-auto"
                    >
                      <img class="xt-media object-cover object-center" src="/img.svg" loading="eager" alt="" />
                    </div>
                  </div>

                  <div class="${classes.cardMd()} md:w-7/12">
                    <div class="xt-h4">Subscribe to our newsletter</div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec mauris est.</p>
                    <form class="text-sm">
                      <div class="xt-row xt-row-x-6 xt-row-y-4">
                        <div class="w-full">
                          <label class="${classes.label()} mb-3 ${classes.labelGray()}"> Email </label>
                          <input
                            type="text"
                            class="${classes.input()} ${classes.inputRadius()} ${classes.inputGray()}"
                            aria-label="Email"
                          />
                        </div>

                        <div class="w-full">
                          <label class="${classes.label()} mb-3 ${classes.labelGray()}"> Subject </label>

                          <div class="xt-row xt-row-x-8 xt-row-y-2">
                            <div class="w-full sm:w-auto">
                              <label class="${classes.checkLabel()}">
                                <input
                                  type="radio"
                                  class="xt-check xt-radio ${classes.radioRadius()} ${classes.radioGray()}"
                                  name="radio-usage"
                                  checked
                                />
                                <span class="${classes.checkContent()}"> Option 1 </span>
                              </label>
                            </div>

                            <div class="w-full sm:w-auto">
                              <label class="${classes.checkLabel()}">
                                <input
                                  type="radio"
                                  class="xt-check xt-radio ${classes.radioRadius()} ${classes.radioGray()}"
                                  name="radio-usage"
                                />
                                <span class="${classes.checkContent()}"> Option 2 </span>
                              </label>
                            </div>

                            <div class="w-full sm:w-auto">
                              <label class="${classes.checkLabel()}">
                                <input
                                  type="radio"
                                  class="xt-check xt-radio ${classes.radioRadius()} ${classes.radioGray()}"
                                  name="radio-usage"
                                />
                                <span class="${classes.checkContent()}"> Option 3 </span>
                              </label>
                            </div>
                          </div>
                        </div>

                        <div class="w-full">
                          <label class="${classes.checkLabel()}">
                            <input
                              type="checkbox"
                              class="xt-check xt-checkbox ${classes.checkRadius()} ${classes.checkGray()}"
                            />
                            <span class="${classes.checkContent()}">
                              I <strong>read and accept</strong> the
                              <a href="#" target="_blank" rel="noopener">privacy policy</a>.
                            </span>
                          </label>
                        </div>

                        <div class="w-full">
                          <button
                            type="submit"
                            class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${buttonPrimary()}"
                          >
                            Subscribe
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>

                <div
                  class="${classes.cardSm()} rounded-b${classes.overlayRadius()} ${classes.cardWhiteAccent()} ${itemAnim()}"
                >
                  <p>Subscribe and receive <strong>free discount</strong> periodically on all our products.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div data-xt-overlay="{ duration: 500 }">
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${buttonPrimary()}"
          data-xt-overlay-element
        >
          Menu
        </button>

        <div class="xt-overlay group" data-xt-overlay-target>
          <div class="xt-backdrop z-below bg-gray-800 transition opacity-0 group-in:opacity-25"></div>
          <div class="xt-overlay-container p-0 w-screen max-w-md ml-0 mr-auto">
            <div class="xt-overlay-inner">
              <div class="xt-card xt-min-h-screen ${classes.textBlack()} ${cardWhite()} ${designAnim()}">
                <button
                  type="button"
                  class="xt-button xt-dismiss absolute z-above top-0 right-0 p-5 text-2xl"
                  aria-label="Close"
                >
                  ${classes.iconX()}
                </button>
                <div class="xt-list bg-primary-500 ${itemAnim()}">
                  <button type="button" class="xt-button ${classes.buttonMd()} ${buttonPrimary()}">Menu</button>
                  <button type="button" class="xt-button ${classes.buttonMd()} ${buttonPrimary()}">Info</button>
                  <button type="button" class="xt-button ${classes.buttonMd()} ${buttonPrimary()}">Account</button>
                </div>
                <div class="xt-media-container bg-gray-300 h-48 ${itemAnim()}">
                  <img class="xt-media object-cover object-center" src="/img.svg" loading="eager" alt="" />
                </div>
                <div class="${classes.cardMd()} ${itemAnim()}">
                  <div class="xt-h4">Lorem ipsum</div>
                  <p>
                    <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                    suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                    augue, sagittis vitae magna eget, vehicula scelerisque elit.
                  </p>
                </div>
                <div class="${classes.cardSm()} ${classes.cardWhiteAccent()} mt-auto ${itemAnim()}">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat
                    turpis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div data-xt-overlay="{ duration: 500 }">
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${buttonPrimary()}"
          data-xt-overlay-element
        >
          Gallery
        </button>

        <div class="xt-overlay group" data-xt-overlay-target>
          <div class="xt-backdrop z-below bg-gray-800 transition opacity-0 group-in:opacity-25"></div>
          <div class="xt-overlay-container p-0">
            <button
              type="button"
              class="xt-button xt-dismiss fixed z-above top-0 right-0 p-5 text-2xl ${itemAnim()}"
              aria-label="Close"
            >
              ${classes.iconX()}
            </button>
            <div class="xt-overlay-inner">
              <div
                class="xt-card xt-min-h-screen items-center justify-center ${classes.textBlack()} ${cardWhite()} ${designAnim()}"
              >
                <div class="xt-media-container bg-gray-300 ${itemAnim()} pb-[100%]">
                  <img class="xt-media object-cover object-center" src="/img.svg" loading="eager" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
  container: true,
}
