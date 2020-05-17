import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Filter from '.'

const mockDispatch = jest.fn()

jest.mock('react-redux', () => ({
  useDispatch: () => mockDispatch
}))

describe('Filter', () => {
  it('firstChild must be defined', () => {
    const { container } = renderComponent()
    expect(container.firstChild).toBeDefined()
  })

  it('dispatch must be called when input have text', () => {
    const event = { target: { value: 'Blumenau' } }
    const { getByTestId } = renderComponent()

    const input = getByTestId('search-input')
    fireEvent.change(input, event)

    const button = getByTestId('search-button')
    fireEvent.click(button)

    expect(mockDispatch).toHaveBeenCalledTimes(1)
  })

  it('dispatch must be called when input have text', () => {
    mockDispatch.mockReset()

    const event = { target: { value: '' } }
    const { getByTestId } = renderComponent()

    const input = getByTestId('search-input')
    fireEvent.change(input, event)

    const button = getByTestId('search-button')
    fireEvent.click(button)

    expect(mockDispatch).not.toHaveBeenCalled()
  })
})

function renderComponent(overrideProps = {}) {
  const props = {
    ...overrideProps
  }

  return render(<Filter {...props} />)
}
