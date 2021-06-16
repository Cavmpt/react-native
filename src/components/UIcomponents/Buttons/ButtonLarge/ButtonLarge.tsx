import * as React from 'react'

import './ButtonLarge.scss'

export interface IButtonLargeProps {
  color: string
  textValue: string
  onClick: () => void
}

export default function ButtonLarge(props: IButtonLargeProps): JSX.Element {
  const handleClick = () => {
    props.onClick()
  }

  const {textValue, color} = props

  return (
    <button
      className='ButtonLarge'
      onClick={() => handleClick()}
      type='button'
      style={{backgroundColor: color}}
    >
      <div>{textValue}</div>
    </button>
  )
}
