import React from 'react'
import { render } from '@testing-library/react'
import Sidebar from '.'

describe('Sidebar', () => {
  it('firstChild should be defined', () => {
    const { container } = render(<Sidebar />)
    expect(container.firstChild).toBeDefined()
  })
})
