import { client } from './client'
import { coursesQuery, courseBySlugQuery, courseByIdQuery } from './queries'
import type { Course } from '@/config/courses'

// Transform Sanity data to match our Course type
function transformSanityCourse(sanityCourse: any): Course {
  return {
    id: sanityCourse.slug || sanityCourse._id,
    title: sanityCourse.title,
    description: sanityCourse.description,
    longDescription: sanityCourse.longDescription || sanityCourse.description, // Fallback to description if longDescription is empty
    category: sanityCourse.category,
    image: sanityCourse.image || '/placeholder-course.jpg',
    duration: sanityCourse.duration || 0,
    isFree: sanityCourse.isFree ?? true,
    level: sanityCourse.level || 'All levels',
    studentsEnrolled: sanityCourse.studentsEnrolled || 0,
    lastUpdated: sanityCourse.lastUpdated,
    chapters: (sanityCourse.chapters || []).map((chapter: any) => ({
      id: chapter.slug || chapter._id,
      title: chapter.title,
      description: chapter.description,
      lessons: (chapter.lessons || []).map((lesson: any) => ({
        id: lesson.slug || lesson._id,
        title: lesson.title,
        duration: lesson.duration || 0,
        content: lesson.content || '',
        completed: false, // This will be managed by localStorage
      })),
    })),
  }
}

export async function getCourses(): Promise<Course[]> {
  try {
    const courses = await client.fetch(coursesQuery)
    return courses.map(transformSanityCourse)
  } catch (error) {
    console.error('Error fetching courses from Sanity:', error)
    return []
  }
}

export async function getCourseBySlug(slug: string): Promise<Course | null> {
  try {
    const course = await client.fetch(courseBySlugQuery, { slug })
    if (!course) return null
    return transformSanityCourse(course)
  } catch (error) {
    console.error('Error fetching course from Sanity:', error)
    return null
  }
}

export async function getCourseById(id: string): Promise<Course | null> {
  try {
    const course = await client.fetch(courseByIdQuery, { id })
    if (!course) return null
    return transformSanityCourse(course)
  } catch (error) {
    console.error('Error fetching course from Sanity:', error)
    return null
  }
}

