import * as React from 'react'

import './ErrorBoundary.scss'

export interface IErrorBoundaProps {
  children: React.ReactNode
  error: string
}

export default function ErrorBounda(props: IErrorBoundaProps): JSX.Element {
  const {error, children} = props
  return (
    <div className='error'>
      <div className='error__message'>{error}</div>
      {children}
    </div>
  )
}
