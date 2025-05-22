import React from "react";
import Logo from "../../assets/images/WhiteLogo.png"; // Asegúrate de que la ruta sea correcta
// import GroupEmotion from "../../assets/IconsEmotionsFooter.png";
import GroupEmotion from "../../assets/images/EmotionsFooter.png";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <img src={Logo} alt="Logo" className="logo" />
        <p>Conocer más sobre nosotros</p>
      </div>
      <div className="icons-footer">
        <img src={GroupEmotion} alt="GroupEmotions" className="icon" />
      </div>
    </footer>
  );
}
