import { render, screen, waitFor } from '@testing-library/react'
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

  it('renders introduction text', async () => {
    renderHome()

    await waitFor(() => {
      expect(screen.getByText(/Criando experiências/i)).toBeInTheDocument()
      expect(screen.getByText(/digitais incríveis/i)).toBeInTheDocument()
    })

    expect(screen.getByText(/Desenvolvedor Front-end especializado/i)).toBeInTheDocument()
  })

  it('renders call to action buttons', () => {
    renderHome()

    expect(screen.getByText('Ver Projetos')).toBeInTheDocument()
    expect(screen.getByText('Sobre mim')).toBeInTheDocument()
  })

  it('displays feature cards', () => {
    renderHome()

    expect(screen.getByText('Clean Code')).toBeInTheDocument()
    expect(screen.getByText('Performance')).toBeInTheDocument()
    expect(screen.getByText('UX/UI')).toBeInTheDocument()

    expect(screen.getByText(/Código limpo e manutenível/i)).toBeInTheDocument()
    expect(screen.getByText(/Otimização extrema/i)).toBeInTheDocument()
    expect(screen.getByText(/Foco total na experiência do usuário/i)).toBeInTheDocument()
  })
})
