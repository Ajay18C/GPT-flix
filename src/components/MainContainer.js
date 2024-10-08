import { useSelector } from "react-redux"
import VideoTitle from "./VideoTitle"
import VideoBackground from "./VideoBackground"
import { getRandomIndex } from "../utils/random";

const MainContainer = () => {
    const movie = useSelector(store => store.movies?.nowPlayingMovies);
    if (!movie) return;
    const idx = getRandomIndex(0,movie.length);
    const mainMovie = movie[idx];
    const {original_title, overview, id} = mainMovie;
  return (
    <div className="pt-[30%] md:pt-0 bg-black">
      <VideoTitle title={original_title} overview={overview}/>
      <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer
