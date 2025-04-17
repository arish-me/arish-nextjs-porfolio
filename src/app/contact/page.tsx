/* eslint-disable */

import Contact from './contact'
import { generateMetadata } from '@/lib/seo';

const title = 'Contact';

export const metadata = generateMetadata(title);
export default function ContactPage() {

  return (
    <Contact />
  );
}