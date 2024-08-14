import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from "./MovieList"


const GptMovieSuggestion = () => {
  const {movieResult, movies} = useSelector(store => store.gpt);
  if(!movies) return null;
  return (
    <div className='p-4 mt-60 bg-black text-white opacity-90'>
      <div className=''>
        {movies.map((movie,idx) => <MovieList key={movie} title={movie} movies={movieResult[idx]} />)}
      </div>
    </div>
  )
}

export default GptMovieSuggestion