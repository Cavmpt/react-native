import * as React from 'react'

import './Skeleton.scss'

export interface ISkeletonProps {
  height: string
  width: string
  maxWidth: string
  maxHeight: string
}

export default function Skeleton(props: ISkeletonProps): JSX.Element {
  const {height, width, maxWidth, maxHeight} = props

  return (
    <div className='skeleton' style={{height, width, maxHeight, maxWidth}} />
  )
}
