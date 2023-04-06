import React from 'react'

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
    </div>
  )
}

export default Home