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
    expect(
      screen.getByText(/Sou desenvolvedor front-end sênior há mais de 15 anos/i)
    ).toBeInTheDocument()
  })

  it('keeps the featured projects section hidden', () => {
    renderHome()

    expect(screen.queryByText('Projetos em destaque')).not.toBeInTheDocument()
  })

  it('renders the experience summary', () => {
    renderHome()

    expect(
      screen.getByText(/Ouribank/, { selector: '.experience-item__company' })
    ).toBeInTheDocument()
    expect(screen.getByText('Ver trajetória completa').closest('a')).toHaveAttribute(
      'href',
      '/sobre-mim'
    )
  })
})
