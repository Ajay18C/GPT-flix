import { useSelector } from "react-redux"
import MovieList from "./MovieList"


const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies);
  return movies?.nowPlayingMovies && (
    <div className="bg-black my-4">
      <div className="-mt-10 md:-mt-64 relative z-20 pl-2 md:pl-12">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
        <MovieList title={"Top Rated"} movies={movies.trendingMovies}/>
        <MovieList title={"Popular"} movies={movies.popularMovies}/>
        <MovieList title={"Upcoming"} movies={movies.upcomingMovies}/>
      </div>
    </div>
  )
}

export default SecondaryContainer
