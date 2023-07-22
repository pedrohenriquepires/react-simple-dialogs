import React from 'react'
import ReactDOM from 'react-dom/client'
import { DialogContainer } from 'react-vite-library'
import { App } from 'src/app'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <DialogContainer />
    <App />
  </React.StrictMode>,
)
