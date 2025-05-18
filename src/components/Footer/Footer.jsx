import React from "react";
import Logo from "../../assets/whitelogo.png";
import GroupEmotion from "../../assets/IconsEmotionsFooter.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <img src={Logo} alt="Logo" className="logo" />
          <p>Conocer más sobre nosotros</p>
        </div>
        <div className="icons-footer">
          <img src={GroupEmotion} alt="GroupEmotions" className="GroupEmotions" />
        </div>
      </div>
    </footer>
  );
}
