import React from 'react'
import { render } from '@testing-library/react'

import Welcome from '.'

describe('Welcome', () => {
  it('firstChild must be defined', () => {
    const { container } = renderComponent()
    expect(container.firstChild).toBeDefined()
  })

  it('text `BE_WELCOME` must be render', () => {
    const { queryAllByText } = renderComponent()
    expect(queryAllByText('BE_WELCOME')).toHaveLength(1)
  })
})

function renderComponent() {
  return render(<Welcome />)
}
