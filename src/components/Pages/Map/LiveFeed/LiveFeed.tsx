/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react'

import Skeleton from '../../../UIcomponents/Skeleton/Skeleton'
import StaticSkeleton from '../../../UIcomponents/Skeleton/StaticSkeleton/StaticSkeleton'

import './LiveFeed.scss'

export interface ILiveFeedProps {
  placeholder?: null
}

export default function LiveFeed(props: ILiveFeedProps): JSX.Element {
  const [loading, setLoading] = useState({state: false, style: 'none'})
  const [noFeed, setNoFeed] = useState(true)

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

  useEffect(() => {
    const loadingTimer = window.setTimeout(() => {
      setNoFeed(() => !noFeed)
    }, 3000)

    return () => window.clearTimeout(loadingTimer)
  }, [noFeed])

  return (
    <div className='live-feed-wrap'>
      {!loading.state && noFeed && (
        <Skeleton
          width={dimensions.width}
          height={dimensions.height}
          maxWidth={dimensions.maxWidth}
          maxHeight={dimensions.maxHeight}
        />
      )}

      {!loading.state && !noFeed && (
        <StaticSkeleton
          width={dimensions.width}
          height={dimensions.height}
          maxWidth={dimensions.maxWidth}
          maxHeight={dimensions.maxHeight}
          message='Live Feed Unavailable'
        />
      )}

      <img
        className='live-feed'
        alt='liveFeed'
        data-testid='liveFeed'
        style={{
          display: loading.style,
          width: dimensions.width,
          height: dimensions.height,
          maxHeight: dimensions.maxHeight,
          maxWidth: dimensions.maxWidth,
          minHeight: dimensions.minHeight,
          minWidth: dimensions.minWidth,
        }}
        src={process.env.REACT_APP_LIVE_FEED_URL}
        onLoad={() => setImage()}
      />
    </div>
  )
}
