import React, {useContext} from 'react'
import ThreatAnalyser from './ThreatAnalyser/ThreatAnalyser'

import {Context, ContextType} from '../../../store/Provider'

import './Control.scss'

export interface IThreatsProps {
  placeholder?: string
}

export default function Threats(props: IThreatsProps): JSX.Element {
  return (
    <div className='control-page'>
      <ThreatAnalyser />
    </div>
  )
}
