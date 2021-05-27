import React, {useContext} from 'react'

import './Threatbox.scss'

import {Context, ContextType} from '../../../../store/Provider'

export interface IThreatsBoxProps {}

export function ThreatsBox(props: IThreatsBoxProps) {
  const context = useContext<ContextType>(Context)
  const {currentThreats} = context
  return (
    <div>
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
