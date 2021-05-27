import React, {useContext} from 'react'

import './ThreatsBox.scss'

import {Context, ContextType} from '../../../store/Provider'

export interface IThreatsBoxProps {
  placeholder?: any
}

export default function ThreatsBox(props: IThreatsBoxProps) {
  const context = useContext<ContextType>(Context)
  const {currentThreats} = context
  return (
    <div className='threatBox'>
      <tr>
        <th>Threats</th>
      </tr>
      {currentThreats.map(threats => (
        <tr>
          <td>{threats.name}</td>
        </tr>
      ))}
    </div>
  )
}
