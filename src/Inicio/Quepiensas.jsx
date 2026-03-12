
import React from "react";
import './Stylesubirpublicacion.css'

function BotonCompartir({ onClick }) {
  return (
    <button onClick={onClick} className="btn-compartir">
      ¿Qué estás compartiendo hoy?
    </button>
  );
}
export default BotonCompartir;

