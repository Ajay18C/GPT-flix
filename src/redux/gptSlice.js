import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        showGptSearch: false,
        movieResult: [],
        movies: []
    },
    reducers: {
        toggleGptSearch : (state) => {
            state.showGptSearch = !state.showGptSearch;
        },
        addGptMovieResult: (state, action) => {
            state.movieResult = action.payload.movieResult;
            state.movies = action.payload.movies;
        }
    }
})

export const { toggleGptSearch, addGptMovieResult }  = gptSlice.actions;


export default gptSlice.reducer;