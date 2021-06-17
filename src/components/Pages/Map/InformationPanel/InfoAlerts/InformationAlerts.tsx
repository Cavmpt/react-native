import React from 'react'

import './InformationAlerts.scss'

export interface IInformationAlertsProps {
  placeholder?: null
}

export default function InformationAlerts(
  props: IInformationAlertsProps,
): JSX.Element {
  return (
    <div className='panel-alerts'>
      <div className='panel-alerts__hazardous'>
        <h1>
          25 <i className='fas fa-exclamation-circle' />
        </h1>
        <h4>Hazardous</h4>
      </div>
      <div className='panel-alerts__interruptions'>
        <h1>
          35
          <i className='fas fa-exclamation-triangle' />
        </h1>
        <h4>Interruptions</h4>
      </div>

      <div className='panel-alerts__unidentified'>
        <h1>
          9
          <i className='fas fa-question-circle' />
        </h1>
        <h4>Unidentified</h4>
      </div>
      <div className='panel-alerts__snapshots'>
        <h1>
          43
          <i className='fas fa-dot-circle' />
        </h1>
        <h4>Data snapshots</h4>
      </div>
    </div>
  )
}
