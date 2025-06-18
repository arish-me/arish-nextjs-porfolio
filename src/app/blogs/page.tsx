/* eslint-disable */

import Blogs from './blog'
import { generateMetadata } from '@/lib/seo';
const title = 'Blogs';
export const metadata = generateMetadata(title);
export default function BlogPage() {
  const description = 'My personal website and blog where I share my thoughts on various topics including tutorials, notes, and personal experiences.';
  return(
     <div className="py-16 space-y-16">
      <section className="space-y-8">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold">Arish - FullStack Rails & React Developer</h1>
          <h2 className="text-3xl font-semibold text-muted-foreground">Recent Blogs & Articles</h2>
          <p className="text-xl text-muted-foreground">
            {description}
          </p>
        </div>
         <Blogs/>
        </section>
     </div>
  )
}