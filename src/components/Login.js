import React, { useState } from 'react'
import Header from './Header'
const Login = () => {
   

    const [isSignIn, setisSignIn] = useState(true);
    const togglehandler = ()=>{
        setisSignIn(!isSignIn);
    }

  return (
    <div className=''>
      <Header/>
      <div className=''>
          <img className= "absolute" src = "https://assets.nflxext.com/ffe/siteui/vlv3/0552717c-9d8c-47bd-9640-4f4efa2de663/537e2c5e-c750-4d4c-9f7a-e66fe93eb977/IN-en-20240701-POP_SIGNUP_TWO_WEEKS-perspective_WEB_b00eeb83-a7e8-4b5b-8ff7-86ed92c51caf_large.jpg" alt = "bg"/>
      </div>
     <div className='flex items-center justify-center h-screen'>
         <form className='relative w-4/12 mx-auto text-white bg-black bg-opacity-80 py-12 px-12 mt-6'>
               {isSignIn ? <h1 className='font-bold text-3xl'>Sign In</h1>:<h1 className='font-bold text-3xl'>Sign Up</h1>}
               {!isSignIn && <input type = "text" placeholder='Full Name' className='w-full mt-6 px-3 py-3 rounded-md bg-slate-600'/>}
               <input type = "text" placeholder='Email' className='w-full mt-6 px-3 py-3 rounded-md bg-slate-600'/>
               <input type="password" placeholder = "Password" className='w-full mt-6 px-3 py-3 rounded-md bg-slate-600 my-6'/>
               <button className='w-full bg-red-700 text-xl py-2 rounded-md hover:bg-red-800'>Sign In</button>
               <p className='mt-6'>New to Netflix? <a className='hover:underline cursor-pointer' onClick={togglehandler}>{isSignIn ? "Sign Up Now" : "Sign In Now"}</a></p>
      </form>
      </div>
    </div>
  )
}

export default Login
