import React from 'react'
import { render } from '@testing-library/react'
import Calender from '.'

describe('Calendar', () => {
  it('firstChild should be defined', () => {
    const { container } = render(<Calender />)
    expect(container.firstChild).toBeDefined()
  })
})