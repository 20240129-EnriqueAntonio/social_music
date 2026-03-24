import React from "react";
import "./styleinicio.css";
import Sidebar from "./Sidebar";
import Perfil from "../Perfil/Perfil1";

import CompatiendoHOY from "./ConexionCompartir";
import CardCambiante from "../CardCambiante/Card";
import Header from "./Header";

function Inicio() {
  return (
  
    <div className="Inicio">

      <Header/>

      <div className="Sidebar">
        <Sidebar />

        <div className="Perfil" >
          <Perfil />
        </div>
      </div>

    
      <section className="Compartir">
        
      <CompatiendoHOY />
      </section>
      <section className="Cardprincipal">
        <CardCambiante />
      </section>
    </div>
  );
}

function EventCard({ title }) {
  return (
    <div className="event-card">
      <h3>{title}</h3>
      <button>Confirmar</button>
    </div>
  );
}

export default Inicio;
