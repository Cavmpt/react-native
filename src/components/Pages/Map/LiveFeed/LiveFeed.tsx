/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react'
import videojs from 'video.js'
import 'video.js/dist/video-js.css'

import {VideoJS} from '../../../UIcomponents/Video/Video'
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

  const videoJsOptions = {
    // lookup the options in the docs for more options
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: 'http://localhost:8000/home/index.m3u8',
        type: 'application/x-mpegURL',
      },
    ],
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
      <VideoJS options={videoJsOptions} />
    </div>
  )
}
