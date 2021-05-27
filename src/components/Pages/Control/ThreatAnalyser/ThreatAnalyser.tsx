import React, {useContext} from 'react'
import ButtonLarge from '../../../UIcomponents/Buttons/Button-Large/ButtonLarge'

import DummyImage from './screenCap.jpg'

import './ThreatAnalyser.scss'

import {Context, ContextType} from '../../../../store/Provider'

export interface IThreatAnalyserProps {
  placeholder?: any
}

export default function ThreatAnalyser(props: IThreatAnalyserProps) {
  const context = useContext<ContextType>(Context)
  const {setCurrentThreats, currentThreats} = context
  const currentImage = DummyImage
  const threats = {
    droneSerialNumber: 'JE123',
    signalCount: '123',
  }
  // FETCH VIDEO ACCORDING TO SERIAL NUMBER

  const confirmThreat = () => {
    const newThreatsArray: string[] = currentThreats.splice(
      currentThreats.length,
      0,
      threats.signalCount,
    )
    setCurrentThreats(newThreatsArray)
  }

  const ignoreEvent = () => {
    // DELETE EVENT
  }
  return (
    <div className='threatAnalyser-page'>
      <div
        style={{
          width: `80%`,
          height: `90vh`,
          backgroundImage: `url(${currentImage})`,
        }}
      >
        <div className='threatAnalyser-page__button-wrap'>
          <ButtonLarge
            textValue='Investigate'
            onClick={() => confirmThreat()}
            color='red'
          />
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
