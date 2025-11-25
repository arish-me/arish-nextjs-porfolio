import { createReader } from '@keystatic/core/reader'
import keystaticConfig from '../../keystatic.config'
import type { Course } from '@/config/courses'
import * as fs from 'fs'
import * as path from 'path'
import matter from 'gray-matter'

// Create the Keystatic reader
export const reader = createReader(process.cwd(), keystaticConfig)

// Helper to resolve MDX content (it's an async function in Keystatic)
async function resolveContent(content: any): Promise<any> {
  if (typeof content === 'function') {
    try {
      return await content()
    } catch {
      return null
    }
  }
  return content
}

// Helper to get raw MDX content from file
function getRawMDXContent(slug: string, type: 'lessons' | 'courses'): string {
  const basePath = path.join(process.cwd(), 'content', type)
  
  // Try folder format first (slug/index.mdx)
  const folderPath = path.join(basePath, slug, 'index.mdx')
  if (fs.existsSync(folderPath)) {
    const fileContent = fs.readFileSync(folderPath, 'utf8')
    const { content } = matter(fileContent)
    return content
  }
  
  // Try flat file format (slug.mdx)
  const filePath = path.join(basePath, `${slug}.mdx`)
  if (fs.existsSync(filePath)) {
    const fileContent = fs.readFileSync(filePath, 'utf8')
    const { content } = matter(fileContent)
    return content
  }
  
  return ''
}

// Helper to get image path from Keystatic image field
function getImagePath(image: any, fallback: string = '/images/default-course.jpg'): string {
  if (!image) return fallback
  if (typeof image === 'string') return image
  if (image.src) return image.src
  return fallback
}

// Helper to get title from Keystatic slug field (can be string or object with name)
function getTitle(titleField: any): string {
  if (!titleField) return ''
  if (typeof titleField === 'string') return titleField
  if (titleField.name) return titleField.name
  return String(titleField)
}

// Get all courses (without detailed content - for listing)
export async function getKeyCourses(): Promise<Course[]> {
  try {
    const courseSlugs = await reader.collections.courses.list()
    const chapterSlugs = await reader.collections.chapters.list()
    const lessonSlugs = await reader.collections.lessons.list()

    // Fetch all chapters
    const allChapters = await Promise.all(
      chapterSlugs.map(async (slug) => {
        const chapter = await reader.collections.chapters.read(slug)
        if (!chapter) return null
        return {
          slug,
          title: getTitle(chapter.title),
          courseSlug: chapter.courseSlug,
          order: chapter.order,
          description: '',
        }
      })
    )
    const chapters = allChapters.filter(Boolean) as Array<{
      slug: string
      title: string
      courseSlug: string
      order: number
      description: string
    }>

    // Fetch all lessons (without content for listing)
    const allLessons = await Promise.all(
      lessonSlugs.map(async (slug) => {
        const lesson = await reader.collections.lessons.read(slug)
        if (!lesson) return null
        return {
          slug,
          title: getTitle(lesson.title),
          chapterSlug: lesson.chapterSlug,
          duration: lesson.duration,
          order: lesson.order,
        }
      })
    )
    const lessons = allLessons.filter(Boolean) as Array<{
      slug: string
      title: string
      chapterSlug: string
      duration: number
      order: number
    }>

    // Build courses with nested chapters and lessons
    const courses = await Promise.all(
      courseSlugs.map(async (slug) => {
        const course = await reader.collections.courses.read(slug)
        if (!course) return null

        // Get chapters for this course
        const courseChapters = chapters
          .filter((c) => c.courseSlug === slug)
          .sort((a, b) => a.order - b.order)
          .map((chapter) => {
            // Get lessons for this chapter (without content)
            const chapterLessons = lessons
              .filter((l) => l.chapterSlug === chapter.slug)
              .sort((a, b) => a.order - b.order)
              .map((lesson) => ({
                id: lesson.slug,
                title: lesson.title,
                duration: lesson.duration,
                content: '', // Empty for listing
              }))

            return {
              id: chapter.slug,
              title: chapter.title,
              description: chapter.description,
              lessons: chapterLessons,
            }
          })

        // Calculate total duration
        const totalDuration = courseChapters.reduce(
          (sum, ch) => sum + ch.lessons.reduce((s, l) => s + l.duration, 0),
          0
        )

        return {
          id: slug,
          title: getTitle(course.title),
          description: course.description,
          longDescription: course.description, // Use plain description for listing
          category: course.category,
          image: getImagePath(course.image),
          duration: course.duration || totalDuration,
          chapters: courseChapters,
          isFree: course.isFree,
          level: course.level as Course['level'],
          studentsEnrolled: 0,
          lastUpdated: 'recently',
        } as Course
      })
    )

    return courses
      .filter((c): c is Course => c !== null)
      .sort((a, b) => (a as any).order - (b as any).order)
  } catch (error) {
    console.error('Error fetching Keystatic courses:', error)
    return []
  }
}

// Get a single course by slug with full content
export async function getKeyCourseBySlug(slug: string): Promise<Course | null> {
  try {
    const course = await reader.collections.courses.read(slug)
    if (!course) return null

    const chapterSlugs = await reader.collections.chapters.list()
    const lessonSlugs = await reader.collections.lessons.list()

    // Fetch chapters for this course
    const allChapters = await Promise.all(
      chapterSlugs.map(async (chSlug) => {
        const chapter = await reader.collections.chapters.read(chSlug)
        if (!chapter || chapter.courseSlug !== slug) return null
        return {
          slug: chSlug,
          title: getTitle(chapter.title),
          order: chapter.order,
          description: '',
        }
      })
    )
    const chapters = allChapters.filter(Boolean) as Array<{
      slug: string
      title: string
      order: number
      description: string
    }>

    // Fetch lessons with content
    const allLessons = await Promise.all(
      lessonSlugs.map(async (lSlug) => {
        const lesson = await reader.collections.lessons.read(lSlug)
        if (!lesson) return null
        
        // Get raw MDX content from file
        const content = getRawMDXContent(lSlug, 'lessons')
        
        return {
          slug: lSlug,
          title: getTitle(lesson.title),
          chapterSlug: lesson.chapterSlug,
          duration: lesson.duration,
          order: lesson.order,
          content,
        }
      })
    )
    const lessons = allLessons.filter(Boolean) as Array<{
      slug: string
      title: string
      chapterSlug: string
      duration: number
      order: number
      content: any
    }>

    // Build course chapters
    const courseChapters = chapters
      .sort((a, b) => a.order - b.order)
      .map((chapter) => {
        const chapterLessons = lessons
          .filter((l) => l.chapterSlug === chapter.slug)
          .sort((a, b) => a.order - b.order)
          .map((lesson) => ({
            id: lesson.slug,
            title: lesson.title,
            duration: lesson.duration,
            content: lesson.content,
          }))

        return {
          id: chapter.slug,
          title: chapter.title,
          description: chapter.description,
          lessons: chapterLessons,
        }
      })

    // Resolve course long description
    const longDescription = await resolveContent(course.content)

    const totalDuration = courseChapters.reduce(
      (sum, ch) => sum + ch.lessons.reduce((s, l) => s + l.duration, 0),
      0
    )

    return {
      id: slug,
      title: getTitle(course.title),
      description: course.description,
      longDescription,
      category: course.category,
      image: getImagePath(course.image),
      duration: course.duration || totalDuration,
      chapters: courseChapters,
      isFree: course.isFree,
      level: course.level as Course['level'],
      studentsEnrolled: 0,
      lastUpdated: 'recently',
    } as Course
  } catch (error) {
    console.error('Error fetching course:', error)
    return null
  }
}

// Get lesson content (raw markdown string)
export async function getKeyLessonContent(lessonSlug: string): Promise<string | null> {
  try {
    // Get raw markdown content from file
    const rawContent = getRawMDXContent(lessonSlug, 'lessons')
    if (rawContent) return rawContent
    
    // Fallback to resolved content
    const lesson = await reader.collections.lessons.read(lessonSlug)
    if (!lesson?.content) return null
    const resolved = await resolveContent(lesson.content)
    
    // If it's already a string, return it
    if (typeof resolved === 'string') return resolved
    
    // Otherwise return null and let the component handle it
    return null
  } catch {
    return null
  }
}
