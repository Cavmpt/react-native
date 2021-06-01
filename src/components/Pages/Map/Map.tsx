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
    googleMapsApiKey: 'AIzaSyBySxXSN4mh-NRYPaMwkR1Pbb71r1DgkB8',
  })

  const onLoad = () => {}
  const onUnmount = () => {}

  return isLoaded ? (
    <div className='container'>
      <img
        className='container__live-feed'
        alt='liveFeed'
        src='http://209.206.162.230/mjpg/video.mjpg'
        width='1280'
        height='720'
      />
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
  )
}
