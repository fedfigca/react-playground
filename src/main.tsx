import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { CssBaseline } from '@mui/material'

import router from './resources/router-config'
import { ObservationsProvider } from './resources/data-service'
import Header from './components/header'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CssBaseline />
    <Header />
    <ObservationsProvider>
      <RouterProvider router={router} />
    </ObservationsProvider>
  </React.StrictMode>,
)
