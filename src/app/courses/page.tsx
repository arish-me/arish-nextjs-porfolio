import { getKeyCourses } from '@/lib/keystatic'
import { COURSES_DATA } from '@/config/courses'
import CoursesClient from './courses-client'
import type { Course } from '@/config/courses'

// Strip non-serializable content for client component
function serializeCourses(courses: Course[]): Course[] {
  return courses.map(course => ({
    ...course,
    // Ensure longDescription is a string for listing
    longDescription: typeof course.longDescription === 'string' 
      ? course.longDescription 
      : course.description,
    // Strip lesson content for listing
    chapters: course.chapters.map(chapter => ({
      ...chapter,
      lessons: chapter.lessons.map(lesson => ({
        ...lesson,
        content: typeof lesson.content === 'string' ? lesson.content : '',
      })),
    })),
  }))
}

export default async function CoursesPage() {
  // Try to get courses from Keystatic first
  let courses = await getKeyCourses()
  
  // If no Keystatic courses, fall back to static data
  if (courses.length === 0) {
    courses = COURSES_DATA
  }

  // Serialize for client component
  const serializedCourses = serializeCourses(courses)

  return <CoursesClient initialCourses={serializedCourses} />
}
