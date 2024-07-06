import React from 'react'

const Header = () => {
  return (
    <>
    <div className='absolute bg-gradient-to-b from-black px-8 py-2 w-full z-50'>
      <div>
        <img className = "w-52" src = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt='logo'/>
      </div>
      {/* <form className='w-4/12 mx-auto text-white bg-black bg-opacity-70 py-12 px-12 my-10'>
      <h1 className='font-bold text-3xl'>Sign In</h1>
        <input type = "text" placeholder='Email' className='w-full mt-6 px-3 py-3 rounded-md bg-slate-600'/>
        <input type="password" placeholder = "Password" className='w-full mt-6 px-3 py-3 rounded-md bg-slate-600 my-6'/>
        <button className='w-full bg-red-700 text-xl py-2 rounded-md'>Sign In</button>
        <p className='mt-6'>New to Netflix? <a className='hover:underline cursor-pointer'>Register Now</a></p>
      </form> */}
    </div>
    </>
  )
}

export default Header
