import React from 'react'
import useMovieTrailer from '../hooks/useMovieTrailer';
import {useSelector} from 'react-redux'

const VideoBackGround = ({movieId}) => {
  const trailerVideo = useSelector(store => store.movies?.trailerVideo);
  
  useMovieTrailer(movieId);
  
  return (
    <div className="w-full">
        <iframe
         className = "w-full aspect-video" 
         src={"https://www.youtube.com/embed/" +trailerVideo?.key + "?&autoplay=1&mute=1"} 
         title="YouTube video player" 
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
         referrerPolicy="strict-origin-when-cross-origin" 
        >
        </iframe>
    </div>
  )
}

export default VideoBackGround