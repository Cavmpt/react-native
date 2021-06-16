import React, {useContext} from 'react'
import {useNavigate} from 'react-router-dom'
import ButtonMedium from '../../Buttons/ButtonMedium/ButtonMedium'

import {Context, ContextType} from '../../../../store/Provider'

import './AlertBoundary.scss'

export interface IAlertBoundaryProps {
  children: React.ReactNode
}

export default function AlertBoundary(props: IAlertBoundaryProps): JSX.Element {
  const context = useContext<ContextType>(Context)
  const {currentAlerts, currentAnalyzedAlert, setCurrentAnalyzedAlert} = context
  const {children} = props
  const navigate = useNavigate()

  const AnalyzeThreat = () => {
    navigate('success')
  }

  return (
    <div>
      {currentAlerts.map(item => (
        <div className='card-alert'>
          <div className='card-alert__id'>Alert {item.id}</div>
          <img
            className='card-alert__image'
            alt='alert'
            src={`data:image/png;base64, ${item.value} `}
          />
          <ButtonMedium
            textValue='investigate'
            onClick={() => AnalyzeThreat()}
            color='gray'
          />
          <div />
        </div>
      ))}
      <div>{children}</div>
    </div>
  )
}
