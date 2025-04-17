/* eslint-disable */

'use client'


import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils'

import { HEADER_LINKS } from '@/config/links'

import Link from 'next/link';

const Navbar = () => {
  const pathname = usePathname()
  return (
    <nav className='hidden md:block'>
      <ul className='flex gap-2'>
        {HEADER_LINKS.map((link) => {
          const isActive = link.href === pathname
          return (
            <li key={link.text} className='relative flex h-[60px] items-center justify-center'>
              <Link
                className={cn('rounded-sm px-3 py-2 text-sm font-medium transition-colors', {
                  'text-muted-foreground hover:text-foreground': !isActive,
                  'text-foreground': isActive
                })}
                href={link.href}
              >
                {link.text}
              </Link>
              {isActive ? (
                <>
                  <div className='bg-nav-link-indicator absolute bottom-0 left-1/2 h-px w-12 -translate-x-1/2' />
                  <div className='absolute bottom-0 left-1/2 size-2.5 -translate-x-1/2 rounded-[4px]  blur-sm' />
                </>
              ) : null}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Navbar
