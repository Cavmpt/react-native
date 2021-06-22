import React, {useContext} from 'react'

import './AlertsBox.scss'

import {Context, ContextType} from '../../../../store/Provider'

export interface IThreatsBoxProps {
  placeholder?: null
}

export default function AlertsBox(props: IThreatsBoxProps): JSX.Element {
  const context = useContext<ContextType>(Context)
  const {currentAlerts} = context
  return (
    <div className='alertsBox'>
      <tr className='alertsBox__header'>
        <th>Detected Alerts to be confirmed</th>
      </tr>
      {currentAlerts.length > 0 ? (
        currentAlerts.map(alerts => (
          <tr className='alertsBox__row'>
            <td data-testid='alertBox-td'>
              <i className='fas fa-question-circle' />
              {alerts.message}
            </td>
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
