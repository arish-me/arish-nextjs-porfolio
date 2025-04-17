import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { PROJECTS_DATA } from "@/config/project.tsx"
import { BlurImage } from '@/components/blur-image'
export const metadata: Metadata = {
  title: "Projects | Arish's Portfolio",
  description: "Explore my recent projects and technical work",
};

export default function ProjectsPage() {
  return (
    <div className="py-16 space-y-12">
      <section className="space-y-4 text-center max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold">My Projects</h1>
        <p className="text-xl text-muted-foreground">
          Here's a selection of my recent work. Each project represents different skills,
          challenges, and solutions I've implemented.
        </p>
      </section>

      <section className="space-y-8">
        <h2 className="text-2xl font-bold">Featured Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS_DATA.filter(p => p.featured).map((project) => (
            <Card key={project.id} className="overflow-hidden group hover:border-primary transition-all">
              <div className="h-64 bg-muted flex items-center justify-center text-muted-foreground relative overflow-hidden">
                 <BlurImage
                    src={project.image}
                    alt="Arish's avatar"
                    className="w-full h-full"
                    objectFit="cover"
                  />
                <div className="absolute inset-0 bg-primary/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-primary-foreground flex gap-4">
                    <Button asChild size="sm" variant="secondary">
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        Live Demo
                      </a>
                    </Button>
                    <Button asChild size="sm" variant="outline" className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground/20">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        View Code
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="group-hover:text-primary transition-colors">{project.title}</CardTitle>
                <CardDescription className="text-base">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{project.longDescription}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="text-2xl font-bold">Other Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROJECTS_DATA.filter(p => !p.featured).map((project) => (
            <Card key={project.id} className="overflow-hidden group hover:border-primary transition-all flex flex-col">
              <div className="h-48 bg-muted flex items-center justify-center text-muted-foreground">
               <BlurImage
                src={project.image}
                alt="Arish's avatar"
                className="w-full h-full"
                objectFit="cover"
              />
              </div>
              <CardHeader className="flex-1">
                <CardTitle className="group-hover:text-primary transition-colors text-xl">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between pt-0">
                <Button asChild size="sm" variant="ghost">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                </Button>
                <Button asChild size="sm" variant="ghost">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    View Code
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-16 p-8 border rounded-xl bg-card text-center">
        <h2 className="text-3xl font-bold mb-4">Have a project in mind?</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
          I'm always open to new opportunities and exciting projects. If you'd like to discuss how we can work together,
          feel free to reach out!
        </p>
        <Button asChild size="lg">
          <Link href="/contact">Let's Collaborate</Link>
        </Button>
      </section>
    </div>
  );
}