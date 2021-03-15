import React from 'react'

class Demo extends React.Component {
  render() {
    return (
      <div ref={this.ref}>
        <div className="xt-row xt-row-6">
          <div className="w-full md:w-6/12">
            <a
              role="button"
              className="xt-card rounded-md text-black xt-links-default transform transition bg-gray-200 hover:bg-gray-300 active:bg-gray-400">
              <div className="text-base py-8 px-9">
                <div className="xt-h4">Default</div>
                <p>
                  <strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit. Nullam suscipit, velit eu
                  tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae
                  magna eget, vehicula scelerisque elit.
                </p>
              </div>
            </a>
          </div>

          <div className="w-full md:w-6/12">
            <a
              role="button"
              className="xt-card rounded-md text-white xt-links-inverse transform transition bg-primary-500 hover:bg-primary-600 active:bg-primary-700">
              <div className="text-base py-8 px-9">
                <div className="xt-h4">Primary</div>
                <p>
                  <strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit. Nullam suscipit, velit eu
                  tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae
                  magna eget, vehicula scelerisque elit.
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Demo
