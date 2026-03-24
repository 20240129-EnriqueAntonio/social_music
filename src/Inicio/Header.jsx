import React from "react";
import './Header.css'
import { useNavigate } from "react-router-dom";
import { IoIosMusicalNotes } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
import { MdLogout } from "react-icons/md";
import { useAuth } from "../context/AuthContext";

function Header () {
    const navigate = useNavigate();
    const { logout } = useAuth();

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    return(
        <div>
            <header>
                <div className="left" style={{ cursor: "pointer" }} onClick={() => navigate("/inicio")}>
                    <IoIosMusicalNotes size={50} color="white" />
                    <h1>Social Music</h1>
                </div>
                <div className="right">
                    <MdAccountCircle size={30} style={{ cursor: "pointer" }} onClick={() => navigate("/infoperfil")} title="Mi Perfil" />
                    <IoMdNotifications size={30} style={{ cursor: "pointer" }} title="Notificaciones" />
                    <MdLogout size={30} style={{ cursor: "pointer" }} onClick={handleLogout} title="Cerrar sesión" />
                </div>
            </header>
        </div>
    )
}

export default Header ;