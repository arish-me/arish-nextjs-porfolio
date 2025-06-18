/* eslint-disable */

'use client'

import Image from "next/image";
import Link from "next/link";
import Logo from '@/images/arishkhan.jpg';
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { motion, useAnimate } from 'framer-motion';
import { BlurImage } from "@/components/blur-image"
export default function Header() {
  const [adjective, setAdjective] = useState("amazing");
  const adjectives = ["amazing", "stunning", "fantastic", "powerful"];

  const TEXTS = [
    { text: 'amazing', className: 'bg-clip-text text-center text-transparent bg-gradient-to-r from-[#ff1835] to-[#ffc900]' },
    { text: 'stunning', className: 'bg-clip-text text-center text-transparent bg-gradient-to-r from-[#0077ff] to-[#00e7df]' },
    { text: 'fantastic', className: 'bg-clip-text text-center text-transparent bg-gradient-to-r from-[#7f00de] to-[#ff007f]' },
    { text: 'amazing', className: 'bg-clip-text text-center text-transparent bg-gradient-to-r from-[#ff1835] to-[#ffc900]' }
  ];

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % adjectives.length;
      setAdjective(adjectives[index]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const [scope, animate] = useAnimate();
  const [animationReady, setAnimationReady] = useState(false);

  // Delay animation until after initial page load
  useEffect(() => {
    setAnimationReady(true);
  }, []);

  useEffect(() => {
    // Start the animation only after the component is loaded
    if (animationReady) {
      void animate(
        [
          [scope.current, { y: '0%' }, { duration: 0 }],
          [scope.current, { y: '-25%' }, { duration: 0.3, at: '+1.3' }],
          [scope.current, { y: '-50%' }, { duration: 0.3, at: '+1.3' }],
          [scope.current, { y: '-75%' }, { duration: 0.3, at: '+1.3' }]
        ],
        { repeat: Number.POSITIVE_INFINITY }
      );
    }
  }, [animate, scope, animationReady]);
  return (
    <section className="flex flex-col md:flex-row gap-12 items-center">

      <div className="flex-1 space-y-6">
        <motion.div
          className="flex flex-col gap-4 md:max-w-xl"
          initial={{
            y: 40,
            opacity: 0
          }}
          animate={{
            y: 0,
            opacity: 1
          }}
          transition={{
            duration: 0.5
          }}
        >
          <div className="space-y-3">
            <h1 className="font-title bg-gradient-to-b from-black via-black/90 to-black/70 to-90% bg-clip-text text-2xl font-bold leading-9 text-transparent sm:text-4xl sm:leading-[3.5rem] dark:from-white dark:via-white/90 dark:to-white/70">
               Arish – Full Stack Rails & React Developer, crafting modern{" "}
              <div className="inline-grid h-9 overflow-hidden sm:h-14">
                <div ref={scope}>
                  {TEXTS.map(({ text, className }, i) => (
                    <div className={className} key={i}>
                      {text}
                    </div>
                  ))}
                </div>
              </div>{" "}
              web applications
            </h1>
          </div>
        </motion.div>

        <p className="text-lg max-w-xl">
          I specialize in creating beautiful, responsive websites and applications with modern technologies.
          My approach combines clean code with intuitive design to deliver exceptional user experiences.
        </p>

        <div className="flex gap-4 pt-4">
          <Button asChild size="lg">
            <Link href="/projects">View My Work</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a
              href="https://drive.google.com/file/d/1m0JhsxZl56SDPc0GEijBPyyRnufZk8Rt/view?usp=sharing"
              download="Arish-Resume.pdf"
              target="_blank" // Opens the link in a new tab
              rel="noopener noreferrer" // Recommended for security
            >
              Download Resume
            </a>
          </Button>

        </div>
      </div>

      <motion.div
        className="relative hidden size-56 md:block"
        initial={{
          scale: 0
        }}
        animate={{
          scale: 1
        }}
        transition={{
          duration: 0.3
        }}
      >
        <BlurImage
          src={Logo}
          alt="Arish's avatar"
          size="4xl"
          className="rounded-full"
          loading="lazy"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-tl from-purple-700 to-orange-700 opacity-50 blur-3xl" />
      </motion.div>


    </section>
  )
}