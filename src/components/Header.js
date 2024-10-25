import React, { useEffect } from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'
import { LOGO } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';

const Header = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth).then(() => {
    }).catch((error) => {
      // An error happened.
    });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          const {uid, email, displayName, photoURL} = user;
          dispatch(addUser(
            {uid: uid, 
              email : email, 
              displayName : displayName, 
              photoURL : photoURL}
            ));  
            navigate("/browse");
        } 
        else {
          dispatch(removeUser());
          navigate("/");
        }
      });
      //unsubscribe when component unmount
      return () => unsubscribe();

}, []);

const handleGptSearchClick = () => {
  dispatch(toggleGptSearchView());
}

  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between'>
        <img className="w-48 py-1 mx-32"
        src = {LOGO}
        alt='NetFlix logo'
        />
      {user &&  (
        <div className='flex p-2'>
          <button className='p-2 m-5 pr-3 bg-purple-800 text-white'
          onClick={handleGptSearchClick}>
            🔍 GPT Search
          </button>
        <button className='flex m-5 p-2 font-bold text-white bg-red-500 px-4 rounded-md' onClick={handleSignOut}>SignOut</button>
        </div>
      )}
    </div>
  )
}

export default Header;