/* eslint-disable */
// @ts-nocheck
import React, {useEffect, useState} from 'react'
import {GoogleMap, useJsApiLoader} from '@react-google-maps/api'
import './Map.scss'
import {Timestamp} from 'google-protobuf/google/protobuf/timestamp_pb'

const message = require('../../../helpers/uav-monitor_pb')

export interface IMapProps {
  placeholder?: any
}

const containerStyle = {
  width: '1200px',
  height: '600px',
}

const center = {
  lat: -3.745,
  lng: -38.523,
}

export default function Map(props: IMapProps) {
  const [image, setImage] = useState('')
  const [isMapToggled, setToggleMap] = useState(false)
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
      .then(response => response.body)
      .then(body => {
        const reader = body.getReader()
        return new ReadableStream({
          start(controller) {
            function push() {
              reader.read().then(({done, value}) => {
                if (done) {
                  console.log('done', done)
                  controller.close()
                  return
                }
                controller.enqueue(value)
                console.log(done, value)
                push()
              })
            }
            push()
          },
        })
      })
      .then(result => {
        console.log(
          '----RESULT STREAM-----',
          new message.UnidentifiedObjectRepository.deserializeBinary(result),
        )
        setImage(
          new message.UnidentifiedObjectRepository.deserializeBinary(result),
        )
      })
  }, [])

  const onLoad = () => {}
  const onUnmount = () => {}

  const togglemap = () => {}

  return isLoaded ? (
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
        <img
          onClick={() => togglemap()}
          className='container__live-feed'
          alt='liveFeed'
          src='http://209.206.162.230/mjpg/video.mjpg'
        />
      </div>
      <></>
    </div>
  ) : (
    <></>
  )
}
