import React from 'react'
import Blog from './Blog'
import { useGlobal } from './Context'



function Blogpage() {
  const { blogList } = useGlobal()
  if (blogList.length === 0){
    return (
        <>
            <h1 className='text-[#0b0866] font-bold w-full text-center text-[30px] md:text-[60px] my-10'>No Blogs To preview.</h1>
        </>
    )
}
  return (
    <div className='p-10 flex flex-col gap-8 md:grid md:grid-cols-3'>
        <Blog />
    </div>
  )
}

export default Blogpage