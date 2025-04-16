import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Projects | Arish's Portfolio",
  description: "Explore my recent projects and technical work",
};

// Project data (in a real app, this could come from a CMS or API)
const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A fully responsive e-commerce website built with Next.js, featuring product filtering, search functionality, shopping cart, and payment processing with Stripe.",
    longDescription: "This project was built to provide a complete online shopping experience. I implemented features like real-time inventory updates, user reviews, wishlist functionality, and a streamlined checkout process. The admin dashboard allows for easy product management and order tracking.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "Prisma", "PostgreSQL"],
    image: "/placeholder.jpg", // Replace with actual image path
    link: "https://ecommerce-demo.example.com",
    github: "https://github.com/username/ecommerce-platform",
    featured: true,
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A productivity app with drag-and-drop task management, team collaboration features, and real-time updates using WebSockets.",
    longDescription: "This application helps teams organize their work efficiently. I built features like custom board views, task dependencies, deadline notifications, and performance analytics. The app includes role-based permissions and integrates with popular calendar services.",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io", "Redux", "Express"],
    image: "/placeholder.jpg", // Replace with actual image path
    link: "https://tasks-app.example.com",
    github: "https://github.com/username/task-management",
    featured: true,
  },
  {
    id: 3,
    title: "Content Management System",
    description: "A modern CMS built with Ruby on Rails, featuring a rich text editor, media library, user management, and custom content types.",
    longDescription: "I developed this CMS to provide content creators with a flexible yet powerful publishing platform. The system includes features like content scheduling, revision history, custom fields, and SEO optimization tools. The API-first approach allows for headless CMS functionality.",
    technologies: ["Ruby on Rails", "PostgreSQL", "Hotwire", "Stimulus", "AWS S3", "Redis"],
    image: "/placeholder.jpg", // Replace with actual image path
    link: "https://cms-demo.example.com",
    github: "https://github.com/username/rails-cms",
    featured: false,
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description: "An interactive weather application that provides current weather information and forecasts for multiple locations with beautiful data visualizations.",
    longDescription: "This dashboard helps users track weather conditions across multiple locations simultaneously. I implemented features like historical weather data charts, severe weather alerts, custom location groups, and weather-based recommendations. The app uses geolocation for precise local forecasts.",
    technologies: ["React", "Chart.js", "OpenWeather API", "Tailwind CSS", "Vite"],
    image: "/placeholder.jpg", // Replace with actual image path
    link: "https://weather-app.example.com",
    github: "https://github.com/username/weather-dashboard",
    featured: false,
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "A personal portfolio website built with Next.js and Shadcn UI components to showcase my projects and skills.",
    longDescription: "I designed and built this portfolio to showcase my work and skills as a developer. The site features a clean, responsive design with subtle animations and a dark/light mode. The project section dynamically loads content and includes filtering capabilities.",
    technologies: ["Next.js", "TypeScript", "Shadcn UI", "Tailwind CSS", "Framer Motion"],
    image: "/placeholder.jpg", // Replace with actual image path
    link: "/",
    github: "https://github.com/username/portfolio",
    featured: false,
  },
];

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
          {projects.filter(p => p.featured).map((project) => (
            <Card key={project.id} className="overflow-hidden group hover:border-primary transition-all">
              <div className="h-64 bg-muted flex items-center justify-center text-muted-foreground relative overflow-hidden">
                Project Screenshot
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
          {projects.filter(p => !p.featured).map((project) => (
            <Card key={project.id} className="overflow-hidden group hover:border-primary transition-all flex flex-col">
              <div className="h-48 bg-muted flex items-center justify-center text-muted-foreground">
                Project Screenshot
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