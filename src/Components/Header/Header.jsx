import React from 'react';
import "./Header.css";
import Logo from "../../assets/Logo.png";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className="head">
            <img src={Logo} alt="" className='header_img' />
            <h1>Le Tablomatique</h1>
            <nav className="nav_bar">
                < NavLink to="/" className="nav_link">Accueil</NavLink>
                < NavLink to="/jeux/" className="nav_link">Jeux</NavLink>
                {/* < NavLink to="/" className="nav_link">À propos</NavLink> */}
            </nav>
        </header>
    );
};

export default Header;
