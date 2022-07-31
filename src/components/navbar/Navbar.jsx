import React from "react";
import "./Navbar.css";
import logo from "../../assets/images/Logo.png"

function Navbar() {
  return (
    <div className="header">
      <div className="Navbar">
        <ul className="navSections">
        <div className="logoBlock">
          <div>
            <img className="logoIcon" src={logo}/>
          </div>
        </div>
          <li>
            <a className="link" href="">SPIKERLAR</a>
          </li>
          <li>
            <a className="link" href="">Kurs kimlar uchun?</a>
          </li>
          <li>
            <a className="link" href="">Dastur</a>
          </li>
          <li>
            <a className="link" href="">Keyslar</a>
          </li>
          <li>
            <a className="link" href="">Tariflar</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
