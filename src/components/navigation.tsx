/* eslint-disable */

'use client'
import { useEffect, useState } from 'react'
import { motion, useAnimate } from 'framer-motion';
import { BlurImage } from '@/components/blur-image';
import Logo from '@/images/arishme.png';
import Link from 'next/link';
import MobileNav from './navbar/mobile-nav'
import Navbar from './navbar/navbar'
import { cn } from '@/lib/utils'
import { ThemeToggle } from '@/components/theme-toggle';
import { usePathname } from 'next/navigation';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname();
  const isCourseRoute = pathname?.startsWith('/courses');

  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    document.addEventListener('scroll', changeBackground)

    return () => document.removeEventListener('scroll', changeBackground)
  }, [])

  return (
    <motion.header
      className={cn(
        'bg-background/30 shadow-xs inset-x-0 top-4 z-40 mx-auto flex h-[60px] max-w-5xl items-center justify-between rounded-2xl px-8 saturate-100 backdrop-blur-[10px] transition-colors',
        !isCourseRoute && 'fixed',
        isScrolled && 'bg-background/80'
      )}
      initial={{
        y: -100
      }}
      animate={{
        y: 0
      }}
      transition={{
        duration: 0.3
      }}
    >
      <a
        href='#skip-nav'
        className='bg-background focus-visible:ring-ring rounded-xs shadow-xs focus-visible:ring-3 fixed left-4 top-4 -translate-y-20 border p-2 font-medium transition-transform focus-visible:translate-y-0 focus-visible:ring-offset-2'
      >
        <span>Skip</span>
      </a>
      <Link
        href='/'
        className='flex items-center justify-center gap-1'
        aria-label="Home"
      >
        <BlurImage
          src={Logo}
          alt="Arish's avatar"

          size="sm"
          className="rounded-full"
        />
      </Link>
      <div className='flex items-center gap-2'>
        <Navbar />
        <ThemeToggle />
        <MobileNav />
      </div>

    </motion.header>
  );
}