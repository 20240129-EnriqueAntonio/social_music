import React from "react";
import { useTocadas } from '../context/TocadaContext';
import './TocadasCards.css'

function TocadasCards(){
    const { tocadas, eliminarTocada } = useTocadas();

    const formatearFecha = (fechaString) => {
        if (!fechaString) return 'Fecha no especificada';
        try {
            const fecha = new Date(fechaString);
            return fecha.toLocaleDateString('es-ES', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            });
        } catch {
            return fechaString;
        }
    };

    return(
        <div className="tocadas-container">
            {tocadas.length === 0 ? (
                <h1>No hay tocadas creadas aún</h1>
            ) : (
                <div className="tocadas-list">
                    <h1>Mis Tocadas/Eventos</h1>
                    {tocadas.map((tocada) => (
                        <div key={tocada.id} className="tocada-card">
                            <h3>{tocada.nombre}</h3>
                            <p><strong>Ubicación:</strong> {tocada.ubicacion}</p>
                            <p><strong>Fecha:</strong> {formatearFecha(tocada.fecha)}</p>
                            <p><strong>Descripción:</strong> {tocada.descripcion}</p>
                            <p className="fecha"><strong>Creada:</strong> {tocada.fechaCreacion}</p>
                            <button className="btn-eliminar" onClick={() => eliminarTocada(tocada.id)}>
                                Eliminar
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default TocadasCards;
