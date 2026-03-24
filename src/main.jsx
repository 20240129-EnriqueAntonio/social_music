import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from './context/AuthContext'
import { BandProvider } from './context/BandContext'
import { TocadaProvider } from './context/TocadaContext'
import { PublicationProvider } from './context/PublicationContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <BandProvider>
        <TocadaProvider>
          <PublicationProvider>
            <App />
          </PublicationProvider>
        </TocadaProvider>
      </BandProvider>
    </AuthProvider>
  </StrictMode>,
)
