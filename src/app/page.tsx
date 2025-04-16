import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-12 py-12">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row gap-8 items-center">
        <div className="flex-1 space-y-6">
          <h1 className="text-5xl font-bold">Hi, I'm Arish</h1>
          <p className="text-xl text-muted-foreground">
            Frontend Developer | Creative Coder | UI/UX Enthusiast
          </p>
          <p className="text-lg">
            I build beautiful, responsive websites and applications with modern technologies.
          </p>
          <div className="flex gap-4 pt-4">
            <Link 
              href="/projects"
              className="bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90"
            >
              View My Work
            </Link>
            <Link 
              href="/contact"
              className="border border-input px-6 py-3 rounded-md hover:bg-accent"
            >
              Contact Me
            </Link>
          </div>
        </div>
        <div className="w-64 h-64 relative rounded-full overflow-hidden border-4 border-primary">
          {/* Placeholder for profile image - replace with your own */}
          <div className="absolute inset-0 bg-muted flex items-center justify-center text-muted-foreground">
            Profile Image
          </div>
        </div>
      </section>
      
      {/* Featured Skills */}
      <section className="py-8">
        <h2 className="text-3xl font-semibold mb-6">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {["React", "Next.js", "TypeScript", "Tailwind CSS", "UI/UX Design", "Responsive Design", "JavaScript", "HTML/CSS"].map((skill) => (
            <div key={skill} className="bg-card p-4 rounded-lg border">
              {skill}
            </div>
          ))}
        </div>
      </section>
      
      {/* Featured Projects Preview */}
      <section className="py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-semibold">Featured Projects</h2>
          <Link href="/projects" className="text-primary hover:underline">
            View all →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2].map((project) => (
            <div key={project} className="bg-card border rounded-lg overflow-hidden flex flex-col">
              <div className="h-48 bg-muted flex items-center justify-center">
                Project Screenshot
              </div>
              <div className="p-4 flex-1">
                <h3 className="text-xl font-medium">Project Title {project}</h3>
                <p className="text-muted-foreground mt-2">
                  A brief description of this amazing project and the technologies used.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
