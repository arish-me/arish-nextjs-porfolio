  /* eslint-disable */

'use client'

import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BlurImage } from '@/components/blur-image';
import { Clock, BookOpen, GraduationCap } from 'lucide-react';
import type { Course } from '@/config/courses';

interface CourseCardProps {
  course: Course;
}

const CourseCard = ({ course }: CourseCardProps) => {
  const totalChapters = course.chapters.length;
  const totalLessons = course.chapters.reduce((sum, chapter) => sum + chapter.lessons.length, 0);

  return (
    <Link href={`/courses/${course.id}`}>
      <Card className="group hover:border-primary transition-all cursor-pointer h-full flex flex-col overflow-hidden">
        <div className="relative w-full aspect-video bg-muted overflow-hidden">
          <BlurImage
            src={course.image}
            alt={course.title}
            size="lg"
            className="w-full h-full"
            objectFit="contain"
          />
          <div className="absolute top-2 left-2">
            <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
              {course.category}
            </Badge>
          </div>
          {course.isFree && (
            <div className="absolute bottom-2 right-2">
              <Badge className="bg-green-600 hover:bg-green-700">
                FREE
              </Badge>
            </div>
          )}
        </div>
        <CardHeader className="flex-1">
          <CardTitle className="group-hover:text-primary transition-colors">
            {course.title}
          </CardTitle>
          <CardDescription>{course.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              <span>{course.duration} min</span>
            </div>
            <div className="flex items-center gap-1.5">
              <BookOpen className="h-4 w-4" />
              <span>{totalChapters} {totalChapters === 1 ? 'chapter' : 'chapters'}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <GraduationCap className="h-4 w-4" />
              <span>{totalLessons} {totalLessons === 1 ? 'lesson' : 'lessons'}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CourseCard;

