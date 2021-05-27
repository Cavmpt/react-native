import React, {useContext} from 'react'

import {Context, ContextType} from '../../../store/Provider'

export interface IAlertBoxProps {
  placeholder?: any
}

export default function AlertBox(props: IAlertBoxProps) {
  const context = useContext<ContextType>(Context)
  const {currentAlerts} = context
  return (
    <div>
      <tr>
        <th>Alerts</th>
      </tr>
      {currentAlerts.map(alerts => (
        <tr>
          <td>{alerts.name}</td>
        </tr>
      ))}
    </div>
  )
}
