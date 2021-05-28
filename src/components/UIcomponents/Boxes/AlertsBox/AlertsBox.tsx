import React, {useContext} from 'react'

import './AlertsBox.scss'

import {Context, ContextType} from '../../../../store/Provider'

export interface IThreatsBoxProps {
  placeholder?: any
}

export default function AlertsBox(props: IThreatsBoxProps): JSX.Element {
  const context = useContext<ContextType>(Context)
  const {currentAlerts} = context
  return (
    <div className='alertsBox'>
      <tr className='alertsBox__header'>
        <th>Detected Alerts</th>
      </tr>
      {currentAlerts.length > 1 ? (
        currentAlerts.map(alerts => (
          <tr className='alertsBox__row'>
            <td>{alerts.name}</td>
          </tr>
        ))
      ) : (
        <tr className='alertsBox__row'>
          <td>Currently no alerts present</td>
        </tr>
      )}
    </div>
  )
}
