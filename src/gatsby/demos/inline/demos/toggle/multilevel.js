import path from 'path'

const dirs = path.dirname(__filename).split('/');
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
          <span>Products</span>
        </div>
        <button type="button" class="btn btn--text btn--none multilevel-reset display--none multilevel-tab-reset">
          <span>Back</span>
        </button>
      </div>
  
      <ul class="list-block list-space--none multilevel-list">
        <li>
          <button type="button" class="btn" data-xt-group="cat-0">
            <span>Category 0</span>
          </button>
        </li>
        <li>
          <button type="button" class="btn" data-xt-group="cat-1">
            <span>Category 1</span>
          </button>
        </li>
        <li>
          <a href="#" class="btn">
            <span>Link 0</span>
          </a>
        </li>
        <li>
          <a href="#" class="btn">
            <span>Link 1</span>
          </a>
        </li>
      </ul>
  
      <div class="multilevel-title-wrapper">
        <div class="h4 multilevel-title">
          <span>About</span>
        </div>
      </div>
      <ul class="list-block list-space--none multilevel-list">
        <li>
          <a href="#" class="btn">
            <span>Link 0</span>
          </a>
        </li>
        <li>
          <a href="#" class="btn">
            <span>Link 1</span>
          </a>
        </li>
      </ul>
  
    </nav>
  
    <nav role="navigation" class="multilevel-tab" data-xt-group="cat-0">
  
      <div class="multilevel-title-wrapper">
        <div class="h4 multilevel-title">
          <span>Category 0</span>
        </div>
        <button type="button" class="btn btn--text btn--none multilevel-reset">
          <span>Back</span>
        </button>
      </div>
  
      <ul class="list-block list-space--none multilevel-list">
        <li>
          <button type="button" class="btn" data-xt-group="cat-0a">
            <span>Category 0a</span>
          </button>
        </li>
        <li>
          <button type="button" class="btn" data-xt-group="cat-0b">
            <span>Category 0b</span>
          </button>
        </li>
        <li>
          <a href="#" class="btn">
            <span>Link 0</span>
          </a>
        </li>
        <li>
          <a href="#" class="btn">
            <span>Link 1</span>
          </a>
        </li>
      </ul>
  
    </nav>
  
    <nav role="navigation" class="multilevel-tab" data-xt-group="cat-0a">
  
      <div class="multilevel-title-wrapper">
        <div class="h4 multilevel-title">
          <span>Category 0a</span>
        </div>
        <button type="button" class="btn btn--text btn--none multilevel-reset">
          <span>Back</span>
        </button>
      </div>
  
      <ul class="list-block list-space--none multilevel-list">
        <li>
          <a href="#" class="btn">
            <span>Link 0</span>
          </a>
        </li>
        <li>
          <a href="#" class="btn">
            <span>Link 1</span>
          </a>
        </li>
      </ul>
  
    </nav>
  
    <nav role="navigation" class="multilevel-tab" data-xt-group="cat-0b">
  
      <div class="multilevel-title-wrapper">
        <div class="h4 multilevel-title">
          <span>Category 0b</span>
        </div>
        <button type="button" class="btn btn--text btn--none multilevel-reset">
          <span>Back</span>
        </button>
      </div>
  
      <ul class="list-block list-space--none multilevel-list">
        <li>
          <a href="#" class="btn">
            <span>Link 0</span>
          </a>
        </li>
        <li>
          <a href="#" class="btn">
            <span>Link 1</span>
          </a>
        </li>
      </ul>
  
    </nav>
  
    <nav role="navigation" class="multilevel-tab" data-xt-group="cat-1">
  
      <div class="multilevel-title-wrapper">
        <div class="h4 multilevel-title">
          <span>Category 1</span>
        </div>
        <button type="button" class="btn btn--text btn--none multilevel-reset">
          <span>Back</span>
        </button>
      </div>
  
      <ul class="list-block list-space--none multilevel-list">
        <li>
          <a href="#" class="btn">
            <span>Link 0</span>
          </a>
        </li>
        <li>
          <a href="#" class="btn">
            <span>Link 1</span>
          </a>
        </li>
      </ul>
  
    </nav>
  
  </div>
</div>
`
