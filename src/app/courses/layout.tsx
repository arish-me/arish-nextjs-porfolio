/* eslint-disable */

import { generateMetadata } from '@/lib/seo';

const title = 'Mini Courses';
const description = 'Explore our collection of free and premium courses covering Docker, Linux, Vim, and more. Learn at your own pace with structured lessons and hands-on examples.';

export const metadata = generateMetadata(title, description, undefined, undefined, 'courses');

export default function CoursesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

