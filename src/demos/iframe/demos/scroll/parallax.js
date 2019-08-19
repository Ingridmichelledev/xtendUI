import React from 'react'
import path from 'path'

import DemoVanillaIframe from 'components/demo-vanilla-iframe'

const dirs = path.dirname(__filename).split('/');
export const demo = {
  name: path.basename(__filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
  css: true,
  js: true,
  full: false,
}

demo.htmlSource = `
<div class="list">
  <div class="demo--parallax_title">
    <h1>Parallax Title</h1>
  </div>
  <div class="demo--parallax_img">
    <img class="responsive" src="https://via.placeholder.com/1000x150"/>
  </div>
</div>

<br/><br/><br/><br/><br/><br/>
<br/><br/><br/><br/><br/><br/>
<br/><br/><br/><br/><br/><br/>
<br/><br/><br/><br/><br/><br/>

<div class="demo--parallax_footer">
  <h4>Parallax Footer</h4>
</div>
`

class Page extends React.Component {
  render() {
    return (
      <DemoVanillaIframe demo={demo}/>
    )
  }
}

export default Page
