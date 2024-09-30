import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import Router from './Router'
import { DarkModeProvider } from "./contexts/DarkModeContext"
import Portfolio from './pages/Portfolio'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DarkModeProvider>
      <Portfolio />
    </DarkModeProvider>
  </StrictMode>,
)
