import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "About | Arish's Portfolio",
  description: "Learn more about Arish, my background, skills, and experience",
};

export default function AboutPage() {
  return (
    <div className="py-16 space-y-16">
      <section className="space-y-8">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold">About Me</h1>
          <p className="text-xl text-muted-foreground">
            Full Stack Developer passionate about building beautiful, functional applications
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
          <div className="md:col-span-1 flex justify-center">
            {/* Placeholder for a bigger profile image */}
            <div className="aspect-square w-full max-w-xs relative bg-muted rounded-xl overflow-hidden flex items-center justify-center text-muted-foreground border-4 border-primary/20">
              Profile Image
            </div>
          </div>
          <div className="md:col-span-2 space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Hi there! I'm Arish</h2>
              <p className="text-lg leading-relaxed">
                I'm a passionate Full Stack Developer with expertise in creating beautiful, 
                user-friendly web experiences. I specialize in building modern web applications
                using Ruby on Rails, React, and Next.js.
              </p>
              <p className="leading-relaxed">
                With a background in both design and development, I bring a unique perspective 
                to every project, ensuring both aesthetics and functionality work harmoniously.
                I believe in clean code, intuitive design, and building applications that solve
                real problems.
              </p>
              <p className="leading-relaxed">
                When I'm not coding, you might find me exploring design trends, contributing to 
                open-source projects, reading tech blogs, or enjoying outdoor activities.
              </p>
            </div>
            
            <div className="flex gap-4 pt-4">
              <Button asChild>
                <Link href="/contact">Get In Touch</Link>
              </Button>
              <Button asChild variant="outline">
                <a href="/resume.pdf" download="Arish-Resume.pdf">Download Resume</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center">My Journey</h2>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-12">
            {[
              {
                role: "Senior Full Stack Developer",
                company: "Tech Company",
                period: "2021 - Present",
                description: "Leading development for various web applications using Ruby on Rails, React, and Next.js. Implementing responsive designs and improving user experience. Mentoring junior developers and implementing best practices across projects.",
                achievements: [
                  "Redesigned and optimized the main product, improving performance by 40%",
                  "Led a team of 5 developers to deliver major features on time and under budget",
                  "Implemented CI/CD pipeline reducing deployment time by 60%"
                ]
              },
              {
                role: "Full Stack Developer",
                company: "Previous Company",
                period: "2019 - 2021",
                description: "Developed and maintained web applications using Ruby on Rails and React. Collaborated with design teams to implement pixel-perfect UIs and ensure optimal user experience.",
                achievements: [
                  "Built and launched 3 successful client projects from inception to deployment",
                  "Integrated payment processing system reducing transaction errors by 25%",
                  "Implemented responsive design principles improving mobile conversion by 35%"
                ]
              },
              {
                role: "UI/UX Designer & Developer",
                company: "Design Studio",
                period: "2017 - 2019",
                description: "Designed user interfaces for web and mobile applications. Collaborated with development teams to implement designs and ensure pixel-perfect results.",
                achievements: [
                  "Created design systems for 5 major clients ensuring consistent branding",
                  "Reduced design-to-implementation time by 30% through better documentation",
                  "Won design award for e-commerce website redesign project"
                ]
              },
            ].map((job, index) => (
              <Card key={index} className="relative pl-6 border-l-4 border-primary">
                <CardHeader>
                  <CardTitle>{job.role}</CardTitle>
                  <CardDescription className="flex justify-between text-base">
                    <span>{job.company}</span>
                    <span>{job.period}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>{job.description}</p>
                  <div>
                    <h4 className="font-semibold mb-2">Key Achievements:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {job.achievements.map((achievement, i) => (
                        <li key={i} className="text-muted-foreground">{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center">Education</h2>
        <Card className="max-w-3xl mx-auto border-l-4 border-primary pl-6">
          <CardHeader>
            <CardTitle>Bachelor's in Computer Science</CardTitle>
            <CardDescription className="flex justify-between text-base">
              <span>University Name</span>
              <span>2013 - 2017</span>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Focused on software engineering, web development, algorithms, and data structures.
              Participated in various coding competitions and hackathons.
            </p>
            <div className="mt-4">
              <h4 className="font-semibold mb-2">Relevant Coursework:</h4>
              <div className="flex flex-wrap gap-2">
                {["Data Structures", "Algorithms", "Web Development", "Database Systems", "UI/UX Design"].map((course) => (
                  <span key={course} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="text-center space-y-6 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold">Let's Work Together</h2>
        <p className="text-lg text-muted-foreground">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>
        <Button asChild size="lg">
          <Link href="/contact">Contact Me</Link>
        </Button>
      </section>
    </div>
  );
} 