import {useEffect} from 'react'
import { API_OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addPopularTVSeries } from "../utils/moviesSlice"


const usePopularTVSeries = () => {
    //Fetch data from TMBD API and update store
    const dispatch = useDispatch();

    const getPopularTVSeries = async() =>{
     const data = await fetch('https://api.themoviedb.org/3/tv/popular?page=1', API_OPTIONS)
     const json = await data.json();
     dispatch(addPopularTVSeries(json.results));
    }
  
    useEffect(() => {
        getPopularTVSeries();
    },[]);
}

export default usePopularTVSeries;