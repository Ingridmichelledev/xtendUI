import React from "react"
import path from "path";

import DemoVanillaIframe from "components/demo-vanilla-iframe"

const demo = {
  name: path.basename(__filename, '.js'),
  js: false,
  css: false,
  full: false
}
demo.htmlSource = `
<div class="sticky-0"
     data-xt-sticky='{"sticky": "fixed", "limit": {"top": ".sticky-0-start"}, "hide": "down"}'>
  <div class="card card--squared card--primary">
    <div class="card_design"></div>
    <div class="card_content">
      Sticky top
    </div>
  </div>
</div>

<div class="sticky-0-start"></div>

<div class="sticky-1"
     data-xt-sticky='{"sticky": "absolute", "contain": {"top": ".sticky-0:not(.xt-clone)"}}'>
  <div class="card card--squared card--secondary">
    <div class="card_design"></div>
    <div class="card_content">
      Sticky middle <span class="hide-sticky">.hide-sticky</span>
    </div>
  </div>
</div>

<div class="card card--white">
  <div class="card_design"></div>
  <div class="card_content">
    <h3>Lorem ipsum dolor sit amet</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie diam nec euismod commodo. Nunc ut fringilla nibh. Duis quis arcu quis neque tempor lobortis nec nec mauris. Proin vel elit pretium metus egestas congue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque hendrerit sagittis quam eget elementum. Vestibulum eu nulla nisl. Duis nec commodo tortor. Aenean feugiat, libero eget ultricies viverra, justo nunc efficitur lorem, at aliquet ante eros in est.</p>
  </div>
</div>

<div class="sticky-2"
     data-xt-sticky='{"contain": {"top": ".sticky-0:not(.xt-clone), .sticky-1:not(.xt-clone)", "bottom": ".sticky-3:not(.xt-clone)"}, "hide": "up"}'>
  <div class="card card--squared card--secondary">
    <div class="card_design"></div>
    <div class="card_content">
      Sticky bottom <span class="show-sticky">.show-sticky</span>
    </div>
  </div>
</div>

<div class="card card--white">
  <div class="card_design"></div>
  <div class="card_content">
    <h3>Lorem ipsum dolor sit amet</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie diam nec euismod commodo. Nunc ut fringilla nibh. Duis quis arcu quis neque tempor lobortis nec nec mauris. Proin vel elit pretium metus egestas congue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque hendrerit sagittis quam eget elementum. Vestibulum eu nulla nisl. Duis nec commodo tortor. Aenean feugiat, libero eget ultricies viverra, justo nunc efficitur lorem, at aliquet ante eros in est.</p>
  </div>
</div>

<br><br><br><br><br><br><br>
<br><br><br><br><br><br><br>
<br><br><br><br><br><br><br>
<br><br><br><br><br><br><br>
<br><br><br><br><br><br><br>
<br><br><br><br><br><br><br>
`

class Page extends React.Component {
  componentDidMount() {
    if (demo.js) {
      require("./" + demo.name + ".source.js")
    }
  }

  render() {
    demo.jsSource = demo.js ? require("!!raw-loader!./" + demo.name + ".source.js").default : null
    demo.cssSource = demo.css ? require("!!raw-loader!./" + demo.name + ".source.less").default : null
    demo.css = demo.css ? require("!raw-loader!less-loader!./" + demo.name + ".source.less").default : null
    return (
      <DemoVanillaIframe demo={demo}/>
    )
  }
}

export default Page