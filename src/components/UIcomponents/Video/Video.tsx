/* eslint-disable */
/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react'
import videojs from 'video.js'

export interface IVideojsProps {
  options: any
  playing: any
}

export const VideoJS = (props: IVideojsProps) => {
  const videoRef = React.useRef(null)
  const {options} = props

  // This seperate functional component fixes the removal of the videoelement
  // from the DOM when calling the dispose() method on a player
  const VideoHtml = (props: any) => (
    <div data-vjs-player>
      <video ref={videoRef} className='video-js vjs-big-play-centered' />
    </div>
  )

  React.useEffect(() => {
    const videoElement = videoRef.current
    let player: any
    if (videoElement) {
      player = videojs(videoElement, options, () => {
        props.playing()
      })
    }
    return () => {
      if (player) {
        player.dispose()
      }
    }
  }, [options])

  return <VideoHtml />
}
export default VideoJS
