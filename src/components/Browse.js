import React from 'react'
import Header from './Header'
import GPTSearch from './GPTSearch'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import usePopularMovies from '../hooks/usePopularMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import useUpcomingMovies from '../hooks/useUpcomingMovies'
import useTopRatedMovies from '../hooks/useTopRatedMovies'
import usePopularTVSeries from '../hooks/usePopularTVSeries'
import { useSelector } from 'react-redux'

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  usePopularTVSeries();
  
  return (
    <div>
      <Header />
      {
       showGptSearch ? (
       <GPTSearch/>
       ) : (
        <>
              <MainContainer />
              <SecondaryContainer/>
        </>
       )
      }
    </div>
  )
}

export default Browse