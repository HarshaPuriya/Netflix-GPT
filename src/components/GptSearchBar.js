import React, { useRef, useState } from 'react'
import { lang } from '../utils/languageConstants'
import { useSelector } from 'react-redux'
import NoMovie from './noMovie'
import SearchMovie from './searchMovie'
import { API_OPTIONS } from '../utils/constants'

const GptSearchBar = () => {

const langKey = useSelector((store) => store.config.lang);
const searchText = useRef(null);
const [data, setData]= useState(null);



const handleGptSearchClick = async () => {
  // Make an API call to GPT API and get movies results
    const value = searchText.current.value;
    console.log(value);

    const getMovie = await fetch(`https://api.themoviedb.org/3/search/movie?query=${value}&include_adult=true&language=en-US&page=1`, API_OPTIONS);
    const json = await getMovie.json();
    setData(json.results);
    // For each movie 
    console.log(json.results);
    }
  return (
    <div className='pt-[5%] flex flex-col items-center min-h-screen'>
        <form className='bg-black lg:w-1/2 w-full md:3/4 grid grid-cols-12'
        onSubmit={(e) => e.preventDefault()}>
            <input  
            ref={searchText}
            type='text'
            placeholder={lang[langKey].gptSearchPlaceholder}
            className='m-4 p-2 col-span-9'/>
            <button 
            className='bg-red-700 rounded-md m-4 p-2 px-5 text-white col-span-3'
            onClick={handleGptSearchClick}
            >
                {lang[langKey].search}
            </button>
        </form>
        <div className="mt-10 flex flex-wrap justify-center gap-6">
        
      
        {data === null ? ( <NoMovie/>) :
          data.map((movie) => {
        
        const poster_path = movie.poster_path ;

        console.log(poster_path);
        
        return <SearchMovie key={movie.id} poster={poster_path} />;
      })}
    </div>
    </div>
  )
}

export default GptSearchBar