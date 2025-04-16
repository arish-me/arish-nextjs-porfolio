'use client'

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import Header from "@/components/header"

export default function Home() {
  return (
    <div className="flex flex-col gap-16 py-16">
      {/* Hero Section */}
      <Header/>

      {/* Tech Stack */}
      <section className="py-6">
        <h2 className="text-2xl font-semibold mb-6 text-center">Tech Stack</h2>
        <div className="flex flex-wrap justify-center gap-8 items-center">
          {[
            { name: "Ruby on Rails", logo: "🛤️" },
            { name: "React", logo: "⚛️" },
            { name: "Next.js", logo: "▲" },
            { name: "Docker", logo: "🐳" },
            { name: "Shadcn UI", logo: "🎨" },
            { name: "AWS", logo: "☁️" },
            { name: "TypeScript", logo: "TS" }
          ].map((tech) => (
            <div key={tech.name} className="flex flex-col items-center gap-2 transition-transform hover:scale-110">
              <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-card shadow-sm border text-2xl">
                {tech.logo}
              </div>
              <span className="text-sm font-medium">{tech.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Skills */}
      <section className="py-8">
        <h2 className="text-3xl font-bold mb-8">Skills & Expertise</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {[
            { name: "React", icon: "⚛️" },
            { name: "Next.js", icon: "▲" },
            { name: "TypeScript", icon: "TS" },
            { name: "Tailwind CSS", icon: "🎨" },
            { name: "UI/UX Design", icon: "🎭" },
            { name: "Responsive Design", icon: "📱" },
            { name: "JavaScript", icon: "JS" },
            { name: "HTML/CSS", icon: "</>" }
          ].map((skill) => (
            <div key={skill.name} className="flex items-center gap-3 bg-card p-4 rounded-lg border hover:border-primary hover:shadow-sm transition-all">
              <div className="flex items-center justify-center w-10 h-10 rounded-md bg-primary/10 text-primary font-medium">
                {skill.icon}
              </div>
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects Preview */}
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
          {[
            {
              id: 1,
              title: "E-commerce Website",
              description: "A fully responsive e-commerce website with cart functionality and payment integration",
              tags: ["Next.js", "TypeScript", "Tailwind CSS"]
            },
            {
              id: 2,
              title: "Task Management App",
              description: "A clean, intuitive task management app with drag-and-drop functionality",
              tags: ["React", "Redux", "Node.js"]
            }
          ].map((project) => (
            <div key={project.id} className="group border rounded-xl overflow-hidden flex flex-col bg-card hover:shadow-md transition-all hover:border-primary">
              <div className="h-60 bg-muted flex items-center justify-center text-muted-foreground">
                Project Screenshot
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
