import React from 'react'

export default function Input({placeholder}: any) {
  return (
    <>
    <input type="text" placeholder={placeholder} className=' bg-white border-none outline-none text-[16px] py-[10px] px-2 w-full' />
    </>
  )
}
