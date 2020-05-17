import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('firstChild should be defined', () => {
    const { container } = render(<App />)
    expect(container.firstChild).toBeDefined()
  })
})
