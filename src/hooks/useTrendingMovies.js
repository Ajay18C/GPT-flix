import { useDispatch } from "react-redux";
import { addTrendingMovies } from "../redux/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useTrendingMovies = () => {
    const dispatch = useDispatch();
    const getTendingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1',{method: 'GET', ...API_OPTIONS});
        const json = await data.json();
        dispatch(addTrendingMovies(json?.results));
    }

    useEffect(() => {
        getTendingMovies();
    }, []);
}

export default useTrendingMovies;