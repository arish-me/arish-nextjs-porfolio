export default function CourseDetailLoading() {
  return (
    <div className="min-h-screen">
      {/* Header skeleton */}
      <div className="bg-gradient-to-br from-primary/10 via-background to-background py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-5 w-20 bg-muted animate-pulse rounded" />
            <div className="h-5 w-5 bg-muted animate-pulse rounded" />
            <div className="h-5 w-32 bg-muted animate-pulse rounded" />
          </div>
          
          <div className="h-12 w-3/4 bg-muted animate-pulse rounded-lg mb-6" />
          
          <div className="space-y-2 mb-8">
            <div className="h-5 w-full bg-muted animate-pulse rounded" />
            <div className="h-5 w-2/3 bg-muted animate-pulse rounded" />
          </div>

          <div className="flex flex-wrap gap-4 mb-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-6 w-24 bg-muted animate-pulse rounded-full" />
            ))}
          </div>

          <div className="h-4 w-48 bg-muted animate-pulse rounded mb-4" />
          <div className="h-2 w-full bg-muted animate-pulse rounded-full" />
        </div>
      </div>

      {/* Content skeleton */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="h-8 w-48 bg-muted animate-pulse rounded mb-8" />
        
        {/* Chapter skeletons */}
        <div className="space-y-6">
          {[1, 2, 3].map((chapter) => (
            <div key={chapter} className="border border-border rounded-xl overflow-hidden">
              <div className="p-6 bg-muted/30">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 bg-muted animate-pulse rounded-full" />
                    <div>
                      <div className="h-6 w-48 bg-muted animate-pulse rounded mb-2" />
                      <div className="h-4 w-32 bg-muted animate-pulse rounded" />
                    </div>
                  </div>
                  <div className="h-6 w-6 bg-muted animate-pulse rounded" />
                </div>
              </div>
              
              <div className="p-4 space-y-2">
                {[1, 2, 3, 4].map((lesson) => (
                  <div key={lesson} className="flex items-center gap-4 p-3 rounded-lg bg-muted/20">
                    <div className="h-5 w-5 bg-muted animate-pulse rounded" />
                    <div className="h-5 w-48 bg-muted animate-pulse rounded flex-1" />
                    <div className="h-5 w-16 bg-muted animate-pulse rounded" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

