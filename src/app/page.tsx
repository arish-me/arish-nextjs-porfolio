'use client'

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import Header from "@/components/header"
import AboutMe from "@/components/home/about-me"
import ProjectCard from "@/components/home/project-card"
import { PROJECTS_DATA } from "@/config/project.tsx"

export default function Home() {
  return (
    <div className="flex flex-col gap-16 py-16">
      {/* Hero Section */}
     <Header/>
     <AboutMe/>
      <section className="py-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Featured Projects</h2>
          <Link href="/projects" className="text-primary hover:underline flex items-center">
            View all
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS_DATA.slice(0, 2).map((project) => (
            <ProjectCard key={project.id} project={project}/>
          ))}
        </div>
      </section>

      {/* Call to action */}
      <section className="py-8 px-8 bg-card rounded-xl border text-center">
        <h2 className="text-3xl font-bold mb-4">Interested in working together?</h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-6">
          I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
        </p>
        <Button asChild size="lg">
          <Link href="/contact">Let's Talk</Link>
        </Button>
      </section>
    </div>
  );
}
