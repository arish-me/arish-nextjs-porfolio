import { NextResponse } from 'next/server'
import { getKeyCourses } from '@/lib/keystatic'
import { COURSES_DATA } from '@/config/courses'

export async function GET() {
  try {
    // Try Keystatic first
    let courses = await getKeyCourses()
    
    // Fall back to static data if no Keystatic courses
    if (courses.length === 0) {
      courses = COURSES_DATA
    }
    
    return NextResponse.json(courses)
  } catch (error) {
    console.error('Error fetching courses:', error)
    // Return static data as fallback
    return NextResponse.json(COURSES_DATA)
  }
}
