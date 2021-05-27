import React, {useCallback, useState} from 'react'
import {GoogleMap, useJsApiLoader} from '@react-google-maps/api'

import './Map.scss'

export interface IMapProps {
  placeholder?: any
}
const containerStyle = {
  width: '400px',
  height: '400px',
}

const center = {
  lat: -3.745,
  lng: -38.523,
}

export default function Map(props: IMapProps) {
  const {isLoaded} = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'YOUR_API_KEY',
  })

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      // onLoad={onLoad}
      // onUnmount={onUnmount}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <></>
    </GoogleMap>
  ) : (
    <></>
  )
}
