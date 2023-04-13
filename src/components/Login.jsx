import React from 'react'
import cartoon from "../assets/cartoon1.png"
import google from "../assets/google.png"
import { useGlobal } from './Context'
import { useNavigate } from "react-router-dom"
import { toast } from 'react-toastify'

function Login() {

  let navigate = useNavigate();
  const { signInWithGoogle, isAuth } = useGlobal();

  if(isAuth === true) {
    navigate("/")
    toast.error("Already LogedIn!!!") 
  }

  return (
    <div className='flex my-8 flex-col md:flex-row justify-center items-center w-full h-auto'>
      <div className='flex-1'>
        <img className='w-[18rem] md:w-[40rem] max-w-max mx-auto' src={cartoon} alt="" />
      </div>
      <div className='flex-1 mt-8 flex flex-col gap-y-4 items-center lg:items-start'>
        <h1 className='text-[50px] text-[#0b0866] font-bold'>Login</h1>
        <button className='btn flex gap-x-4 text-white/70 items-center' onClick={signInWithGoogle}>
          <img className='w-[2.5rem]' src={google} alt="" />
          <span className='font-light capitalize'>Sign in with google</span>
        </button>
      </div>
    </div>
  )
}

export default Login