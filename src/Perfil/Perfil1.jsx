import React from "react";
import './Styleperfil.css'
import { useNavigate } from "react-router-dom";

function Perfil() {
  const navigate = useNavigate();
  
  return (
    <div className="profile">
      <img 
        src="https://farm5.static.flickr.com/4148/5025799749_5fbd0994b4_b.jpg" 
        alt="Oso" 
        className="profile-img"
      />
      <h4 className="profile-name">Carlos Mendez</h4>
      <p className="profile-role">Guitarra</p>
      <button className="profile-btn" onClick={() => navigate("/infoperfil")}>Ver Perfil</button>
    </div>
  );
}

export default Perfil;
