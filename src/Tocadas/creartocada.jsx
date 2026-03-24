import React, { useState } from "react";
import { useTocadas } from '../context/TocadaContext';

function Creartocada({ onClose }){
  const { agregarTocada } = useTocadas();
  const [formData, setFormData] = useState({
    nombre: "",
    ubicacion: "",
    fecha: "",
    descripcion: ""
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Tocada creada:", formData);
    agregarTocada(formData);
    alert("¡Tocada creada exitosamente!");
    setFormData({
      nombre: "",
      ubicacion: "",
      fecha: "",
      descripcion: ""
    });
    if (onClose) {
      onClose();
    }
  };

  const handleCancel = () => {
    setFormData({
      nombre: "",
      ubicacion: "",
      fecha: "",
      descripcion: ""
    });
    if (onClose) {
      onClose();
    }
  };

  return(
    <div>
        <div>
      <h2>Crear Tocada / Evento</h2>
      <p>Organiza un evento y publica </p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre del evento</label>
        <input
          type="text"
          id="nombre"
          placeholder="El nombre del evento "
          value={formData.nombre}
          onChange={handleChange}
          required
        />

        <label htmlFor="ubicacion">Ubicación</label>
        <input
          type="text"
          id="ubicacion"
          placeholder="Ciudad, País"
          value={formData.ubicacion}
          onChange={handleChange}
          required
        />
        <section>
                <label htmlFor="fecha">Fecha y Hora</label>
        <input
          type="datetime-local"
          id="fecha"
          placeholder="Fecha"
          value={formData.fecha}
          onChange={handleChange}
          required
        />
        </section>
        <label htmlFor="descripcion">Descripción</label>
        <textarea
          id="descripcion"
          rows="4"
          placeholder="Describe tu banda, su estilo y lo que buscan..."
          value={formData.descripcion}
          onChange={handleChange}
          required
        />
        <div>
          <button type="button" onClick={handleCancel}>Cancelar</button>
          <button type="submit">Crear Evento</button>
        </div>
      </form>
    </div>
    </div>
)
}
export default Creartocada;