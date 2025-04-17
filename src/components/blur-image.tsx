/* eslint-disable */

'use client'

import { useState } from 'react'
import Image from 'next/image'

type BlurImageProps = {
  src: string | any
  alt: string
  fallbackText?: string
  size?: 'sm' | 'md' | 'lg' | '2xl' | '3xl' | '4xl'
  className?: string
  objectFit?: 'cover' | 'contain' | 'fill'
  loading?: 'lazy' | 'eager'
}

export function BlurImage({
  src,
  alt,
  fallbackText,
  size = 'md',
  className = '',
  objectFit = 'cover',
  loading = 'eager',
}: BlurImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  // Define size classes
  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-16 w-16',
    lg: 'h-24 w-24',
    '2xl': 'h-32 w-32',
    '3xl': 'h-40 w-40',
    '4xl': 'h-56 w-56',
    '5xl': 'h-64 w-64',
  }

  // Fallback if image fails to load
  if (hasError && fallbackText) {
    return (
      <div
        className={`flex items-center justify-center bg-primary text-primary-foreground font-semibold ${sizeClasses[size]} ${className}`}
      >
        {fallbackText.charAt(0).toUpperCase()}
      </div>
    )
  }

  return (
    <div className={`relative overflow-hidden ${sizeClasses[size]} ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className={`
          ${objectFit === 'cover' ? 'object-cover' : ''}
          ${objectFit === 'contain' ? 'object-contain' : ''}
          ${objectFit === 'fill' ? 'object-fill' : ''}
          transition-opacity duration-500
          ${isLoading ? 'opacity-0 scale-110' : 'opacity-100 scale-100'}
        `}
        loading={loading}
        onLoad={() => setIsLoading(false)}
        onError={() => setHasError(true)}
      />
      {isLoading && !hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted animate-pulse" />
      )}
    </div>
  )
}