import * as React from 'react'

import './Skeleton.scss'

export interface ISkeletonProps {
  height: string
  width: string
}

export default function Skeleton(props: ISkeletonProps): JSX.Element {
  const {height, width} = props
  return <div className='skeleton' style={{height, width}} />
}
