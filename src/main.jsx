import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Nur from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nur />
  </StrictMode>,
)
