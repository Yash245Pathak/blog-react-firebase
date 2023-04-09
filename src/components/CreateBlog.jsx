import React, { useState } from 'react'
import { auth, db } from "../firebase"
import { addDoc, collection } from "firebase/firestore"
import { useNavigate } from "react-router-dom"
import { toast } from 'react-toastify'

function CreateBlog() {

    let navigate = useNavigate()
    const [title, setTitle] = useState("")
    const [para, setPara] = useState("")

    const blogColllectionRef = collection(db, "blogs");
    const createBlog = async (e) => {
        e.preventDefault()
        await addDoc(blogColllectionRef, {
            title,
            para,
            author: { name: auth.currentUser.displayName, id: auth.currentUser.uid }
        })
        navigate("/");
        toast("Blog Created Successfully!")
    }

    return (
        <div className='w-full h-auto'>
            <div className='flex m-16 flex-col gap-6 text-center md:text-start'>
                <form className='w-full md:w-[70%] md:mx-auto flex gap-6 flex-col justify-center items-center md:items-start p-5 shadow-2xl'>
                    <h1 className='text-[30px] md:text-[50px] font-semibold md:font-bold text-[#0b0866] capitalize'>Create a new blog.</h1>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className='border border-blue w-full p-2 outline-none shadow-lg' placeholder='Enter the title for your blog.' />
                    <textarea type="text" value={para} onChange={(e) => setPara(e.target.value)} className='border border-blue w-full h-[20vh] p-2 outline-none shadow-lg' placeholder="Enter the description for your blog" />
                    <button onClick={createBlog} className='btn text-white shadow-lg' >Submit</button>
                </form>
            </div>
        </div>
    )
}

export default CreateBlog