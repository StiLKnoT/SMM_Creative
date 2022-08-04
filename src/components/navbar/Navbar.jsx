import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/images/Logo.png";
import { MdOutlineMenu, MdOutlineClose } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";

function Navbar() {
  const [isAcctive, setAcctive] = useState(true);
  function onMenu() {
    setAcctive(!isAcctive);
  }

  const [isOpen, setOpen] = useState(true);

  return (
    <>
      <div className="header">
        <div className="Navbar">
          <ul className="navSections">
            <div className="logoBlock">
              <div>
                <a href="#">
                  <img className="logoIcon" src={logo} />
                </a>
              </div>
            </div>
            <li>
              <a className="link" href="#PaddingDiv">
                SPIKERLAR
              </a>
            </li>
            <li>
              <a className="link" href="#kimlarUchun">
                Kurs kimlar uchun?
              </a>
            </li>
            <li>
              <a className="link" href="#Dastur">
                Dastur
              </a>
            </li>
            <li>
              <a className="link" href="#Keyslar">
                Keyslar
              </a>
            </li>
            <li>
              <a className="link" href="#tariflar">
                Tariflar
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="menuGridTemp" onClick={onMenu}>
        <MdOutlineMenu className={isAcctive ? "MenuGrid" : "CloseMenuGrid"} />
        <MdOutlineClose className={isAcctive ? "CloseMenuGrid" : "MenuGrid"} />
      </div>
      <div className={isAcctive ? "menu" : "menuMob"}>
        <div className="innerMenuMob">
          <div className="topMenuLinks">
            <div
              className={
                isAcctive
                  ? "MainNav"
                  : "MainNavActive " || isOpen
                  ? "MainNavActive"
                  : "MainNav"
              }
            >
              <ul className={isAcctive ? "MainNavLi" : "MainNavLiActive"}>
                <li>
                  <a
                    className="link"
                    id="mobNavLink"
                    onClick={onMenu}
                    href="#PaddingDiv"
                  >
                    SPIKERLAR
                  </a>
                </li>
                <li>
                  <a
                    className="link"
                    id="mobNavLink"
                    onClick={onMenu}
                    href="#kimlarUchun"
                  >
                    Kurs kimlar uchun?
                  </a>
                </li>

                <li>
                  <a
                    className="link"
                    id="mobNavLink"
                    onClick={onMenu}
                    href="#Dastur"
                  >
                    Dastur
                  </a>
                </li>

                <li>
                  <a
                    className="link"
                    id="mobNavLink"
                    onClick={onMenu}
                    href="#Keyslar"
                  >
                    Keyslar
                  </a>
                </li>

                <li>
                  <a
                    className="link"
                    id="mobNavLink"
                    onClick={onMenu}
                    href="#tariflar"
                  >
                    Tariflar
                  </a>
                </li>
                {/* <br />
         
                <button className="ShadowBtn" id="kursMobMenu" >
                  <p className="InBtn">  <a href="#tariflar" className="link">   Kursga yozilish</a> <FaArrowRight id="strelkaSVG" /> </p>
                </button> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
