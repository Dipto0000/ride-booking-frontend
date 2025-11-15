import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { Provider as ReduxProvider } from 'react-redux'
import { router } from './routes'
import { store } from './redux/store'
import { Toaster } from './components/ui/sonner'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <RouterProvider router={router} />
      <Toaster richColors />
    </ReduxProvider>
  </React.StrictMode>
)
