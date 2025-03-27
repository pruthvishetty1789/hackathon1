import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavbarComponent.css";

function NavbarComponent() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="custom-navbar">
      <div className="container">
        <Link to="/" className="brand">
          🩺EarlyCure
        </Link>
        <ul className="nav-links">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/services">Services</Link>
          </li>
          <li className="nav-item">
            <Link to="/diseaseInfo">Prediction</Link>
          </li>
          <li className="nav-item">
            <Link to="/doctors">Doctors</Link>
          </li>
          <li
            className="nav-item dropdown"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <span className="dropdown-title">Login ▼</span>
            <ul className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}>
              <li>
                <Link to="/login">User Login</Link>
              </li>
              <li>
                <Link to="/doctor-login">Doctor Login</Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavbarComponent;
