'use client'
import React from "react";
import { ClockIcon } from 'lucide-react'

const CodingHours = () => {
  return (
    <div className='dark:bg-black dark:rounded-xl  bg-white/50 flex flex-col gap-6 rounded-xl p-4 lg:p-6'>
      <div className='flex items-center gap-2'>
        <ClockIcon className='size-[18px]' />
        <h2 className='text-sm font-light'>Coding hours</h2>
      </div>
      <div className='font-title flex grow items-center justify-center text-4xl font-semibold'>
        70128 hours
      </div>
    </div>
  )
}

export default CodingHours