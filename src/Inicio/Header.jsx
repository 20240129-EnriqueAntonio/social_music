import React from "react";
import './Header.css'
import { IoIosMusicalNotes } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
import { MdLogout } from "react-icons/md";
function Header (){
    return(
        <div>
              <header>
        <div className="left">
          <IoIosMusicalNotes size={50} color="white" />
          <h1>Social Music</h1>
        </div>
        <div className="right">
          <MdAccountCircle size={30} />
          <IoMdNotifications size={30} />
          <MdLogout size={30} />
        </div>
      </header>
        </div>
    )
}
export default Header ;