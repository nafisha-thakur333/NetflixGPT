import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-5xl font-bold'>{title}</h1>
        <p className='text-lg py-6 w-1/4'>{overview}</p>
        <div className='inline-flex'>
          <button className='bg-white px-4 p-4 text-xl py-0 flex justify-center items-center rounded-md hover:bg-opacity-80'>
            <div className='inline-flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="60 -900 840 800" width="40px" fill="#000000">
                <path d="M385-243v-474l237 237-237 237Z"/></svg>
                <span className='text-black text-xl px-0'>Play</span>
                </div>  
           </button>
          <button  className='bg-gray-500 mx-2 px-4 p-4 text-xl bg-opacity-50 text-white py-0 flex justify-center items-center rounded-md hover:bg-opacity-80'>
             <div className='inline-flex items-center'> 
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="60 -900 840 800" width="40px" fill="#ffffff">
                <path d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
                </svg>
                <span className='text-white text-xl px-0'>More Info</span>
             </div>
          </button>
        </div>
        
    </div>
  )
}

export default VideoTitle