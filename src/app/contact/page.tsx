/* eslint-disable */

import Contact from './contact'
import { generateMetadata } from '@/lib/seo';

const title = 'Contact';
const description = "Get in touch with Arish, an experienced Full Stack Developer specializing in Ruby on Rails & React. Let's build something great together!"

export const metadata = generateMetadata(title, description, undefined, undefined, 'contact');
export default function ContactPage() {

  return (
    <Contact />
  );
}