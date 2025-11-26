export default function CoursesLoading() {
  return (
    <div className="py-12">
      {/* Header skeleton */}
      <div className="text-center mb-12">
        <div className="h-10 w-64 bg-muted animate-pulse rounded-lg mx-auto mb-4" />
        <div className="h-5 w-96 bg-muted animate-pulse rounded mx-auto" />
      </div>

      {/* Filter skeleton */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="h-10 w-24 bg-muted animate-pulse rounded-full" />
        ))}
      </div>

      {/* Course cards skeleton */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="rounded-xl border border-border overflow-hidden">
            <div className="h-48 bg-muted animate-pulse" />
            <div className="p-6 space-y-4">
              <div className="flex gap-2">
                <div className="h-6 w-16 bg-muted animate-pulse rounded-full" />
                <div className="h-6 w-20 bg-muted animate-pulse rounded-full" />
              </div>
              <div className="h-6 w-3/4 bg-muted animate-pulse rounded" />
              <div className="space-y-2">
                <div className="h-4 w-full bg-muted animate-pulse rounded" />
                <div className="h-4 w-2/3 bg-muted animate-pulse rounded" />
              </div>
              <div className="flex justify-between pt-4">
                <div className="h-4 w-24 bg-muted animate-pulse rounded" />
                <div className="h-4 w-20 bg-muted animate-pulse rounded" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

