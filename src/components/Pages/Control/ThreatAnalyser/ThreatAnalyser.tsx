import React, {useContext, useState} from 'react'
import ButtonLarge from '../../../UIcomponents/Buttons/Button-Large/ButtonLarge'

import Threat1 from './threat1.jpg'
import Threat2 from './threat2.jpg'

import './ThreatAnalyser.scss'

import {Context, ContextType} from '../../../../store/Provider'

export interface IThreatAnalyserProps {
  placeholder?: any
}

export default function ThreatAnalyser(props: IThreatAnalyserProps) {
  const context = useContext<ContextType>(Context)
  const {setCurrentAlerts, currentAlerts, setCurrentThreats, currentThreats} =
    context
  const [count, setCount] = useState(1)
  const currentImage = Threat1

  // FETCH VIDEO ACCORDING TO SERIAL NUMBER

  const confirmThreat = async () => {
    const confirmedThreat = currentAlerts.shift()
    const dummyCount = currentThreats.push(confirmedThreat)
    await setCurrentThreats(currentThreats)
    await setCurrentAlerts(currentAlerts)
    await setCount(count + 1)
  }

  const ignoreEvent = () => {
    // DELETE EVENT
  }
  return (
    <div
      className='threatAnalyser'
      style={{
        backgroundImage: `url(${Threat1})`,
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
