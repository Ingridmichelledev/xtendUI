import React from "react"
import path from "path";

import DemoVanillaIframe from "components/demo-vanilla-iframe"

const demo = {
  name: path.basename(__filename, '.js'),
  js: false,
  css: true,
  full: false
}
demo.htmlSource = `
<div data-xt-scroll='{
    "elements": ".scroll_container > *",
    "delayOn": "return Math.min(current * 75, 300)",
    "delayOff": "return Math.min((total - current) * 75, 300)",
    "distance": "20%"
  }'>
  <div class="row scroll_container">

    <div class="col--12 col--6-sm">
      <div class="card">
        <div class="card_design"></div>
        <div class="card_content">
          <h3>Lorem ipsum dolor sit amet</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie diam nec euismod commodo. Nunc ut fringilla nibh. Duis quis arcu quis neque tempor lobortis nec nec mauris. Proin vel elit pretium metus egestas congue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque hendrerit sagittis quam eget elementum. Vestibulum eu nulla nisl. Duis nec commodo tortor. Aenean feugiat, libero eget ultricies viverra, justo nunc efficitur lorem, at aliquet ante eros in est.</p>
        </div>
      </div>
    </div>

    <div class="col--12 col--6-sm">
      <div class="card">
        <div class="card_design"></div>
        <div class="card_content">
          <h3>Lorem ipsum dolor sit amet</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie diam nec euismod commodo. Nunc ut fringilla nibh. Duis quis arcu quis neque tempor lobortis nec nec mauris. Proin vel elit pretium metus egestas congue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque hendrerit sagittis quam eget elementum. Vestibulum eu nulla nisl. Duis nec commodo tortor. Aenean feugiat, libero eget ultricies viverra, justo nunc efficitur lorem, at aliquet ante eros in est.</p>
        </div>
      </div>
    </div>

    <div class="col--12 col--6-sm">
      <div class="card">
        <div class="card_design"></div>
        <div class="card_content">
          <h3>Lorem ipsum dolor sit amet</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie diam nec euismod commodo. Nunc ut fringilla nibh. Duis quis arcu quis neque tempor lobortis nec nec mauris. Proin vel elit pretium metus egestas congue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque hendrerit sagittis quam eget elementum. Vestibulum eu nulla nisl. Duis nec commodo tortor. Aenean feugiat, libero eget ultricies viverra, justo nunc efficitur lorem, at aliquet ante eros in est.</p>
        </div>
      </div>
    </div>

    <div class="col--12 col--6-sm">
      <div class="card">
        <div class="card_design"></div>
        <div class="card_content">
          <h3>Lorem ipsum dolor sit amet</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie diam nec euismod commodo. Nunc ut fringilla nibh. Duis quis arcu quis neque tempor lobortis nec nec mauris. Proin vel elit pretium metus egestas congue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque hendrerit sagittis quam eget elementum. Vestibulum eu nulla nisl. Duis nec commodo tortor. Aenean feugiat, libero eget ultricies viverra, justo nunc efficitur lorem, at aliquet ante eros in est.</p>
        </div>
      </div>
    </div>

    <div class="col--6 col--4-sm">
      <div class="card">
        <div class="card_design"></div>
        <div class="card_content">
          <h3>Lorem ipsum dolor sit amet</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie diam nec euismod commodo. Nunc ut fringilla nibh. Duis quis arcu quis neque tempor lobortis nec nec mauris. Proin vel elit pretium metus egestas congue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque hendrerit sagittis quam eget elementum. Vestibulum eu nulla nisl. Duis nec commodo tortor. Aenean feugiat, libero eget ultricies viverra, justo nunc efficitur lorem, at aliquet ante eros in est.</p>
        </div>
      </div>
    </div>

    <div class="col--6 col--4-sm">
      <div class="card">
        <div class="card_design"></div>
        <div class="card_content">
          <h3>Lorem ipsum dolor sit amet</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie diam nec euismod commodo. Nunc ut fringilla nibh. Duis quis arcu quis neque tempor lobortis nec nec mauris. Proin vel elit pretium metus egestas congue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque hendrerit sagittis quam eget elementum. Vestibulum eu nulla nisl. Duis nec commodo tortor. Aenean feugiat, libero eget ultricies viverra, justo nunc efficitur lorem, at aliquet ante eros in est.</p>
        </div>
      </div>
    </div>

    <div class="col--6 col--4-sm">
      <div class="card">
        <div class="card_design"></div>
        <div class="card_content">
          <h3>Lorem ipsum dolor sit amet</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie diam nec euismod commodo. Nunc ut fringilla nibh. Duis quis arcu quis neque tempor lobortis nec nec mauris. Proin vel elit pretium metus egestas congue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque hendrerit sagittis quam eget elementum. Vestibulum eu nulla nisl. Duis nec commodo tortor. Aenean feugiat, libero eget ultricies viverra, justo nunc efficitur lorem, at aliquet ante eros in est.</p>
        </div>
      </div>
    </div>

    <div class="col--6 col--2-sm">
      <div class="card">
        <div class="card_design"></div>
        <div class="card_content">
          <h3>Lorem ipsum dolor sit amet</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie diam nec euismod commodo. Nunc ut fringilla nibh. Duis quis arcu quis neque tempor lobortis nec nec mauris. Proin vel elit pretium metus egestas congue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque hendrerit sagittis quam eget elementum. Vestibulum eu nulla nisl. Duis nec commodo tortor. Aenean feugiat, libero eget ultricies viverra, justo nunc efficitur lorem, at aliquet ante eros in est.</p>
        </div>
      </div>
    </div>

    <div class="col--4 col--2-sm">
      <div class="card">
        <div class="card_design"></div>
        <div class="card_content">
          <h3>Lorem ipsum dolor sit amet</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie diam nec euismod commodo. Nunc ut fringilla nibh. Duis quis arcu quis neque tempor lobortis nec nec mauris. Proin vel elit pretium metus egestas congue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque hendrerit sagittis quam eget elementum. Vestibulum eu nulla nisl. Duis nec commodo tortor. Aenean feugiat, libero eget ultricies viverra, justo nunc efficitur lorem, at aliquet ante eros in est.</p>
        </div>
      </div>
    </div>

    <div class="col--4 col--2-sm">
      <div class="card">
        <div class="card_design"></div>
        <div class="card_content">
          <h3>Lorem ipsum dolor sit amet</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie diam nec euismod commodo. Nunc ut fringilla nibh. Duis quis arcu quis neque tempor lobortis nec nec mauris. Proin vel elit pretium metus egestas congue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque hendrerit sagittis quam eget elementum. Vestibulum eu nulla nisl. Duis nec commodo tortor. Aenean feugiat, libero eget ultricies viverra, justo nunc efficitur lorem, at aliquet ante eros in est.</p>
        </div>
      </div>
    </div>

    <div class="col--4 col--2-sm">
      <div class="card">
        <div class="card_design"></div>
        <div class="card_content">
          <h3>Lorem ipsum dolor sit amet</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie diam nec euismod commodo. Nunc ut fringilla nibh. Duis quis arcu quis neque tempor lobortis nec nec mauris. Proin vel elit pretium metus egestas congue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque hendrerit sagittis quam eget elementum. Vestibulum eu nulla nisl. Duis nec commodo tortor. Aenean feugiat, libero eget ultricies viverra, justo nunc efficitur lorem, at aliquet ante eros in est.</p>
        </div>
      </div>
    </div>

    <div class="col--4 col--2-sm">
      <div class="card">
        <div class="card_design"></div>
        <div class="card_content">
          <h3>Lorem ipsum dolor sit amet</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie diam nec euismod commodo. Nunc ut fringilla nibh. Duis quis arcu quis neque tempor lobortis nec nec mauris. Proin vel elit pretium metus egestas congue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque hendrerit sagittis quam eget elementum. Vestibulum eu nulla nisl. Duis nec commodo tortor. Aenean feugiat, libero eget ultricies viverra, justo nunc efficitur lorem, at aliquet ante eros in est.</p>
        </div>
      </div>
    </div>

    <div class="col--4 col--2-sm">
      <div class="card">
        <div class="card_design"></div>
        <div class="card_content">
          <h3>Lorem ipsum dolor sit amet</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie diam nec euismod commodo. Nunc ut fringilla nibh. Duis quis arcu quis neque tempor lobortis nec nec mauris. Proin vel elit pretium metus egestas congue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque hendrerit sagittis quam eget elementum. Vestibulum eu nulla nisl. Duis nec commodo tortor. Aenean feugiat, libero eget ultricies viverra, justo nunc efficitur lorem, at aliquet ante eros in est.</p>
        </div>
      </div>
    </div>

  </div>
</div>
`

class Page extends React.Component {
  componentDidMount() {
    if (demo.js) {
      require("./" + demo.name + ".source.js")
    }
  }

  render() {
    if (demo.js) {
      demo.jsSource = require("!!raw-loader!./" + demo.name + ".source.js").default
    }
    if (demo.css) {
      demo.cssSource = require("!!raw-loader!./" + demo.name + ".source.less").default
      demo.css = demo.css ? require("!raw-loader!less-loader!./" + demo.name + ".source.less").default : null
    }
    return (
      <DemoVanillaIframe demo={demo}/>
    )
  }
}

export default Page