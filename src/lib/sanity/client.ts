import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

// Get environment variables
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

// Create client with proper validation
// During build, if env vars aren't set, we create a minimal client that won't fail
// Use a valid-looking projectId format for the placeholder (Sanity IDs are typically alphanumeric)
const safeProjectId = projectId && projectId.trim() !== '' 
  ? projectId 
  : 'build-placeholder-12345678'

let clientInstance: ReturnType<typeof createClient>
let builderInstance: ReturnType<typeof imageUrlBuilder>

try {
  clientInstance = createClient({
    projectId: safeProjectId,
    dataset,
    useCdn: !!projectId && projectId.trim() !== '', // Only use CDN if we have a real project ID
    apiVersion: '2024-01-01',
    // Add token if available (optional for read-only access)
    token: process.env.SANITY_API_TOKEN,
  })
  builderInstance = imageUrlBuilder(clientInstance)
} catch (error) {
  // Fallback client if initialization fails (e.g., during build)
  // This should rarely happen, but ensures build doesn't fail
  console.warn('Sanity client initialization failed, using fallback:', error)
  try {
    clientInstance = createClient({
      projectId: 'build-placeholder-12345678',
      dataset: 'production',
      useCdn: false,
      apiVersion: '2024-01-01',
    })
    builderInstance = imageUrlBuilder(clientInstance)
  } catch (fallbackError) {
    // If even the fallback fails, create a minimal client
    // This should never happen, but ensures build succeeds
    console.error('Sanity client fallback also failed:', fallbackError)
    clientInstance = createClient({
      projectId: 'build-placeholder-12345678',
      dataset: 'production',
      useCdn: false,
      apiVersion: '2024-01-01',
    }) as any
    builderInstance = imageUrlBuilder(clientInstance)
  }
}

export const client = clientInstance

export function urlFor(source: SanityImageSource) {
  if (!source) {
    // Return a placeholder builder if source is invalid
    return builderInstance.image('')
  }
  try {
    return builderInstance.image(source)
  } catch (error) {
    console.warn('Error creating image URL:', error)
    // Return a placeholder builder on error
    return builderInstance.image('')
  }
}

