import * as React from 'react'

import './StatusSection.scss'

export interface IStatusDisplayProps {
  placeholder?: null
}

export default function StatusDisplay(props: IStatusDisplayProps): JSX.Element {
  return (
    <div>
      <div className='dot-status' />
    </div>
  )
}
