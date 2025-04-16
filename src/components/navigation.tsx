import Link from 'next/link'

export function Navigation() {
  return (
    <nav className="flex items-center justify-between p-4 bg-background border-b">
      <div className="font-semibold text-xl">
        <Link href="/">Arish</Link>
      </div>
      <div className="flex gap-6">
        <Link href="/" className="hover:text-primary">Home</Link>
        <Link href="/about" className="hover:text-primary">About</Link>
        <Link href="/projects" className="hover:text-primary">Projects</Link>
        <Link href="/contact" className="hover:text-primary">Contact</Link>
      </div>
    </nav>
  )
} 