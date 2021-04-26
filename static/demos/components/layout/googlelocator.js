/* global google */
import { Xt } from 'xtendui'
import 'xtendui/src/googlelocator'

Xt.mount({
  matches: '.demo--googlelocator',
  mount: ({ ref }) => {
    const unmountGooglelocator = mountGooglelocator({ ref })

    // unmount

    return () => {
      unmountGooglelocator()
    }
  },
})

/* mountGooglelocator */

const mountGooglelocator = ({ ref }) => {
  // add yout api key here

  Xt.addScript(
    'https://maps.googleapis.com/maps/api/js?key=AIzaSyDSZt9TUgS20QyAbAAL-X3tJIKVLEaCrts&v=3&libraries=places,geometry&language=en&&region=US&callback=demoGooglelocator'
  )

  Xt.addScript('https://unpkg.com/@googlemaps/markerclustererplus/dist/index.min.js')

  // vars

  const googlelocator = ref

  // init

  window.demoGooglelocator = function () {
    new Xt.Googlelocator(googlelocator, {
      initialLocate: false,
      initialSearch: false,
      seachMapBounds: false,
      locateRadius: 25000,
      locateText: 'Locate',
      elements: {
        loader: '.xt-loader',
        searchInput: 'input[type="text"]',
        searchBtn: '.button--search',
        map: '.googlelocator-main-map',
        itemsTemplate: 'script[type="text/x-template"]',
        itemsContainer: '.googlelocator-items',
        results: '.googlelocator-aside-body',
        resultsFound: '.googlelocator-result--found',
        locateBtn: '.button--locate',
        repeatBtn: '.button--repeat',
        filter: 'input[type="checkbox"], input[type="radio"]',
      },
      events: {
        animateMarkerResultClick: google.maps.Animation.BOUNCE,
        infoWindowMarkerClick: true,
      },
      map: {
        center: { lat: 40, lng: -74 },
        zoom: 2.5,
        zoomMin: 14,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        zoomControlOptions: {
          position: google.maps.ControlPosition.RIGHT_CENTER,
        },
        cluster: {
          minimumClusterSize: 5,
          imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m',
        },
      },
      formatData: {
        lat: function (self, marker) {
          return marker.lat
        },
        lng: function (self, marker) {
          return marker.lng
        },
        sort: function (self) {
          if (self.searchInput.value === '') {
            self.locations.sort((a, b) => {
              const aName = a.marker.name.toUpperCase()
              const bName = b.marker.name.toUpperCase()
              if (aName > bName) {
                return 1
              }
              if (aName < bName) {
                return -1
              }
              return 0
            })
          } else {
            self.locations.sort((a, b) => {
              return a.distance - b.distance
            })
          }
        },
        filter: function (self, marker, filters) {
          let passed = true
          for (const filter of filters) {
            // if filter is checked
            if (filter.checked) {
              const val = filter.value
              const check = marker[val] || (marker.type && marker.type.includes(val))
              // if not checked and not '' (filter all)
              if (!check && val !== '') {
                // filter out
                passed = false
              }
            }
          }
          // if passed filter in
          return passed
        },
        name: function (self, loc, el) {
          const str = loc.marker.name
          if (!str || str === '') {
            el.remove()
          } else {
            el.innerHTML = str
          }
        },
        address: function (self, loc, el) {
          const str = loc.marker.address
          if (!str || str === '') {
            el.remove()
          } else {
            el.innerHTML = str
          }
        },
        additional: function (self, loc, el) {
          const str = loc.marker.additional
          if (!str || str === '') {
            el.remove()
          } else {
            el.innerHTML = str
          }
        },
        img: function (self, loc, el) {
          const str = loc.marker.img
          if (!str || str === '') {
            el.remove()
          } else {
            el.setAttribute('src', str)
          }
        },
        direction: function (self, loc, el) {
          let str = 'https://www.google.com/maps/dir/?api=1&destination='
          str += loc.marker.name
          str += `+${loc.marker.address}`
          el.setAttribute('href', encodeURI(str))
        },
        distance: function (self, loc, el) {
          let distance
          if (loc.distance > 1000) {
            distance = `${Math.round(loc.distance / 1000)} Km`
          } else {
            distance = `${Math.round(loc.distance)} m`
          }
          el.innerHTML = distance
        },
        info: function (self, loc, el) {
          return el.outerHTML
        },
      },
      markers: [
        {
          lat: 40.724165,
          lng: -73.983883,
          name: 'School 2',
          address: 'Via Foo, 19 - 35141 City PD',
          additional:
            '<a href="tel:+39333010101">+39 333 010101</a><br/><a href="mailto:info@info.com">info@info.com</a>',
          type: ['school'],
          fav: false,
        },
        {
          lat: 40.721819,
          lng: -73.991358,
          name: 'Restaurant 2',
          address: 'Via Foo, 19 - 35141 City PD',
          additional:
            '<a href="tel:+39333010101">+39 333 010101</a><br/><a href="mailto:info@info.com">info@info.com</a>',
          type: ['restaurant'],
          fav: false,
        },
        {
          lat: 40.72308,
          lng: -73.98434,
          name: 'Restaurant 1',
          address: 'Via Foo, 19 - 35141 City PD',
          additional:
            '<a href="tel:+39333010101">+39 333 010101</a><br/><a href="mailto:info@info.com">info@info.com</a>',
          type: ['restaurant'],
          fav: true,
        },
        {
          lat: 40.724705,
          lng: -73.986611,
          name: 'School 1',
          address: 'Via Foo, 19 - 35141 City PD',
          additional:
            '<a href="tel:+39333010101">+39 333 010101</a><br/><a href="mailto:info@info.com">info@info.com</a>',
          type: ['school'],
          fav: true,
        },
        {
          lat: 40.732056,
          lng: -73.998683,
          name: 'School 3',
          address: 'Via Foo, 19 - 35141 City PD',
          additional:
            '<a href="tel:+39333010101">+39 333 010101</a><br/><a href="mailto:info@info.com">info@info.com</a>',
          type: ['school'],
          fav: false,
        },
      ],
    })
  }

  // unmount

  return () => {}
}
