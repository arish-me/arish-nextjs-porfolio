/* eslint-disable */

'use client'

import { PortableText as SanityPortableText } from '@portabletext/react'
import type { PortableTextBlock } from '@portabletext/types'
import Image from 'next/image'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus, vs } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { urlFor } from '@/lib/sanity/client'

interface PortableTextProps {
  content: PortableTextBlock[] | string
}

// Custom components for PortableText
const components = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset) {
        return null
      }
      const imageUrl = urlFor(value).width(800).height(450).url()
      if (!imageUrl) {
        return null
      }
      return (
        <div className="my-8">
          <Image
            src={imageUrl}
            alt={value.alt || 'Lesson image'}
            width={800}
            height={450}
            className="rounded-lg w-full h-auto"
          />
          {value.caption && (
            <p className="text-sm text-muted-foreground mt-2 text-center">
              {value.caption}
            </p>
          )}
        </div>
      )
    },
    code: ({ value }: any) => {
      const { theme } = useTheme()
      const [mounted, setMounted] = useState(false)

      useEffect(() => {
        setMounted(true)
      }, [])

      if (!value?.code) {
        return null
      }

      const codeStyle = mounted && theme === 'dark' ? vscDarkPlus : vs

      return (
        <div className="my-6">
          {value.filename && (
            <div className="bg-muted px-4 py-2 rounded-t-lg border-b text-sm font-mono">
              {value.filename}
            </div>
          )}
          <SyntaxHighlighter
            language={value.language || 'javascript'}
            style={codeStyle}
            customStyle={{
              margin: 0,
              borderRadius: value.filename ? '0 0 0.5rem 0.5rem' : '0.5rem',
              fontSize: '0.875rem',
            }}
            showLineNumbers
          >
            {value.code}
          </SyntaxHighlighter>
        </div>
      )
    },
    video: ({ value }: any) => {
      if (!value?.url) {
        return null
      }

      // Handle YouTube URLs
      const youtubeRegex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/
      const youtubeMatch = value.url.match(youtubeRegex)

      // Handle Vimeo URLs
      const vimeoRegex = /vimeo\.com\/(?:.*\/)?(\d+)/
      const vimeoMatch = value.url.match(vimeoRegex)

      if (youtubeMatch) {
        const videoId = youtubeMatch[1]
        return (
          <div className="my-8">
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                src={`https://www.youtube.com/embed/${videoId}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            {value.caption && (
              <p className="text-sm text-muted-foreground mt-2 text-center">
                {value.caption}
              </p>
            )}
          </div>
        )
      }

      if (vimeoMatch) {
        const videoId = vimeoMatch[1]
        return (
          <div className="my-8">
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                src={`https://player.vimeo.com/video/${videoId}`}
                title="Vimeo video player"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            </div>
            {value.caption && (
              <p className="text-sm text-muted-foreground mt-2 text-center">
                {value.caption}
              </p>
            )}
          </div>
        )
      }

      // Direct video URL
      return (
        <div className="my-8">
          <video
            src={value.url}
            controls
            className="w-full rounded-lg"
          >
            Your browser does not support the video tag.
          </video>
          {value.caption && (
            <p className="text-sm text-muted-foreground mt-2 text-center">
              {value.caption}
            </p>
          )}
        </div>
      )
    },
  },
  marks: {
    code: ({ children }: any) => (
      <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono">
        {children}
      </code>
    ),
    link: ({ value, children }: any) => {
      const target = (value?.href || '').startsWith('http') ? '_blank' : undefined
      return (
        <a
          href={value?.href}
          target={target}
          rel={target === '_blank' ? 'noopener noreferrer' : undefined}
          className="text-primary hover:underline"
        >
          {children}
        </a>
      )
    },
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-4xl font-bold mt-8 mb-4">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-3xl font-bold mt-6 mb-3">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-2xl font-semibold mt-4 mb-2">{children}</h3>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-primary pl-4 italic my-4 text-muted-foreground">
        {children}
      </blockquote>
    ),
  },
}

export function PortableText({ content }: PortableTextProps) {
  // If content is a string (from old hardcoded data), just render it
  if (typeof content === 'string') {
    try {
      // Try to parse as JSON (PortableText)
      const parsed = JSON.parse(content)
      return <SanityPortableText value={parsed} components={components} />
    } catch {
      // If not JSON, render as plain text
      return <div className="whitespace-pre-wrap">{content}</div>
    }
  }

  // If content is already PortableText blocks
  return <SanityPortableText value={content} components={components} />
}

