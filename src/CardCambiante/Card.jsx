
import React from "react";
import { useBandas } from '../context/BandContext';
import { usePublicaciones } from '../context/PublicationContext';
import { FaTrash, FaMusic, FaImage, FaVideo, FaCalendarAlt } from 'react-icons/fa';
import './CardStyle.css'

function CardCambiante(){
    const { bandas, eliminarBanda } = useBandas();
    const { publicaciones, eliminarPublicacion } = usePublicaciones();

    return(
        <div className="Cardcambiante">
            {publicaciones.length === 0 ? (
                <h1>No hay publicaciones aún</h1>
            ) : (
                <div className="publicaciones-list">
                    <h1>Publicaciones</h1>
                    {publicaciones.map((pub) => (
                        <div key={pub.id} className="publicacion-card">
                            <div className="card-header">
                                <FaMusic className="icon-music" />
                                <span className="card-title">Publicación</span>
                            </div>
                            {pub.texto && <p className="card-text">{pub.texto}</p>}
                            {pub.mediaType === "image" && pub.mediaUrl && (
                                <div className="media-container">
                                    <FaImage className="media-icon" />
                                    <img src={pub.mediaUrl} alt="Publicación" className="publicacion-media" />
                                </div>
                            )}
                            {pub.mediaType === "video" && pub.mediaUrl && (
                                <div className="media-container">
                                    <FaVideo className="media-icon" />
                                    <video controls className="publicacion-media">
                                        <source src={pub.mediaUrl} type="video/mp4" />
                                        <source src={pub.mediaUrl} type="video/webm" />
                                        Tu navegador no soporta video.
                                    </video>
                                </div>
                            )}
                            <div className="card-footer">
                                <p className="fecha"><FaCalendarAlt /> {pub.fechaCreacion}</p>
                                <button className="btn-eliminar" onClick={() => eliminarPublicacion(pub.id)}>
                                    <FaTrash /> Eliminar
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {bandas.length > 0 && (
                <div className="bandas-list">
                    <h1>Mis Bandas</h1>
                    {bandas.map((banda) => (
                        <div key={banda.id} className="banda-card">
                            <div className="card-header">
                                <FaMusic className="icon-music" />
                                <h3 className="card-title">{banda.nombre}</h3>
                            </div>
                            <div className="card-content">
                                <p><strong>Género:</strong> {banda.genero}</p>
                                <p><strong>Ubicación:</strong> {banda.ubicacion}</p>
                                <p><strong>Descripción:</strong> {banda.descripcion}</p>
                            </div>
                            <div className="card-footer">
                                <p className="fecha"><FaCalendarAlt /> {banda.fechaCreacion}</p>
                                <button className="btn-eliminar" onClick={() => eliminarBanda(banda.id)}>
                                    <FaTrash /> Eliminar
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default CardCambiante;