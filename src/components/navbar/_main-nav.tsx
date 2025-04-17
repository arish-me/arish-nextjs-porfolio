'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from '@/components/theme-toggle';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { BlurImage } from '@/components/blur-image';
import Logo from '@/images/arishme.png';

const mainNav = [
  { title: 'Home', href: '/' },
  { title: 'About', href: '/about' },
  { title: 'Projects', href: '/projects' },
  { title: 'Contact', href: '/contact' },
];

export default function MainNav() {
  const pathname = usePathname();

  return (
   <header className="bg-background/30 dark:bg-popover dark:backdrop-blur-[10px] fixed inset-x-0 top-4 z-40 mx-auto flex h-[60px] max-w-5xl items-center justify-between rounded-2xl px-8 shadow-sm saturate-100 backdrop-blur-[10px] transition-colors">
      <div className="flex items-center justify-between w-full">
        <Link href="/" className="flex items-center justify-center gap-1">
          <div className="h-8 w-8 rounded-full  flex items-center justify-center  font-semibold">
           <BlurImage
              src={Logo}
              alt="Arish's avatar"

              size="sm"
              className="rounded-full"
            />
          </div>
        </Link>

        <div className="flex items-center gap-2">
          <nav className="flex items-center gap-4 lg:gap-6 text-sm">
            {mainNav.map((item, index) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    "transition-colors hover:text-foreground/80",
                    isActive ? "text-foreground font-medium" : "text-foreground/60"
                  )}
                >
                  {item.title}
                </Link>
              )
            })}
            <Separator orientation="vertical" className="h-6" />
            <ThemeToggle />
          </nav>

        </div>
      </div>
    </header>
  );
}