import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './library/Library.css'
import Library from './library/mainContent/Library.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Library />
  </StrictMode>,
)
