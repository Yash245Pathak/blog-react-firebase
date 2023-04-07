import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobal } from './Context'

function Blog() {
    const { blogList, deleteBlog } = useGlobal()
    return (
        <>
        <div className='w-full p-5 text-[#0b0866]'>
        <div className='shadow-2xl p-5'>
            <div className='px-2'>
                <div className='flex flex-col gap-4 mt-6 text-center md:text-left'>
                    <h1 className='text-[20px] md:text-[25px] font-bold'>Hiii</h1>
                    <p className='text-[1rem] md:text-[1rem] font-thin leading-tight'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est hic eum eaque exercitationem minima harum corrupti dignissimos voluptatibus sequi, itaque omnis voluptate eius minus pariatur, fugit facere rem maxime et?</p>
                </div>
                <div className='flex justify-end md:justify-start mt-4'>
                    <button className='btn-pill-sm capitalize'><Link to={'/singleblog'}>See more</Link></button>
                </div>
                <div className='flex flex-row justify-between items-center bottom-2'>
                    <span className='text-[10px] md:text-[15px]'>@yash</span>
                    <button className='text-[15px] md:text-[20px] cursor-pointer p-1'>&#128465;</button>
                </div>
            </div>
        </div>
    </div>
        </>
    )
}

export default Blog