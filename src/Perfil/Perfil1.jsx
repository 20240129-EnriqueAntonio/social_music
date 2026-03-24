import React from "react";
import './Styleperfil.css'
import { useNavigate } from "react-router-dom";

function Perfil() {
<<<<<<< HEAD
  const navigate = useNavigate();
  
=======

  const usuario = JSON.parse(localStorage.getItem("usuario"));

>>>>>>> 5c23dd927ebbd274f1ed48a949659fa6776bd469
  return (
    <div className="profile">
      <img 
        src="https://farm5.static.flickr.com/4148/5025799749_5fbd0994b4_b.jpg" 
        alt="Oso" 
        className="profile-img"
      />
      <h4 className="profile-name">{usuario?.name}</h4>

      <p className="profile-role">Guitarra</p>
<<<<<<< HEAD
      <button className="profile-btn" onClick={() => navigate("/infoperfil")}>Ver Perfil</button>
=======

      <button className="profile-btn">Ver Perfil</button>
>>>>>>> 5c23dd927ebbd274f1ed48a949659fa6776bd469
    </div>
  );
}

export default Perfil;
