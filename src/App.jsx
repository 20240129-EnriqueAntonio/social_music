import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'


import Inicio from './Inicio/inicio'
import Banda from './Bandas/Crearbanda'
import Tocadas from './Tocadas/Tocadasinicio'
import InfoPerfil from './Perfil/infoperfil'
import Creartocada from './Tocadas/creartocada'
import { useAuth } from './context/AuthContext'
import React from 'react'

function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/banda" element={<Banda />} />
        <Route path="/banda/crear" element={<Banda />} />
        <Route path="/tocadas" element={<Tocadas />} />
        <Route path="/tocadas/crear" element={<Creartocada />} />
        <Route path="/infoperfil" element={<InfoPerfil />} />
        <Route path="/" element={<Navigate to="/inicio" replace />} />
      </Routes>
    </Router>
  )
}

export default App
