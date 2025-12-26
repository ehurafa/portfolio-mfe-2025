import { mockProjects } from './mockData'

export interface ImageSizes {
  large: string
  medium?: string
  small?: string
  thumbnail?: string
  [key: string]: string | number | undefined
}
export interface ImagePost {
  url: string
  sizes?: ImageSizes
  [key: string]: unknown
}

export interface TechnologyTag {
  term_id: number
  name: string
  slug?: string
  term_group?: number
  [key: string]: unknown
}
export interface ACF {
  data_post: string
  image_post: ImagePost
  image_square_400?: ImagePost
  title_post: string
  post_content: string
  list_of_technologies: TechnologyTag[]
  [key: string]: unknown
}

export interface Content {
  rendered?: string
  protected?: boolean
}
export interface WPPost {
  id: number
  acf: ACF
  slug: string
  content: Content
  excerpt?: Content
  [key: string]: unknown
}

const WP_API_BASE = import.meta.env.VITE_WP_API_BASE

// Enable mock data by setting VITE_USE_MOCK_DATA=true in your .env file
const USE_MOCK_DATA = import.meta.env.VITE_USE_MOCK_DATA === 'true'

export async function fetchPosts(): Promise<WPPost[]> {
  // Use mock data if enabled
  if (USE_MOCK_DATA) {
    console.log('🎭 Using mock data for projects')
    return Promise.resolve(mockProjects)
  }

  const res = await fetch(`${WP_API_BASE}/posts?per_page=100&_embed&acf_format=standard`)
  if (!res.ok) throw new Error(`Erro HTTP: ${res.status}`)
  return res.json() as Promise<WPPost[]>
}

// Try to resolve an image URL from multiple possible shapes
export function getPostImage(p: WPPost): string | null {
  // 1. Try the specific 400x400 square image requested for thumbnails
  const squareThumb = p.acf?.image_square_400?.sizes?.['post-page']
  if (typeof squareThumb === 'string' && squareThumb.length > 0) {
    return squareThumb
  }

  // 2. Fallback to the default image_post url
  const acfThumb = p.acf?.image_post?.url
  if (typeof acfThumb === 'string' && acfThumb.length > 0) {
    return acfThumb
  }

  return null
}

export async function fetchPostBySlug(slug: string): Promise<WPPost> {
  // Use mock data if enabled
  if (USE_MOCK_DATA) {
    console.log('🎭 Using mock data for post by slug:', slug)
    const post = mockProjects.find(p => p.slug === slug)
    if (!post) throw new Error(`Post with slug "${slug}" not found in mock data`)
    return Promise.resolve(post)
  }

  const res = await fetch(
    `${WP_API_BASE}/posts?slug=${slug}&per_page=100&_embed&acf_format=standard`
  )
  if (!res.ok) throw new Error(`Erro HTTP: ${res.status}`)
  const data = (await res.json()) as WPPost[]
  return data[0]
}

export async function fetchPostById(id: string | number): Promise<WPPost[]> {
  // Use mock data if enabled
  if (USE_MOCK_DATA) {
    console.log('🎭 Using mock data for post by id:', id)
    const post = mockProjects.find(p => p.id === Number(id))
    if (!post) throw new Error(`Post with id "${id}" not found in mock data`)
    return Promise.resolve([post])
  }

  const res = await fetch(`${WP_API_BASE}/posts/${id}?_embed&acf_format=standard`)
  if (!res.ok) throw new Error(`Erro HTTP: ${res.status}`)
  const data: unknown = await res.json()
  if (!Array.isArray(data)) {
    throw new Error('Formato inesperado de resposta da API')
  }
  return data as WPPost[]
}
