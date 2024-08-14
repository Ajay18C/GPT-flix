import React, { useRef } from 'react'
import lang from '../utils/languageConstants'
import { useDispatch, useSelector } from 'react-redux'
import groq from '../utils/openai';
import { API_OPTIONS } from '../utils/constants';
import { addGptMovieResult } from '../redux/gptSlice';

const GptSearchBar = () => {
  const language = useSelector(store => store.config.language);
  const dispatch = useDispatch();
  const searchText = useRef(null);
  const searchMovieTMDB = async (movieName) => {
    const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movieName}`,{method: 'GET', ...API_OPTIONS});
    const json = await data.json();
    return json.results;
  }
  const handleGptSearch = async () => {
    const gptQuery = "Act as a Movie Recommendation system and suggest some movies for the query " + searchText.current.value + " only give me names of 5 movies in one line, don't gave anything except movie names, comma seperated like the example result given ahead. Example Result: movie1, movie2, movie3, movie4, movie5";
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: gptQuery,
        },
      ],
      model: "llama-3.1-8b-instant",
    });
    const gptMovies = chatCompletion.choices[0]?.message?.content.split(',') || [];
    const promiseArray = gptMovies.map(movie => searchMovieTMDB(movie));
    const results = await Promise.all(promiseArray);
    dispatch(addGptMovieResult({movieResult: results, movies: gptMovies}));
  }
  return (
    <div className='pt-[35%] md:pt-[10%] flex justify-center'>
        <form className='bg-black w-full md:w-1/2 grid grid-cols-12' onSubmit={(e) => e.preventDefault()}>
            <input ref={searchText} type='text' className='p-4 m-4 col-span-9' placeholder={lang[language].gptSearchPlaceholder}/>
            <button onClick={handleGptSearch} className='py-2 m-4 px-4 bg-red-500 text-white rounded-lg col-span-3'>{lang[language].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar