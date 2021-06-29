/* eslint-disable */
// @ts-nocheck

import React, {useContext} from 'react'
import ButtonLarge from '../../../UIcomponents/Buttons/ButtonLarge/ButtonLarge'

import './ThreatAnalyser.scss'

import {Context, ContextType} from '../../../../store/Provider'

export interface IThreatAnalyserProps {
  placeholder?: null
}

export default function ThreatAnalyser(
  props: IThreatAnalyserProps,
): JSX.Element {
  const context = useContext<ContextType>(Context)
  const {currentAlerts} = context

  const confirmThreat = async () => {
    fetch(
      `${process.env.REACT_APP_REST_BASE_URL}/threat-ack?id=${currentAlerts[0].id}`,
      {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
      },
    ) // THIS WILL TRIGGER WEBSOCKETS
  }

  const ignoreEvent = () => {
    fetch(
      `${process.env.REACT_APP_REST_BASE_URL}/alerts/${currentThreats[0].id}`,
      {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'same-origin',
      },
    ) // THIS WILL TRIGGER WEBSOCKETS
  }
  const threatDisplay = () => {
    if (currentAlerts.length > 0) {
      return (
        <img
          src={`data:image/png;base64, ${currentAlerts[0].value} `}
          className='threat-image'
          data-testid='threat-Box'
          alt='alert'
        />
      )
    } else {
      return (
        <div data-testid='threat-Box' className='empty-threat'>
          Currently no alerts
        </div>
      )
    }
  }

  return (
    <div className='threatAnalyser'>
      {threatDisplay()}
      <div className='threatAnalyser__button-wrap'>
        <div className='threatAnalyser__buttons'>
          <ButtonLarge
            textValue='Investigate'
            onClick={() => confirmThreat()}
            color='grey'
          />
        </div>
        <div className='threatAnalyser__buttons'>
          <ButtonLarge textValue='Ignore' onClick={() => ignoreEvent()} />
        </div>
      </div>
    </div>
  )
}
