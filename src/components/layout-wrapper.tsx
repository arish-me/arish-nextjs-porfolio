'use client'

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isKeystaticRoute = pathname?.startsWith('/keystatic');

  // Update body classes based on route
  useEffect(() => {
    if (isKeystaticRoute) {
      // For Keystatic admin, remove flex layout classes for full-width
      document.body.classList.remove('min-h-screen', 'flex', 'flex-col');
      document.body.style.height = '100vh';
      document.body.style.overflow = 'hidden';
    } else {
      // For regular routes, ensure flex layout classes are present
      document.body.classList.add('min-h-screen', 'flex', 'flex-col');
      document.body.style.height = '';
      document.body.style.overflow = '';
    }
  }, [isKeystaticRoute]);

  // For Keystatic admin, render children only (full width, no navigation/footer)
  if (isKeystaticRoute) {
    return <>{children}</>;
  }

  // For regular routes, render with navigation and footer
  return (
    <>
      <Navigation />
      <main className="max-w-7xl w-full mx-auto px-4 py-24 flex-1">
        {children}
      </main>
      <Footer />
    </>
  );
}

