import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { BrowserRouter } from 'react-router-dom'
import RoutesIndex from './routes/index.tsx'



createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <StrictMode>
      <RoutesIndex/>
    </StrictMode>
  </BrowserRouter>,
)
