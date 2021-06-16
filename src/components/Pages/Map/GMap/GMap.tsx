import * as React from 'react'
import {GoogleMap, useJsApiLoader} from '@react-google-maps/api'

export interface IGmapProps {
  placeholder?: null
}

export default function Gmap(props: IGmapProps): JSX.Element {
  const {isLoaded} = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY as string,
  })

  const containerStyle = {
    width: '1200px',
    height: '600px',
  }

  const center = {
    lat: -3.745,
    lng: -38.523,
  }

  const onLoad = () => {}
  const onUnmount = () => {}
  const togglemap = () => {}

  return (
    <div>
      {isLoaded ? (
        <div className='container'>
          <div className='container__google-map'>
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={10}
              onLoad={onLoad}
              onUnmount={onUnmount}
            >
              {/* Child components, such as markers, info windows, etc. */}
            </GoogleMap>
          </div>
          <></>
        </div>
      ) : (
        <></>
      )}
    </div>
  )
}
