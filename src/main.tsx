import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'

const basename = import.meta.env.PROD ? "/ruhuwiko-secondary-school" : "/"; // use "/" locally

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <BrowserRouter basename={basename}>
    <App />
   </BrowserRouter> 
  </StrictMode>,
)
