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
       {/* SEO Content Section */}
       <section className="container mx-auto px-4">
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h2 className="text-3xl font-bold mb-6">FullStack Rails & React Developer</h2>
          <p className="text-lg text-muted-foreground mb-6">
            As a passionate FullStack developer specializing in Ruby on Rails and React, I bring over 10 years of experience in building scalable web applications, modern user interfaces, and robust backend systems. My expertise spans the entire development stack, from database design and API development to responsive frontend interfaces and deployment strategies.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Backend Development</h3>
              <p className="text-muted-foreground mb-4">
                I specialize in Ruby on Rails development, creating RESTful APIs, implementing authentication systems, and designing efficient database schemas. My backend work includes user management, payment processing, real-time features, and third-party integrations.
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Ruby on Rails API development</li>
                <li>PostgreSQL and MySQL database design</li>
                <li>Authentication and authorization systems</li>
                <li>Payment gateway integrations</li>
                <li>Background job processing with Sidekiq</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Frontend Development</h3>
              <p className="text-muted-foreground mb-4">
                On the frontend, I build responsive and interactive user interfaces using React, TypeScript, and modern CSS frameworks. I focus on creating seamless user experiences with smooth animations, accessibility compliance, and cross-browser compatibility.
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>React and Next.js applications</li>
                <li>TypeScript for type safety</li>
                <li>Tailwind CSS and styled-components</li>
                <li>State management with Redux and Zustand</li>
                <li>Progressive Web App development</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 p-6 bg-muted rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Development Approach</h3>
            <p className="text-muted-foreground mb-4">
              I follow industry best practices including test-driven development, code reviews, and continuous integration. My development process emphasizes clean code architecture, performance optimization, and security best practices. I'm experienced with Docker containerization, AWS cloud services, and CI/CD pipelines for seamless deployment workflows.
            </p>
            <p className="text-muted-foreground">
              Whether you need a complete web application, API development, or frontend optimization, I provide end-to-end solutions that are scalable, maintainable, and user-friendly. Let's discuss how I can help bring your project to life with modern web technologies and best practices.
            </p>
          </div>
        </div>
      </section>

      <FeaturedProject />
      <HomeCTA />
    </div>
  );
}
