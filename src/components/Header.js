import React, { useEffect } from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'
import { LOGO } from '../utils/constants';

const Header = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

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

  return (
    <div className='absolute bg-gradient-to-b from-black z-10 w-full flex justify-between'>
        <img 
        className="w-48 py-1 mx-32"
        src = {LOGO}
        alt='NetFlix logo'
        />
        <div className='flex m-4 font-bold text-white bg-red-600 px-4 rounded-md'>
        <button onClick={handleSignOut}>SignOut</button>
        </div>
    </div>
  )
}

export default Header;