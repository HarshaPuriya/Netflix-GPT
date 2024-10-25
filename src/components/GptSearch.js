import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { BG_URL } from '../utils/constants'
const GptSearch = () => {
  return (
    <div>
    <div className='absolute -z-10'>
        <img className='bg-transparent'
        src={BG_URL}
        alt="backgroundImage"/>
    </div>
    <div>
      <GptSearchBar/>
      <GptMovieSuggestion/>
    </div>
    </div>
  )
}

export default GptSearch