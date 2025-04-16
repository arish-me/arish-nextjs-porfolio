import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About | Arish's Portfolio",
  description: "Learn more about Arish, my background, skills, and experience",
};

export default function AboutPage() {
  return (
    <div className="py-12 space-y-12">
      <section className="space-y-4">
        <h1 className="text-4xl font-bold">About Me</h1>
        <div className="flex flex-col md:flex-row gap-8 mt-8">
          <div className="md:w-1/3">
            {/* Placeholder for a bigger profile image */}
            <div className="aspect-square relative bg-muted rounded-xl overflow-hidden flex items-center justify-center text-muted-foreground">
              Profile Image
            </div>
          </div>
          <div className="md:w-2/3 space-y-4">
            <p className="text-lg">
              Hi! I'm Arish, a passionate frontend developer focused on creating beautiful, 
              user-friendly web experiences. I enjoy working with modern frameworks and 
              technologies to build responsive, accessible applications.
            </p>
            <p>
              With a background in design and development, I bring a unique perspective 
              to every project, ensuring both aesthetics and functionality work harmoniously.
              I'm constantly learning and exploring new technologies to expand my skillset.
            </p>
            <p>
              When I'm not coding, you might find me exploring design trends, contributing to 
              open-source projects, or enjoying the outdoors.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-semibold">Experience</h2>
        <div className="space-y-8">
          {[
            {
              role: "Frontend Developer",
              company: "Company Name",
              period: "2021 - Present",
              description: "Led front-end development for various web applications using React, Next.js, and TypeScript. Implemented responsive designs and improved user experience.",
            },
            {
              role: "UI/UX Designer",
              company: "Previous Company",
              period: "2019 - 2021",
              description: "Designed user interfaces for web and mobile applications. Collaborated with development teams to implement designs and ensure pixel-perfect results.",
            },
          ].map((job, index) => (
            <div key={index} className="border-l-4 border-primary pl-4 py-1">
              <h3 className="text-xl font-medium">{job.role}</h3>
              <div className="flex justify-between text-muted-foreground">
                <span>{job.company}</span>
                <span>{job.period}</span>
              </div>
              <p className="mt-2">{job.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-semibold">Education</h2>
        <div className="border-l-4 border-primary pl-4 py-1">
          <h3 className="text-xl font-medium">Bachelor's in Computer Science</h3>
          <div className="flex justify-between text-muted-foreground">
            <span>University Name</span>
            <span>2015 - 2019</span>
          </div>
          <p className="mt-2">
            Studied algorithms, data structures, software engineering principles, and web development.
          </p>
        </div>
      </section>
    </div>
  );
} 