import React, { useEffect } from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'

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
    onAuthStateChanged(auth, (user) => {
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

}, []);

  return (
    <div className='absolute bg-gradient-to-b from-black z-10 w-full flex justify-between'>
        <img 
        className="w-48 py-1 mx-32"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt='NetFlix logo'
        />
        <div className='flex m-4 font-bold'>
        <button onClick={handleSignOut}>SignOut</button>
        </div>
    </div>
  )
}

export default Header;