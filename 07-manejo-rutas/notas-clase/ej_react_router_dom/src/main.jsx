import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// Paso 1. Importamos BrowserRouter de react-router-dom en main.jsx

import { BrowserRouter } from 'react-router-dom'
import RoutesIndex from './routes/index.jsx'
import Navbar from './components/Navbar.jsx'

createRoot(document.getElementById('root')).render(
  // Paso 2. Envolver la app con BrowserRouter
  <BrowserRouter>
    <StrictMode>
      <Navbar/>
      <RoutesIndex />
    </StrictMode>
  </BrowserRouter>
  ,
)
