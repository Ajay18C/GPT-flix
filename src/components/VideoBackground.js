import useMovieTrailer from "../hooks/useMovieTrailer";
import { useSelector } from "react-redux";


const VideoBackground = ({ movieId }) => {
  useMovieTrailer(movieId);
  const trailer = useSelector(store => store.movies.trailerVideo);
  return (
    <div className="">
      <iframe className="w-full aspect-video"
        src={`https://www.youtube.com/embed/${trailer?.key}?&autoplay=1&mute=1&controls=0&rel=0&iv_load_policy=3&showinfo=0&modestbranding=1&loop=1&playlist=${trailer?.key}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>
  );
};

export default VideoBackground;
