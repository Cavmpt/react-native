/* eslint-disable */
// @ts-nocheck

import React, {useContext, useState, useEffect} from 'react'
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
  const {
    currentAlerts,
    setCurrentAnalyzedThreatOrAlert,
    currentAnalyzedThreatOrAlert,
  } = context
  const [isCurrentAnalyzedAThreat, setIsCurrentAnalyzedAThreat] =
    useState<boolean>(false)
  useEffect(() => {
    if (
      currentAnalyzedThreatOrAlert !== {} &&
      currentAnalyzedThreatOrAlert !== undefined
    ) {
      if (currentAnalyzedThreatOrAlert.type === 'threat') {
        setIsCurrentAnalyzedAThreat(true)
      } else if (currentAnalyzedThreatOrAlert.type === 'alert') {
        setIsCurrentAnalyzedAThreat(false)
      } else {
        setIsCurrentAnalyzedAThreat(false)
      }
    }
  }, [currentAnalyzedThreatOrAlert])


  const confirmThreat = async () => {
    if (currentAlerts.length > 0) {

      let alertKey = 0;
      for(let i = 0; i < currentAlerts.length; i++){
        if(currentAnalyzedThreatOrAlert.id == currentAlerts[i].id){
          alertKey = i;
        }
      }
      setCurrentAnalyzedThreatOrAlert(currentAlerts.splice(alertKey, 1))
      fetch(
        `${process.env.REACT_APP_REST_BASE_URL}/threat-ack?id=${currentAnalyzedThreatOrAlert.id}`,
        {
          method: 'POST',
          mode: 'cors',
          cache: 'no-cache',
        },
      ) // THIS WILL TRIGGER WEBSOCKETS
    } else {
      return
    }
  }

  const ignoreEvent = () => {
    if (currentAlerts.length > 0) {

      let alertKey = 0;
      for(let i = 0; i < currentAlerts.length; i++){
        if(currentAnalyzedThreatOrAlert.id == currentAlerts[i].id){
          alertKey = i;
        }
      }
      setCurrentAnalyzedThreatOrAlert(currentAlerts.splice(alertKey, 1))
      fetch(
        `${process.env.REACT_APP_REST_BASE_URL}/threat-dis?id=${currentAnalyzedThreatOrAlert.id}`,
        {
          method: 'POST',
          mode: 'cors',
          cache: 'no-cache',
        },
      ) // THIS WILL TRIGGER WEBSOCKETS
    } else {
      return
    }
  }

  const threatDisplay = () => {
    if (
      currentAnalyzedThreatOrAlert !== {} &&
      currentAnalyzedThreatOrAlert !== undefined
    ) {
      return (
        <img
          src={`data:image/png;base64, ${currentAnalyzedThreatOrAlert.value} `}
          className='threat-image'
          alt='alert'
        />
      )
    } else if (
      currentAnalyzedThreatOrAlert === {} ||
      currentAnalyzedThreatOrAlert === undefined
    ) {
      return <div className='empty-threat'>No Images</div>
    }
  }

  return (
    <div className='threatAnalyser'>
      <div data-testid='threat-Box'>{threatDisplay()}</div>
      <div className='threatAnalyser__button-wrap'>
        <div className='threatAnalyser__buttons'>
          <ButtonLarge
            textValue='Investigate'
            onClick={() => confirmThreat()}
            color='grey'
            disable={isCurrentAnalyzedAThreat}
          />
        </div>
        <div className='threatAnalyser__buttons'>
          <ButtonLarge
            textValue='Ignore'
            onClick={() => ignoreEvent()}
            color='grey'
            disable={isCurrentAnalyzedAThreat}
          />
        </div>
      </div>
    </div>
  )
}
