import path from 'path'

const dirs = path.dirname(__filename).split('/')
export const demo = {
  name: path.basename(__filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `
<div class="demo--multilevel--default">
  <div class="multilevel">
  
    <nav role="navigation" class="multilevel-tab">
  
      <div class="multilevel-title-wrapper">
        <div class="h4 multilevel-title">
          Products
        </div>
        <button type="button" class="btn btn--text btn--none multilevel-reset display-none multilevel-tab-reset">
          Back
        </button>
      </div>
  
      <ul class="list-block list--default list-space--none multilevel-list">
        <li>
          <button type="button" class="btn" data-xt-group="cat-0">
            Category 0
          </button>
        </li>
        <li>
          <button type="button" class="btn" data-xt-group="cat-1">
            Category 1
          </button>
        </li>
        <li>
          <a href="#" class="btn">
            Link 0
          </a>
        </li>
        <li>
          <a href="#" class="btn">
            Link 1
          </a>
        </li>
      </ul>
  
      <div class="multilevel-title-wrapper">
        <div class="h4 multilevel-title">
          About
        </div>
      </div>
      <ul class="list-block list--default list-space--none multilevel-list">
        <li>
          <a href="#" class="btn">
            Link 0
          </a>
        </li>
        <li>
          <a href="#" class="btn">
            Link 1
          </a>
        </li>
      </ul>
  
    </nav>
  
    <nav role="navigation" class="multilevel-tab" data-xt-group="cat-0">
  
      <div class="multilevel-title-wrapper">
        <div class="h4 multilevel-title">
          Category 0
        </div>
        <button type="button" class="btn btn--text btn--none multilevel-reset">
          Back
        </button>
      </div>
  
      <ul class="list-block list--default list-space--none multilevel-list">
        <li>
          <button type="button" class="btn" data-xt-group="cat-0a">
            Category 0a
          </button>
        </li>
        <li>
          <button type="button" class="btn" data-xt-group="cat-0b">
            Category 0b
          </button>
        </li>
        <li>
          <a href="#" class="btn">
            Link 0
          </a>
        </li>
        <li>
          <a href="#" class="btn">
            Link 1
          </a>
        </li>
      </ul>
  
    </nav>
  
    <nav role="navigation" class="multilevel-tab" data-xt-group="cat-0a">
  
      <div class="multilevel-title-wrapper">
        <div class="h4 multilevel-title">
          Category 0a
        </div>
        <button type="button" class="btn btn--text btn--none multilevel-reset">
          Back
        </button>
      </div>
  
      <ul class="list-block list--default list-space--none multilevel-list">
        <li>
          <a href="#" class="btn">
            Link 0
          </a>
        </li>
        <li>
          <a href="#" class="btn">
            Link 1
          </a>
        </li>
      </ul>
  
    </nav>
  
    <nav role="navigation" class="multilevel-tab" data-xt-group="cat-0b">
  
      <div class="multilevel-title-wrapper">
        <div class="h4 multilevel-title">
          Category 0b
        </div>
        <button type="button" class="btn btn--text btn--none multilevel-reset">
          Back
        </button>
      </div>
  
      <ul class="list-block list--default list-space--none multilevel-list">
        <li>
          <a href="#" class="btn">
            Link 0
          </a>
        </li>
        <li>
          <a href="#" class="btn">
            Link 1
          </a>
        </li>
      </ul>
  
    </nav>
  
    <nav role="navigation" class="multilevel-tab" data-xt-group="cat-1">
  
      <div class="multilevel-title-wrapper">
        <div class="h4 multilevel-title">
          Category 1
        </div>
        <button type="button" class="btn btn--text btn--none multilevel-reset">
          Back
        </button>
      </div>
  
      <ul class="list-block list--default list-space--none multilevel-list">
        <li>
          <a href="#" class="btn">
            Link 0
          </a>
        </li>
        <li>
          <a href="#" class="btn">
            Link 1
          </a>
        </li>
      </ul>
  
    </nav>
  
  </div>
</div>
`
