import React from 'react'
import Blog from './Blog'

function Blogpage() {
  return (
    <div className='p-10 flex flex-col gap-8 md:grid md:grid-cols-3'>
        <Blog />
    </div>
  )
}

export default Blogpage