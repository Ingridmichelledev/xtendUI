import React from 'react'

class Demo extends React.Component {
  render() {
    return (
      <div ref={this.ref}>
        <div className="xt-list xt-list-3 items-center">
          <div data-xt-tooltip="{ position: 'left' }">
            <button
              type="button"
              className="xt-button text-xs py-2 px-3.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition">
              left
              <br />
              ...
            </button>

            <div className="xt-tooltip p-2">
              <div className="relative text-xs py-2 px-3.5 rounded-md shadow-tooltip font-semibold text-white xt-links-inverse bg-black">
                Lorem ipsum dolor sit amet
              </div>
              <div className="xt-arrow -inset-1 m-2 w-4 h-4 bg-black z-below"></div>
            </div>
          </div>

          <div data-xt-tooltip="{ position: 'left-start' }">
            <button
              type="button"
              className="xt-button text-xs py-2 px-3.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition">
              left start
              <br />
              ...
            </button>

            <div className="xt-tooltip p-2">
              <div className="relative text-xs py-2 px-3.5 rounded-md shadow-tooltip font-semibold text-white xt-links-inverse bg-black">
                Lorem ipsum dolor sit amet
              </div>
              <div className="xt-arrow -inset-1 m-2 w-4 h-4 bg-black z-below"></div>
            </div>
          </div>

          <div data-xt-tooltip="{ position: 'left-end' }">
            <button
              type="button"
              className="xt-button text-xs py-2 px-3.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition">
              left end
              <br />
              ...
            </button>

            <div className="xt-tooltip p-2">
              <div className="relative text-xs py-2 px-3.5 rounded-md shadow-tooltip font-semibold text-white xt-links-inverse bg-black">
                Lorem ipsum dolor sit amet
              </div>
              <div className="xt-arrow -inset-1 m-2 w-4 h-4 bg-black z-below"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Demo
