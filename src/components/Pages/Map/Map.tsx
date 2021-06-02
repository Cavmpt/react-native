/* eslint-disable */
// @ts-nocheck
import React, {useEffect} from 'react'
import {GoogleMap, useJsApiLoader} from '@react-google-maps/api'
import './Map.scss'
import {Timestamp} from "google-protobuf/google/protobuf/timestamp_pb";

const message = require('../../../helpers/uav-monitor_pb')

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

  useEffect(() => {
    fetch('http://localhost:8080/threats/1', {
      method: 'GET',
      responseType: 'arraybuffer',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
    })
      .then(
        response =>
          // response.json()
        {
          console.log("Response: " + response)
          console.log("Response body:" + response.body)
          response.headers.forEach((value, key) => {
            console.log("Response header:" + key + " | " + value)
          })

          // let deserializeBinary = new message.UnidentifiedObjectRepository.deserializeBinary(
          //   new Uint8Array(response.body),
          // );
          let deserializeBinary = message.UnidentifiedObject.deserializeBinary(new Uint8Array(response.body));
          console.log("Image: " + deserializeBinary.getImage())
        },
      )
    // .then(data => console.log('data', data))
  }, [])

  const onLoad = () => {
  }
  const onUnmount = () => {
  }

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
