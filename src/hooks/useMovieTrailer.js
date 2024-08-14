import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailer } from "../redux/movieSlice";

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();
    const getMovievideos = async () => {
        const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        { method: "GET", ...API_OPTIONS }
        );
        const json = await data.json();
        const filterData = json?.results.filter((vid) => vid.type === "Trailer");
        const trailer = filterData.length !== 0 ? filterData[0] : json?.results[0];
        dispatch(addTrailer(trailer));
    };
    useEffect(() => {
        getMovievideos();
    }, []);
}

export default useMovieTrailer;