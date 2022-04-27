import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { StyledEngineProvider, ThemeProvider } from '@mui/material'
import App from './App'
import theme from './theme'


ReactDOM.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </StyledEngineProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
