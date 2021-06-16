import * as React from 'react'

import './ButtonSquare.scss'

export interface IButtonSquareProps {
  placeholder?: null
  children: React.ReactNode
}

export default function ButtonSquare(props: IButtonSquareProps): JSX.Element {
  const {children} = props
  return <div className='ButtonSquare'>{children}</div>
}
