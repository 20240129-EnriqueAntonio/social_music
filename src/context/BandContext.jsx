import React, { createContext, useState, useContext } from 'react';

const BandContext = createContext();

export function BandProvider({ children }) {
  const [bandas, setBandas] = useState([]);

  const agregarBanda = (banda) => {
    const nuevaBanda = {
      id: Date.now(),
      ...banda,
      fechaCreacion: new Date().toLocaleDateString()
    };
    setBandas([...bandas, nuevaBanda]);
  };

  const eliminarBanda = (id) => {
    setBandas(bandas.filter(banda => banda.id !== id));
  };

  return (
    <BandContext.Provider value={{ bandas, agregarBanda, eliminarBanda }}>
      {children}
    </BandContext.Provider>
  );
}

export function useBandas() {
  const context = useContext(BandContext);
  if (!context) {
    throw new Error('useBandas debe usarse dentro de BandProvider');
  }
  return context;
}
