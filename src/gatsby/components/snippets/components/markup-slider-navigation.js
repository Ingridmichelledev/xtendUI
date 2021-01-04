const btnDefault = require('components/snippets/classes/btn-default').default
const cardSlide = require('components/snippets/classes/card-slide').default
const iconChevronLeft = require('components/snippets/icons').iconChevronLeft
const iconChevronRight = require('components/snippets/icons').iconChevronRight

export default () => {
  return `
<div class="slides">
  <div class="slides-inner row row-2">

    <div class="slide w-6/12 sm:w-4/12 opacity-50 active:opacity-100">
      <div class="card rounded-md ${cardSlide()}">
        <div class="h4">1</div>
        <nav class="slider-navigation list list-2">
          <button type="button" class="btn ${btnDefault()}" data-xt-nav="-1" title="Previous slide">
            ${iconChevronLeft({ classes: 'icon-lg' })}
          </button>
          <button type="button" class="btn ${btnDefault()}" data-xt-nav="1" title="Next slide">
            ${iconChevronRight({ classes: 'icon-lg' })}
          </button>
        </nav>
      </div>
    </div>

    <div class="slide w-6/12 sm:w-4/12 opacity-50 active:opacity-100">
      <div class="card rounded-md ${cardSlide()}">
        <div class="h4">2</div>
        <nav class="slider-navigation list list-2">
          <button type="button" class="btn ${btnDefault()}" data-xt-nav="-1" title="Previous slide">
            ${iconChevronLeft({ classes: 'icon-lg' })}
          </button>
          <button type="button" class="btn ${btnDefault()}" data-xt-nav="1" title="Next slide">
            ${iconChevronRight({ classes: 'icon-lg' })}
          </button>
        </nav>
      </div>
    </div>

    <div class="slide w-6/12 sm:w-4/12 opacity-50 active:opacity-100">
      <div class="card rounded-md ${cardSlide()}">
        <div class="h4">3</div>
        <nav class="slider-navigation list list-2">
          <button type="button" class="btn ${btnDefault()}" data-xt-nav="-1" title="Previous slide">
            ${iconChevronLeft({ classes: 'icon-lg' })}
          </button>
          <button type="button" class="btn ${btnDefault()}" data-xt-nav="1" title="Next slide">
            ${iconChevronRight({ classes: 'icon-lg' })}
          </button>
        </nav>
      </div>
    </div>

    <div class="slide w-7/12 sm:w-5/12 opacity-50 active:opacity-100">
      <div class="card rounded-md ${cardSlide()}">
        <div class="h4">4</div>
        <nav class="slider-navigation list list-2">
          <button type="button" class="btn ${btnDefault()}" data-xt-nav="-1" title="Previous slide">
            ${iconChevronLeft({ classes: 'icon-lg' })}
          </button>
          <button type="button" class="btn ${btnDefault()}" data-xt-nav="1" title="Next slide">
            ${iconChevronRight({ classes: 'icon-lg' })}
          </button>
        </nav>
      </div>
    </div>

    <div class="slide w-7/12 sm:w-5/12 opacity-50 active:opacity-100">
      <div class="card rounded-md ${cardSlide()}">
        <div class="h4">5</div>
        <nav class="slider-navigation list list-2">
          <button type="button" class="btn ${btnDefault()}" data-xt-nav="-1" title="Previous slide">
            ${iconChevronLeft({ classes: 'icon-lg' })}
          </button>
          <button type="button" class="btn ${btnDefault()}" data-xt-nav="1" title="Next slide">
            ${iconChevronRight({ classes: 'icon-lg' })}
          </button>
        </nav>
      </div>
    </div>

  </div>
</div>

<nav class="slider-pagination w-full list list-2">
  <button type="button" class="btn ${btnDefault()}" data-xt-nav="-1" title="Previous slide">
    ${iconChevronLeft({ classes: 'icon-lg' })}
  </button>
  <button type="button" class="btn ${btnDefault()} xt-ignore" data-xt-pag title="Slide xt-num">
  </button>
  <button type="button" class="btn ${btnDefault()}" data-xt-nav="1" title="Next slide">
    ${iconChevronRight({ classes: 'icon-lg' })}
  </button>
</nav>
`
}
