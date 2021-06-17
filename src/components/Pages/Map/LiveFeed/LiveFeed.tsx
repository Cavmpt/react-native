import * as React from 'react'

import './LiveFeed.scss'

export interface ILiveFeedProps {
  placeholder?: null
}

export default function LiveFeed(props: ILiveFeedProps): JSX.Element {
  return (
    <div className='live-feed-page'>
      <img
        className='live-feed-page__live-feed'
        alt='liveFeed'
        src='http://209.206.162.230/mjpg/video.mjpg'
      />
    </div>
  )
}
