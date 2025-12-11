import { act, render, screen } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import About from './About'

describe('About Page', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders loading spinner initially', () => {
    const { container } = render(<About />)
    const spinner = container.querySelector('.spinner')
    expect(spinner).toBeInTheDocument()
  })

  it('renders content after timeout', () => {
    render(<About />)

    // Fast-forward time
    act(() => {
      vi.advanceTimersByTime(500)
    })

    expect(screen.getByText(/Minha História/i)).toBeInTheDocument()
    expect(screen.getByText(/Rafael Gomes/i)).toBeInTheDocument()
    expect(screen.getByText(/Mercado Bitcoin/i)).toBeInTheDocument()
  })
})
