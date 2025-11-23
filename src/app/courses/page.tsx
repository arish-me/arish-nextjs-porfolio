/* eslint-disable */

'use client'

import React, { useState, useMemo, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import CourseCard from '@/components/courses/course-card';
import { getCourses } from '@/lib/sanity/utils';
import type { Course } from '@/config/courses';

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Courses');
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCourses() {
      try {
        const fetchedCourses = await getCourses();
        setCourses(fetchedCourses);
      } catch (error) {
        console.error('Error fetching courses:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchCourses();
  }, []);

  // Get all unique categories
  const categories = useMemo(() => {
    const cats = ['All Courses', ...new Set(courses.map(course => course.category))];
    return cats;
  }, [courses]);

  // Filter courses by category
  const filteredCourses = useMemo(() => {
    if (selectedCategory === 'All Courses') {
      return courses;
    }
    return courses.filter(course => course.category === selectedCategory);
  }, [selectedCategory, courses]);

  // Count courses per category
  const getCategoryCount = (category: string) => {
    if (category === 'All Courses') {
      return courses.length;
    }
    return courses.filter(course => course.category === category).length;
  };

  if (loading) {
    return (
      <div className="py-16 space-y-12">
        <div className="text-center">
          <p className="text-muted-foreground">Loading courses...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 space-y-12">
      <section className="space-y-4">
        <h1 className="text-5xl font-bold">Mini Courses</h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Explore our collection of free and premium courses covering Docker, Linux, Vim, and more. 
          Learn at your own pace with structured lessons and hands-on examples.
        </p>
      </section>

      {/* Filter Buttons */}
      <section className="flex flex-wrap gap-3">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? 'default' : 'outline'}
            onClick={() => setSelectedCategory(category)}
            className="rounded-full"
          >
            {category} ({getCategoryCount(category)})
          </Button>
        ))}
      </section>

      {/* Courses Grid */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>
    </div>
  );
}

