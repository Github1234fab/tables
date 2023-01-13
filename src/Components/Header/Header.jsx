import React from 'react';
import "./Header.css";
import Logo from "../../assets/Logo.png";
import { NavLink } from "react-router-dom"

const Header = () => {
    return (
        <header className="head">
            <h1>Le Tablomathique</h1>
            <img src={Logo} alt="Logo de Tablomatique" className='header_img' />
            <nav>
                < NavLink to="/">Accueil</NavLink>
                < NavLink to="/">Jeux</NavLink>
                < NavLink to="/">À propos</NavLink>
            </nav>
        </header>
    );
};

export default Header;
