import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.arishdev.com/', // Homepage URL should also have a trailing slash if all others do for consistency
      lastModified: new Date(),
    },
    {
      url: 'https://www.arishdev.com/about/', // Added www
      lastModified: new Date(),
    },
    {
      url: 'https://www.arishdev.com/blogs/', // Added www
      lastModified: new Date(),
    },
    {
      url: 'https://www.arishdev.com/projects/', // Added www
      lastModified: new Date(),
    },
    {
      url: 'https://www.arishdev.com/contact/', // Added www
      lastModified: new Date(),
    },
  ]
}