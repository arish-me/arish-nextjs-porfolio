/* eslint-disable */

// lib/seo.ts
import type { Metadata } from 'next';
import { SITE_TITLE, SITE_DESCRIPTION, SITE_URL, SITE_NAME, SITE_KEYWORDS } from './constants';


export const generateMetadata = (
  title: string,
  description?: string,
  keywords?: string[],
  imageUrl?: string,
): Metadata => {
  const pageTitle = title ? `${title} | ${SITE_DESCRIPTION}` : SITE_TITLE;
  const pageDescription = description || SITE_DESCRIPTION;
  const pageKeywords = keywords || SITE_KEYWORDS;

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: pageKeywords,
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: SITE_URL,
      siteName: SITE_NAME,
      type: 'website',
      images: imageUrl ? [{ url: imageUrl }] : [], // Add image if provided
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      images: imageUrl ? [imageUrl] : [],
    },
  };
};