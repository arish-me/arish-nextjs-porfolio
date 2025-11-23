/* eslint-disable */

'use client'

import React, { useEffect } from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { COURSES_DATA } from '@/config/courses';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronRight, ChevronLeft, Clock, BookOpen } from 'lucide-react';
import { markLessonComplete } from '@/lib/course-progress';

export default function LessonPage() {
  const params = useParams();
  const router = useRouter();
  const courseId = params.courseId as string;
  const chapterId = params.chapterId as string;
  const lessonId = params.lessonId as string;

  // Mark lesson as complete when viewed
  useEffect(() => {
    markLessonComplete(courseId, chapterId, lessonId);
    
    // Dispatch custom event to update other components
    window.dispatchEvent(new Event('course-progress-updated'));
  }, [courseId, chapterId, lessonId]);

  const course = COURSES_DATA.find(c => c.id === courseId);
  
  if (!course) {
    return (
      <div className="py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Course Not Found</h1>
        <Link href="/courses" className="text-primary hover:underline">
          Back to Courses
        </Link>
      </div>
    );
  }

  const chapter = course.chapters.find(ch => ch.id === chapterId);
  if (!chapter) {
    return (
      <div className="py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Chapter Not Found</h1>
        <Link href={`/courses/${courseId}`} className="text-primary hover:underline">
          Back to Course
        </Link>
      </div>
    );
  }

  const lesson = chapter.lessons.find(l => l.id === lessonId);
  if (!lesson) {
    return (
      <div className="py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Lesson Not Found</h1>
        <Link href={`/courses/${courseId}`} className="text-primary hover:underline">
          Back to Course
        </Link>
      </div>
    );
  }

  // Find current lesson index across all chapters
  let currentIndex = -1;
  let allLessons: Array<{ chapter: typeof chapter; lesson: typeof lesson; chapterIndex: number; lessonIndex: number }> = [];
  
  course.chapters.forEach((ch, chIdx) => {
    ch.lessons.forEach((les, lesIdx) => {
      allLessons.push({ chapter: ch, lesson: les, chapterIndex: chIdx, lessonIndex: lesIdx });
      if (ch.id === chapterId && les.id === lessonId) {
        currentIndex = allLessons.length - 1;
      }
    });
  });

  const previousLesson = currentIndex > 0 ? allLessons[currentIndex - 1] : null;
  const nextLesson = currentIndex < allLessons.length - 1 ? allLessons[currentIndex + 1] : null;

  // Get lesson number (1-based)
  const lessonNumber = currentIndex + 1;
  const totalLessons = allLessons.length;

  return (
    <div className="py-16 space-y-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-muted-foreground">
        <Link href="/courses" className="hover:text-foreground transition-colors">
          Mini Courses
        </Link>
        <ChevronRight className="h-4 w-4" />
        <Link href={`/courses?category=${course.category}`} className="hover:text-foreground transition-colors">
          {course.category}
        </Link>
        <ChevronRight className="h-4 w-4" />
        <Link href={`/courses/${courseId}`} className="hover:text-foreground transition-colors">
          {course.title}
        </Link>
        <ChevronRight className="h-4 w-4" />
        <Link href={`/courses/${courseId}`} className="hover:text-foreground transition-colors">
          {chapter.title}
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-foreground">{lesson.title}</span>
      </nav>

      {/* Lesson Header */}
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <BookOpen className="h-6 w-6 text-primary" />
            <h1 className="text-4xl font-bold">{lesson.title}</h1>
          </div>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              <span>Estimated time: {lesson.duration} {lesson.duration === 1 ? 'minute' : 'minutes'}</span>
            </div>
            <span>Lesson {lessonNumber} of {totalLessons}</span>
          </div>
        </div>
      </div>

      {/* Lesson Content */}
      <Card>
        <CardHeader>
          <CardTitle>Lesson Content</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <div className="whitespace-pre-wrap text-foreground leading-relaxed">
              {lesson.content}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Navigation */}
      <div className="flex items-center justify-between gap-4 pt-8 border-t">
        <div className="flex-1">
          {previousLesson ? (
            <Button
              variant="outline"
              asChild
              className="w-full sm:w-auto"
            >
              <Link href={`/courses/${courseId}/${previousLesson.chapter.id}/${previousLesson.lesson.id}`}>
                <ChevronLeft className="h-4 w-4 mr-2" />
                Previous: {previousLesson.lesson.title}
              </Link>
            </Button>
          ) : (
            <div />
          )}
        </div>
        
        <div className="flex-1 flex justify-end">
          {nextLesson ? (
            <Button
              asChild
              className="w-full sm:w-auto"
            >
              <Link href={`/courses/${courseId}/${nextLesson.chapter.id}/${nextLesson.lesson.id}`}>
                Next: {nextLesson.lesson.title}
                <ChevronRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          ) : (
            <Button
              variant="outline"
              asChild
              className="w-full sm:w-auto"
            >
              <Link href={`/courses/${courseId}`}>
                Back to Course
              </Link>
            </Button>
          )}
        </div>
      </div>

      {/* Lesson Navigation Info */}
      <div className="text-center text-sm text-muted-foreground">
        <span>{lessonNumber} / {totalLessons}</span>
      </div>
    </div>
  );
}

