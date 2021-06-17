import React from 'react'

import './InformationInfo.scss'

export interface IInformationInfoProps {
  placeholder?: null
}

export default function InformationInfo(
  props: IInformationInfoProps,
): JSX.Element {
  return (
    <div className='panel-info'>
      <ul>
        <li>
          <h4>Name</h4>
          <h2>Drone 1</h2>
        </li>
        <li>
          <h4>Operator</h4>
          <h2>XGuardLabs</h2>
        </li>
        <li>
          <h4>Location</h4>
          <h2>Montreal</h2>
        </li>
        <li>
          <h4>Elevation</h4>
          <h2>110m</h2>
        </li>
        <li>
          <h4>Coordination</h4>
          <h2>52N 58E</h2>
        </li>
        <li>
          <h4>Time zone</h4>
          <h2>UTC +1</h2>
        </li>
      </ul>
    </div>
  )
}
