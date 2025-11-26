'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import type { Course } from '@/config/courses'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { BlurImage } from '@/components/blur-image'
import { Clock, BookOpen, GraduationCap, Users, Calendar, CheckCircle2, Circle, ChevronRight } from 'lucide-react'
import { isLessonCompleted, getCourseCompletionCount } from '@/lib/course-progress'
import { MDXContent } from '@/components/mdx-content'

interface CourseDetailClientProps {
  course: Course
}

export default function CourseDetailClient({ course }: CourseDetailClientProps) {
  const [progress, setProgress] = useState<Record<string, boolean>>({})
  const [mounted, setMounted] = useState(false)
  const [completedLessons, setCompletedLessons] = useState(0)
  const [progressPercentage, setProgressPercentage] = useState(0)

  const totalChapters = course.chapters.length
  const totalLessons = course.chapters.reduce((sum, chapter) => sum + chapter.lessons.length, 0)

  // Load progress from localStorage after mount
  useEffect(() => {
    setMounted(true)
    
    const progressMap: Record<string, boolean> = {}
    course.chapters.forEach((chapter) => {
      chapter.lessons.forEach((lesson) => {
        const key = `${chapter.id}-${lesson.id}`
        progressMap[key] = isLessonCompleted(course.id, chapter.id, lesson.id)
      })
    })
    setProgress(progressMap)
    
    // Update completion data
    const completionData = getCourseCompletionCount(course.id, totalLessons)
    setCompletedLessons(completionData.completed)
    setProgressPercentage(completionData.percentage)
  }, [course, totalLessons])

  // Update progress when localStorage changes
  useEffect(() => {
    const handleStorageChange = () => {
      const progressMap: Record<string, boolean> = {}
      course.chapters.forEach((chapter) => {
        chapter.lessons.forEach((lesson) => {
          const key = `${chapter.id}-${lesson.id}`
          progressMap[key] = isLessonCompleted(course.id, chapter.id, lesson.id)
        })
      })
      setProgress(progressMap)
      
      // Update completion data
      const completionData = getCourseCompletionCount(course.id, totalLessons)
      setCompletedLessons(completionData.completed)
      setProgressPercentage(completionData.percentage)
    }

    window.addEventListener('storage', handleStorageChange)
    window.addEventListener('course-progress-updated', handleStorageChange)

    return () => {
      window.removeEventListener('storage', handleStorageChange)
      window.removeEventListener('course-progress-updated', handleStorageChange)
    }
  }, [course, totalLessons])

  return (
    <div className="py-16 space-y-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-muted-foreground">
        <Link href="/courses" className="hover:text-foreground transition-colors">
          Mini Courses
        </Link>
        <ChevronRight className="h-4 w-4" />
        <Link href={`/courses?category=${course.category}`} className="hover:text-foreground transition-colors">
          {course.category}
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-foreground">{course.title}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Course Header */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <h1 className="text-4xl font-bold">{course.title}</h1>
              {course.isFree && (
                <Badge className="bg-green-600 hover:bg-green-700">FREE</Badge>
              )}
            </div>
            <div className="text-lg text-muted-foreground">
              {course.longDescription && typeof course.longDescription === 'object' ? (
                <MDXContent content={course.longDescription} />
              ) : (
                <p>{course.description}</p>
              )}
            </div>
          </div>

          {/* Course Content */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Course Content</h2>
            <div className="space-y-4">
              {course.chapters.map((chapter) => (
                <Card key={chapter.id} className="overflow-hidden">
                  <CardHeader>
                    <CardTitle className="text-xl">{chapter.title}</CardTitle>
                    {chapter.description && <CardDescription>{chapter.description}</CardDescription>}
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {chapter.lessons.map((lesson) => {
                      const progressKey = `${chapter.id}-${lesson.id}`
                      const isCompleted = progress[progressKey] || false

                      return (
                        <Link
                          key={lesson.id}
                          href={`/courses/${course.id}/${chapter.id}/${lesson.id}`}
                          className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors group"
                        >
                          <div className="flex-shrink-0">
                            {isCompleted ? (
                              <CheckCircle2 className="h-5 w-5 text-green-600" />
                            ) : (
                              <Circle className="h-5 w-5 text-muted-foreground" />
                            )}
                          </div>
                          <span className="flex-1 group-hover:text-primary transition-colors">
                            {lesson.title}
                          </span>
                          <span className="text-sm text-muted-foreground">{lesson.duration} min</span>
                        </Link>
                      )
                    })}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Course Image */}
          <div className="relative w-full aspect-square bg-white border-2 rounded-xl overflow-hidden">
            <BlurImage src={course.image} alt={course.title} className="w-full h-full" objectFit="contain" />
            <div className="absolute bottom-4 left-4">
              <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                {course.duration} min
              </Badge>
            </div>
          </div>

          {/* Course Stats */}
          <Card>
            <CardHeader>
              <CardTitle>Course Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3 text-sm">
                <GraduationCap className="h-4 w-4 text-muted-foreground" />
                <span>
                  {totalLessons} {totalLessons === 1 ? 'lesson' : 'lessons'}
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <BookOpen className="h-4 w-4 text-muted-foreground" />
                <span>
                  {totalChapters} {totalChapters === 1 ? 'chapter' : 'chapters'}
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span>{course.duration} minutes total</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span>Updated {course.lastUpdated || 'recently'}</span>
              </div>
            </CardContent>
          </Card>

          {/* Progress */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Progress</CardTitle>
                <span className="text-sm font-medium">{progressPercentage}%</span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="w-full bg-muted rounded-full h-2">
                <div
                  className="bg-primary h-2 rounded-full transition-all"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                {completedLessons} of {totalLessons} lessons completed
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}


