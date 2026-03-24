import React, { useState, useRef } from "react";
import './Stylesubirpublicacion.css'
import { usePublicaciones } from '../context/PublicationContext';

function ModalPublicacion({ visible, onClose }) {
  const { agregarPublicacion } = usePublicaciones();
  const [texto, setTexto] = useState("");
  const [mediaUrl, setMediaUrl] = useState("");
  const [mediaType, setMediaType] = useState("");
  const fileInputRef = useRef(null);

  if (!visible) return null;

  const handlePickMedia = (type) => {
    if (fileInputRef.current) {
      fileInputRef.current.accept = type === "image" ? "image/*" : "video/*";
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const maxSizeBytes = 100 * 1024 * 1024; // 100 MB
    if (file.size > maxSizeBytes) {
      alert("El archivo es demasiado grande. Máximo 20 MB.");
      e.target.value = null;
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setMediaUrl(reader.result);
      if (file.type.startsWith("image/")) setMediaType("image");
      else if (file.type.startsWith("video/")) setMediaType("video");
      else setMediaType("");
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!texto.trim() && !mediaUrl) {
      alert("Agrega texto o selecciona una foto/video antes de publicar.");
      return;
    }

    agregarPublicacion({
      texto: texto.trim(),
      mediaUrl,
      mediaType,
    });

    setTexto("");
    setMediaUrl("");
    setMediaType("");
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Crear Publicación</h2>
        <p>Comparte tu música con la comunidad</p>

        <form onSubmit={handleSubmit}>
          <textarea
            placeholder="Comparte tu música, tu experiencia, tus proyectos..."
            className="modal-input"
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
          />

          <div className="modal-actions">
            <button type="button" onClick={() => handlePickMedia("image")}>Agregar foto</button>
            <button type="button" onClick={() => handlePickMedia("video")}>Agregar video</button>
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
          </div>

          {mediaUrl && (
            <div className="media-preview">
              {mediaType === "image" && <img src={mediaUrl} alt="Preview" className="preview-media" />}
              {mediaType === "video" && (
                <video controls className="preview-media">
                  <source src={mediaUrl} type="video/mp4" />
                  <source src={mediaUrl} type="video/webm" />
                  No se puede reproducir el video.
                </video>
              )}
            </div>
          )}

          <div>
            <button type="button" onClick={onClose}>Cancelar</button>
            <button type="submit">Publicar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalPublicacion;