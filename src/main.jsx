import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ThemeProvider } from '@emotion/react'
import GlobalStyles from './style/GlobalStyles'
import { createTheme } from './style/utils'
import { theme } from './style/theme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <ThemeProvider theme={createTheme(theme)}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
