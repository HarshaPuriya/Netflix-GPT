import React, { useEffect } from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';
const Header = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user); 
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch)

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

const handleLanguageChange =(e)=> {
  dispatch(changeLanguage(e.target.value));
}

  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between'>
        <img className="w-48 py-1 mx-32"
        src = {LOGO}
        alt='NetFlix logo'
        />
      {user &&  (
        <div className='flex p-2'>
          {showGptSearch && (<select className='p-2 m-5 bg-gray-900 text-white' onChange={handleLanguageChange}>
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>
            ))}
          </select>
          )}
          <button className='p-2 m-5 pr-3 bg-purple-800 text-white'
          onClick={handleGptSearchClick}>
            {showGptSearch ? "HomePage" : "🔍 GPT Search"}
          </button>
        <button className='flex m-5 p-2 font-bold text-white bg-red-500 px-4 rounded-md' onClick={handleSignOut}>SignOut</button>
        </div>
      )}
    </div>
  )
}

export default Header;