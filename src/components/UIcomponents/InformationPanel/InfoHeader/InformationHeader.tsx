import React from 'react'

import './InformationHeader.scss'

export interface IInformationHeaderProps {
  placeholder?: null
}

export default function InformationHeader(
  props: IInformationHeaderProps,
): JSX.Element {
  return (
    <div className='panel-header'>
      <h1>Drone 1</h1>
    </div>
  )
}
