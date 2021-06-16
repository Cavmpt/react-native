import * as React from 'react'

import './LiveFeed.scss'

export interface ILiveFeedProps {
  placeholder?: null
}

export function LiveFeed(props: ILiveFeedProps): JSX.Element {
  return (
    <img
      className='container__live-feed'
      alt='liveFeed'
      src='http://209.206.162.230/mjpg/video.mjpg'
    />
  )
}
