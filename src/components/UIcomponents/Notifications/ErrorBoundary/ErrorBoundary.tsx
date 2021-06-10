import * as React from 'react'

import 'ErrorBoundary.scss'

export interface IErrorBoundaProps {
  error: string
}

export default function ErrorBounda(props: IErrorBoundaProps): JSX.Element {
  const {error} = props
  return (
    <div>
      <div>{error}</div>
    </div>
  )
}
