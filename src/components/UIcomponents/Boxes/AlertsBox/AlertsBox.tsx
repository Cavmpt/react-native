import React, {useContext} from 'react'

import './AlertsBox.scss'

import {Context, ContextType} from '../../../../store/Provider'

export interface IalertsBoxProps {
  placeholder?: null
}

export default function AlertsBox(props: IalertsBoxProps): JSX.Element {
  const context = useContext<ContextType>(Context)
  const {currentAlerts, setCurrentAnalyzedThreatOrAlert} = context
  return (
    <div className='alertsBox'>
      <tr className='alertsBox__header'>
        <th>Detected Alerts to be confirmed</th>
      </tr>
      {currentAlerts.length > 0 ? (
        currentAlerts.map(alerts => (
          <tr
            className='alertsBox__row'
            key={alerts.id}
            onClick={() =>
              setCurrentAnalyzedThreatOrAlert({
                id: alerts.id,
                message: alerts.message,
                value: alerts.value,
                type: 'alert',
              })
            }
          >
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
