/* eslint-disable */

'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  BookOpen, 
  ExternalLink, 
  AlertTriangle, 
  GraduationCap,
  FileText,
  Code,
  Globe
} from 'lucide-react'

const Resources = () => {
  const books = {
    ruby: [
      {
        title: "Eloquent Ruby",
        author: "Russ Olsen",
        description: "A comprehensive guide to writing beautiful, maintainable Ruby code with best practices and idioms.",
        link: "https://www.amazon.com/Eloquent-Ruby-Addison-Wesley-Professional-Series/dp/0321584104",
        type: "Book",
        category: "Ruby"
      },
      {
        title: "The Well-Grounded Rubyist",
        author: "David A. Black",
        description: "Deep dive into Ruby fundamentals, object-oriented programming, and advanced Ruby concepts.",
        link: "https://www.manning.com/books/the-well-grounded-rubyist-third-edition",
        type: "Book",
        category: "Ruby"
      },
      {
        title: "Practical Object-Oriented Design in Ruby",
        author: "Sandi Metz",
        description: "Learn object-oriented design principles and patterns specifically for Ruby applications.",
        link: "https://www.poodr.com/",
        type: "Book",
        category: "Ruby"
      }
    ],
    react: [
      {
        title: "Learning React",
        author: "Alex Banks & Eve Porcello",
        description: "Modern React development with hooks, context, and functional components.",
        link: "https://www.oreilly.com/library/view/learning-react-2nd/9781492051718/",
        type: "Book",
        category: "React"
      },
      {
        title: "React Design Patterns and Best Practices",
        author: "Carlos Santana Roldán",
        description: "Advanced React patterns, performance optimization, and best practices for scalable applications.",
        link: "https://www.packtpub.com/product/react-design-patterns-and-best-practices-third-edition/9781803233109",
        type: "Book",
        category: "React"
      }
    ]
  }

  const tutorials = [
    {
      title: "Ruby on Rails Tutorial",
      author: "Michael Hartl",
      description: "Learn web development with Rails through building a Twitter-like application.",
      link: "https://www.railstutorial.org/",
      type: "Tutorial",
      category: "Ruby on Rails"
    },
    {
      title: "React Official Tutorial",
      author: "React Team",
      description: "Official React tutorial covering fundamentals and building a tic-tac-toe game.",
      link: "https://react.dev/learn/tutorial-tic-tac-toe",
      type: "Tutorial",
      category: "React"
    },
    {
      title: "TutorialsPoint",
      author: "TutorialsPoint",
      description: "Comprehensive tutorials on various programming languages and frameworks.",
      link: "https://www.tutorialspoint.com/",
      type: "Tutorial Platform",
      category: "General"
    },
    {
      title: "freeCodeCamp",
      author: "freeCodeCamp",
      description: "Free interactive coding lessons and projects for web development.",
      link: "https://www.freecodecamp.org/",
      type: "Tutorial Platform",
      category: "General"
    },
    {
      title: "The Odin Project",
      author: "The Odin Project",
      description: "Free full-stack curriculum with hands-on projects and real-world applications.",
      link: "https://www.theodinproject.com/",
      type: "Tutorial Platform",
      category: "General"
    }
  ]

  // Prevent right-click and text selection
  React.useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      console.warn('Right-click disabled on this page');
    };

    const handleSelectStart = (e: Event) => {
      e.preventDefault();
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      // Prevent Ctrl+S, Ctrl+P, F12, etc.
      if (
        (e.ctrlKey && (e.key === 's' || e.key === 'p' || e.key === 'u')) ||
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && e.key === 'I')
      ) {
        e.preventDefault();
        console.warn('This action is not allowed on this page');
      }
    };

    // Detect print attempts
    const handleBeforePrint = () => {
      console.warn('Print attempt detected');
      // You could send this to your analytics
    };

    // Detect visibility changes (tab switching, etc.)
    const handleVisibilityChange = () => {
      if (document.hidden) {
        console.warn('Page visibility changed - potential screenshot attempt');
      }
    };

    // Detect dev tools opening
    let devtools = { open: false, orientation: null };
    const threshold = 160;
    
    const handleResize = () => {
      if (window.outerHeight - window.innerHeight > threshold || 
          window.outerWidth - window.innerWidth > threshold) {
        if (!devtools.open) {
          devtools.open = true;
          console.warn('Developer tools detected');
        }
      } else {
        devtools.open = false;
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('selectstart', handleSelectStart);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('beforeprint', handleBeforePrint);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('resize', handleResize);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('selectstart', handleSelectStart);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('beforeprint', handleBeforePrint);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-16 max-w-6xl mx-auto select-none"
    >
      <div className="space-y-4 text-center mb-12">
        <h1 className="text-4xl font-bold">Learning Resources</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Curated collection of books, tutorials, and learning materials that have helped me grow as a developer. 
          These resources have been invaluable in my journey to becoming a Full Stack Developer.
        </p>
      </div>

      {/* Disclaimer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-8"
      >
        <Card className="border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-950/20">
          <CardContent className="pt-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
              <div className="space-y-2">
                <h3 className="font-semibold text-amber-800 dark:text-amber-200">
                  Important Notice
                </h3>
                <p className="text-sm text-amber-700 dark:text-amber-300">
                  The books listed below are copyrighted materials that I have purchased for my own learning. 
                  <strong> Please do not download or distribute these books illegally.</strong> Instead, 
                  support the authors by purchasing these books through the provided links. 
                  These are affiliate links that help me maintain this site while supporting the creators.
                </p>
                <p className="text-xs text-amber-600 dark:text-amber-400">
                  ⚠️ This page is protected against unauthorized copying. Any attempt to download or screenshot 
                  this content may be detected and reported. By accessing this page, you agree to our{' '}
                  <a href="/terms" className="underline hover:text-amber-800 dark:hover:text-amber-200">
                    Terms of Service
                  </a>.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Invisible Watermark */}
      <div className="fixed inset-0 pointer-events-none select-none z-50">
        <div className="absolute inset-0 opacity-5 text-xs text-center" style={{ 
          backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(`
            <svg width="200" height="100" xmlns="http://www.w3.org/2000/svg">
              <text x="50%" y="50%" text-anchor="middle" dy=".3em" font-family="Arial" font-size="12" fill="currentColor">
                arishdev.com - Copyright Protected
              </text>
            </svg>
          `)}")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '200px 100px'
        }}></div>
      </div>

      {/* Books Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="space-y-8"
      >
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-2 flex items-center justify-center gap-2">
            <BookOpen className="h-8 w-8" />
            My Books
          </h2>
          <p className="text-muted-foreground">
            Books I've purchased and found valuable in my development journey
          </p>
        </div>

        {/* Ruby Books */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold flex items-center gap-2">
            <Code className="h-6 w-6" />
            Ruby & Ruby on Rails
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {books.ruby.map((book, index) => (
              <motion.div
                key={book.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <Badge variant="secondary" className="mb-2">
                        {book.category}
                      </Badge>
                      <FileText className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <CardTitle className="text-lg">{book.title}</CardTitle>
                    <CardDescription className="text-sm">
                      by {book.author}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      {book.description}
                    </p>
                    <Button asChild className="w-full" size="sm">
                      <a 
                        href={book.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Purchase Book
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* React Books */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold flex items-center gap-2">
            <Code className="h-6 w-6" />
            React & JavaScript
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {books.react.map((book, index) => (
              <motion.div
                key={book.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <Badge variant="secondary" className="mb-2">
                        {book.category}
                      </Badge>
                      <FileText className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <CardTitle className="text-lg">{book.title}</CardTitle>
                    <CardDescription className="text-sm">
                      by {book.author}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      {book.description}
                    </p>
                    <Button asChild className="w-full" size="sm">
                      <a 
                        href={book.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Purchase Book
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Tutorials Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="space-y-8 mt-16"
      >
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-2 flex items-center justify-center gap-2">
            <GraduationCap className="h-8 w-8" />
            My Tutorials
          </h2>
          <p className="text-muted-foreground">
            Free tutorials and learning platforms I recommend
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tutorials.map((tutorial, index) => (
            <motion.div
              key={tutorial.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <Badge variant="outline" className="mb-2">
                      {tutorial.category}
                    </Badge>
                    <Globe className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <CardTitle className="text-lg">{tutorial.title}</CardTitle>
                  <CardDescription className="text-sm">
                    by {tutorial.author}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    {tutorial.description}
                  </p>
                  <Button asChild className="w-full" size="sm" variant="outline">
                    <a 
                      href={tutorial.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Visit Tutorial
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Additional Note */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="mt-12 text-center"
      >
        <Card className="bg-muted/50">
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground">
              <strong>Note:</strong> This page contains affiliate links for books. When you purchase through these links, 
              I may earn a small commission at no extra cost to you. This helps support the maintenance of this site 
              while providing you with valuable learning resources.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}

export default Resources
