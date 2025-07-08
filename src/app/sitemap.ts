import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.arishdev.com', // Corrected
      lastModified: new Date(),
    },
    {
      url: 'https://arishdev.com/about/', // Added trailing slash
      lastModified: new Date(),
    },
    {
      url: 'https://arishdev.com/blogs/', // Added trailing slash
      lastModified: new Date(),
    },
    {
      url: 'https://arishdev.com/projects/', // Added trailing slash
      lastModified: new Date(),
    },
    {
      url: 'https://arishdev.com/contact/', // Added trailing slash
      lastModified: new Date(),
    },
  ]
}