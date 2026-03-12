import React, { useState } from "react";
import BotonCompartir from "./Quepiensas";
import ModalPublicacion from "./Subirpublicacion";

function CompartiendoHOY() {
  const [mostrarModal, setMostrarModal] = useState(false);

  return (
    <div>
      <BotonCompartir onClick={() => setMostrarModal(true)} />
      <ModalPublicacion 
        visible={mostrarModal} 
        onClose={() => setMostrarModal(false)} 
      />
    </div>
  );
}
          
export default CompartiendoHOY;