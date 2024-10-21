import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movideId) => {
    const dispatch = useDispatch();
    const getMovideVideos = async ()=> {
        const data = await fetch("https://api.themoviedb.org/3/movie/"
            +movideId+
            "/videos?language=en-US", API_OPTIONS)
        const json = await data.json();

        const filterData = json.results.filter((video) => video.type === "Trailer");
        const trailer = filterData.length ? filterData[0] : json.results[0];
        dispatch(addTrailerVideo(trailer))
    }

    useEffect(()=> {
        getMovideVideos();
    }, []);
}

export default useMovieTrailer;