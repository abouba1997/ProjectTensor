import React from 'react';
import { useState } from 'react';
import logo from '../img/logo.jpg';
import Signup from '../Forms/Signup';
import Login from '../Forms/Login';

import './PopupLoginSignup.css';
import '../Forms/authorization.css'

const PopupLoginSignup  = ({onClose}) => {

    const [formClicked, setFormClicked] = useState(false);

    return (
        <div className='modal'>
            <div className="modal__content model__content_animate">
                <div className="modal__close-button" onClick={onClose}>+</div>
                <div className="modal__left">
                    <div className="modal__left-logo">
                        <a href="index.html" className="logo__link">
                            <img className="logo__img" src={logo} alt="Логотип компании Тензор"/>
                            <span className="logo__text">TensorSchool</span>
                        </a>
                    </div>
                    <div className="modal__left-center">
                        <div className="modal__left-bar"></div>
                        <div className="modal__left-text">
                            <span className="modal__text">Начать ваше</span>
                            <span className="modal__text">обучение с</span>
                            <span className="modal__text">TensorSchool</span>
                        </div>
                    </div>
                </div>
                <div className="modal__right">
                    <div className="modal__login-signup">
                        <nav className="login-signup__navbar">
                            <ul className="login-signup__list">
                                <li className={`login-signup__item ${!formClicked ? "login-signup__item_active" : ""}`} onClick={() => setFormClicked(!formClicked)}><span className="login-signup__link">Войти</span></li>
                                <li className={`login-signup__item ${formClicked ? "login-signup__item_active" : ""}`} onClick={() => setFormClicked(!formClicked)}><span className="login-signup__link">Регистрация</span></li>
                            </ul>
                        </nav>
                        <div className="login-signup__form">
                            {/* <!-- Login form --> */}
                            {!formClicked && <Login />}

                            {/* <!-- Registration form --> */}
                            {formClicked && <Signup />}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    
}

export default PopupLoginSignup;