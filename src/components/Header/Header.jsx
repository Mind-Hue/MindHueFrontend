import React from "react";
import "./Header.css"; 
import Logo from "../../assets/whitelogo.png";

export default function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <img src={Logo} alt="Logo" className="logo" />
        <div className="menu-icon">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </header>
  );
}