import * as React from 'react'
import {GoogleMap, useJsApiLoader} from '@react-google-maps/api'

import './GMap.scss'

export interface IGmapProps {
  placeholder?: null
}

export default function Gmap(props: IGmapProps): JSX.Element {
  const {isLoaded} = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY as string,
  })

  const containerStyle = {
    marginTop: '0.5rem',
    width: '28rem',
    height: '300px',
  }

  const center = {
    lat: -3.745,
    lng: -38.523,
  }

  const onLoad = () => {}
  const onUnmount = () => {}
  const togglemap = () => {}

  return (
    <>
      {isLoaded ? (
        <div className='map-container'>
          <div className='map-container__google-map'>
            <span className='map-container__title'>Location map</span>
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={15}
              onLoad={onLoad}
              onUnmount={onUnmount}
              options={{
                styles: [
                  {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
                  {
                    elementType: 'labels.text.stroke',
                    stylers: [{color: '#242f3e'}],
                  },
                  {
                    elementType: 'labels.text.fill',
                    stylers: [{color: '#746855'}],
                  },
                  {
                    featureType: 'administrative.locality',
                    elementType: 'labels.text.fill',
                    stylers: [{color: '#d59563'}],
                  },
                  {
                    featureType: 'poi',
                    elementType: 'labels.text.fill',
                    stylers: [{color: '#d59563'}],
                  },
                  {
                    featureType: 'poi.park',
                    elementType: 'geometry',
                    stylers: [{color: '#263c3f'}],
                  },
                  {
                    featureType: 'poi.park',
                    elementType: 'labels.text.fill',
                    stylers: [{color: '#6b9a76'}],
                  },
                  {
                    featureType: 'road',
                    elementType: 'geometry',
                    stylers: [{color: '#38414e'}],
                  },
                  {
                    featureType: 'road',
                    elementType: 'geometry.stroke',
                    stylers: [{color: '#212a37'}],
                  },
                  {
                    featureType: 'road',
                    elementType: 'labels.text.fill',
                    stylers: [{color: '#9ca5b3'}],
                  },
                  {
                    featureType: 'road.highway',
                    elementType: 'geometry',
                    stylers: [{color: '#746855'}],
                  },
                  {
                    featureType: 'road.highway',
                    elementType: 'geometry.stroke',
                    stylers: [{color: '#1f2835'}],
                  },
                  {
                    featureType: 'road.highway',
                    elementType: 'labels.text.fill',
                    stylers: [{color: '#f3d19c'}],
                  },
                  {
                    featureType: 'transit',
                    elementType: 'geometry',
                    stylers: [{color: '#2f3948'}],
                  },
                  {
                    featureType: 'transit.station',
                    elementType: 'labels.text.fill',
                    stylers: [{color: '#d59563'}],
                  },
                  {
                    featureType: 'water',
                    elementType: 'geometry',
                    stylers: [{color: '#17263c'}],
                  },
                  {
                    featureType: 'water',
                    elementType: 'labels.text.fill',
                    stylers: [{color: '#515c6d'}],
                  },
                  {
                    featureType: 'water',
                    elementType: 'labels.text.stroke',
                    stylers: [{color: '#17263c'}],
                  },
                ],
              }}
            >
              {/* Child components, such as markers, info windows, etc. */}
            </GoogleMap>
          </div>
          <></>
        </div>
      ) : (
        <></>
      )}
    </>
  )
}
