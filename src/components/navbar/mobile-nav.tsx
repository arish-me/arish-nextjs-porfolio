/* eslint-disable */

'use client'


import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

import {
  Button
} from '@/components/ui/button'
import { MenuIcon } from 'lucide-react'

import { HEADER_LINKS } from '@/config/links'

import Link from 'next/link';

const MobileNav = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className='flex size-9 items-center justify-center p-0 md:hidden'
          aria-label='Toggle-menu'
          variant='ghost'
        >
          <MenuIcon className='size-4' />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end' sideOffset={20} className='min-w-40'>
        {HEADER_LINKS.map((link) => (
          <DropdownMenuItem key={link.text} asChild>
            <Link href={link.href} className='flex items-center gap-4'>
              {link.icon}
              <div>{link.text}</div>
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default MobileNav
