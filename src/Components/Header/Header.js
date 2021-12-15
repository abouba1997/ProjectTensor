import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './header.css'

import logo from '../img/logo.jpg';
import searchButton from '../img/search.svg';


const Header = ({onAdd, hideMenu}) => {
    const [hamburger, setHamburger] = useState(false);

    return(
        <div>
            <header className="header">
                <div className="header__container">
                    <div className="header__left">
                        <Link to ="/" className="logo__link">
                            <img className="logo__img" src={logo} alt="Логотип компании Тензор"/>
                            <span className="logo__text">TensorSchool</span>
                        </Link>
                    </div>
                    <div className={`header__menu ${!hamburger ? "header__hamburger_inactive" : ""}`}>
                    {!hideMenu ?
                        <ul className="menu__list" >
                            <li className="menu__item">
                                <a href="#courses" className="menu__link">Курсы</a>
                            </li>
                            <li className="menu__item">
                                <a href="#advantages" className="menu__link">Преимущества</a>
                            </li>
                            <li className="menu__item">
                                <a href="#teachers" className="menu__link">Преподаватели</a>
                            </li>
                            <li className="menu__item">
                                <a href="#contact_page" className="menu__link">Контакт</a>
                            </li>
                        </ul>
                    : ''}
                    </div>
                    <div className={`header__right ${!hamburger ? "header__hamburger_inactive" : ""}` }>
                        <img className="header__search-icon" src={searchButton} alt="Search icon"/>
                        <span className="header__right-bar"></span>
                        <Link to = "" className="header__authentication-button" onClick={onAdd}>Войти</Link>
                    </div>
                    <div className={`header__hamburger ${hamburger ? "hamburger__bar-toggle" : ""}`} id="hamburger" onClick={() => setHamburger(!hamburger)}>
                        <span className="hamburger__bar hamburger__bar1"></span>
                        <span className="hamburger__bar hamburger__bar2"></span>
                        <span className="hamburger__bar hamburger__bar3"></span>
                    </div>
                </div>
            </header>
            
        </div>
    )
}

export default Header;