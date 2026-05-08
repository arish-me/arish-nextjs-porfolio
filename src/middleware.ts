import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const ADMIN_USERNAME = process.env.KEYSTATIC_ADMIN_USERNAME || 'admin'
const ADMIN_PASSWORD = process.env.KEYSTATIC_ADMIN_PASSWORD || 'admin123'

function isAuthenticated(request: NextRequest): boolean {
  const authHeader = request.headers.get('authorization')
  if (!authHeader || !authHeader.startsWith('Basic ')) return false
  const base64Credentials = authHeader.split(' ')[1]
  const credentials = atob(base64Credentials)
  const [username, password] = credentials.split(':')
  return username === ADMIN_USERNAME && password === ADMIN_PASSWORD
}

const MAINTENANCE_HTML = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Under Maintenance</title>
    <style>
      *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

      :root {
        --bg: #0a0a0a;
        --surface: #111111;
        --border: #222222;
        --text: #e5e5e5;
        --muted: #737373;
        --accent: #a3a3a3;
        --dot: #1a1a1a;
      }

      body {
        background-color: var(--bg);
        color: var(--text);
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        min-height: 100dvh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 1.5rem;
        background-image: radial-gradient(var(--dot) 1px, transparent 1px);
        background-size: 28px 28px;
      }

      .card {
        background: var(--surface);
        border: 1px solid var(--border);
        border-radius: 16px;
        padding: 3rem 2.5rem;
        max-width: 480px;
        width: 100%;
        text-align: center;
        box-shadow: 0 0 0 1px rgba(255,255,255,0.04), 0 24px 64px rgba(0,0,0,0.6);
        animation: fadeUp 0.5s ease both;
      }

      @keyframes fadeUp {
        from { opacity: 0; transform: translateY(16px); }
        to   { opacity: 1; transform: translateY(0); }
      }

      .icon {
        width: 56px;
        height: 56px;
        margin: 0 auto 1.5rem;
        background: #1a1a1a;
        border: 1px solid var(--border);
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.75rem;
        line-height: 1;
      }

      .badge {
        display: inline-block;
        font-size: 0.7rem;
        font-weight: 600;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        color: var(--muted);
        background: #1a1a1a;
        border: 1px solid var(--border);
        border-radius: 99px;
        padding: 0.25rem 0.75rem;
        margin-bottom: 1.25rem;
      }

      h1 {
        font-size: 1.6rem;
        font-weight: 700;
        letter-spacing: -0.02em;
        color: var(--text);
        margin-bottom: 0.75rem;
        line-height: 1.2;
      }

      p {
        font-size: 0.925rem;
        color: var(--muted);
        line-height: 1.65;
        margin-bottom: 2rem;
      }

      .divider {
        height: 1px;
        background: var(--border);
        margin: 0 0 1.5rem;
      }

      .footer-text {
        font-size: 0.8rem;
        color: #404040;
        margin-bottom: 0;
      }

      .dot-pulse {
        display: inline-flex;
        align-items: center;
        gap: 5px;
        margin-bottom: 1.5rem;
      }

      .dot-pulse span {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: #404040;
        animation: pulse 1.4s ease-in-out infinite;
      }

      .dot-pulse span:nth-child(2) { animation-delay: 0.2s; }
      .dot-pulse span:nth-child(3) { animation-delay: 0.4s; }

      @keyframes pulse {
        0%, 80%, 100% { opacity: 0.2; transform: scale(0.8); }
        40%           { opacity: 1;   transform: scale(1); }
      }
    </style>
  </head>
  <body>
    <div class="card">
      <div class="icon">🔧</div>
      <div class="badge">Scheduled Maintenance</div>
      <h1>We'll be right back</h1>
      <p>
        The site is currently undergoing planned maintenance.<br />
        We're working hard to get things back up — thanks for your patience.
      </p>
      <div class="dot-pulse">
        <span></span><span></span><span></span>
      </div>
      <div class="divider"></div>
      <p class="footer-text">Check back soon.</p>
    </div>
  </body>
</html>`

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Protect /keystatic routes with Basic Auth (always active)
  if (pathname.startsWith('/keystatic')) {
    if (!isAuthenticated(request)) {
      return new NextResponse('Authentication required', {
        status: 401,
        headers: { 'WWW-Authenticate': 'Basic realm="Keystatic Admin"' },
      })
    }
    return NextResponse.next()
  }

  // Maintenance mode — intercept all public routes
  if (process.env.MAINTENANCE_MODE === 'true') {
    return new NextResponse(MAINTENANCE_HTML, {
      status: 503,
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Retry-After': '3600',
      },
    })
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths EXCEPT:
     *  - _next/static  (static assets)
     *  - _next/image   (image optimisation)
     *  - favicon & other root-level static files
     */
    '/((?!_next/static|_next/image|favicon|android-chrome|apple-touch|site.webmanifest).*)',
  ],
}
