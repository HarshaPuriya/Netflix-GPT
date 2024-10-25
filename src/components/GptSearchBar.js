import React from 'react'
import { lang } from '../utils/languageConstants'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {

    const langKey = useSelector((store) => store.config.lang)
  return (
    <div className='pt-[7%] flex justify-center'>
        <form className='bg-black w-1/2 grid grid-cols-12'>
            <input type='text' 
            placeholder={lang[langKey].gptSearchPlaceholder}
            className='m-4 p-2 col-span-9'/>
            <button 
            className='bg-red-700 rounded-md m-4 p-2 px-5 text-white col-span-3'>
                {lang[langKey].search}
            </button>
        </form>
    </div>
  )
}

export default GptSearchBar