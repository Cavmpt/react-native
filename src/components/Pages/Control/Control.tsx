import React from 'react'
import ThreatAnalyser from './ThreatAnalyser/ThreatAnalyser'
import AlertBox from '../../UIcomponents/Boxes/AlertsBox/AlertsBox'
import ThreatsBox from '../../UIcomponents/Boxes/ThreatsBox/ThreatsBox'

import './Control.scss'

export interface IThreatsProps {
  placeholder?: null
}

export default function Threats(props: IThreatsProps): JSX.Element {
  return (
    <div className='control-page'>
      <div className='control-page__box-wrapper'>
        <AlertBox />
        <ThreatsBox />
      </div>
      <ThreatAnalyser />
    </div>
  )
}
