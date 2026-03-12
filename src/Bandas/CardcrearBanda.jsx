import React from "react";
import './Cardcrearagrupacio.css'


function Crearagrupacion() {
  return (
    <div>
      <h2>Crear Banda / Grupo</h2>
      <p>Crear tu banda y comienza a invitar músicos</p>
      <form>
        <label htmlFor="nombre">Nombre de la Banda</label>
        <input
          type="text"
          id="nombre"
          placeholder="El nombre de tu banda"
        />

        <label htmlFor="genero">Género Musical</label>
        <select id="genero">
          <option value="">Selecciona un género</option>
          <option value="rock">Rock</option>
          <option value="pop">Pop</option>
          <option value="jazz">Jazz</option>
          <option value="metal">Metal</option>
          <option value="reggae">Reggae</option>
          <option value="clasico">Clásico</option>
        </select>

        <label htmlFor="ubicacion">Ubicación</label>
        <input
          type="text"
          id="ubicacion"
          placeholder="Ciudad, País"
        />

        <label htmlFor="descripcion">Descripción</label>
        <textarea
          id="descripcion"
          rows="4"
          placeholder="Describe tu banda, su estilo y lo que buscan..."
        />

        <div>
          <button type="reset">Cancelar</button>
          <button type="submit">Crear Banda</button>
        </div>
      </form>
    </div>
  );
}

export default Crearagrupacion;