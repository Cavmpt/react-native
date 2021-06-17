import React from 'react'
import ThreatAnalyser from './ThreatAnalyser/ThreatAnalyser'
import AlertBox from '../../UIcomponents/Boxes/AlertsBox/AlertsBox'
import ThreatsBox from '../../UIcomponents/Boxes/ThreatsBox/ThreatsBox'
import InformationPanel from '../Map/InformationPanel/InformationPanel'

import ErrorBoundary from '../../UIcomponents/Notifications/ErrorBoundary/ErrorBoundary'

import './Controls.scss'

export interface IThreatsProps {
  placeholder?: null
}

export default function Threats(props: IThreatsProps): JSX.Element {
  return (
    <ErrorBoundary>
      <div className='control-page'>
        <ThreatAnalyser />
        <div className='control-page__box-wrapper'>
          <AlertBox />
          <ThreatsBox />
        </div>
      </div>
    </ErrorBoundary>
  )
}
