import React from 'react'

class Demo extends React.Component {
  render() {
    return (
      <div ref={this.ref}>
        <div className="listing py-10">
          <div className="container">
            <div className="xt-row xt-row-6 xt-row-stretch">
              <div className="w-full md:w-6/12 lg:w-4/12">
                <div className="listing-item block w-full">
                  <div className="listing-item-inner h-full">
                    <div className="listing-item-front absolute inset-0 z-10 xt-card rounded-md text-black xt-links-default bg-gray-200">
                      <div className="xt-media-container bg-gray-200 w-full rounded-t-md h-40">
                        <div className="xt-media-inner">
                          <img className="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
                        </div>
                      </div>
                      <div className="text-sm py-6 px-7">
                        <div className="xt-h5">Lorem Ipsum</div>
                        <address className="xt-p font-sm not-italic">Street 42, 00134 City, Nation</address>
                      </div>
                      <div className="text-sm py-6 px-7 mt-auto pt-0">
                        <button
                          type="button"
                          className="listing-action xt-button text-xs py-2 px-3.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition">
                          More info
                        </button>
                      </div>
                    </div>

                    <div className="listing-item-back relative h-full xt-card rounded-md text-black xt-links-default bg-gray-200">
                      <button
                        type="button"
                        className="xt-button xt-dismiss absolute z-last top-0 right-0 p-5 text-xl"
                        aria-label="Close">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="xt-icon"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round">
                          <line x1="18" y1="6" x2="6" y2="18"></line>
                          <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                      </button>
                      <div className="text-sm py-6 px-7">
                        <div className="xt-h5">Contacts</div>
                        <div className="xt-p font-sm">
                          <strong>Email:</strong> <a href="mailto:info@info.com">info@info.com</a>
                          <br />
                          <strong>Phone:</strong> <a href="tel:+39333010101">+39 333 010101</a>
                          <br />
                        </div>
                        <div className="xt-h5">Timetable</div>
                        <div className="xt-p font-sm">
                          <strong>Monday:</strong> 15:30–19:30
                          <br />
                          <strong>Tuesday:</strong> 10:00–13:00, 15:30–19:30
                          <br />
                          <strong>Wednesday:</strong> 10:00–13:00, 15:30–19:30
                          <br />
                          <strong>Thursday:</strong> 10:00–13:00, 15:30–19:30
                          <br />
                          <strong>Friday:</strong> 10:00–13:00, 15:30–19:30
                          <br />
                          <strong>Saturday:</strong> 10:00–19:30
                          <br />
                          <strong>Sunday:</strong> 10:00–13:00, 15:30–19:30
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-6/12 lg:w-4/12">
                <div className="listing-item block w-full">
                  <div className="listing-item-inner h-full">
                    <div className="listing-item-front absolute inset-0 z-10 xt-card rounded-md text-black xt-links-default bg-gray-200">
                      <div className="xt-media-container bg-gray-200 w-full rounded-t-md h-40">
                        <div className="xt-media-inner">
                          <img
                            className="xt-media object-cover object-center"
                            src="/img-alt.svg"
                            loading="lazy"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="text-sm py-6 px-7">
                        <div className="xt-h5">Lorem Ipsum</div>
                        <address className="xt-p font-sm not-italic">Street Lorem Ipsum 42, 00134 City, Nation</address>
                      </div>
                      <div className="text-sm py-6 px-7 mt-auto pt-0">
                        <button
                          type="button"
                          className="listing-action xt-button text-xs py-2 px-3.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition">
                          More info
                        </button>
                      </div>
                    </div>

                    <div className="listing-item-back relative h-full xt-card rounded-md text-black xt-links-default bg-gray-200">
                      <button
                        type="button"
                        className="xt-button xt-dismiss absolute z-last top-0 right-0 p-5 text-xl"
                        aria-label="Close">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="xt-icon"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round">
                          <line x1="18" y1="6" x2="6" y2="18"></line>
                          <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                      </button>
                      <div className="text-sm py-6 px-7">
                        <div className="xt-h5">Contacts</div>
                        <div className="xt-p font-sm">
                          <strong>Email:</strong> <a href="mailto:info@info.com">info@info.com</a>
                          <br />
                          <strong>Phone:</strong> <a href="tel:+39333010101">+39 333 010101</a>
                          <br />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-6/12 lg:w-4/12">
                <div className="listing-item block w-full">
                  <div className="listing-item-inner h-full">
                    <div className="listing-item-front absolute inset-0 z-10 xt-card rounded-md text-black xt-links-default bg-gray-200">
                      <div className="xt-media-container bg-gray-200 w-full rounded-t-md h-40">
                        <div className="xt-media-inner">
                          <img className="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
                        </div>
                      </div>
                      <div className="text-sm py-6 px-7">
                        <div className="xt-h5">Lorem Ipsum</div>
                        <address className="xt-p font-sm not-italic">Street Lorem Ipsum 42, 00134 City, Nation</address>
                      </div>
                      <div className="text-sm py-6 px-7 mt-auto pt-0">
                        <button
                          type="button"
                          className="listing-action xt-button text-xs py-2 px-3.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition">
                          More info
                        </button>
                      </div>
                    </div>

                    <div className="listing-item-back relative h-full xt-card rounded-md text-black xt-links-default bg-gray-200">
                      <button
                        type="button"
                        className="xt-button xt-dismiss absolute z-last top-0 right-0 p-5 text-xl"
                        aria-label="Close">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="xt-icon"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round">
                          <line x1="18" y1="6" x2="6" y2="18"></line>
                          <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                      </button>
                      <div className="text-sm py-6 px-7">
                        <div className="xt-h5">Contacts</div>
                        <div className="xt-p font-sm">
                          <strong>Email:</strong> <a href="mailto:info@info.com">info@info.com</a>
                          <br />
                          <strong>Phone:</strong> <a href="tel:+39333010101">+39 333 010101</a>
                          <br />
                        </div>
                        <div className="xt-h5">Timetable</div>
                        <div className="xt-p font-sm">
                          <strong>Monday:</strong> 15:30–19:30
                          <br />
                          <strong>Tuesday:</strong> 10:00–13:00, 15:30–19:30
                          <br />
                          <strong>Wednesday:</strong> 10:00–13:00, 15:30–19:30
                          <br />
                          <strong>Thursday:</strong> 10:00–13:00, 15:30–19:30
                          <br />
                          <strong>Friday:</strong> 10:00–13:00, 15:30–19:30
                          <br />
                          <strong>Saturday:</strong> 10:00–19:30
                          <br />
                          <strong>Sunday:</strong> 10:00–13:00, 15:30–19:30
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-6/12 lg:w-4/12">
                <div className="listing-item block w-full">
                  <div className="listing-item-inner h-full">
                    <div className="listing-item-front absolute inset-0 z-10 xt-card rounded-md text-black xt-links-default bg-gray-200">
                      <div className="xt-media-container bg-gray-200 w-full rounded-t-md h-40">
                        <div className="xt-media-inner">
                          <img
                            className="xt-media object-cover object-center"
                            src="/img-alt.svg"
                            loading="lazy"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="text-sm py-6 px-7">
                        <div className="xt-h5">Lorem Ipsum</div>
                        <address className="xt-p font-sm not-italic">Street Lorem Ipsum 42, 00134 City, Nation</address>
                      </div>
                      <div className="text-sm py-6 px-7 mt-auto pt-0">
                        <button
                          type="button"
                          className="listing-action xt-button text-xs py-2 px-3.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition">
                          More info
                        </button>
                      </div>
                    </div>

                    <div className="listing-item-back relative h-full xt-card rounded-md text-black xt-links-default bg-gray-200">
                      <button
                        type="button"
                        className="xt-button xt-dismiss absolute z-last top-0 right-0 p-5 text-xl"
                        aria-label="Close">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="xt-icon"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round">
                          <line x1="18" y1="6" x2="6" y2="18"></line>
                          <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                      </button>
                      <div className="text-sm py-6 px-7">
                        <div className="xt-h5">Contacts</div>
                        <div className="xt-p font-sm">
                          <strong>Email:</strong> <a href="mailto:info@info.com">info@info.com</a>
                          <br />
                          <strong>Phone:</strong> <a href="tel:+39333010101">+39 333 010101</a>
                          <br />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-6/12 lg:w-4/12">
                <div className="listing-item block w-full">
                  <div className="listing-item-inner h-full">
                    <div className="listing-item-front absolute inset-0 z-10 xt-card rounded-md text-black xt-links-default bg-gray-200">
                      <div className="xt-media-container bg-gray-200 w-full rounded-t-md h-40">
                        <div className="xt-media-inner">
                          <img className="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
                        </div>
                      </div>
                      <div className="text-sm py-6 px-7">
                        <div className="xt-h5">Lorem Ipsum</div>
                        <address className="xt-p font-sm not-italic">Street Lorem Ipsum 42, 00134 City, Nation</address>
                      </div>
                      <div className="text-sm py-6 px-7 mt-auto pt-0">
                        <button
                          type="button"
                          className="listing-action xt-button text-xs py-2 px-3.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition">
                          More info
                        </button>
                      </div>
                    </div>

                    <div className="listing-item-back relative h-full xt-card rounded-md text-black xt-links-default bg-gray-200">
                      <button
                        type="button"
                        className="xt-button xt-dismiss absolute z-last top-0 right-0 p-5 text-xl"
                        aria-label="Close">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="xt-icon"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round">
                          <line x1="18" y1="6" x2="6" y2="18"></line>
                          <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                      </button>
                      <div className="text-sm py-6 px-7">
                        <div className="xt-h5">Contacts</div>
                        <div className="xt-p font-sm">
                          <strong>Email:</strong> <a href="mailto:info@info.com">info@info.com</a>
                          <br />
                          <strong>Phone:</strong> <a href="tel:+39333010101">+39 333 010101</a>
                          <br />
                        </div>
                        <div className="xt-h5">Timetable</div>
                        <div className="xt-p font-sm">
                          <strong>Monday:</strong> 15:30–19:30
                          <br />
                          <strong>Tuesday:</strong> 10:00–13:00, 15:30–19:30
                          <br />
                          <strong>Wednesday:</strong> 10:00–13:00, 15:30–19:30
                          <br />
                          <strong>Thursday:</strong> 10:00–13:00, 15:30–19:30
                          <br />
                          <strong>Friday:</strong> 10:00–13:00, 15:30–19:30
                          <br />
                          <strong>Saturday:</strong> 10:00–19:30
                          <br />
                          <strong>Sunday:</strong> 10:00–13:00, 15:30–19:30
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Demo
