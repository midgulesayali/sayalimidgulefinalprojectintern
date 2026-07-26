import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="topbar">
      <Link to="/" className="brand-mark">
        <span className="brand-icon">✦</span>
        <span>Career AI</span>
      </Link>

      <nav className="topbar-nav">
        <a href="#features">Features</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>

      <div className="topbar-actions">
        <Link to="/login" className="nav-link">Login</Link>
        <Link to="/register" className="nav-button">Join now</Link>
      </div>
    </header>
  );
}

export default Navbar;