'use client'
import { DEFAULT_LOGO } from '@/assets/constants'
import Image from 'next/image'
import React from 'react'
import Button from '../common/button'

export default function Navigation() {

 return (
<nav className=' bg-[#04010E] text-white flex justify-between items-center pt-3 w-[95%] m-auto'>
 <section className=' flex justify-between items-center space-x-4'>
  <Image className='cursor-pointer' src={DEFAULT_LOGO} alt='Logo' />
    <ul className='flex justify-between items-center space-x-4 text-[16px] leading-[24px]'>
   <li className=' cursor-pointer'>Products</li>
   <li className=' cursor-pointer'>Solutions</li>
   <li className=' cursor-pointer'>Resources</li>
   <li className=' cursor-pointer'>Company</li>
  </ul>
 </section>
 <section>
    <Button buttonText="Contact us" />
 </section>
</nav>
 )
}
