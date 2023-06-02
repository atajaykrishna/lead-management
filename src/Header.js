import React from "react";
import "./style.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import mainLogo from "./images/logo.png";
import HamBurger from "./images/hamburger.png";

function Header() {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <>
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            <img src={mainLogo} alt="Prashant Machine Tools" />
          </div>
          <div className="menu-icon" onClick={handleShowNavbar}>
            <img src={HamBurger} alt="hamburger"></img>
          </div>

          <div className={`nav-elements  ${showNavbar && "active"}`}>
            <ul>
              <li onClick={handleShowNavbar}>
                <NavLink to="/">Home</NavLink>
              </li>
              <li onClick={handleShowNavbar}>
                <NavLink to="/customerdata">Customer Data</NavLink>
              </li>
              <li onClick={handleShowNavbar}>
                <NavLink to="/callstoday">Today's Calls</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
