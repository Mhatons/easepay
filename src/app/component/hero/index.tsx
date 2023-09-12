"use client"
import { DEFAULT_VIDEO } from '@/assets/constants'
import React from 'react'
import Button from '../common/button'
import Input from '../common/input'

export default function Hero() {
  return (
    <div className=' text-center text-white h-[100vh] '>
     <section className='w-[60%] m-auto absolute left-72 top-[20%]'>
      <div>
      <h1 className='text-[72px] leading-[86.4px] font-[700]'>Open Payments at the Speed of Light</h1>
      <p className='text-[18px] leading-[27px] font-[400] py-8'>Unlock Groundbreaking New Payment Experiences</p>
      <div className='flex space-x-4 w-[50%] m-auto'>
       <div className='w-[60%]'>
        <Input placeholder="Enter your email" />
       </div>
       <div className='w-[40%]'>
        <Button isSolid buttonText="Join our waitlist" />
       </div>
      </div>
      </div>
     </section>
     <video width="100%" height="100%"loop autoPlay>
     <source src={DEFAULT_VIDEO} type='video/mp4' /> 
     <source src={DEFAULT_VIDEO} type="video/ogg" />
     This video is not supported by your browser
     </video>
    </div>
  )
}
