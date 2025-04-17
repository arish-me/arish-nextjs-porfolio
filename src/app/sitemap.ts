import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://arishdev.com',
      lastModified: new Date(),
    },
    {
      url: 'https://arishdev.com/about',
      lastModified: new Date(),
    },
    {
      url: 'https://arishdev.com/blogs',
      lastModified: new Date(),
    },
    {
      url: 'https://arishdev.com/projects',
      lastModified: new Date(),
    },
    {
      url: 'https://arishdev.com/contact',
      lastModified: new Date(),
    },
  ]
}