import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import store from 'store'
import Home from '.'

describe('Home Screen', () => {
  it('firstChild should be defined', () => {
    const { container } = render(
      <Provider store={store}>
        <Home />
      </Provider>
    )

    expect(container).toBeDefined()
  })
})
