'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { BlurImage } from '@/components/blur-image'
import Logo from '@/images/arishme.png';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react'
import { SOCIAL_LINKS } from '@/config/links'
import {
  SITE_FACEBOOK_URL,
  SITE_GITHUB_URL,
  SITE_INSTAGRAM_URL,
  SITE_X_URL,
  SITE_YOUTUBE_URL,
  SITE_LINKEDIN_URL
} from '@/lib/constants'
// Social links
const socialLinks = [
  {
    name: 'GitHub',
    url: SITE_GITHUB_URL,
    icon: <Github className="h-5 w-5" />
  },
  {
    name: 'LinkedIn',
    url: SITE_LINKEDIN_URL,
    icon: <Linkedin className="h-5 w-5" />
  },
  {
    name: 'Twitter',
    url: SITE_X_URL,
    icon: <Twitter className="h-5 w-5" />
  },
  {
    name: 'Email',
    url: 'mailto:hello@arishdev.com',
    icon: <Mail className="h-5 w-5" />
  }
]

// Navigation links
const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' }
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-card mt-16">
      <div className="container max-w-5xl mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="md:col-span-2 space-y-4">
            <motion.div
              className="flex items-center gap-2"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
            >
              <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold">
                <BlurImage
              src={Logo}
              alt="Arish's avatar"

              size="sm"
              className="rounded-full"
            />
              </div>
              <span className="font-semibold text-lg">Arish</span>
            </motion.div>
            <motion.p
              className="text-muted-foreground text-sm"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              Full Stack Developer creating amazing apps using Rails and React.
              Based in India, working with clients worldwide.
            </motion.p>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <motion.h3
              className="font-medium"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
            >
              Quick Links
            </motion.h3>
            <motion.ul
              className="space-y-2"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Social & Contact */}
          <div className="space-y-4">
            <motion.h3
              className="font-medium"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
            >
              Connect
            </motion.h3>
            <motion.div
              className="flex gap-3"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center h-10 w-10 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Copyright */}
        <motion.div
          className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <p>© {currentYear} Arish. All rights reserved.</p>
          <p className="mt-1">Built with Next.js, Tailwind CSS, and Shadcn UI</p>
        </motion.div>
      </div>
    </footer>
  )
}