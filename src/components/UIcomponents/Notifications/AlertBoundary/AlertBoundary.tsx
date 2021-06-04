import * as React from 'react'

export interface IAlertBoundaryProps {
  children: React.ReactNode
}

export default function AlertBoundary(props: IAlertBoundaryProps): JSX.Element {
  const {children} = props
  return (
    <div>
      <div>{children}</div>
    </div>
  )
}
