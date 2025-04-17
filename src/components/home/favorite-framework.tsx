import React, { useRef } from "react";
import { SiReact, SiRubyonrails } from '@icons-pack/react-simple-icons'
import { HeartIcon } from 'lucide-react'

const FavoriteFramework = () => {
  return (
    <div className='shadow-feature-card bg-white/50 dark:bg-black flex flex-col gap-6 rounded-xl p-4 lg:p-6'>
      <div className='flex items-center gap-2'>
        <HeartIcon className='size-[18px]' />
        <h2 className='text-sm font-light'>Favorite framework</h2>
      </div>
      <div className='flex items-center justify-center space-x-2'>
        <SiRubyonrails size={80} className='text-zinc-800 dark:text-zinc-200' />
        <SiReact size={80} className='text-zinc-800 dark:text-zinc-200' />
      </div>
    </div>
  )
}

export default FavoriteFramework