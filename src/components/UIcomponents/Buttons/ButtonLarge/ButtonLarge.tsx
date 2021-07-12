import * as React from 'react'

import './ButtonLarge.scss'

export interface IButtonLargeProps {
  textValue: string
  onClick: () => void
  disable: boolean
}

export default function ButtonLarge(props: IButtonLargeProps): JSX.Element {
  const handleClick = () => {
    props.onClick()
  }

  const {textValue, disable} = props

  return (
    /**
     * DISABLED ATTRIBUTE WILL RETURN FALSE ON EMPTY STRING
     */
    <button
      className='ButtonLarge'
      onClick={() => handleClick()}
      type='button'
      disabled={disable}
      data-testid='button-large'
    >
      <div>{textValue}</div>
    </button>
  )
}
