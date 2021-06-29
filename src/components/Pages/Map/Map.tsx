/* eslint-disable */
// @ts-nocheck
import React, {useState, useContext} from 'react'
import './Map.scss'
import GMap from './GMap/GMap'
import LiveFeed from './LiveFeed/LiveFeed'
import NotificationFeed from './NotificationFeed/NotificationFeed'
import InformationPanel from './InformationPanel/InformationPanel'

import AlertBoundary from '../../UIcomponents/Notifications/AlertBoundary/AlertBoundary'
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
    <AlertBoundary>
      <div className='map-page' data-testid='map-page'>
        <div>
          <LiveFeed />
          <div className='notification-gmap-flex'>
            <GMap />
            <NotificationFeed />
          </div>
        </div>
        <InformationPanel />
      </div>
    </AlertBoundary>
  )
}
