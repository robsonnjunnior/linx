import React from 'react'
import { render } from '@testing-library/react'
import Loader from '.'

let mockLoading = false

jest.mock('react-redux', () => ({
  useSelector: () => ({ loading: mockLoading })
}))

describe('Loader', () => {
  it('firstChild must be null when loader is false', () => {
    const { container } = renderComponent()
    expect(container.firstChild).toBeNull()
  })

  it('firstChild must be null when loader is false', async () => {
    mockLoading = true
    await jest.resetAllMocks()

    const { getByTestId } = renderComponent()
    const container = getByTestId('container-loader-id')

    expect(container).toBeDefined()
  })
})

function renderComponent() {
  return render(<Loader />)
}
