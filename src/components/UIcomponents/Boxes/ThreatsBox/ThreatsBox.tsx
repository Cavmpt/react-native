import React, {useContext} from 'react'

import './ThreatsBox.scss'

import {Context, ContextType} from '../../../../store/Provider'

export interface IThreatsBoxProps {
  placeholder?: any
}

export default function ThreatsBox(props: IThreatsBoxProps) {
  const context = useContext<ContextType>(Context)
  const {currentThreats} = context

  return (
    <div className='threatBox'>
      <tr className='threatBox__header'>
        <th>Confirmed threats</th>
      </tr>
      {currentThreats.length > 1 ? (
        currentThreats.map(threats => (
          <tr className='threatBox__row'>
            <td>{threats.name}</td>
          </tr>
        ))
      ) : (
        <tr className='threatBox__row'>
          <td>no threats detected</td>
        </tr>
      )}
    </div>
  )
}
