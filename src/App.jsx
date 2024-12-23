import { useState } from 'react'
import { useDispatch } from "react-redux";
import './App.css'
import authService from './appwrite/auth';
import { login, logout } from "./store/authSlice";
import { useEffect } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Outlet } from 'react-router-dom';

function App() {
  console.log(import.meta.env.VITE_APPWRITE_URL)

  // loader
  const [loading,setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if(userData){
        dispatch(login({userData}))
      }else{
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [dispatch])

  // conditional rendering
  return !loading ? (
    <div className= 'min-h-screen flex flex-col bg-gradient-to-br from-teal-100 to-blue-200'>
      <div className='flex-grow'>
        <Header/>
        <main className='w-full animate-fadeIn py-8'>
         <Outlet />
        </main>
        <Footer/>
      </div>
    </div>
  ) : null
}

export default App
