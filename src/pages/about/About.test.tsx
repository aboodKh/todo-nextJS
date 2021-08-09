import React from 'react'
import { render, screen} from '@testing-library/react'
import About from './About'

test('renders deploy link', () => {
  render(<About />)
  const textElement = screen.getByText(/about/);
  expect(textElement).toBeInTheDocument()
})