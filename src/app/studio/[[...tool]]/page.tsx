/**
 * This route is responsible for the built-in authoring environment using Sanity Studio.
 * All routes under your studio path is handled by this file using Next.js' catch-all routes:
 * https://nextjs.org/docs/routing/dynamic-routes#catch-all-routes
 *
 * You can learn more about the next-sanity package here:
 * https://github.com/sanity-io/next-sanity
 */

'use client'

import { NextStudio } from 'next-sanity/studio'
import config from '../../../../sanity.config'
import { useEffect, useState } from 'react'

export default function StudioPage() {
  const [isAuthorized, setIsAuthorized] = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    // Check if we're in development mode - allow access
    if (process.env.NODE_ENV === 'development') {
      setIsAuthorized(true)
      return
    }

    // In production, check if user has already authenticated
    const stored = typeof window !== 'undefined' ? localStorage.getItem('studio-auth') : null
    if (stored === 'true') {
      setIsAuthorized(true)
    }
  }, [])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    const correctPassword = process.env.NEXT_PUBLIC_STUDIO_PASSWORD || 'admin123'
    
    if (password === correctPassword) {
      if (typeof window !== 'undefined') {
        localStorage.setItem('studio-auth', 'true')
      }
      setIsAuthorized(true)
      setError('')
    } else {
      setError('Incorrect password')
    }
  }

  // Show login form if not authorized
  if (!isAuthorized) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="w-full max-w-md p-8 border rounded-lg bg-card">
          <h1 className="text-2xl font-bold mb-4">Sanity Studio Access</h1>
          <p className="text-muted-foreground mb-6">
            This area is restricted. Please enter the password to continue.
          </p>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-2">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border rounded-md bg-background"
                placeholder="Enter password"
                required
              />
            </div>
            {error && (
              <p className="text-sm text-destructive">{error}</p>
            )}
            <button
              type="submit"
              className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
            >
              Access Studio
            </button>
          </form>
          <p className="text-xs text-muted-foreground mt-4">
            Note: You'll still need to authenticate with Sanity to edit content.
          </p>
        </div>
      </div>
    )
  }

  // Show Sanity Studio if authorized
  return <NextStudio config={config} />
}
