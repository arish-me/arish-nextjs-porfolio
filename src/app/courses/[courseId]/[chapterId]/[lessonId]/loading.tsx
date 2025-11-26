export default function LessonLoading() {
  return (
    <div className="py-8 max-w-4xl mx-auto px-4">
      {/* Lesson Header skeleton */}
      <header className="mb-8">
        <div className="h-10 w-3/4 bg-muted animate-pulse rounded-lg mb-4" />
        <hr className="border-border" />
      </header>

      {/* Content skeleton */}
      <article className="space-y-6">
        {/* Paragraph blocks */}
        {[1, 2, 3].map((block) => (
          <div key={block} className="space-y-3">
            <div className="h-5 w-full bg-muted animate-pulse rounded" />
            <div className="h-5 w-11/12 bg-muted animate-pulse rounded" />
            <div className="h-5 w-4/5 bg-muted animate-pulse rounded" />
          </div>
        ))}

        {/* Code block skeleton */}
        <div className="rounded-lg border border-border overflow-hidden my-6">
          <div className="flex items-center justify-between px-4 py-2 bg-muted/50 border-b border-border">
            <div className="h-5 w-16 bg-muted animate-pulse rounded" />
            <div className="h-8 w-20 bg-muted animate-pulse rounded" />
          </div>
          <div className="p-4 bg-muted/20 space-y-2">
            {[1, 2, 3, 4, 5, 6].map((line) => (
              <div key={line} className="flex gap-4">
                <div className="h-5 w-8 bg-muted animate-pulse rounded" />
                <div 
                  className="h-5 bg-muted animate-pulse rounded" 
                  style={{ width: `${Math.random() * 40 + 40}%` }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* More paragraphs */}
        {[1, 2].map((block) => (
          <div key={`p2-${block}`} className="space-y-3">
            <div className="h-5 w-full bg-muted animate-pulse rounded" />
            <div className="h-5 w-10/12 bg-muted animate-pulse rounded" />
            <div className="h-5 w-3/4 bg-muted animate-pulse rounded" />
          </div>
        ))}

        {/* List skeleton */}
        <div className="space-y-2 ml-6">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="flex items-start gap-3">
              <div className="h-2 w-2 bg-muted animate-pulse rounded-full mt-2" />
              <div className="h-5 w-3/4 bg-muted animate-pulse rounded" />
            </div>
          ))}
        </div>
      </article>

      {/* Navigation skeleton */}
      <nav className="flex items-center justify-between gap-4 pt-12 mt-12 border-t border-border">
        <div className="flex items-center gap-2">
          <div className="h-5 w-5 bg-muted animate-pulse rounded" />
          <div>
            <div className="h-3 w-16 bg-muted animate-pulse rounded mb-1" />
            <div className="h-5 w-32 bg-muted animate-pulse rounded" />
          </div>
        </div>
        
        <div className="h-5 w-12 bg-muted animate-pulse rounded" />
        
        <div className="flex items-center gap-2">
          <div className="text-right">
            <div className="h-3 w-12 bg-muted animate-pulse rounded mb-1" />
            <div className="h-5 w-32 bg-muted animate-pulse rounded" />
          </div>
          <div className="h-5 w-5 bg-muted animate-pulse rounded" />
        </div>
      </nav>
    </div>
  )
}

