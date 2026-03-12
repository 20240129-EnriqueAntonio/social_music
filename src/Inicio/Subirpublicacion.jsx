import React from "react";
import './Stylesubirpublicacion.css'

function ModalPublicacion({ visible, onClose }) {
  if (!visible) return null; // si no está visible, no se renderiza

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Crear Publicación</h2>
        <p>Comparte tu música con la comunidad</p>

        <textarea
          placeholder="Comparte tu música, tu experiencia, tus proyectos..."
          className="modal-input"
        />

        <div className="modal-actions">
          <button>Agregar Foto</button>
          <button>Agregar Video</button>
        </div>

        <div >
          <button onClick={onClose}>Cancelar</button>
          <button>Publicar</button>
        </div>
      </div>
    </div>
  );
}

export default ModalPublicacion;