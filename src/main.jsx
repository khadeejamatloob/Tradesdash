import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

// Ye React ki "shuruaat" ki file hai.
// BrowserRouter poori app ko ye taqat deta hai ke
// browser ke address (URL) ke hisaab se screen badle.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)