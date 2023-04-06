import React from 'react'
import img1 from "../assets/img-1.png";
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='p-5'>
      <div className='flex flex-col justify-center items-center text-center text-[#0b0866] my-8 gap-y-3'>
        <h1 className='text-[40px] md:text-[60px] font-bold'>Blog.</h1>
        <p className='text-[30px] md:text-[35px] font-medium capitalize'>Writings from our team!</p>
        <span className='text-[20px] md:text-[25px] font-light capitalize'>The latest industry news, interviews, technologies, and resources.</span>
      </div>
      <div className='home-back w-full h-[40vh] md:h-[80vh] flex'>
        <div className='flex justify-center items-center m-auto'>
          <h1 id='outline' className='text-[40px] text-center capitalize md:text-[80px] m-auto'>Welcome To <br /> blog.</h1>
        </div>
      </div>
      <div className='flex flex-col md:flex-row md:justify-center md:items-center w-full h-auto p-5'>
        <div className='flex-1 justify-center items-center flex'>
          <img src={img1} alt="" />
        </div>
        <div className='flex-1 justify-center items-center text-center md:text-left'>
          <p className='text-[#0b0866] text-[20px] md:text-[30px] font-light md:font-normal leading-tight opacity-70'>New products features, the latest in technology. solutions and updates.</p>
          <div className='flex flex-col md:flex-row md:gap-x-10'>
            <div className='flex flex-col justify-center items-center text-center'>
              <h1 className='text-[#0b0866] text-[20px] md:text-[30px] font-medium mt-4'>Recent Blogs.</h1>
              <button className='btn-pill text-white max-w-max mt-2'><Link to={"/blog"}>Blogs</Link></button>
            </div>
            <div className='flex flex-col justify-center items-center text-center'>
              <h1 className='text-[#0b0866] capitalize text-[20px] md:text-[30px] font-medium mt-4'>Subscribe to us now</h1>
              <button className='btn-pill text-white max-w-max mt-2'><Link to={'/login'}>Subscribe</Link></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home