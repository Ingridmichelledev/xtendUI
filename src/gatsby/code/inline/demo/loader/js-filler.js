import path from 'path'

const dirs = path.dirname(__filename).split('/')
export const demo = {
  name: path.basename(__filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop()
}

demo.htmlSource = `
<div class="list list--default list-space--small align-items--center justify-content--center demo-source-from">
  <div class="box box-card box-card--default">
    <div class="box-design"></div>
    <div class="box-inner">
      <div class="box-content">
        <div class="box-block box-item">
          <div class="box-title">Lorem ipsum dolor sit amet</div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie diam nec euismod commodo. Nunc ut fringilla nibh. Duis quis arcu quis neque tempor lobortis nec nec mauris. Proin vel elit pretium metus egestas congue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque hendrerit sagittis quam eget elementum. Vestibulum eu nulla nisl. Duis nec commodo tortor. Aenean feugiat, libero eget ultricies viverra, justo nunc efficitur lorem, at aliquet ante eros in est.</p>
          <div class="loader loader--x loader-size--x loader--background loader--js demo--loader--js-filler">
            <div class="filler">
              <span></span><span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <button type="button" class="btn btn--default">
    <span>
      Lorem ipsum
    </span>
    <span class="loader loader--x loader-size--x loader--background loader--js demo--loader--js-filler">
        <span class="filler">
          <span></span><span></span>
        </span>
      </span>
  </button>
</div>
`
