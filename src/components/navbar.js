import { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">Adznova</div>

      {/* Hamburger Icon */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      {/* Nav Links */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
        <li><Link to="/jobs" onClick={() => setMenuOpen(false)}>Jobs</Link></li>
        <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>

        {/* POST JOB BUTTON (Mobile view) */}
        <li className="mobile-btn">
          <Link 
            to="/login" 
            className="post-job-btn" 
            onClick={() => setMenuOpen(false)}
          >
            Post Job
          </Link>
        </li>
      </ul>

      {/* POST JOB BUTTON (Desktop view) */}
      <Link to="/login" className="post-job-btn desktop-btn">
        Post Job
      </Link>
    </nav>
  );
}

export default Navbar;
