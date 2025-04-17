/* eslint-disable */

'use client'

import Header from "@/components/header"
import AboutMe from "@/components/home/about-me"
import HomeCTA from "@/components/home/home-cta"
import FeaturedProject from "@/components/home/featured-project"


export default function Home() {
  return (
    <div className="flex flex-col gap-14 py-16">
      <Header />
      <AboutMe />
      <FeaturedProject />
      <HomeCTA />
    </div>
  );
}
