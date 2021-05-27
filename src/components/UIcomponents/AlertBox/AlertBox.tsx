import React, {useContext} from 'react'

import {Context, ContextType} from '../../../store/Provider'

export interface IAlertBoxProps {}

export default function AlertBox(props: IAlertBoxProps) {
  const context = useContext<ContextType>(Context)
  const {currentAlerts} = context
  return (
    <div>
      <tr>
        <th>Alerts</th>
      </tr>
      {currentAlerts.map(Alerts => (
        <tr>
          <td>{Alerts.name}</td>
        </tr>
      ))}
    </div>
  )
}
