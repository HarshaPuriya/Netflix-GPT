import { IMG_CDN_URL } from "../utils/constants";

// eslint-disable-next-line react/prop-types
const SearchMovie = ({poster}) => {

  if (!poster) return null;
  
  return (
    <div className="w-[200px] p-4 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300 mb-4">
      <img 
        src={IMG_CDN_URL + poster} 
        alt="Movie Card" 
        className="rounded-lg object-cover w-full h-full"
      />
    </div>
  );
}

export default SearchMovie;