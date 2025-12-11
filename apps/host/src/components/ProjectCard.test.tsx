import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { BrowserRouter } from 'react-router-dom'
import { WPPost } from '../api/wp'
import ProjectCard from './ProjectCard'

// Mock the API util
vi.mock('../api/wp', () => ({
  getPostImage: () => 'mock-image.jpg'
}))

describe('ProjectCard', () => {
  const mockPost = {
    id: 1,
    slug: 'test-project',
    title: { rendered: 'Test' },
    content: { rendered: 'Content' },
    acf: {
      title_post: 'Test Project',
      image_post: { url: 'img.jpg' }
    }
  } as unknown as WPPost

  it('renders properly and links to project details', () => {
    render(
      <BrowserRouter>
        <ProjectCard post={mockPost} />
      </BrowserRouter>
    )

    // Check title
    expect(screen.getByText('Test Project')).toBeInTheDocument()

    // Check link
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', '/projeto/test-project')
  })
})
