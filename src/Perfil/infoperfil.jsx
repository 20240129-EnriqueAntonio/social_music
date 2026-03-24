import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Ifoperfil.css'

function InfoPerfil({
  nombre,
  email,
  generomusical,
  instrumento,
  fotoPerfil
}) {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("publicaciones");

  const handleVolver = () => {
    navigate("/inicio");
  };

  const renderContent = () => {
    switch(activeTab) {
      case "publicaciones":
        return <p>No hay publicaciones aún</p>;
      case "bandas":
        return <p>No hay bandas aún</p>;
      case "fotos":
        return <p>No hay fotos o videos aún</p>;
      default:
        return <p>No hay publicaciones aún</p>;
    }
  };

  return (
    <div className="perfil">
      {/* Encabezado */}
      <div className="perfil-header">
        <h2>{nombre}</h2>
        <button className="btn-volver" onClick={handleVolver}>Volver</button>
      </div>

      {/* Información principal */}
      <div className="perfil-info">
          {/* Imagen de perfil */}
      {fotoPerfil && (
        <div className="perfil-imagen">
          <img src={fotoPerfil} alt={`Foto de ${nombre}`} />
        </div>
      )}

        <p><strong>Email:</strong> {email}</p>
        <p><strong>Genero Musical:</strong> {generomusical}</p>
        <p><strong>Instrumento:</strong> {instrumento}</p>
      </div>

      {/* Tabs */}
      <div className="perfil-tabs">
        <button 
          className={`tab ${activeTab === "publicaciones" ? "active" : ""}`}
          onClick={() => setActiveTab("publicaciones")}
        >
          Publicaciones
        </button>
        <button 
          className={`tab ${activeTab === "bandas" ? "active" : ""}`}
          onClick={() => setActiveTab("bandas")}
        >
          Bandas
        </button>
        <button 
          className={`tab ${activeTab === "fotos" ? "active" : ""}`}
          onClick={() => setActiveTab("fotos")}
        >
          Fotos y Videos
        </button>
      </div>

      {/* Contenido */}
      <div className="perfil-contenido">
        {renderContent()}
      </div>
    </div>
  );
}

export default InfoPerfil;