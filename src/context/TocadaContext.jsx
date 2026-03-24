import React, { createContext, useState, useContext } from 'react';

const TocadaContext = createContext();

export function TocadaProvider({ children }) {
  const [tocadas, setTocadas] = useState([]);

  const agregarTocada = (tocada) => {
    const nuevaTocada = {
      id: Date.now(),
      ...tocada,
      fechaCreacion: new Date().toLocaleDateString()
    };
    setTocadas([...tocadas, nuevaTocada]);
  };

  const eliminarTocada = (id) => {
    setTocadas(tocadas.filter(tocada => tocada.id !== id));
  };

  return (
    <TocadaContext.Provider value={{ tocadas, agregarTocada, eliminarTocada }}>
      {children}
    </TocadaContext.Provider>
  );
}

export function useTocadas() {
  const context = useContext(TocadaContext);
  if (!context) {
    throw new Error('useTocadas debe usarse dentro de TocadaProvider');
  }
  return context;
}
