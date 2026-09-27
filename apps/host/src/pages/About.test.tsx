import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import About from './About'

describe('About Page', () => {
  it('renders the story and the career timeline', () => {
    render(<About />)

    expect(screen.getByText(/Minha História/i)).toBeInTheDocument()
    expect(screen.getAllByText(/Desenvolvedor Front-end/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/Mercado Bitcoin/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/Ouribank/i).length).toBeGreaterThan(0)
  })
})
