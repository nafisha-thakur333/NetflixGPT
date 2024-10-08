import React from 'react'
import {auth} from '../utils/firebase'
import {signOut} from "firebase/auth"
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { addUser, removeUser } from '../utils/userSlice'
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constants'
import {toggleGptSearchView} from '../utils/gptSlice'
import {changeLanguage} from '../utils/configSlice'

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignout = () => {
    signOut(auth).then(() => {}).catch((error) => {
      navigate("/error");
      console.log("Some error occured " +error);
    });
  }
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const {uid, email, displayName, photoURL} = user;
        dispatch(
          addUser({
            uid : uid,
            email : email,
            displayName : displayName,
            photoURL : photoURL
          })
        );
        navigate("/browse")
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/")
      }
    });  
    
    //unsubscribe when component unmounts
    return () => unsubscribe();
  },[])

  const handleGPTSearchClick = () => {
    //Toggle GPT Search button
    dispatch(toggleGptSearchView());
  }

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  }

  return (
    <div className='absolute w-full px-8 py-2 bg-gradient-to-b from-black fr z-10 flex justify-between overflow-x-hidden'>
      <img
      className='w-44'
      src={LOGO}
      alt="logo"/>
      {user && (<div className='flex p-2'>

        {showGptSearch && (
          <select className='p-2 m-2 bg-gray-900 text-white' onChange={handleLanguageChange}>
            {SUPPORTED_LANGUAGES.map(
              (lang) => (<option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)
            )}
          </select>
        )}

        <button
         className='font-bold text-white bg-red-600 py-2 px-4 mx-4 my-2 rounded'
         onClick={handleGPTSearchClick}>
         {showGptSearch ? "Home" : "GPT Search"}
         </button>

        <img
         className='w-12 h-12'
         src={user?.photoURL}
         alt="usericon"
        />

        <button
         className='font-bold text-white p-2'
         onClick={handleSignout}
        >Sign Out</button>
      </div>)
     }
    </div>
  )
}

export default Header