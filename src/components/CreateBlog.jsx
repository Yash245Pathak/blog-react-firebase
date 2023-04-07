import React, { useState } from 'react'

import { useNavigate } from "react-router-dom"

function CreateBlog() {

    const [title, setTitle] = useState("")
    const [para, setPara] = useState("")

    return (
        <div className='w-full h-auto'>
            <div className='flex m-16 flex-col gap-6 text-center md:text-start'>
                <form className='w-full md:w-[70%] md:mx-auto flex gap-6 flex-col justify-center items-center md:items-start p-5 shadow-2xl'>
                    <h1 className='text-[30px] md:text-[50px] font-semibold md:font-bold text-[#0b0866] capitalize'>Create a new blog.</h1>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className='border border-blue w-full p-2 outline-none shadow-lg' placeholder='Enter the title for your blog.' />
                    <textarea type="text" value={para} onChange={(e) => setPara(e.target.value)} className='border border-blue w-full h-[20vh] p-2 outline-none shadow-lg' placeholder="Enter the description for your blog" />
                    <button  className='btn text-white shadow-lg' >Submit</button>
                </form>
            </div>
        </div>
    )
}

export default CreateBlog