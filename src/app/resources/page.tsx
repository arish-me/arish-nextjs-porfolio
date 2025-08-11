/* eslint-disable */

import Resources from './resources'
import { generateMetadata } from '@/lib/seo';

const title = 'Resources';
const description = "Discover my curated collection of learning resources, including recommended books on Ruby on Rails and React development, plus handpicked tutorials and courses that have helped me grow as a Full Stack Developer.";

export const metadata = generateMetadata(title, description, undefined, undefined, 'resources');

export default function ResourcesPage() {
  return <Resources />;
}
