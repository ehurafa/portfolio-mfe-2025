import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import Card from './Card'

describe('Card', () => {
  it('renders children correctly', () => {
    render(<Card>Test Content</Card>)
    expect(screen.getByText('Test Content')).toBeInTheDocument()
  })

  it('renders title when provided', () => {
    render(<Card title="Test Title">Content</Card>)
    expect(screen.getByText('Test Title')).toBeInTheDocument()
  })

  it('applies variant classes', () => {
    const { container } = render(<Card variant="info" title="Info Card" />)
    expect(container.firstChild).toHaveClass('card--info')
  })

  it('handles click events', () => {
    const handleClick = vi.fn()
    render(<Card onClick={handleClick}>Clickable</Card>)

    fireEvent.click(screen.getByText('Clickable'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('renders tags when variant is project', () => {
    const tags = [{ name: 'React' }, { name: 'Vite', color: 'blue' }]
    render(<Card variant="project" thumbnail="img.jpg" tags={tags} title="Project" />)

    expect(screen.getByText('React')).toBeInTheDocument()
    expect(screen.getByText('Vite')).toBeInTheDocument()
    expect(screen.getByText('Vite')).toHaveClass('blue')
  })
})
