/* eslint-disable */

import Symplr from '@/images/symplr-logo-vector.png';
import MarketDojo from '@/images/marketdojo.jpg';
import Vineti from '@/images/vineti.jpg';
import Bukukas from '@/images/bukukas.jpg';
import Manofix from '@/images/manofix.jpg';
import FlightsMachine from '@/images/flightsmachine.jpg';
import NeetForm from '@/images/neetoForm.jpg';

export const PROJECTS_DATA: ProjectsData =
[
  {
    id: 1,
    title: "Symplr Talent Sourcing Platform",
    description: "Streamlined talent acquisition for healthcare, powered by Ruby on Rails and React. Efficiently builds and manages talent pipelines with data-driven insights.",
    longDescription: "Symplr Talent Sourcing, built on the Symplr Platform, empowers healthcare organizations to proactively address workforce needs. Features include enhanced candidate engagement, workflow automation, and comprehensive data analytics.",
    technologies: ["Ruby on Rails", "ReactJS", "GraphQL", "Solr", "Managed Kafka", "AWS"],
    image: Symplr,
    link: "https://www.symplr.com/products/symplr-talent-sourcing",
    github: null,
    featured: true,
    tags: ["Ruby on Rails", "ReactJS", "GraphQL", "AWS"]
  },
  {
    id: 2,
    title: "Market Dojo eSourcing Solutions",
    description: "On-demand procurement software simplifying supplier management. Features RFx, eAuctions, and AI-powered automation for efficient eSourcing.",
    longDescription: "Market Dojo offers versatile eSourcing tools designed for ease of use, enabling businesses to manage essential procurement objectives. Features include automated supplier onboarding, secure contract management, and advanced analytics for strategic decision-making.",
    technologies: ["Ruby on Rails", "ReactJS", "TypeScript", "Elasticsearch", "Digital Ocean"],
    image: MarketDojo,
    link: "https://marketdojo.com/",
    github: null,
    featured: true,
    tags: ["Ruby on Rails", "ReactJS", "TypeScript", "eSourcing"]
  },
  {
    id: 3,
    title: "Vineti Cell Therapy Platform",
    description: "Cloud-based software streamlining personalized cell therapy production, enhancing collaboration and efficiency in advanced medical treatments.",
    longDescription: "Vineti's platform optimizes personalized cell therapy workflows, facilitating seamless coordination between therapy providers, medical centers, and logistics. Key contributions include feature development using Ruby on Rails and React, performance enhancements for scalability, and close collaboration with cross-functional teams to ensure patient-centered outcomes.",
    technologies: ["Ruby on Rails", "ReactJS", "TypeScript"],
    image: Vineti,
    link: null,
    github: null,
    featured: true,
    tags: ["Ruby on Rails", "ReactJS", "Cell Therapy", "Cloud Software"]
  },
  {
    id: 4,
    title: "Bukukas Digital Bookkeeping",
    description: "Digital bookkeeping app for Southeast Asian businesses, offering real-time financial insights and simplified cash flow management.",
    longDescription: "Bukukas empowers businesses with intuitive financial tracking and reporting tools. Key contributions include developing core bookkeeping features with Ruby on Rails and React, implementing real-time data via GraphQL, and enhancing platform scalability and security.",
    technologies: ["Ruby on Rails", "React", "GraphQL"],
    image: Bukukas,
    link: "https://bukukas.com/",
    github: null,
    featured: true,
    tags: ["Bookkeeping", "FinTech", "Ruby on Rails", "React"]
  },
  {
    id: 5,
    title: "neetoForm No-Code Form Builder",
    description: "No-code platform for creating custom forms and surveys, simplifying data collection and analysis.",
    longDescription: "neetoForm enables effortless form creation through an intuitive interface. Key contributions include developing scalable features, integrating third-party APIs, and collaborating on user experience to ensure accessibility.",
    technologies: ["React", "JavaScript"],
    image: NeetForm,
    link: "https://neetoform.com/",
    github: null,
    featured: true,
    tags: ["No-Code", "Form Builder", "Data Collection", "React"]
  },
  {
    id: 6,
    title: "Manofix Handyman Marketplace",
    description: "Handyman service marketplace connecting users with local freelancers for efficient task completion.",
    longDescription: "Manofix simplifies task hiring with a user-centric platform. Key contributions include Rails application development for task management, Stripe integration for secure payments, and Twilio integration for real-time SMS notifications.",
    technologies: ["Ruby on Rails", "Stripe", "Twilio"],
    image: Manofix,
    link: "https://manofix.com/",
    github: null,
    featured: false,
    tags: ["Marketplace", "Handyman", "Ruby on Rails", "Stripe"]
  },
  {
    id: 7,
    title: "FlightsMachine Flight Deal Alerts",
    description: "Real-time flight deal notification system, delivering personalized alerts to budget travelers.",
    longDescription: "FlightsMachine provides timely flight deal alerts via SMS and email. Key contributions include scalable Sinatra application development, Stripe payment integration, Twilio SMS integration, and web scraping for real-time deal sourcing.",
    technologies: ["Sinatra", "Stripe", "Twilio", "Web Scraping"],
    image: FlightsMachine,
    link: null,
    github: null,
    featured: false,
    tags: ["Flight Deals", "Notifications", "Web Scraping", "Sinatra"]
  }
]