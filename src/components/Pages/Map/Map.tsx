/* eslint-disable */
// @ts-nocheck
import React, {useState, useContext} from 'react'
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

  const onLoad = () => {}
  const onUnmount = () => {}
  const togglemap = () => {}

  return (
    <ErrorBoundary>
      <AlertBoundary>
        <>
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

          <img
            onClick={() => togglemap()}
            className='container__live-feed'
            alt='liveFeed'
            src='http://209.206.162.230/mjpg/video.mjpg'
          />
        </>
      </AlertBoundary>
    </ErrorBoundary>
  )
}
