'use client'

import React, { useEffect } from 'react'
import Link from 'next/link'
import type { Course, Chapter, Lesson } from '@/config/courses'
import { ChevronRight, ChevronLeft } from 'lucide-react'
import { markLessonComplete } from '@/lib/course-progress'
import { MDXContent } from '@/components/mdx-content'

interface LessonClientProps {
  course: Course
  chapter: Chapter
  lesson: Lesson
  chapterId: string
  lessonId: string
}

export default function LessonClient({ course, chapter, lesson, chapterId, lessonId }: LessonClientProps) {
  // Mark lesson as complete when viewed
  useEffect(() => {
    markLessonComplete(course.id, chapterId, lessonId)
    window.dispatchEvent(new Event('course-progress-updated'))
  }, [course.id, chapterId, lessonId])

  // Find current lesson index across all chapters
  let currentIndex = -1
  const allLessons: Array<{ chapter: Chapter; lesson: Lesson; chapterIndex: number; lessonIndex: number }> = []

  course.chapters.forEach((ch, chIdx) => {
    ch.lessons.forEach((les, lesIdx) => {
      allLessons.push({ chapter: ch, lesson: les, chapterIndex: chIdx, lessonIndex: lesIdx })
      if (ch.id === chapterId && les.id === lessonId) {
        currentIndex = allLessons.length - 1
      }
    })
  })

  const previousLesson = currentIndex > 0 ? allLessons[currentIndex - 1] : null
  const nextLesson = currentIndex < allLessons.length - 1 ? allLessons[currentIndex + 1] : null

  // Get lesson number (1-based)
  const lessonNumber = currentIndex + 1
  const totalLessons = allLessons.length


  return (
    <div className="py-8 max-w-4xl mx-auto">
      {/* Lesson Header */}
      <header className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          {lessonNumber}. {lesson.title}
        </h1>
        <hr className="border-border" />
      </header>

      {/* Lesson Content */}
      <article className="lesson-content">
         <MDXContent content={lesson.content} />
      </article>

      {/* Navigation */}
      <nav className="flex items-center justify-between gap-4 pt-12 mt-12 border-t border-border">
        <div className="flex-1">
          {previousLesson ? (
            <Link
              href={`/courses/${course.id}/${previousLesson.chapter.id}/${previousLesson.lesson.id}`}
              className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ChevronLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
              <div className="text-left">
                <span className="text-xs uppercase tracking-wide">Previous</span>
                <p className="font-medium text-foreground">{previousLesson.lesson.title}</p>
              </div>
            </Link>
          ) : (
            <div />
          )}
        </div>

        <div className="text-center text-sm text-muted-foreground">
          {lessonNumber} / {totalLessons}
        </div>

        <div className="flex-1 flex justify-end">
          {nextLesson ? (
            <Link
              href={`/courses/${course.id}/${nextLesson.chapter.id}/${nextLesson.lesson.id}`}
              className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <div className="text-right">
                <span className="text-xs uppercase tracking-wide">Next</span>
                <p className="font-medium text-foreground">{nextLesson.lesson.title}</p>
              </div>
              <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          ) : (
            <Link
              href={`/courses/${course.id}`}
              className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <div className="text-right">
                <span className="text-xs uppercase tracking-wide">Completed</span>
                <p className="font-medium text-foreground">Back to Course</p>
              </div>
              <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          )}
        </div>
      </nav>
    </div>
  )
}


