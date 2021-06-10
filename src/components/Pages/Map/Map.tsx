/* eslint-disable */
// @ts-nocheck
import React, {useEffect, useState, useContext} from 'react'
import {GoogleMap, useJsApiLoader} from '@react-google-maps/api'
import './Map.scss'
import AlertBoundary from '../../UIcomponents/Notifications/AlertBoundary/AlertBoundary'
import ErrorBoundary from '../../UIcomponents/Notifications/ErrorBoundary/ErrorBoundary'
import {Context, ContextType} from '../../../store/Provider'

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
  const context = useContext<ContextType>(Context)
  const {currentAlerts, setCurrentAlerts} = context
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
    fetch(process.env.REACT_APP_WEBSOCKET_BASE_URL + '/alerts', {
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
      .then(stream => {
        // Respond with the fetched stream stream
        return new Response(stream, {
          headers: {'Content-Type': 'binary/html'},
        }).arrayBuffer()
      })
      .then(result => {
        // GET THE LIST FROM THE PROTOCOL BUFFER
        const UInt8ImageArray =
          new message.UnknownObjectEntityRepository.deserializeBinary(
            result,
          ).getEntityList()
        for (let i = 0; i < UInt8ImageArray.length; i++) {
          // PUSHING IT INTO THE GLOBAL STORE ONE BY ONE
          const currentUInt8Image = UInt8ImageArray[i]
            .getUnknownobject()
            .getImage()
          const iteratedObjectOfAlerts = {
            id: i + 1,
            message: `ALERT ${i + 1}`,
            value: currentUInt8Image,
          }
          setCurrentAlerts(() => [...currentAlerts, iteratedObjectOfAlerts])
        }
      })
  }, [])

  const onLoad = () => {}
  const onUnmount = () => {}

  const togglemap = () => {}

  return (
    <AlertBoundary>
      <ErrorBoundary>
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
      </ErrorBoundary>
    </AlertBoundary>
  )
}

// const imageBackground =
// new message.UnknownObjectEntityRepository.deserializeBinary(result)
//   .getUnknownobject()
//   .getImage()
