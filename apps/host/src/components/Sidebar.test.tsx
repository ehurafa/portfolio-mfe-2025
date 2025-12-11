import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { BrowserRouter } from 'react-router-dom'
import Sidebar from './Sidebar'

describe('Sidebar', () => {
  const renderSidebar = () => {
    return render(
      <BrowserRouter>
        <Sidebar />
      </BrowserRouter>
    )
  }

  it('renders correctly', () => {
    renderSidebar()
    expect(screen.getByText('Front-end Developer')).toBeInTheDocument()
    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })

  it('toggles menu on button click', () => {
    const { container } = renderSidebar()
    const toggleBtn = screen.getByLabelText('Toggle navigation')
    const nav = container.querySelector('.nav')

    // Initial state: not open (class empty or just 'nav')
    expect(nav).not.toHaveClass('open')

    // Click to open
    fireEvent.click(toggleBtn)
    expect(nav).toHaveClass('open')

    // Click to close
    fireEvent.click(toggleBtn)
    expect(nav).not.toHaveClass('open')
  })

  it('closes menu when a link is clicked', () => {
    const { container } = renderSidebar()
    const toggleBtn = screen.getByLabelText('Toggle navigation')
    const nav = container.querySelector('.nav')

    // Open menu
    fireEvent.click(toggleBtn)
    expect(nav).toHaveClass('open')

    // Click link
    fireEvent.click(screen.getByText('Projetos'))
    expect(nav).not.toHaveClass('open')
  })
})
