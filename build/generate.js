const fs = require('fs')
const del = require('del')
const path = require('path')
const glob = require('glob')
const writeFile = require('write')
const indentString = require('indent-string')
const test = true

;(async () => {
  await del(['static/demos/**/**.jsx'])
  new glob.Glob('static/demos/themes/listing/**/**.html.js', (er, files) => {
    for (const file of files) {
      const name = path.basename(file, '.html.js')
      const dir = path.dirname(file)
      const src = `${dir}/${name}`
      let html = require('esm')(module)(path.resolve(`${src}.html.js`)).object.html
      let strImports = ''
      let strMethods = ''
      // refs
      const refs = html.match(/class="CCC(.*?)"/g)
      html = html.replace(/(?<=class="CCC(.*?))"/g, '-jsx" ref={ref}')
      // test
      if (test) {
        html = html.replace(
          /(^ {2}<div *.+)/gm,
          `$1<button onClick={() => setCount(count + 1)}>You clicked {count} times</button>`
        )
      }
      // react stuff
      html = html.replace(/class="/g, 'className="')
      html = html.replace(/checked/g, 'defaultChecked')
      // js
      const jsGlob = new glob.Glob(`${src}.js`, (er, jsSources) => {
        if (jsSources.length) {
          const jsSource = jsSources[0]
          const jsText = fs.readFileSync(jsSource, 'utf8')
          // automatic check of refs
          if (!refs) {
            // not found any ref in html
            console.error(`Jsx generator found custom javascript and no html CCC in ${file}`)
            process.exit(1)
          }
          const refsJs = jsText.match(/(?!'\.)CCC[^' ]*/g)
          if (refsJs) {
            let found = 0
            for (const refJs of refsJs.entries()) {
              const checkJs = refJs[1].split("'").join('').replace('.', '')
              for (const refHtml of refs.entries()) {
                const checkHtml = refHtml[1].split('"').join('').replace('class=', '')
                if (checkJs === checkHtml) {
                  found++
                }
              }
            }
            if (found < refsJs.length || found < refs.length) {
              // not found ref in html with match
              console.error(`Jsx generator found custom javascript with no matching html CCC in ${file}`)
              process.exit(1)
            }
          }
          // imports
          const imports = jsText.match(/([\s\S]+)(?=^Xt.mount)/gm)
          if (imports) {
            for (const meta of imports.entries()) {
              strImports += meta[1]
            }
          }
          // methods
          const methods = jsText.match(/(?<= {2}mount:(.*?)$).*([\S\s]*?)[ ]*(?=^\s\s\})/gm)
          if (methods) {
            for (const meta of methods.entries()) {
              strMethods += meta[1]
            }
          }
          strMethods = strMethods.replace(/(^ {2})/gm, '')
          // remove xt
          const xts = strMethods.match(/(Xt\.)/g)
          if (!xts) {
            strImports = strImports.replace(/(import { Xt } from 'xtendui'\n)/g, '')
          }
        }
      })
      jsGlob.on('end', () => {
        let str = `import React${
          refs || strMethods !== '' ? `, ${refs ? `{ useRef, useCallback${test ? `, useState` : ''} }` : ''}` : ''
        } from 'react'
${strImports}export default function component() {${
          refs || strMethods !== ''
            ? `${test ? 'const [count, setCount] = useState(0)' : ''}
  const nodeRef = useRef(null)
  let unmount
  const ref = useCallback(object => {
    if (nodeRef.current) {
      unmount(nodeRef.current)
    }
    nodeRef.current = object
    if (object !== null) {
      unmount = mount(object)
    }
  }, [])
`
            : ''
        }
  return (${indentString(html, 2)}  )
}

${strMethods !== '' ? `const mount = object => {${strMethods}}` : ''}
`
        const destination = `${src}.jsx`
        writeFile(destination, str)
      })
    }
  })
})()
