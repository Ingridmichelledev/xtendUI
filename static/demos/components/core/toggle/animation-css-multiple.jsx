import React from 'react'

class Demo extends React.Component {
  render() {
    return (
      <div ref={this.ref}>
        <div className="xt-list xt-list-3 items-center demo--toggle-animation" data-xt-toggle>
          <button
            type="button"
            className="xt-button text-xs py-2 px-3.5 rounded-md text-black font-sans font-semibold leading-snug tracking-wider uppercase bg-gray-200 hover:bg-gray-300 active:bg-gray-400 transition">
            Toggle 0
          </button>

          <button
            type="button"
            className="xt-button text-xs py-2 px-3.5 rounded-md text-black font-sans font-semibold leading-snug tracking-wider uppercase bg-gray-200 hover:bg-gray-300 active:bg-gray-400 transition">
            Toggle 1
          </button>

          <div
            className="xt-card xt-toggle rounded-md text-sm p-6 text-black xt-links-default bg-gray-200"
            data-xt-duration="500">
            Target 0
          </div>

          <div
            className="xt-card xt-toggle rounded-md text-sm p-6 text-black xt-links-default bg-gray-200"
            data-xt-duration="500">
            Target 1
          </div>
        </div>
      </div>
    )
  }
}

export default Demo
