import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValiddata } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../utils/firebase";
import {updateProfile } from "firebase/auth";
import { LOGO } from '../utils/constants';


const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);


  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const message = checkValiddata(email.current.value, password.current.value);
    setErrorMessage(message);

    if(message) return;

    if(!isSignInForm) {
      // Signed up
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
          }).then(() => {
            
          }).catch((error) => {
            setErrorMessage(error.message);
          });
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
    
        });

    }
    else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
       // Signed in 
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });

    }

  }

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }
  return (
    <div>
    <Header/>
    <div className='absolute'>
        <img className='bg-transparent'
        src="https://assets.nflxext.com/ffe/siteui/vlv3/f272782d-cf96-4988-a675-6db2afd165e0/web/IN-en-20241008-TRIFECTA-perspective_b28b640f-cee0-426b-ac3a-7c000d3b41b7_small.jpg"
        alt="backgroundImage"/>
    </div>
    <form onSubmit={(e)=> e.preventDefault()} className='mx-auto p-12 bg-black bg-opacity-80 w-3/12 absolute my-24 right-0 left-0'>
        <h1 className=' m-2 text-3xl font-bold text-white py-2'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && (
          <input
          ref={name}
          type='text'
          placeholder='Full Name'
          className='bg-gray-900 text-white p-2 m-2 rounded-sm w-full'
          />
        )}
        
        <input 
        ref={email}
        type='text' 
        placeholder='Email Address' 
        className='bg-gray-900 text-white p-2 m-2 rounded-sm w-full'
        />
        <input 
        ref={password}
        type='password' 
        placeholder='Password' 
        className='bg-gray-900 p-2 m-2 rounded-sm w-full'
        />
        <p className='text-red-500 font-bold text-lg p-2'>{errorMessage}</p>
        <button 
        className='my-4 p-2 m-2 bg-red-700 rounded-sm w-full text-white'
        onClick={handleButtonClick}
        >{isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p 
        className='text-white p-2 m-1' 
        onClick={toggleSignInForm}>
          {isSignInForm ? "New to Netflix ? Sign Up Now" : "Already Registered Sign In Now"}
        </p>
    </form>
    </div>    
  )
}

export default Login