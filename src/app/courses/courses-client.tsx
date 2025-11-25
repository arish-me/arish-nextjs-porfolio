'use client'

import React, { useState, useMemo } from 'react'
import { Button } from '@/components/ui/button'
import CourseCard from '@/components/courses/course-card'
import type { Course } from '@/config/courses'

interface CoursesClientProps {
  initialCourses: Course[]
}

export default function CoursesClient({ initialCourses }: CoursesClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Courses')

  // Get all unique categories
  const categories = useMemo(() => {
    const cats = ['All Courses', ...new Set(initialCourses.map((course) => course.category))]
    return cats
  }, [initialCourses])

  // Filter courses by category
  const filteredCourses = useMemo(() => {
    if (selectedCategory === 'All Courses') {
      return initialCourses
    }
    return initialCourses.filter((course) => course.category === selectedCategory)
  }, [selectedCategory, initialCourses])

  // Count courses per category
  const getCategoryCount = (category: string) => {
    if (category === 'All Courses') {
      return initialCourses.length
    }
    return initialCourses.filter((course) => course.category === category).length
  }

  return (
    <div className="py-16 space-y-12">
      <section className="space-y-4">
        <h1 className="text-5xl font-bold">Mini Courses</h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Explore our collection of free and premium courses covering Docker, Linux, Vim, and more.
          Learn at your own pace with structured lessons and hands-on examples.
        </p>
      </section>

      {/* Filter Buttons */}
      <section className="flex flex-wrap gap-3">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? 'default' : 'outline'}
            onClick={() => setSelectedCategory(category)}
            className="rounded-full"
          >
            {category} ({getCategoryCount(category)})
          </Button>
        ))}
      </section>

      {/* Courses Grid */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>
    </div>
  )
}

