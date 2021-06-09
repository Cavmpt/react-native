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
  const {imagesAlerts} = context
  const [count, setCount] = useState(1)

  // FETCH VIDEO ACCORDING TO SERIAL NUMBER

  const confirmThreat = async () => {
    // const confirmedThreat = currentAlerts.shift()
    // const dummyCount = currentThreats.push(confirmedThreat)
    // await setCurrentThreats(currentThreats)
    // await setCurrentAlerts(currentAlerts)
    // await setCount(count + 1)
    // client.send('/topic/stocks', {}, JSON.stringify(quote))
  }

  const ignoreEvent = () => {
    console.log(imagesAlerts)
  }

  useEffect(() => {
    socketMethods()
    deserializeMethod()
  })

  return (
    <div className='threatAnalyser'>
      <img
        src={`data:image/png;base64, ${imagesAlerts[0].value} `}
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
