import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify'

import theme from 'core/theme-styled'
import store from 'store'
import { Home } from 'pages'
import GlobalStyle from 'core/global-style'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <GlobalStyle />
        <ToastContainer />
        <Home />
      </Provider>
    </ThemeProvider>
  )
}

export default App
