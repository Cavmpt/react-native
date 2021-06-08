/* eslint-disable */
// @ts-nocheck
import React, {useEffect, useState} from 'react'
import {GoogleMap, useJsApiLoader} from '@react-google-maps/api'
import './Map.scss'
import AlertBoundary from '../../UIcomponents/Notifications/AlertBoundary/AlertBoundary'

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
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  })

  useEffect(() => {
    console.log(
      '---process.env.GOOGLE_MAPS_API_KEY---',
      process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    )
    fetch(process.env.REACT_APP_WEBSOCKET_BASE_URL + '/threats/1', {
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
      }).then(stream => {
      // Respond with our stream
      return new Response(stream, {
        headers: {'Content-Type': 'binary/html'},
      }).arrayBuffer()
    })
      .then(result => {
        console.log(
          '----RESULT STREAM-----',
          new message.UnidentifiedObject.deserializeBinary(result),
        )
        let image1 = new message.UnidentifiedObject.deserializeBinary(result).getImage();
        console.log('*** IMAGE *** \n' + image1)
        setImage(
          image1,
        )
      })
  }, [])

  const onLoad = () => {
  }
  const onUnmount = () => {
  }

  const togglemap = () => {
  }

  return (
    <AlertBoundary>
      {isLoaded ? (
        <div className='container'>
          <img src={`data:image/png;base64, ${image} `} alt="Red dot" />
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
      )}
    </AlertBoundary>
  )
}
