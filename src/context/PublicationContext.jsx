import React, { createContext, useContext, useState } from 'react';

const PublicationContext = createContext();

export function PublicationProvider({ children }) {
  const [publicaciones, setPublicaciones] = useState([]);

  const agregarPublicacion = (publicacion) => {
    const nuevaPublicacion = {
      id: Date.now(),
      ...publicacion,
      fechaCreacion: new Date().toLocaleString('es-ES')
    };
    setPublicaciones(prev => [nuevaPublicacion, ...prev]);
  };

  const eliminarPublicacion = (id) => {
    setPublicaciones(prev => prev.filter(pub => pub.id !== id));
  };

  return (
    <PublicationContext.Provider value={{ publicaciones, agregarPublicacion, eliminarPublicacion }}>
      {children}
    </PublicationContext.Provider>
  );
}

export function usePublicaciones() {
  const context = useContext(PublicationContext);
  if (!context) {
    throw new Error('usePublicaciones debe usarse dentro de PublicationProvider');
  }
  return context;
}
