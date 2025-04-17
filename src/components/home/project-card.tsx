/* eslint-disable */

'use client'
import React from "react";
import { BlurImage } from '@/components/blur-image'

const ProjectCard = ({ project }) => {
  return (
    <div key={project.id} className="group border rounded-xl overflow-hidden flex flex-col bg-card hover:shadow-md transition-all hover:border-primary">
      <div className="h-60 bg-muted flex items-center justify-center text-muted-foreground">
        <div className="relative w-full h-full">
          <BlurImage
            src={project.image}
            alt="Arish's avatar"
            className="w-full h-full"
            objectFit="cover"
          />
        </div>
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-medium group-hover:text-primary transition-colors">{project.title}</h3>
        <p className="text-muted-foreground mt-2 flex-grow">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tags.map((tag) => (
            <span key={tag} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard