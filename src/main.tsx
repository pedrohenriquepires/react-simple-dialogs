import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from 'src/app'
import './index.css'
import './lib/index.css'
import { SimpleDialogContainer } from './lib/simple-dialog-container'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SimpleDialogContainer />
    <App />
  </React.StrictMode>,
)
