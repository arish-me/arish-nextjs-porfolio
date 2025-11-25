import { getKeyCourses, getKeyCourseBySlug, getKeyLessonContent } from '@/lib/keystatic'
import { COURSES_DATA } from '@/config/courses'
import LessonClient from './lesson-client'
import { notFound } from 'next/navigation'

interface PageProps {
  params: Promise<{ courseId: string; chapterId: string; lessonId: string }>
}

export default async function LessonPage({ params }: PageProps) {
  const { courseId, chapterId, lessonId } = await params

  // Try Keystatic first
  let course = await getKeyCourseBySlug(courseId)

  // Fall back to static data
  if (!course) {
    course = COURSES_DATA.find((c) => c.id === courseId) || null
  }

  if (!course) {
    notFound()
  }

  const chapter = course.chapters.find((ch) => ch.id === chapterId)
  if (!chapter) {
    notFound()
  }

  const lesson = chapter.lessons.find((l) => l.id === lessonId)
  if (!lesson) {
    notFound()
  }

  // Try to get MDX content for Keystatic lessons
  let lessonContent = lesson.content
  if (!lessonContent || typeof lessonContent === 'string') {
    const mdxContent = await getKeyLessonContent(lessonId)
    if (mdxContent) {
      lessonContent = mdxContent
    }
  }

  return (
    <LessonClient
      course={course}
      chapter={chapter}
      lesson={{ ...lesson, content: lessonContent }}
      chapterId={chapterId}
      lessonId={lessonId}
    />
  )
}

// Generate static params
export async function generateStaticParams() {
  const keystaticCourses = await getKeyCourses()
  const allCourses = [...keystaticCourses, ...COURSES_DATA]

  const params: Array<{ courseId: string; chapterId: string; lessonId: string }> = []

  allCourses.forEach((course) => {
    course.chapters.forEach((chapter) => {
      chapter.lessons.forEach((lesson) => {
        params.push({
          courseId: course.id,
          chapterId: chapter.id,
          lessonId: lesson.id,
        })
      })
    })
  })

  return params
}
