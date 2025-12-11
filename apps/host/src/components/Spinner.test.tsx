import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Spinner from './Spinner'

describe('Spinner', () => {
  it('renders correctly', () => {
    const { container } = render(<Spinner />)
    const spinnerElement = container.querySelector('.spinner')
    const wrapperElement = container.querySelector('.wrapper')

    expect(spinnerElement).toBeInTheDocument()
    expect(wrapperElement).toBeInTheDocument()
  })
})
