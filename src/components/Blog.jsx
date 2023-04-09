import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobal } from './Context'
import { deleteDoc, doc } from "firebase/firestore"
import { db } from '../firebase'
import { toast } from 'react-toastify'


function Blog() {
    const { blogList } = useGlobal()
    const deleteBlog = async (id) => {
        const blogDoc = doc(db, "blogs", id);
        await deleteDoc(blogDoc);
        toast.error("Blog Deleted Successfully!")
    }


    return (
        <>
            {blogList.map((blog) => {
                return (
                    <div className='w-full p-5 text-[#0b0866]'>
                        <div className='shadow-2xl p-5'>
                            <div className='px-2'>
                                <div className='flex flex-col gap-4 mt-6 text-center md:text-left'>
                                    <h1 className='text-[15px] md:text-[20px] font-bold leading-tight'>{blog.title}</h1>
                                    <p className='text-[1rem] md:text-[1rem] font-thin leading-tight w-[80%]'>{blog.para}</p>
                                </div>
                                <div className='flex justify-end md:justify-start mt-4'>
                                    <button className='btn-pill-sm capitalize'><Link to={'/singleblog'}>See more</Link></button>
                                </div>
                                <div className='flex flex-row justify-between items-center bottom-2 mt-2'>
                                    <span className='text-[10px] md:text-[15px]'>@{blog.author.name}</span>
                                    <button onClick={() => deleteBlog(blog.id)} className='text-[15px] md:text-[20px] cursor-pointer p-1'>&#128465;</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default Blog