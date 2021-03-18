import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/cocktail-logo.png";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="logo">
          <Link to="/">
            <img
              src={logo}
              alt="logo for cocktails db site"
              className="logo-icon"
            />
            <h1>Cocktail Database</h1>
          </Link>
        </div>
        <ul className="nav-list">
          <li className="nav-link">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-link">
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
