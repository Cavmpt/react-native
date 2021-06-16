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
  const {currentAlerts} = context

  const confirmThreat = async () => {
    fetch(
      `${process.env.REACT_APP_WEBSOCKET_BASE_URL}/threat-ack?id=${currentAlerts[0].id}`,
      {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
      },
    ) // THIS WILL TRIGGER WEBSOCKETS
  }

  const ignoreEvent = () => {
    fetch(
      `${process.env.REACT_APP_WEBSOCKET_BASE_URL}/threat-dis?id=${currentAlerts[0].id}`,
      {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
      },
    ) // THIS WILL TRIGGER WEBSOCKETS
  }
  const threatDisplay = () => {
    if (currentAlerts.length > 0) {
      return (
        <img
          src={`data:image/png;base64, ${currentAlerts[0].value} `}
          alt='alert'
        />
      )
    } else {
      return <div>Currently no alerts</div>
    }
  }

  return (
    <div className='threatAnalyser'>
      <div className='threatAnalyser__button-wrap'>
        {threatDisplay()}
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
