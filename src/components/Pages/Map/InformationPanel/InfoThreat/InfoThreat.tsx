import React, {useContext} from 'react'
import {useNavigate} from 'react-router-dom'

import {Context, ContextType} from '../../../../../store/Provider'

import './InfoThreat.scss'

export interface IInfoThreatProps {
  placeholder?: null
}

export default function InfoThreat(props: IInfoThreatProps): JSX.Element {
  const context = useContext<ContextType>(Context)
  const {currentAlerts} = context
  const navigate = useNavigate()

  const AnalyzeThreat = () => {
    navigate('controls')
  }

  return (
    <div className='info-alert'>
      <div className='info-alert__card'>
        {currentAlerts.length > 0 ? (
          <img
            className='info-alert__image'
            alt='alert'
            src={`data:image/png;base64, ${currentAlerts[0]?.value} `}
          />
        ) : (
          <div className='info-alert__no-image'>Currently no threats</div>
        )}
        <button type='button' onClick={() => AnalyzeThreat()}>
          Analyze
        </button>
      </div>
    </div>
  )
}
