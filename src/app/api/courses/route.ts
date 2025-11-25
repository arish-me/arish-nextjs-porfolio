/* eslint-disable */

import { NextResponse } from 'next/server'
import { getCourses } from '@/lib/sanity/utils'

export async function GET() {
  try {
    const courses = await getCourses()
    return NextResponse.json(courses)
  } catch (error) {
    console.error('Error fetching courses:', error)
    return NextResponse.json([], { status: 200 }) // Return empty array on error
  }
}


