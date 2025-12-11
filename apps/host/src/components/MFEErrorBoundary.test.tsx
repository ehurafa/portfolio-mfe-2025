import { fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { MFEErrorBoundary } from './MFEErrorBoundary'

// Component that throws error to test boundary
const Bomb = ({ shouldThrow }: { shouldThrow?: boolean }) => {
  if (shouldThrow) {
    throw new Error('Boom!')
  }
  return <div>Safe Content</div>
}

describe('MFEErrorBoundary', () => {
  // Suppress console.error for test duration
  const originalError = console.error
  afterEach(() => {
    console.error = originalError
  })

  it('renders children when no error occurs', () => {
    render(
      <MFEErrorBoundary>
        <Bomb />
      </MFEErrorBoundary>
    )
    expect(screen.getByText('Safe Content')).toBeInTheDocument()
  })

  it('renders fallback when error occurs', () => {
    // Mock console.error to avoid noise in test output
    console.error = vi.fn()

    render(
      <MFEErrorBoundary mfeName="TestApp">
        <Bomb shouldThrow />
      </MFEErrorBoundary>
    )

    expect(screen.getByText(/Erro ao carregar microfrontend/i)).toBeInTheDocument()
    expect(screen.getByText('MFE: TestApp')).toBeInTheDocument()
    expect(screen.getByText('Boom!')).toBeInTheDocument()
  })

  it('renders custom fallback if provided', () => {
    console.error = vi.fn()

    render(
      <MFEErrorBoundary fallback={<div>Custom Fallback</div>}>
        <Bomb shouldThrow />
      </MFEErrorBoundary>
    )

    expect(screen.getByText('Custom Fallback')).toBeInTheDocument()
  })
})
