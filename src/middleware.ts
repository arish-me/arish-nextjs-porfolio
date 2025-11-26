import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Basic Auth credentials - set these in your environment variables
const ADMIN_USERNAME = process.env.KEYSTATIC_ADMIN_USERNAME || 'admin'
const ADMIN_PASSWORD = process.env.KEYSTATIC_ADMIN_PASSWORD || 'admin123'

function isAuthenticated(request: NextRequest): boolean {
  const authHeader = request.headers.get('authorization')

  if (!authHeader || !authHeader.startsWith('Basic ')) {
    return false
  }

  const base64Credentials = authHeader.split(' ')[1]
  const credentials = atob(base64Credentials)
  const [username, password] = credentials.split(':')

  return username === ADMIN_USERNAME && password === ADMIN_PASSWORD
}

export function middleware(request: NextRequest) {
  // Only protect /keystatic routes
  if (request.nextUrl.pathname.startsWith('/keystatic')) {
    if (!isAuthenticated(request)) {
      return new NextResponse('Authentication required', {
        status: 401,
        headers: {
          'WWW-Authenticate': 'Basic realm="Keystatic Admin"',
        },
      })
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/keystatic/:path*',
}

