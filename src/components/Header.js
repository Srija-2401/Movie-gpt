import React from 'react'
import { FaRegUserCircle } from "react-icons/fa";
import { useLocation, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useSelector } from 'react-redux';
const Header = ({isAuthenticated}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const user = useSelector((store)=>store.user);
  const handleSignOut = ()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/");
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
  }
  return (
    <>
    <div className='relative'>
    <div className='absolute flex justify-between bg-gradient-to-b from-black px-8 py-2 w-full z-50'>
        <img className = "w-52" src = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt='logo'/> 
        {user && location.pathname==="/browse" &&(
      <div className='flex items-center gap-10'>

        <FaRegUserCircle className='rounded-full text-4xl'/>
         <button onClick={handleSignOut} className='bg-red-700 px-5 py-1 font-semibold hover:bg-red-800 hover:scale-105  rounded-md text-xl text-white'>Sign Out</button>
      </div>)}
    </div>
    
    </div>
    </>
  )
}

export default Header
