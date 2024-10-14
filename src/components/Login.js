import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);

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
    <form className='mx-auto p-12 bg-black bg-opacity-80 w-3/12 absolute my-24 right-0 left-0'>
        <h1 className=' m-2 text-3xl font-bold text-white py-2'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && (
          <input
          type='text'
          placeholder='Full Name'
          className='bg-gray-900 text-white p-2 m-2 rounded-sm w-full'
          />
        )}
        
        <input 
        type='text' 
        placeholder='Email Address' 
        className='bg-gray-900 text-white p-2 m-2 rounded-sm w-full'
        />
        <input 
        type='password' 
        placeholder='Password' 
        className='bg-gray-900 p-2 m-2 rounded-sm w-full'
        />
        <button 
        className='my-4 p-2 m-2 bg-red-700 rounded-sm w-full text-white'>{isSignInForm ? "Sign In" : "Sign Up"}
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