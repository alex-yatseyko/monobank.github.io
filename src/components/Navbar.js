import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import mono from '../mono.png';
import Flag from 'react-world-flags'

import listLanguage from "../context/language/language";
import {LanguageContext} from "../context/language/getLanguage";

export const Navbar = () => {
    
    // const text = useContext(LanguageContext)["language"]["home"];

    const changeLanguage = useContext(LanguageContext)["changeLanguage"];
    const text = useContext(LanguageContext)["language"];
    const listLanguageConst = Object.entries(listLanguage).map(el => el[0]);

    return(
    <nav className="navbar navbar-dark navbar-expand-lg container" id="navbar-primary">
            <div className="lang-menu">
                {listLanguageConst.map((el, index) => <Flag key={index} className="flag__language" code={el} height={15} onClick={() =>{ changeLanguage(el)}} />)}
            </div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <img className="logo d-lg-none" src={mono} alt='logo'/>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav text-center">
                <li className="nav-item">
                    <NavLink
                        className="nav-link"
                        to="/"
                        exact
                        >
                        {text.menu.home}
                    </ NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        className="nav-link"
                        to="/exchange"
                        exact
                        >
                        {text.menu.change}
                    </ NavLink>
                </li>
                <li className="nav-item logo-desktop">
                    <img className="logo" src={mono} alt='logo' />
                </li>
                <li className="nav-item">
                    <NavLink
                        className="nav-link"
                        to="/about"
                        exact
                        >
                        {text.menu.about}
                    </ NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        className="nav-link"
                        to="/contact"
                        exact
                        >
                        {text.menu.contact}
                    </ NavLink>
                </li>
            </ul>
        </div>

    </nav>
    )
}
