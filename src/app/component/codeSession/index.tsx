"use client"
import { CODE_BG } from '@/assets/constants'
import Image from 'next/image'
import React, { useState } from 'react'

export default function Code() {
 const [isSelected, setIsSelected] = useState<boolean>(false)
  return (
    <div className='relative w-[85%] m-auto pt-[13em]'>
    <section className='bg-[#04010f] absolute w-[85%] h-[38em] left-[7%] top-[-15px] '>
     <header className='text-[15.3px] font-[700] flex items-center space-x-10 py-3 px-4 leading-[20.7px] bg-[#030017]'>
      <div className='text-white '>Language</div>
       <div className='flex items-center space-x-4'>
       <p onClick={() => setIsSelected(true)} className={` cursor-pointer text-${isSelected ? "white" : "zinc-500"}`}>Python</p>
       <p onClick={() => setIsSelected(false)} className={` cursor-pointer text-${!isSelected ? "white" : "zinc-500"}`}>JavaScript</p>
       </div>
      </header>
      <div className='text-white'>
      <blockquote>
       <pre>
        <code>
         {
          isSelected && ("Python Code here")
         }
         {
          !isSelected && ("My pre-formatted  code here .")
         }
        </code>
       </pre>
      </blockquote>
      </div>
     </section>
     <div>
      <Image src={CODE_BG} alt='banner' className='w-full' />
     </div>
    </div>
  )
}
