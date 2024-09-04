import React from 'react'
import GPTMovieSuggestions from './GPTMovieSuggestions'
import GPTSearchBar from './GPTSearchBar'
import {Netflix_BG_IMG} from '../utils/constants'

const GPTSearch = () => {
  return (
    <div>
        <div className='fixed -z-10'>
          <img src={Netflix_BG_IMG}
            alt="logo"/>
        </div>

      <GPTSearchBar/>
      <GPTMovieSuggestions/>
    </div>
  )
}

export default GPTSearch