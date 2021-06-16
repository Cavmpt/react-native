/* eslint-disable */
// @ts-nocheck
import React, {useState, useContext} from 'react'
import './Map.scss'
import GMap from './GMap/GMap'

import AlertBoundary from '../../UIcomponents/Notifications/AlertBoundary/AlertBoundary'
import ErrorBoundary from '../../UIcomponents/Notifications/ErrorBoundary/ErrorBoundary'
import {Context, ContextType} from '../../../store/Provider'

const message = require('../../../helpers/uav-monitor_pb')

export interface IMapProps {
  placeholder?: any
}

export default function Map(props: IMapProps) {
  const context = useContext<ContextType>(Context)
  const {currentAlerts, setCurrentAlerts} = context
  const [isMapToggled, setToggleMap] = useState(false)

  return (
    <ErrorBoundary>
      <AlertBoundary>
        <GMap />
        <>
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
