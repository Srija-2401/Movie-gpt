import React, { useState,useRef } from 'react'
import Header from './Header'
import { validate } from '../utils/validation';
import {auth} from '../utils/firebase'
import { createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Login = ({isAuthenticated}) => {
   const [errorMessage,seterrorMessage] = useState(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const navigate = useNavigate();

    const [isSignIn, setisSignIn] = useState(true);
    const togglehandler = ()=>{
        setisSignIn(!isSignIn);
    }
    const handlesubmit = ()=>{
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
      const res =  validate(email,password);
      seterrorMessage(res);
      if(errorMessage) return;
      if(!isSignIn){
        //Signup logic
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(auth.currentUser, {
          displayName: emailRef.current.value, photoURL: "https://media.licdn.com/dms/image/D5603AQEqi1jjRtR7KA/profile-displayphoto-shrink_200_200/0/1711812547853?e=2147483647&v=beta&t=xlXdRW1ek73W77EtO2HZX9mYhAy0u0iGR5QRgXPKvFE"
        }).then(() => {
          // Profile updated!
          
        }).catch((error) => {
          // An error occurred
          // ...
        }); 
        navigate('/browse');       
        
        })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
         seterrorMessage(errorMessage);
        });
    }else{
        //Sign In logic
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        updateProfile(auth.currentUser, {
          displayName: {email}, photoURL: "https://media.licdn.com/dms/image/D5603AQEqi1jjRtR7KA/profile-displayphoto-shrink_200_200/0/1711812547853?e=2147483647&v=beta&t=xlXdRW1ek73W77EtO2HZX9mYhAy0u0iGR5QRgXPKvFE"
        }).then(() => {
          // Profile updated!
         
        }).catch((error) => {
          // An error occurred
          // ...
        });
        navigate("/browse");
        })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        {errorMessage.includes("invalid-credential") && seterrorMessage("User not found")};
    });    
    }}

  return (
    <div className=''>
      <Header isAuthenticated={isAuthenticated} className="absolute"/>
      <div className=''>
          <img className= "absolute" src = "https://assets.nflxext.com/ffe/siteui/vlv3/0552717c-9d8c-47bd-9640-4f4efa2de663/537e2c5e-c750-4d4c-9f7a-e66fe93eb977/IN-en-20240701-POP_SIGNUP_TWO_WEEKS-perspective_WEB_b00eeb83-a7e8-4b5b-8ff7-86ed92c51caf_large.jpg" alt = "bg"/>
      </div>
     <div className='flex items-center justify-center h-screen'>
        <form onSubmit={(e)=>e.preventDefault()} className='relative w-4/12 mx-auto text-white bg-black bg-opacity-80 py-12 px-12 mt-6'>
               {isSignIn ? <h1 className='font-bold text-3xl'>Sign In</h1>:<h1 className='font-bold text-3xl'>Sign Up</h1>}
               {!isSignIn && <input type = "text" placeholder='Full Name' className='w-full mt-6 px-3 py-3 rounded-md bg-slate-600'/>}
               <input ref = {emailRef} type = "text" placeholder='Email' className='w-full mt-6 px-3 py-3 rounded-md bg-slate-600'/>
               <input ref = {passwordRef} type="password" placeholder = "Password" className='w-full mt-6 px-3 py-3 rounded-md bg-slate-600 my-6'/>
               <p className='mb-3 text-red-500'>{errorMessage}</p>
               <button onClick={handlesubmit}
               className='w-full bg-red-700 text-xl py-2 rounded-md hover:bg-red-800'>{isSignIn ? "Sign In" : "Sign Up" }</button>
               <p className='mt-6'>New to Netflix? <a className='hover:underline cursor-pointer' onClick={togglehandler}>{isSignIn ? "Sign Up Now" : "Sign In Now"}</a></p>
        </form>
      </div>
    </div>
  )
}

export default Login
