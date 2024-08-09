import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name : "movies",
    initialState : {
        nowPlayingMovies : null,
        popularMovies : null,
        trailerVideo : null,
        topRatedMovies : null,
        upcomingMovies : null,
        popularTVSeries : null,
    },

    reducers : {
        addNowPlayingMovies : (state, action) =>{
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies : (state, action) =>{
            state.popularMovies = action.payload;
        },
        addTopRatedMovies : (state,action) => {
            state.topRatedMovies = action.payload;
        },
        addUpcomingMovies : (state, action) => {
            state.upcomingMovies = action.payload;
        },
        addPopularTVSeries : (state, action) => {
            state.popularTVSeries = action.payload;
        },
        addTrailerVideo : (state, action) =>{
            state.trailerVideo = action.payload;
        }
    }
});

export default moviesSlice.reducer;

export const {addNowPlayingMovies,addTrailerVideo, addPopularMovies, addTopRatedMovies, addUpcomingMovies, addPopularTVSeries} = moviesSlice.actions;