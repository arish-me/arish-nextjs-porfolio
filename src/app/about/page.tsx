/* eslint-disable */

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Logo from '@/images/arishkhan.jpg';
import { BlurImage } from "@/components/blur-image"
import { generateMetadata } from '@/lib/seo';

const title = 'About Me';
export const metadata = generateMetadata(title);
export default function AboutPage() {
  return (
    <div className="py-16 space-y-16">
      <section className="space-y-8">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold">About Me</h1>
          <p className="text-xl text-muted-foreground">
            Senior Software Engineer & Team Lead specializing in Ruby on Rails.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
          <div className="md:col-span-2 space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Hi there! I'm Arish Khan</h2>
              <p className="text-lg leading-relaxed">
                I am a Senior Software Engineer and Team Lead with over 8+ years of experience in web development, specializing in Ruby on Rails. I have built, scaled, and maintained products in various sectors including procurement software, CRM, data analysis, travel, and supply chain management.
              </p>
              <p className="leading-relaxed">
                Throughout my career, I have successfully led cross-functional teams to create scalable applications from scratch and improve performance in large-scale production systems. I am passionate about clean code, efficient solutions, and delivering high-quality products.
              </p>
              <p className="leading-relaxed">
                I am also an AWS Solution Innovator, recognized for effectively leveraging AWS to optimize cloud-based application performance and scalability.
              </p>
            </div>

            <div className="flex gap-4 pt-4">
              <Button asChild>
                <Link href="/contact/">Get In Touch</Link>
              </Button>
              <Button asChild variant="outline">
                <a
                  href="https://drive.google.com/file/d/1m0JhsxZl56SDPc0GEijBPyyRnufZk8Rt/view?usp=sharing"
                  download="Arish-Resume.pdf"
                  target="_blank" // Opens the link in a new tab
                  rel="noopener noreferrer" // Recommended for security
                >
                  Download Resume
                </a>
              </Button>
            </div>
          </div>

          <div className="md:col-span-1 flex justify-center">
            <div className="aspect-square w-full max-w-xs relative bg-muted rounded-xl overflow-hidden flex items-center justify-center text-muted-foreground border-4 border-primary/20">
              <BlurImage
                src={Logo}
                alt="Arish's avatar"
                size="4xl"
                className="h-full w-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center">Professional Experience</h2>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-12">
            {[
              {
                role: "Team Lead",
                company: "Tietoevry India Pvt Ltd",
                period: "Dec 2022 – Present",
                description: "Led end-to-end development of symplr Talent Sourcing, designing AI-driven features for candidate matching and CRM, automating workflows, and ensuring HIPAA compliance. Managed a cross-functional team, optimized performance for scalability, and aligned with stakeholders through regular updates.",
                achievements: [
                  "Designed AI-driven features for candidate matching and CRM.",
                  "Automated workflows and ensured HIPAA compliance.",
                  "Optimized performance for scalability."
                ],
              },
              {
                role: "Senior Software Engineer",
                company: "BigBinary Pvt Ltd",
                period: "Apr 2021 – Dec 2022",
                description: "Developed and optimized scalable applications using Rails, React, and Kubernetes for clients in procurement, form building, and eSourcing, with a strong focus on database management and performance.",
                achievements: [
                  "Developed scalable applications using Rails, React, and Kubernetes.",
                  "Optimized database management and performance.",
                  "Worked on procurement, form building, and eSourcing projects.",
                ],
              },
              {
                role: "Senior Software Engineer | Client: Market Dojo",
                company: "Cyber Infrastructure Pvt. Ltd",
                period: "May 2019 – Mar 2021",
                description: "Lead the development of a scalable eSourcing platform for Market Dojo, a client in the procurement industry. Spearheaded a team focused on feature enhancement, bug resolution, and performance optimization. Implemented CI/CD pipelines using GitHub Actions.",
                achievements: [
                  "Lead development of a scalable eSourcing platform.",
                  "Implemented CI/CD pipelines using GitHub Actions.",
                  "Focused on feature enhancement, bug resolution, and performance optimization.",
                ],
              },
              {
                role: "Software Engineer | FlightsMachine | BuyBaggage | MyX Fitness",
                company: "NCS Private Ltd.",
                period: "Jun 2016 – Mar 2019",
                description: "Led and developed multiple client projects across sectors, including a flight deals alert system, a baggage management platform, and a fitness tech solution. Built and optimized applications for scalability, designed REST APIs, and implemented third-party integrations.",
                achievements: [
                  "Developed flight deals alert system with Twilio integration.",
                  "Built baggage management platform with Stripe payment integration.",
                  "Developed fitness tech solution and designed REST APIs.",
                ],
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
        <h2 className="text-3xl font-bold text-center">Education & Training</h2>
        <Card className="max-w-3xl mx-auto border-l-4 border-primary pl-6">
          <CardHeader>
            <CardTitle>Bachelor of Engineering</CardTitle>
            <CardDescription className="flex justify-between text-base">
              <span>Sushila Devi Bansal College of Engineering</span>
              <span>2011 - 2015</span>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Focused on software engineering and web development.
            </p>
          </CardContent>
        </Card>
        <Card className="max-w-3xl mx-auto border-l-4 border-primary pl-6">
          <CardHeader>
            <CardTitle>Agile & Scrum Training</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Completed Agile Training, including Scrum Master methodologies, with hands-on experience leading Agile sprints and managing cross-functional teams.
            </p>
          </CardContent>
        </Card>

        <Card className="max-w-3xl mx-auto border-l-4 border-primary pl-6">
          <CardHeader>
            <CardTitle>AWS Solution Innovator</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Recognized for effectively leveraging AWS to optimize cloud-based application performance and scalability, implementing solutions that improved system reliability and reduced operational costs, despite no formal AWS training.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="text-center space-y-6 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold">Let's Work Together</h2>
        <p className="text-lg text-muted-foreground">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>
        <Button asChild size="lg">
          <Link href="/contact/">Contact Me</Link>
        </Button>
      </section>
    </div>
  );
}