import React, { useState } from "react";
import Header from "../Inicio/Header";
import Sidebar from "../Inicio/Sidebar";
import Perfil from "../Perfil/Perfil1";
import "./Crearbanda.css";
import { FiPlusCircle } from "react-icons/fi";
import Crearagrupacion from "./CardcrearBanda";

function Banda() {
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
        <h2>Bandas y Grupos</h2>
        <button className="crear-banda-btn" onClick={handleClick}>
          <FiPlusCircle size={20} /> Crear banda
        </button>
      </section>

      {/* Modal centrado */}
      {mostrarFormulario && (
        <div className="modal-overlay">
          <div className="modal-content">
            <Crearagrupacion />
            <button className="close-btn" onClick={handleClose}>
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Banda;