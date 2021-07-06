import * as React from 'react'

import './StaticSkeleton.scss'

export interface ISkeletonProps {
  height: string
  width: string
  maxWidth: string
  maxHeight: string
  message: string
}

export default function Skeleton(props: ISkeletonProps): JSX.Element {
  const {height, width, maxWidth, maxHeight, message} = props

  return (
    <div
      className='static-skeleton'
      style={{height, width, maxHeight, maxWidth}}
    >
      <h1>{message}</h1>
    </div>
  )
}
