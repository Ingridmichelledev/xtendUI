import React from "react"

import DemoReact from "components/demo-react"

const demo = {
  name: 'react-test',
  js: true,
  css: true,
  full: false
}

class Page extends React.Component {
  render() {
    let htmlSource = false
    let jsSource = demo.js ? require("!!raw-loader!./" + demo.name + ".source.js").default : null
    let cssSource = demo.css ? require("!!raw-loader!./" + demo.name + ".source.less").default : null
    let css = demo.css ? require("!raw-loader!less-loader!./" + demo.name + ".source.less").default : null
    let Component = require("./" + demo.name + ".source.js").default
    return (
      <DemoReact demo={demo} htmlSource={htmlSource} jsSource={jsSource} cssSource={cssSource} css={css} Component={Component}/>
    )
  }
}

export default Page
