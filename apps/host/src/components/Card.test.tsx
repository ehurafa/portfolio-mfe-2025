import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Card from './Card'

describe('Card', () => {
  describe('GenericCard mode (default)', () => {
    it('renders with thumbnail, title and description', () => {
      render(<Card thumbnail="/test.jpg" title="Test Card" description="Test Description" />)

      expect(screen.getByText('Test Card')).toBeInTheDocument()
      expect(screen.getByText('Test Description')).toBeInTheDocument()
      expect(screen.getByAltText('Test Card')).toBeInTheDocument()
    })

    it('renders tag when provided', () => {
      render(<Card thumbnail="/test.jpg" title="Test Card" tag="Udemy" tagColor="purple" />)

      expect(screen.getByText('Udemy')).toBeInTheDocument()
    })

    it('renders as anchor when href is provided', () => {
      const { container } = render(
        <Card thumbnail="/test.jpg" title="Test Card" href="https://example.com" />
      )

      const anchor = container.querySelector('a')
      expect(anchor).toBeInTheDocument()
      expect(anchor?.href).toBe('https://example.com/')
    })

    it('renders as button when onClick is provided', () => {
      const handleClick = vi.fn()
      const { container } = render(
        <Card thumbnail="/test.jpg" title="Test Card" onClick={handleClick} />
      )

      const button = container.querySelector('button')
      expect(button).toBeInTheDocument()
    })

    it('renders technology tags when provided', () => {
      render(
        <Card
          thumbnail="/test.jpg"
          title="Test Card"
          technologies={['React', 'TypeScript', 'SCSS']}
        />
      )

      expect(screen.getByText('React')).toBeInTheDocument()
      expect(screen.getByText('TypeScript')).toBeInTheDocument()
      expect(screen.getByText('SCSS')).toBeInTheDocument()
    })
  })

  describe('Info variant (for Home page)', () => {
    it('renders with variant="info"', () => {
      render(
        <Card variant="info" title="Test Info Card">
          <p>Info content</p>
        </Card>
      )

      expect(screen.getByText('Test Info Card')).toBeInTheDocument()
      expect(screen.getByText('Info content')).toBeInTheDocument()
    })

    it('applies correct classes for info variant', () => {
      const { container } = render(
        <Card variant="info" title="Test">
          <p>Content</p>
        </Card>
      )

      const card = container.querySelector('.card--info')
      expect(card).toBeInTheDocument()
    })
  })
})
