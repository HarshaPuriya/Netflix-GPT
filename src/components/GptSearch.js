import React from 'react'
import GptSearchBar from './GptSearchBar'
import { BG_URL } from '../utils/constants'
const GptSearch = () => {
  return (
    <div>
    <div className='w-full absolute -z-10'>
        <img className='bg-transparent'
        src={BG_URL}
        alt="backgroundImage"/>
    </div>
    <div>
      <GptSearchBar/>
    </div>
    </div>
  )
}

export default GptSearch