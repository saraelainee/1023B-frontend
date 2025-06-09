import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import Container from './Container.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Container nome='Header' />
    <Container nome='Body' />
  </StrictMode>
)
