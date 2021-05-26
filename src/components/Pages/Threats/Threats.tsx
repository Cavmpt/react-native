import React, {useContext} from 'react'
import ButtonLarge from './../../UIcomponents/Buttons/Button-Large/ButtonLarge'

import './Threats.scss'

export interface IThreatsProps {
  placeholder?: string
}

export default function Threats(props: IThreatsProps): JSX.Element {
  let droneSerialNumber = '2345Nfr'
  //FETCH VIDEO ACCORDING TO SERIAL NUMBER

  const confirmThreat = () => {}
  const ignoreEvent = () => {}
  return (
    <div>
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
