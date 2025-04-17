'use client'


import React, { useRef } from "react";
import { buttonVariants } from '@/components/ui/button'
import Link from "next/link";
import { cn } from '@/lib/utils'
import { motion, useInView } from 'framer-motion'
import StacksCard from "./stacks-card"
import LocationCard from "./location-card"
import CodingHours from './coding-hours'
import Connect from './connect'
import FavoriteFramework from './favorite-framework'

const variants = {
  initial: {
    y: 40,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1
  }
}

export default function AboutMe() {
  const cardsRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(cardsRef, { once: true, margin: '-100px' })
  return (
    <motion.div
      initial='initial'
      animate={isInView ? 'animate' : 'initial'}
      variants={variants}
      ref={cardsRef}
      transition={{
        duration: 0.5
      }}
      className='relative my-24'
    >
      <motion.h2
        className='font-title text-center text-3xl font-bold sm:text-4xl'
        initial={{
          y: 30,
          opacity: 0
        }}
        animate={{
          y: 0,
          opacity: 1
        }}
        transition={{
          duration: 0.3
        }}
      >
        About Me
      </motion.h2>
      <motion.div
        className='mt-12 grid gap-4 md:grid-cols-2'
        initial={{
          y: 40,
          opacity: 0
        }}
        animate={{
          y: 0,
          opacity: 1
        }}
        transition={{
          duration: 0.3
        }}
      >
    <div className='grid gap-4 bg-white/50 dark:bg-black'>
          <LocationCard />
          <StacksCard />
        </div>
         <div className='grid gap-4'>
              <Connect />
          <div className='grid gap-4 [@media(min-width:450px)]:grid-cols-2 dark:bg-black'>
             <CodingHours />
             <FavoriteFramework />
          </div>
        </div>
        </motion.div>
     </motion.div>
  )
}