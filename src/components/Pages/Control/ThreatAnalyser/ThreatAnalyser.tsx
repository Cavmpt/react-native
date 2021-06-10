/* eslint-disable */
// @ts-nocheck

import React, {useContext, useState, useEffect} from 'react'
import ButtonLarge from '../../../UIcomponents/Buttons/Button-Large/ButtonLarge'
import deserializeMethod from '../../../../helpers/deserializeMethods'
import socketMethods from '../../../../helpers/socketMethods'
import './ThreatAnalyser.scss'

import {Context, ContextType} from '../../../../store/Provider'

export interface IThreatAnalyserProps {
  placeholder?: null
}

export default function ThreatAnalyser(
  props: IThreatAnalyserProps,
): JSX.Element {
  const context = useContext<ContextType>(Context)
  const {currentAlerts, setCurrentAlerts} = context
  const [count, setCount] = useState(1)

  // FETCH VIDEO ACCORDING TO SERIAL NUMBER

  const confirmThreat = async () => {
    fetch(
      `${process.env.REACT_APP_WEBSOCKET_BASE_URL}/threat-ack?id=${currentAlerts[0].id}`,
      {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
      },
    )
  }

  const ignoreEvent = () => {
    fetch(
      `${process.env.REACT_APP_WEBSOCKET_BASE_URL}/alerts/${currentAlerts[0].id}`,
      {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'same-origin',
      },
    ).then(resp => {
      // if ((resp = 'successful')) {
      // const currentAlertMinusFirstElement = currentAlerts.shift()
      // setCurrentAlerts([...currentAlertMinusFirstElement])
      // }
    })
  }

  useEffect(() => {
    console.log('TYPE:', typeof JSON.stringify({id: currentAlerts[0].id}))
    socketMethods()
    deserializeMethod()
  })

  return (
    <div className='threatAnalyser'>
      <img
        src={`data:image/png;base64, ${currentAlerts[0].value} `}
        alt='alert'
      />
      <div className='threatAnalyser__button-wrap'>
        <div className='threatAnalyser__buttons'>
          <ButtonLarge
            textValue='Investigate'
            onClick={() => confirmThreat()}
            color='grey'
          />
        </div>
        <div className='threatAnalyser__buttons'>
          <ButtonLarge
            textValue='Ignore'
            onClick={() => ignoreEvent()}
            color='gray'
          />
        </div>
      </div>
    </div>
  )
}
