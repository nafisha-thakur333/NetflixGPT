import React, { useRef, useState } from 'react'
import lang from '../utils/languageConstants'
import { useDispatch, useSelector } from 'react-redux'
import {API_OPTIONS, GEMINI_KEY} from "../utils/constants"
import { GoogleGenerativeAI } from "@google/generative-ai";
import { addGptMovieResult } from '../utils/gptSlice';

const GPTSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const genAI = new GoogleGenerativeAI(GEMINI_KEY);

  // Search movie in TMDB
  const searchMovieTMDB = async(movie) =>{
    const data = await fetch("https://api.themoviedb.org/3/search/movie?query=" +
     movie + "&include_adult=false&language=en-US&page=1", API_OPTIONS);

    const json = await data.json();

    return json.results;
     
  }

  const handleGptSearchClick = async () => {
   //Make an API call to GPT API and get Movie Results
   try{
    const geminiQuery = "Act as a Movie Recommendation system and for the query" +searchText.current.value+ ".only give me name of 5 movies, comma separated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gya"; 
    const  model  =  genAI.getGenerativeModel({ model:  "gemini-pro" });
    const  result  =  await  model.generateContent(geminiQuery);
    const  response  =  await  result.response;
    const gptMovies = response.text().split(",");

    //For each movie, I will search TMDB API

    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
     //[Promis, Promise, Promise, Promise, Promise]

     const tmdbResults = await Promise.all(promiseArray);

     console.log(tmdbResults);

     //dispatch action
     dispatch(addGptMovieResult({movieNames : gptMovies, movieResults : tmdbResults}));
   }
   catch (error) {
    console.error('Error fetching GPT results:', error);
   }
  }

  return (
    <div className='pt-[10%] flex justify-center'>
        <form className='w-1/2 bg-black grid grid-cols-12'
        onSubmit={(e) => e.preventDefault()}>
            <input type='text' ref={searchText} className='p-4 m-4 col-span-9' placeholder={lang[langKey].gptSearchPlaceholder}/>
            <button className='py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3' 
            onClick={handleGptSearchClick}>{lang[langKey].search}</button>
        </form>
    </div>
  )
}

export default GPTSearchBar