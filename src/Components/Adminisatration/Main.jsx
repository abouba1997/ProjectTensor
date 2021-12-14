import React from "react";
import { useState } from 'react';

import Header from "../Header/Header";
import Principal from "./Principal/Principal";
import Footer from "../Footer/Footer";
import PopupLoginSignup from "../PopupLoginSignup/PopupLoginSignup";

function Main() {
    const [showModal, setShowModal] = useState(false)
    return (
        <div>
            <Header onAdd={() => setShowModal(true)}/>
            {showModal && <PopupLoginSignup onClose={() => setShowModal(false)}/>}
            <div className='wrapper'>
                <div className='wrapper__content'>
                    <Principal/>
                    <Footer/>
                </div>
            </div>
        </div>
    );
};

export default Main;