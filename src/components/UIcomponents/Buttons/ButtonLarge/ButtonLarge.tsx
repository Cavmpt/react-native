import * as React from 'react'

import './ButtonLarge.scss'

export interface IButtonLargeProps {
  textValue: string
  onClick: () => void
}

export default function ButtonLarge(props: IButtonLargeProps): JSX.Element {
  const handleClick = () => {
    props.onClick()
  }

  const {textValue} = props

  return (
    <button className='ButtonLarge' onClick={() => handleClick()} type='button'>
      <div data-testid='button-large'>{textValue}</div>
    </button>
  )
}
