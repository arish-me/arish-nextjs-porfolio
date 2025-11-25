import { getKeyCourses, getKeyCourseBySlug } from '@/lib/keystatic'
import { COURSES_DATA } from '@/config/courses'
import CourseDetailClient from './course-detail-client'
import { notFound } from 'next/navigation'

interface PageProps {
  params: Promise<{ courseId: string }>
}

export default async function CourseDetailPage({ params }: PageProps) {
  const { courseId } = await params
  
  // Try Keystatic first
  let course = await getKeyCourseBySlug(courseId)
  
  // Fall back to static data
  if (!course) {
    course = COURSES_DATA.find(c => c.id === courseId) || null
  }

  if (!course) {
    notFound()
  }

  return <CourseDetailClient course={course} />
}

// Generate static params for static courses
export async function generateStaticParams() {
  const keystaticCourses = await getKeyCourses()
  const allCourses = [...keystaticCourses, ...COURSES_DATA]
  
  // Dedupe by id
  const uniqueIds = [...new Set(allCourses.map(c => c.id))]
  
  return uniqueIds.map((id) => ({
    courseId: id,
  }))
}
