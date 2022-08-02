import React from "react";
import "./Navbar.css";
import logo from "../../assets/images/Logo.png"

function Navbar() {
  return (
    <div className="header">
      <div className="Navbar">
        <ul className="navSections">
        <div className="logoBlock">
          <div><a href="#">
            <img className="logoIcon" src={logo}/>
            </a>
          </div>
        </div>
          <li>
            <a className="link" href="#PaddingDiv">SPIKERLAR</a>
          </li>
          <li>
            <a className="link" href="#kimlarUchun">Kurs kimlar uchun?</a>
          </li>
          <li>
            <a className="link" href="#Dastur">Dastur</a>
          </li>
          <li>
            <a className="link" href="#Keyslar">Keyslar</a>
          </li>
          <li>
            <a className="link" href="#tariflar">Tariflar</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
