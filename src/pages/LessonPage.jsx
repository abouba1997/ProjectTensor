import React from "react";
import { useState } from 'react';

import Header from '../Components/Header/Header';
import Lesson from '../Components/lesson/Lesson'
import Footer from '../Components/Footer/Footer';
import PopupLoginSignup from '../Components/PopupLoginSignup/PopupLoginSignup';

// Главная страница для курса

function LessonPage() {
    const [showModal, setShowModal] = useState(false)
    return (
        <div>
            <Header onAdd={() => setShowModal(true)} hideMenu={true}/>
            {showModal && <PopupLoginSignup onClose={() => setShowModal(false)}/>}
            <div className='wrapper'>
                <div className='wrapper__content'>
                    <Lesson/>
                    <Footer/>
                </div>
            </div>
        </div>
    );
};

export default LessonPage;