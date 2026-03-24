import React from "react";
import { useState } from "react";
import Header from "../Inicio/Header";
import Sidebar from "../Inicio/Sidebar";
import Perfil from "../Perfil/Perfil1";
import TocadasCards from "./TocadasCards";
import { FiPlusCircle } from "react-icons/fi";
import Creartocada from "./creartocada";


function Tocadas() {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const handleClick = () => {
    setMostrarFormulario(true);
  };

  const handleClose = () => {
    setMostrarFormulario(false);
  };

  return (
    <div className="Cardprincipal">
      <section className="Header">
        <Header />
      </section>
      <section className="Sidebar">
        <Sidebar />
      </section>
      <section className="Perfil">
        <Perfil />
      </section>
      <section className="bandas-section">
        <h2>Tocadas y eventos </h2>
        <button className="crear-banda-btn" onClick={handleClick}>
          <FiPlusCircle size={20} /> Crear Tocada
        </button>
      </section>

      {/* Card con las tocadas */}
      <section className="tocadas-content">
        <TocadasCards />
      </section>

      {/* Modal centrado */}
      {mostrarFormulario && (
        <div className="modal-overlay">
          <div className="modal-content">
            <Creartocada onClose={handleClose} />
            <button className="close-btn" onClick={handleClose}>
              ×
            </button>
          </div>
        </div>
      )}
      
       
    </div>
  );
}

export default Tocadas;