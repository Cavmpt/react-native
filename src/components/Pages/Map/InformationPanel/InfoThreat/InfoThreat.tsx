import React, {useContext} from 'react'
import {useNavigate} from 'react-router-dom'

import {Context, ContextType} from '../../../../../store/Provider'

import './InfoThreat.scss'

export interface IInfoThreatProps {
  placeholder?: null
}

export default function InfoThreat(props: IInfoThreatProps) {
  const context = useContext<ContextType>(Context)
  const {currentAlerts} = context
  const navigate = useNavigate()

  const AnalyzeThreat = () => {
    navigate('controls')
  }

  return (
    <div className='info-alert'>
      <div className='info-alert__card'>
        <img
          className='info-alert__image'
          alt='alert'
          src={`data:image/png;base64, ${currentAlerts[0]?.value} `}
        />
        <button type='button' onClick={() => AnalyzeThreat()}>
          investigate
        </button>
      </div>
    </div>
  )
}
