'use client'

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark, oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
import { Copy, Check, Link as LinkIcon } from 'lucide-react'
import Image from 'next/image'

// Code block with syntax highlighting and copy button
function CodeBlock({ children, language }: { children: string; language?: string }) {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [copied, setCopied] = useState(false)

  useEffect(() => setMounted(true), [])

  const handleCopy = async () => {
    await navigator.clipboard.writeText(children)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const isDark = mounted && resolvedTheme === 'dark'
  const detectedLang = language || 'text'

  return (
    <div className="my-6 rounded-lg overflow-hidden border border-border">
      <div className="flex items-center justify-between px-4 py-2 bg-muted/50 border-b border-border">
        <span className="text-sm font-mono text-muted-foreground">{detectedLang}</span>
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
        language={detectedLang || 'bash'}
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
        {children.trim()}
      </SyntaxHighlighter>
    </div>
  )
}

// Heading with anchor link
function Heading({ level, children, id }: { level: number; children: React.ReactNode; id?: string }) {
  const [showLink, setShowLink] = useState(false)

  const getText = (node: React.ReactNode): string => {
    if (typeof node === 'string') return node
    if (Array.isArray(node)) return node.map(getText).join('')
    if (node && typeof node === 'object' && 'props' in node) return getText((node as any).props.children)
    return ''
  }

  const text = getText(children)
  const slug = id || text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

  const styles: Record<number, string> = {
    1: 'text-3xl font-bold mt-12 mb-6 pb-4 border-b border-border',
    2: 'text-2xl font-semibold mt-10 mb-4',
    3: 'text-xl font-medium mt-8 mb-3',
    4: 'text-lg font-medium mt-6 mb-2',
    5: 'text-base font-medium mt-4 mb-2',
    6: 'text-sm font-medium mt-4 mb-2',
  }

  const Tag = `h${level}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

  return (
    <Tag
      id={slug}
      className={`group flex items-center gap-2 scroll-mt-24 ${styles[level] || styles[6]}`}
      onMouseEnter={() => setShowLink(true)}
      onMouseLeave={() => setShowLink(false)}
    >
      <span>{children}</span>
    </Tag>
  )
}

interface MDXContentProps {
  content: any // Can be string, array, or object
}

export function MDXContent({ content }: MDXContentProps) {
  if (!content) return null

  // Convert content to markdown string
  let markdownContent: string = ''

  if (typeof content === 'string') {
    markdownContent = content
  } else if (Array.isArray(content)) {
    // If it's an array of document nodes (from Keystatic's document field)
    // Try to extract text content
    markdownContent = content.map((node: any) => {
      if (typeof node === 'string') return node
      if (node.text) return node.text
      if (node.children) {
        return node.children.map((child: any) => child.text || '').join('')
      }
      return ''
    }).join('\n\n')
  } else if (typeof content === 'object') {
    // If it's wrapped in an object
    if (content.content && typeof content.content === 'string') {
      markdownContent = content.content
    } else if (content.raw) {
      markdownContent = content.raw
    }
  }

  if (!markdownContent) {
    console.warn('Could not extract markdown content from:', typeof content)
    return null
  }

  return (
    <div className="mdx-content">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          // Headings
          h1: ({ children, id }) => <Heading level={1} id={id}>{children}</Heading>,
          h2: ({ children, id }) => <Heading level={2} id={id}>{children}</Heading>,
          h3: ({ children, id }) => <Heading level={3} id={id}>{children}</Heading>,
          h4: ({ children, id }) => <Heading level={4} id={id}>{children}</Heading>,
          h5: ({ children, id }) => <Heading level={5} id={id}>{children}</Heading>,
          h6: ({ children, id }) => <Heading level={6} id={id}>{children}</Heading>,

          // Paragraphs
          p: ({ children }) => (
            <p className="text-base leading-8 mb-6 text-foreground/90">{children}</p>
          ),

          // Code blocks
          code: ({ className, children, ...props }) => {
            const match = /language-(\w+)/.exec(className || '')
            const isInline = !match && !className

            if (isInline) {
              return (
                <code className="px-1.5 py-0.5 rounded text-[0.9em] font-mono bg-muted border border-border" {...props}>
                  {children}
                </code>
              )
            }

            return (
              <CodeBlock language={match?.[1]}>
                {String(children).replace(/\n$/, '')}
              </CodeBlock>
            )
          },

          // Pre (wrapper for code blocks)
          pre: ({ children }) => <>{children}</>,

          // Lists
          ul: ({ children }) => (
            <ul className="list-disc ml-6 mb-6 space-y-2">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal ml-6 mb-6 space-y-2">{children}</ol>
          ),
          li: ({ children }) => (
            <li className="leading-7 pl-1">{children}</li>
          ),

          // Blockquote
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-primary/40 pl-6 my-6 text-muted-foreground italic">
              {children}
            </blockquote>
          ),

          // Links
          a: ({ href, children }) => {
            const isExternal = href?.startsWith('http')
            return (
              <a
                href={href}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
                className="text-primary font-medium hover:underline underline-offset-2"
              >
                {children}
              </a>
            )
          },

          // Images
          img: ({ src, alt }) => (
            <figure className="my-8">
              <Image
                src={src || ''}
                alt={alt || ''}
                width={800}
                height={450}
                className="rounded-lg w-full h-auto border border-border"
              />
              {alt && <figcaption className="text-center text-sm text-muted-foreground mt-2">{alt}</figcaption>}
            </figure>
          ),

          // Horizontal rule
          hr: () => <hr className="my-8 border-border" />,

          // Strong and emphasis
          strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
          em: ({ children }) => <em className="italic">{children}</em>,

          // Tables
          table: ({ children }) => (
            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse border border-border">{children}</table>
            </div>
          ),
          thead: ({ children }) => <thead className="bg-muted">{children}</thead>,
          th: ({ children }) => (
            <th className="border border-border px-4 py-2 text-left font-semibold">{children}</th>
          ),
          td: ({ children }) => (
            <td className="border border-border px-4 py-2">{children}</td>
          ),
        }}
      >
        {markdownContent}
      </ReactMarkdown>
    </div>
  )
}
