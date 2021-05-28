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
  const {setCurrentAlerts, currentAlerts, setCurrentThreats, currentThreats} =
    context
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
    <div
      className='threatAnalyser'
      style={{
        backgroundImage: `url(${currentImage})`,
      }}
    >
      <div className='threatAnalyser__button-wrap'>
        <div className='threatAnalyser__buttons'>
          <ButtonLarge
            textValue='Investigate'
            onClick={() => confirmThreat()}
            color='red'
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
