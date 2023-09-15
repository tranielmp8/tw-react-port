import React from 'react'
import { AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube } from "react-icons/ai"


export default function 
() {
  return (
    <div className='text-center p-10'>
        <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl'>Super Dev</h2>
        <h3 className='text-2xl py-2 md:text-3xl'>Developer and Designer</h3>
        <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque temporibus atque perferendis adipisci deleniti officiis corporis pariatur sint doloribus animi?
        </p>
        <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillYoutube />
        </div>
        <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-15 overflow-hidden md:h-96 md:w-96'>
            <img src="../public/dev-ed-wave.png" alt="deved" 
                className='object-cover h-[100%]' />
        </div>

    </div>
  )
}
