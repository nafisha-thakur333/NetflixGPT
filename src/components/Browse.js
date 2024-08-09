import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import usePopularMovies from '../hooks/usePopularMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import useUpcomingMovies from '../hooks/useUpcomingMovies'
import useTopRatedMovies from '../hooks/useTopRatedMovies'
import usePopularTVSeries from '../hooks/usePopularTVSeries'

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  usePopularTVSeries();
  
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer/>
    </div>
  )
}

export default Browse