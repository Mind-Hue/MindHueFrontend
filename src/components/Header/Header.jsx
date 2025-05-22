import { Link } from "react-router-dom";
import "./Header.css";
import Logo from "../../assets/images/WhiteLogo.png"; // Asegúrate de que la ruta sea correcta

export default function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <Link to="/">
          <img src={Logo} alt="Logo" className="logo" />
        </Link>
        <div className="menu-icon">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </header>
  );
}
