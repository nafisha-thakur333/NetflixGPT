import React, { useState, useRef} from 'react'
import Header from './Header'
import {checkValidData} from "../utils/validate"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import {auth} from "../utils/firebase"
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, seterrorMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm); 
  }

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef("");
  

  const handleButtonClick = () => {
    //Validate form data
   const message = checkValidData(email.current.value, password.current.value,name.current.value);
   seterrorMessage(message);
   
   if(message) return;
   
   if(!isSignInForm)
   {    //Sign Up 
        createUserWithEmailAndPassword(
        auth, 
        email.current.value,
        password.current.value)
        .then((userCredential) => {
            const user = userCredential.user;

            //update user
            updateProfile(user, {
                displayName: name.current.value, photoURL: "https://avatars.githubusercontent.com/u/49334348?v=4"
              }).then(() => {
                const {uid, email, displayName, photoURL} = auth.currentUser;
                dispatch(
                    addUser({
                        uid : uid, 
                        email : email,
                        displayName : displayName,
                        photoURL : photoURL
                    })
                );
                navigate("/browse");
              }).catch((error) => {
               seterrorMessage(error.message);
              });
            console.log(user);
            
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            seterrorMessage(errorCode + "-" +errorMessage);
        });
   }
   else{
        signInWithEmailAndPassword(
        auth, 
        email.current.value,
        password.current.value)
        .then((userCredential) => {
            // Sign in 
            const user = userCredential.user;
            console.log(user);
            navigate("/browse"); //navigate to main page
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            seterrorMessage(errorCode + "-" +errorMessage);
        });
   } 
  }
  
  return (
    <div>
     <Header/>
     <div className='absolute'>
     <img src="https://assets.nflxext.com/ffe/siteui/vlv3/826348c2-cdcb-42a0-bc11-a788478ba5a2/6d20b198-e7ab-4e9f-a1aa-666faa0298f9/IN-en-20240729-POP_SIGNUP_TWO_WEEKS-perspective_WEB_a67d8c9e-8121-4a74-98e4-8005eb2df227_large.jpg"
      alt="logo"/>
    </div>

    <form onSubmit={(e) => e.preventDefault()}
     className='w-4/12 p-12 text-white bg-black absolute my-24 mt-36 mx-auto right-0 left-0 bg-opacity-80'>
        
        <h1 className='font-bold text-3xl py-4'>
            {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
            <input
             ref = {name}
             type='text' 
             placeholder='Full Name' 
             className='p-4 my-2 w-full bg-gray-700 rounded-sm'
            />
        )}
        <input
         ref={email}
         type='text' 
         placeholder='Email address' 
         className='p-4 my-2 w-full bg-gray-700 rounded-sm'
        />
        <input 
         ref={password}
         type='password'
         placeholder='Password' 
         className='p-4 my-2 w-full bg-gray-700 rounded-sm'
        />

        <p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>
        <button 
         className='p-4 my-6 cursor-pointer bg-red-700 w-full rounded-lg' onClick={handleButtonClick}>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p 
         className='py-4 cursor-pointer' onClick={toggleSignInForm}>
           {isSignInForm ? "New to Netflix? Sign Up Now." : "Already Registered? Sign In Now."} 
        </p>
   
    </form>
    </div>
  )
}

export default Login