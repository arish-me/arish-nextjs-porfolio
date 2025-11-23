/* eslint-disable */

import React, { useRef } from "react";
import {
  type IconType,
  SiFacebook,
  SiGithub,
  SiInstagram,
  SiX,
  SiLinkedin,
  SiYoutube
} from '@icons-pack/react-simple-icons'
import {
  BarChartIcon,
  FlameIcon,
  MessageCircleIcon,
  MonitorIcon,
  PencilIcon,
  UserCircleIcon,
  GraduationCap
} from 'lucide-react'

import {
  SITE_FACEBOOK_URL,
  SITE_GITHUB_URL,
  SITE_INSTAGRAM_URL,
  SITE_X_URL,
  SITE_YOUTUBE_URL,
  SITE_LINKEDIN_URL
} from '@/lib/constants'

type HeaderLinks = Array<{
  icon: React.ReactNode
  href: string
  text: string
}>

type FooterLinks = Array<{
  id: number
  links: Array<{
    href: string
    text: string
  }>
}>

type SocialLinks = Array<{
  href: string
  title: string
  icon: IconType
}>

export const HEADER_LINKS: HeaderLinks = [
  {
    icon: <BarChartIcon className='size-3.5' />,
    href: '/',
    text: 'Home'
  },
  {
    icon: <PencilIcon className='size-3.5' />,
    href: '/blogs/',
    text: 'Blogs'
  },
  {
    icon: <UserCircleIcon className='size-3.5' />,
    href: '/about/',
    text: 'About'
  },
  {
    icon: <FlameIcon className='size-3.5' />,
    href: '/projects/',
    text: 'Projects'
  },
  {
    icon: <GraduationCap className='size-3.5' />,
    href: '/courses/',
    text: 'Courses'
  },
  {
    icon: <MessageCircleIcon className='size-3.5' />,
    href: '/contact/',
    text: 'Contact'
  }
]

export const FOOTER_LINKS: FooterLinks = [
  {
    id: 1,
    links: [
      {
        href: '/',
        text: 'Home'
      },
      {
        href: '/projects/',
        text: 'Projects'
      },
      {
        href: '/about/',
        text: 'About'
      },
      {
        href: '/contact/',
        text: 'Contact'
      }
    ]
  },
  {
    id: 3,
    links: [
      {
        href: SITE_LINKEDIN_URL,
        text: 'LinkedIn'
      },
      {
        href: SITE_INSTAGRAM_URL,
        text: 'Instagram'
      },
      {
        href: SITE_GITHUB_URL,
        text: 'GitHub'
      },
      {
        href: SITE_YOUTUBE_URL,
        text: 'YouTube'
      }
    ]
  }
]

export const SOCIAL_LINKS: SocialLinks = [
  {
    href: SITE_GITHUB_URL,
    title: 'GitHub',
    icon: SiGithub
  },
  {
    href: SITE_LINKEDIN_URL,
    title: 'LinkedIn',
    icon: SiLinkedin
  },
  {
    href: SITE_FACEBOOK_URL,
    title: 'Facebook',
    icon: SiFacebook
  },
  {
    href: SITE_INSTAGRAM_URL,
    title: 'Instagram',
    icon: SiInstagram
  },
  {
    href: SITE_X_URL,
    title: 'X',
    icon: SiX
  },
  {
    href: SITE_YOUTUBE_URL,
    title: 'YouTube',
    icon: SiYoutube
  }
]

