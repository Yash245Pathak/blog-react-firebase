import React from 'react'
import img from "./271963.jpg"
import { Link } from 'react-router-dom'

function Blog() {
    return (
        <div className='w-full p-5 text-[#0b0866]'>
            <div className='shadow-2xl p-5'>
                <img src={img} alt="" />
                <div className='px-2'>
                    <div className='flex flex-row justify-between items-center'>
                        <span className='text-[15px] md:text-[20px]'>4th April 2023</span>
                        <span className='text-[15px] md:text-[20px]'>Author</span>
                    </div>
                    <div className='flex flex-col gap-4 mt-6 text-center md:text-left'>
                        <h1 className='text-[20px] md:text-[25px] font-bold'>Lorem ipsum dolor sit amet</h1>
                        <p className='text-[1rem] md:text-[1rem] font-thin leading-tight'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi rem impedit nulla suscipit earum quidem minima. Odit doloremque explicabo cumque in maxime voluptatem, vitae, saepe corporis maiores excepturi incidunt quis.</p>
                    </div>
                    <div className='flex justify-end md:justify-start mt-4'>
                        <button className='btn-pill-sm capitalize'><Link to={'/singleblog'}>See more</Link></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog