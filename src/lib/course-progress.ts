/* eslint-disable */

// Course progress tracking using localStorage

export interface LessonProgress {
  courseId: string;
  chapterId: string;
  lessonId: string;
  completed: boolean;
  completedAt?: string;
}

const STORAGE_KEY = 'course-progress';

// Get all progress from localStorage
export function getAllProgress(): LessonProgress[] {
  if (typeof window === 'undefined') return [];
  
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error('Error reading progress from localStorage:', error);
    return [];
  }
}

// Save progress to localStorage
export function saveProgress(progress: LessonProgress[]): void {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (error) {
    console.error('Error saving progress to localStorage:', error);
  }
}

// Mark a lesson as completed
export function markLessonComplete(
  courseId: string,
  chapterId: string,
  lessonId: string
): void {
  const progress = getAllProgress();
  
  // Check if already exists
  const existingIndex = progress.findIndex(
    p => p.courseId === courseId && p.chapterId === chapterId && p.lessonId === lessonId
  );
  
  if (existingIndex >= 0) {
    // Update existing
    progress[existingIndex] = {
      ...progress[existingIndex],
      completed: true,
      completedAt: new Date().toISOString(),
    };
  } else {
    // Add new
    progress.push({
      courseId,
      chapterId,
      lessonId,
      completed: true,
      completedAt: new Date().toISOString(),
    });
  }
  
  saveProgress(progress);
}

// Mark a lesson as incomplete
export function markLessonIncomplete(
  courseId: string,
  chapterId: string,
  lessonId: string
): void {
  const progress = getAllProgress();
  
  const filtered = progress.filter(
    p => !(p.courseId === courseId && p.chapterId === chapterId && p.lessonId === lessonId)
  );
  
  saveProgress(filtered);
}

// Check if a lesson is completed
export function isLessonCompleted(
  courseId: string,
  chapterId: string,
  lessonId: string
): boolean {
  const progress = getAllProgress();
  
  return progress.some(
    p => p.courseId === courseId && 
         p.chapterId === chapterId && 
         p.lessonId === lessonId && 
         p.completed === true
  );
}

// Get progress for a specific course
export function getCourseProgress(courseId: string): LessonProgress[] {
  return getAllProgress().filter(p => p.courseId === courseId);
}

// Get completion count for a course
export function getCourseCompletionCount(
  courseId: string,
  totalLessons: number
): { completed: number; total: number; percentage: number } {
  const courseProgress = getCourseProgress(courseId);
  const completed = courseProgress.filter(p => p.completed).length;
  
  return {
    completed,
    total: totalLessons,
    percentage: totalLessons > 0 ? Math.round((completed / totalLessons) * 100) : 0,
  };
}

// Clear all progress (useful for testing)
export function clearAllProgress(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(STORAGE_KEY);
}

