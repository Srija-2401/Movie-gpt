import React, { useEffect, useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './Login';
import Browse from './Browse';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
const Body = () => {
  const [isAuthenticated,setIsAuthenticated] = useState(false);
    const dispatch = useDispatch();
    const appRouter = createBrowserRouter([
    {   
        path : '/',
        element : <Login isAuthenticated={isAuthenticated}/>
    },{
        path : '/browse',
        element : <Browse isAuthenticated={isAuthenticated}/>
    }
  ]);

  useEffect=()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        //sign in
        const {uid,email,displayName,photoURL} = auth.currentUser;
        dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
        setIsAuthenticated(true);
      } else {
        //sign out
        dispatch(removeUser());
        setIsAuthenticated(false);
      }
    });
  }
  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body
