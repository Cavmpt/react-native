import React, {useState} from 'react'

import Skeleton from '../../../UIcomponents/Skeleton/Skeleton'

import './LiveFeed.scss'

export interface ILiveFeedProps {
  placeholder?: null
}

export default function LiveFeed(props: ILiveFeedProps): JSX.Element {
  const [loading, setLoading] = useState({state: false, style: 'none'})
  const dimenstion = {width: '60rem', height: '25rem'}
  const setImage = () => {
    setLoading({state: true, style: 'block'})
  }
  return (
    <div className='live-feed-wrap'>
      {!loading.state && (
        <Skeleton width={dimenstion.width} height={dimenstion.height} />
      )}
      <img
        className='live-feed'
        alt='liveFeed'
        style={{
          display: loading.style,
          width: dimenstion.width,
          height: dimenstion.height,
        }}
        src='http://209.206.162.230/mjpg/video.mjpg'
        onLoad={() => setImage()}
      />
    </div>
  )
}