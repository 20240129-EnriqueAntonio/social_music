import React from "react";
import "./styleSidebar.css";
import { useNavigate, useLocation } from "react-router-dom";
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
  const navigate = useNavigate();
  const location = useLocation();

  const getActiveMenu = () => {
    const path = location.pathname;
    if (path.includes("/inicio")) return "inicio";
    if (path.includes("/banda")) return "bandas";
    if (path.includes("/tocadas")) return "tocadas";
    if (path.includes("/notificaciones")) return "notificaciones";
    if (path.includes("/amigos")) return "amigos";
    return "inicio";
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  const active = getActiveMenu();

  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li 
            className={active === "inicio" ? "active" : ""} 
            onClick={() => handleNavigation("/inicio")}
            style={{ cursor: "pointer" }}
          >
            <BiHomeAlt size={20}/> Inicio
          </li>
          <li 
            className={active === "bandas" ? "active" : ""} 
            onClick={() => handleNavigation("/banda")}
            style={{ cursor: "pointer" }}
          >
            <FaGuitar size={20}/> Bandas
          </li>
          <li 
            className={active === "tocadas" ? "active" : ""} 
            onClick={() => handleNavigation("/tocadas")}
            style={{ cursor: "pointer" }}
          >
            <FaCalendarAlt size={20}/> Tocadas
          </li>
          <li 
            className={active === "notificaciones" ? "active" : ""} 
            onClick={() => handleNavigation("/notificaciones")}
            style={{ cursor: "pointer" }}
          >
            <IoMdNotifications size={20}/> Notificaciones 
          </li>
          <li 
            className={active === "amigos" ? "active" : ""} 
            onClick={() => handleNavigation("/amigos")}
            style={{ cursor: "pointer" }}
          >
            <FaUserFriends size={20}/> Amigos
          </li>
        </ul>
      </nav>
    </aside>
  );
}
export default Sidebar;
