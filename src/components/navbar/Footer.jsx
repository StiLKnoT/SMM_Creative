import React from 'react'
import "./Navbar.css";
import logo from "../../assets/images/Logo.png"


const Footer = () => {
    return (
        <>
            <div className='footer'>
                <div className="footer__header">
                    <div className="Navbar" id="footerLogo">
                        <ul className="navSections">
                            <div className="logoBlock">
                                <div><a target="_blank" href="https://instagram.com/afshon_official">
                                    <img className="logoIcon" src={logo} />
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
            </div>




        </>
    )
}

export default Footer