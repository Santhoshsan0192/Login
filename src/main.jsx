import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import App from './App'
import "bootstrap/dist/css/bootstrap.min.css";


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
  <App/>
  </BrowserRouter>
  </StrictMode>,
)
