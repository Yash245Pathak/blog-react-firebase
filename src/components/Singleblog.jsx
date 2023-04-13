import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { doc, getDoc } from "firebase/firestore"
import { auth } from '../firebase'
import { db } from '../firebase';

function Singleblog() {
  const { id } = useParams();
  const [blog, setBlog] = useState([])

  useEffect(() => {
    const getBlog = async () => {
      const blogDoc = doc(db, "blogs", id);
      const blog = await getDoc(blogDoc)
      console.log(blog.data());
      setBlog(blog.data())
    }
    getBlog();
  }, [id])
  return (
    <>
      <div className='p-10'>
        <div className='my-20 px-8 text-[#0b0866] p-3 shadow-2xl'>
          <div className='flex flex-col gap-5'>
            <div className='mx-auto text-center'>
              <h1 className='text-[40px] md:text-[60px] capitalize font-bold mx-auto'>{blog.title}</h1>
            </div>
            <p className='text-[15px] md:text-[20px] my-5 text-center md:text-left'>{blog.para}</p>
            <button className='btn-pill text-white mx-auto mb-2'><Link to={'/blog'}>Back</Link></button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Singleblog