// import React from 'react'
import {useDispatch} from 'react-redux'
import authService from '../../appwrite/auth'
import {logout} from '../../store/authSlice'

function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
        })
    }
  return (
    <button
    className='w-full md:w-auto inline-block px-6 py-2 text-white font-semibold rounded-full transition-all duration-300 hover:bg-white hover:text-red-500 hover:shadow-md'
            onClick={logoutHandler}
    >Logout</button>
  )
}

export default LogoutBtn