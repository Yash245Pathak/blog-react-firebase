import React from 'react'
import { Link } from 'react-router-dom'
import github from "../assets/github.png"
import linkedin from "../assets/linkedin.png"

function Footer() {
  return (
    <div className='w-full h-auto bg-black text-white back'>
      <div className='flex mx-auto max-w-max flex-col justify-center items-center gap-4'>
        <h1 className='text-[26px] font-semibold md:text-[40px]'>Let's get started on something great.</h1>
        <button className='btn-pill'><Link to={'/login'}>Join Now</Link></button>
      </div>
      <div className='flex flex-col md:flex-row md:justify-between md:items-center md:gap-x-40 md:max-w-max md:mx-auto'>
        <div className='flex flex-col items-center my-5'>
          <h1 className='font-bold text-[24px] md:text-[35px]'>Blogs</h1>
          <div className='flex flex-col text-center'>
            <span className='font-thin text-[17px]'> <Link to={"/"}>Recent Blogs</Link> </span>
            <span className='font-thin text-[17px]'> <Link to={"/"}>Popular Blogs</Link> </span>
          </div>
        </div>
        <div className='flex flex-col items-center my-5'>
          <h1 className='font-bold text-[24px] md:text-[35px]'>Services</h1>
          <div className='flex flex-col text-center'>
            <span className='font-thin text-[17px]'> <Link to={"/"}>Blog Website</Link> </span>
            <span className='font-thin text-[17px]'> <Link to={"/"}>Portfolio Management</Link> </span>
          </div>
        </div>
        <div className='flex flex-col justify-center items-center mx-auto max-w-max md:mx-0'>
          <span className='font-semibold text-[20px] opacity-60'>Copyright &#169; Blog.</span>
          <span>Join with our socials</span>
          <div className='flex gap-x-3 p-2 max-w-max items-center'>
            <a href="https://github.com/Yash245Pathak" target={'black'} className='cursor-pointer'><img src={github} alt="" /></a>
            <a href='https://www.linkedin.com/in/yash-pathak-10a6031b6/' target={'black'} className='cursor-pointer'><img src={linkedin} alt="" /></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer