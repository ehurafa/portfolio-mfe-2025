import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import Home from './Home'

describe('Home Page', () => {
  const renderHome = () => {
    return render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )
  }

  it('renders introduction text', () => {
    renderHome()

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Rafael Gomes/i)
    expect(screen.getByText(/Sou desenvolvedor front-end há mais de 14 anos/i)).toBeInTheDocument()
  })

  it('renders featured projects with their links', () => {
    renderHome()

    expect(screen.getByText('Aiva Commerce')).toBeInTheDocument()
    expect(screen.getByText('Abrir projeto', { exact: false }).closest('a')).toHaveAttribute(
      'href',
      'https://aiva-test.vercel.app'
    )
    expect(screen.getByText('Ver todos os projetos').closest('a')).toHaveAttribute(
      'href',
      '/projetos'
    )
  })

  it('renders the experience summary', () => {
    renderHome()

    expect(screen.getByText('Ouribank', { selector: '.experience-item__company' })).toBeInTheDocument()
    expect(screen.getByText('Ver trajetória completa').closest('a')).toHaveAttribute(
      'href',
      '/sobre-mim'
    )
  })
})
