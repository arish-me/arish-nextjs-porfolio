/* eslint-disable */

'use client'

import React from "react";
import Link from "next/link";
import ProjectCard from "@/components/home/project-card"
import { PROJECTS_DATA } from "@/config/project"
const FeaturedProject = () => {
  return (
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
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}

export default FeaturedProject