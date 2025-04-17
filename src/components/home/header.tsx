'use client'

import { useState, useEffect } from "react";
import { motion, useAnimate } from 'framer-motion';
import { BlurImage } from '@/components/blur-image';
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const TEXTS = [
  { text: 'amazing', className: 'bg-clip-text text-center text-transparent bg-gradient-to-r from-[#ff1835] to-[#ffc900]' },
  { text: 'stunning', className: 'bg-clip-text text-center text-transparent bg-gradient-to-r from-[#0077ff] to-[#00e7df]' },
  { text: 'fantastic', className: 'bg-clip-text text-center text-transparent bg-gradient-to-r from-[#7f00de] to-[#ff007f]' },
  { text: 'amazing', className: 'bg-clip-text text-center text-transparent bg-gradient-to-r from-[#ff1835] to-[#ffc900]' }
];

type HeaderProps = {
  profileImage?: string;
}

const Header = ({ profileImage }: HeaderProps) => {
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

  const resumeUrl = "/resume.pdf";

  return (
    <div className="my-16 space-y-6">
      <div className="flex justify-between items-start gap-8">
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
          <h1 className="font-title bg-gradient-to-b from-black via-black/90 to-black/70 to-90% bg-clip-text text-2xl font-bold leading-9 text-transparent sm:text-4xl sm:leading-[3.5rem] dark:from-white dark:via-white/90 dark:to-white/70">
            I'm Arish, a Full Stack Developer creating{" "}
            <div className="inline-grid h-9 overflow-hidden sm:h-14">
              <div ref={scope}>
                {TEXTS.map(({ text, className }, i) => (
                  <div className={className} key={i}>
                    {text}
                  </div>
                ))}
              </div>
            </div>{" "}
            apps using Rails and React.
          </h1>
          <div className="text-muted-foreground text-sm">India • UTC/GMT +5:30</div>
          <div className="flex gap-4 mt-4">
            <a href={resumeUrl} download="Arish_Resume.pdf">
              <Button variant="outline" className="rounded-xl" size="lg">
                <Download className="h-5 w-5 mr-2" />
                <span>Download Resume</span>
              </Button>
            </a>
          </div>
        </motion.div>

        {/* Profile Image */}
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
          {profileImage ? (
            <>
              <BlurImage
                src={profileImage}
                alt="Arish's avatar"
                fallbackText="A"
                size="4xl"
                className="rounded-full"
                loading="lazy"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-tl from-purple-700 to-orange-700 opacity-50 blur-3xl" />
            </>
          ) : (
            <>
              <div className="h-56 w-56 bg-primary rounded-full flex items-center justify-center text-5xl font-bold text-primary-foreground">
                A
              </div>
              <div className="absolute inset-0 -z-10 bg-gradient-to-tl from-purple-700 to-orange-700 opacity-50 blur-3xl" />
            </>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Header; 