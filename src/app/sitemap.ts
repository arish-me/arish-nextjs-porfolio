import type { MetadataRoute } from 'next'
import { getKeyCourses } from '@/lib/keystatic'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.arishdev.com'
  
  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blogs/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/courses/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact/`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ]

  // Fetch courses from Keystatic
  let coursePages: MetadataRoute.Sitemap = []
  
  try {
    const courses = await getKeyCourses()
    
    // Add course pages
    courses.forEach((course) => {
      // Course detail page
      coursePages.push({
        url: `${baseUrl}/courses/${course.id}/`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.7,
      })
      
      // Lesson pages
      course.chapters.forEach((chapter) => {
        chapter.lessons.forEach((lesson) => {
          coursePages.push({
            url: `${baseUrl}/courses/${course.id}/${chapter.id}/${lesson.id}/`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.6,
          })
        })
      })
    })
  } catch (error) {
    console.error('Error fetching courses for sitemap:', error)
  }

  return [...staticPages, ...coursePages]
}
