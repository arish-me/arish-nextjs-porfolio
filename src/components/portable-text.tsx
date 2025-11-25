/* eslint-disable */

'use client'

import { PortableText as SanityPortableText } from '@portabletext/react'
import type { PortableTextBlock } from '@portabletext/types'
import Image from 'next/image'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark, oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Copy, Check } from 'lucide-react'

interface PortableTextProps {
  content: PortableTextBlock[] | string
}

// Code block with copy button
function CodeBlock({ value }: { value: { code?: string; language?: string; filename?: string } }) {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [copied, setCopied] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!value?.code) return null

  const handleCopy = async () => {
    await navigator.clipboard.writeText(value.code!)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const isDark = mounted && resolvedTheme === 'dark'

  return (
    <div className="my-6 rounded-lg overflow-hidden border border-border">
      <div className="flex items-center justify-between px-4 py-2 bg-muted/50 border-b border-border">
        <span className="text-sm font-mono text-muted-foreground">
          {value.filename || value.language || 'code'}
        </span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-2.5 py-1 text-sm rounded-md bg-background hover:bg-muted border border-border text-muted-foreground hover:text-foreground transition-colors"
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5 text-green-500" />
              <span className="text-green-500">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      <SyntaxHighlighter
        language={value.language || 'text'}
        style={isDark ? oneDark : oneLight}
        showLineNumbers
        customStyle={{
          margin: 0,
          padding: '1rem',
          fontSize: '0.875rem',
          background: isDark ? '#282c34' : '#fafafa',
          borderRadius: 0,
        }}
        lineNumberStyle={{
          minWidth: '2.5em',
          paddingRight: '1em',
          color: isDark ? '#636d83' : '#999',
          userSelect: 'none',
        }}
      >
        {value.code}
      </SyntaxHighlighter>
    </div>
  )
}

// Custom components for PortableText
const components = {
  types: {
    image: ({ value }: any) => {
      if (!value?.src && !value?.asset) return null
      const imageUrl = value.src || value.asset?.url || ''
      if (!imageUrl) return null
      
      return (
        <div className="my-8">
          <Image
            src={imageUrl}
            alt={value.alt || 'Image'}
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
    code: ({ value }: any) => <CodeBlock value={value} />,
    video: ({ value }: any) => {
      if (!value?.url) return null

      const youtubeRegex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/
      const youtubeMatch = value.url.match(youtubeRegex)
      const vimeoRegex = /vimeo\.com\/(?:.*\/)?(\d+)/
      const vimeoMatch = value.url.match(vimeoRegex)

      if (youtubeMatch) {
        return (
          <div className="my-8">
            <div className="relative w-full aspect-video rounded-lg overflow-hidden">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${youtubeMatch[1]}`}
                title="YouTube video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        )
      }

      if (vimeoMatch) {
        return (
          <div className="my-8">
            <div className="relative w-full aspect-video rounded-lg overflow-hidden">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://player.vimeo.com/video/${vimeoMatch[1]}`}
                title="Vimeo video"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        )
      }

      return (
        <div className="my-8">
          <video src={value.url} controls className="w-full rounded-lg" />
        </div>
      )
    },
  },
  marks: {
    code: ({ children }: any) => (
      <code className="px-1.5 py-0.5 rounded text-[0.9em] font-mono bg-muted border border-border">
        {children}
      </code>
    ),
    link: ({ value, children }: any) => {
      const isExternal = (value?.href || '').startsWith('http')
      return (
        <a
          href={value?.href}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
          className="text-primary hover:underline"
        >
          {children}
        </a>
      )
    },
    strong: ({ children }: any) => <strong className="font-semibold">{children}</strong>,
    em: ({ children }: any) => <em className="italic">{children}</em>,
  },
  block: {
    normal: ({ children }: any) => (
      <p className="text-base leading-8 mb-6">{children}</p>
    ),
    h1: ({ children }: any) => (
      <h1 className="text-3xl font-bold mt-10 mb-6">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-2xl font-semibold mt-8 mb-4">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-xl font-medium mt-6 mb-3">{children}</h3>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-primary/40 pl-6 my-6 text-muted-foreground italic">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => <ul className="list-disc ml-6 mb-6 space-y-2">{children}</ul>,
    number: ({ children }: any) => <ol className="list-decimal ml-6 mb-6 space-y-2">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }: any) => <li className="leading-7">{children}</li>,
    number: ({ children }: any) => <li className="leading-7">{children}</li>,
  },
}

export function PortableText({ content }: PortableTextProps) {
  if (typeof content === 'string') {
    try {
      const parsed = JSON.parse(content)
      return <SanityPortableText value={parsed} components={components} />
    } catch {
      return (
        <div className="space-y-4">
          {content.split('\n\n').map((p, i) => (
            <p key={i} className="text-base leading-7">{p}</p>
          ))}
        </div>
      )
    }
  }

  return <SanityPortableText value={content} components={components} />
}
