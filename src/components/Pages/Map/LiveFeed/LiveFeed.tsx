import React, {useState} from 'react'

import Skeleton from '../../../UIcomponents/Skeleton/Skeleton'

import './LiveFeed.scss'

export interface ILiveFeedProps {
  placeholder?: null
}

export default function LiveFeed(props: ILiveFeedProps): JSX.Element {
  const [loading, setLoading] = useState({state: false, style: 'none'})
  const dimensions = {
    width: '60vw',
    height: '40vw',
    maxWidth: '996px',
    maxHeight: '668px',
    minHeight: '0px',
    minWidth: '0px',
  }

  const setImage = () => {
    setLoading({state: true, style: 'block'})
  }
  return (
    <div className='live-feed-wrap'>
      {!loading.state && (
        <Skeleton
          width={dimensions.width}
          height={dimensions.height}
          maxWidth={dimensions.maxWidth}
          maxHeight={dimensions.maxHeight}
        />
      )}
      <img
        className='live-feed'
        alt='liveFeed'
        style={{
          display: loading.style,
          width: dimensions.width,
          height: dimensions.height,
          maxHeight: dimensions.maxHeight,
          maxWidth: dimensions.maxWidth,
          minHeight: dimensions.minHeight,
          minWidth: dimensions.minWidth,
        }}
        src='http://192.82.150.11:8086/mjpg/video.mjpg'
        onLoad={() => setImage()}
      />
    </div>
  )
}
