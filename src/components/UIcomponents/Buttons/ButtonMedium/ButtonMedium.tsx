import * as React from 'react'

export interface IButtonMediumProps {
  color: string
  textValue: string
  onClick: () => void
}

export default function ButtonMedium(props: IButtonMediumProps): JSX.Element {
  const handleClick = () => {
    props.onClick()
  }

  const {textValue} = props

  return (
    <button className='ButtonLarge' onClick={() => handleClick()} type='button'>
      <div>{textValue}</div>
    </button>
  )
}
