import { render, screen, waitFor } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import Home from './Home'

// Mock the API
vi.mock('../api/github', () => ({
  fetchGithubLanguages: vi.fn().mockResolvedValue([
    { name: 'TypeScript', percentage: 60, color: '#2b7489' },
    { name: 'Vue', percentage: 40, color: '#41b883' }
  ]),
  fetchGithubContributions: vi.fn().mockResolvedValue({
    total: 1500,
    contributions: Array(365).fill({ date: '2025-01-01', count: 5, level: 3 })
  })
}))

describe('Home Page', () => {
  it('renders introduction text', async () => {
    render(<Home />)

    await waitFor(() => {
      expect(screen.getByText(/Olá, eu sou Rafael/i)).toBeInTheDocument()
    })

    expect(screen.getByText(/paixão pelo desenvolvimento front-end/i)).toBeInTheDocument()
  })

  it('displays github languages after loading', async () => {
    render(<Home />)

    await waitFor(() => {
      expect(screen.getByText('TypeScript')).toBeInTheDocument()
      expect(screen.getByText('Vue')).toBeInTheDocument()
    })

    expect(screen.getByText('60.00%')).toBeInTheDocument()
  })

  it('displays github contributions', async () => {
    render(<Home />)

    await waitFor(() => {
      expect(screen.getByText(/1500 contribuições/i)).toBeInTheDocument()
    })
  })
})
