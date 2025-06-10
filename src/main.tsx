import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'

import Header from './header.tsx'
import Container from './Container.tsx'
import './main.css'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <Container nome='Body' />
  </StrictMode>
)
