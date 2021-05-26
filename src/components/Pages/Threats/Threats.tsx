import React, {useContext} from 'react'
import ButtonLarge from './../../UIcomponents/Buttons/Button-Large/ButtonLarge'

import {Context, ContextType} from '../../../store/Provider'

import './Threats.scss'

export interface IThreatsProps {
  placeholder?: string
}

export default function Threats(props: IThreatsProps): JSX.Element {
  const context = useContext<ContextType>(Context)
  let {setCurrentThreats, currentThreats} = context

  let threats = {
    droneSerialNumber: 'JE123',
    signalCount: '123',
  }
  //FETCH VIDEO ACCORDING TO SERIAL NUMBER

  const confirmThreat = () => {
    let newThreatsArray: string[] = currentThreats.splice(
      currentThreats.length,
      0,
      threats.signalCount,
    )
    setCurrentThreats(newThreatsArray)
  }
  const ignoreEvent = () => {
    //DELETE EVENT
  }
  return (
    <div className='threats-page'>
      <ButtonLarge
        textValue={'Report'}
        onClick={() => confirmThreat()}
        color='red'
      />
      <ButtonLarge
        textValue={'Ignore'}
        onClick={() => ignoreEvent()}
        color='gray'
      />
    </div>
  )
}
