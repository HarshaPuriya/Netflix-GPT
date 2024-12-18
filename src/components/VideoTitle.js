import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video pt-[15%] px-24 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-5xl font-bold'>{title}</h1>
        <p className='py-5 text-lg w-1/4'>{overview}</p>
        <div className=''>
            <button className='mx-2 bg-white text-black p-4 px-7 text-lg rounded-md hover:bg-opacity-80'>▶️ Play</button>
            <button className='mx-2 bg-gray-400 text-white p-4 px-7 text-lg bg-opacity-50 rounded-md'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle