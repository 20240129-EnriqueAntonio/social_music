import React from "react";
import "./styleSidebar.css";
import { BiHomeAlt } from "react-icons/bi";//icono de casa
import { FaUsers } from "react-icons/fa"; //icono de usuarios 
import { FaCalendarAlt } from "react-icons/fa"; 
// Calendario para representar fechas de tocadas

import { IoMdNotifications } from "react-icons/io"; 
// Campana de notificaciones
import { FaUserFriends } from "react-icons/fa";
import { FaGuitar } from "react-icons/fa";
import { FaMicrophoneAlt } from "react-icons/fa";

function Sidebar() {
  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li className="active"><BiHomeAlt size={20}/> Inicio</li>
          <li><FaGuitar size={20}/> Bandas</li>
          <li><FaCalendarAlt size={20}/> Tocadas</li>
          <li><IoMdNotifications size={20}/> Notificaciones </li>
          <li><FaUserFriends size={20}/> Amigos</li>
        </ul>
      </nav>
    </aside>
  );
}
export default Sidebar;
