/* eslint-disable */
// @ts-nocheck
import React, {useState, useContext, useEffect} from 'react'
import {GoogleMap, useJsApiLoader} from '@react-google-maps/api'
import './Map.scss'
import AlertBoundary from '../../UIcomponents/Notifications/AlertBoundary/AlertBoundary'
import ErrorBoundary from '../../UIcomponents/Notifications/ErrorBoundary/ErrorBoundary'
import {Context, ContextType} from '../../../store/Provider'

const message = require('../../../helpers/uav-monitor_pb')

export interface IMapProps {
  placeholder?: any
}

export default function Map(props: IMapProps) {
  const context = useContext<ContextType>(Context)
  const [isMapToggled, setToggleMap] = useState(false)
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions(),
  )
  const getWindowDimensions = () => {
    const {innerWidth: width, innerHeight: height} = window
    return {
      width,
      height,
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // GOOGLE MAPS CONFIG

  const {isLoaded} = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  })

  const onLoad = () => {}
  const onUnmount = () => {}
  const togglemap = () => {}

  const containerStyle = {
    width: '100%',
    height: '600px',
  }

  const center = {
    lat: -3.745,
    lng: -38.523,
  }
  // GOOGLE MAPS CONFIG
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
        </>
      </AlertBoundary>
    </ErrorBoundary>
  )
}
