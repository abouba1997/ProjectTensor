import HTML_IMG from '../img/html.jpg';
import CSS_IMG from '../img/css.jpg';
import JS_IMG from '../img/js.jpg';
import PYTHON_IMG from '../img/python.png';

import './courses.css'
import Course from '../Course/Course';
import { useState } from 'react';

const CategoryElement = ({categoryName}) => {
    
    const [clicked, setClicked] = useState(false);

    return (
        <li className={`courses__list-item ${clicked ? "courses__list-item_active" : ""}`}
        onClick={() => setClicked(true)}>{categoryName}</li>
    )
}

const CoursesMain = () => {
    const courses = [
        {
            id: 1,
            title: 'HTML',
            desc: 'Изучаем основы HTML. Научимся как создавать веб-страницы.',
            image: HTML_IMG
        },
        {
            id: 2,
            title: 'CSS',
            desc: 'Изучаем основы CSS. Научимся использовать CSS для оформления веб-страницы',
            image: CSS_IMG
        },
        {
            id: 3,
            title: 'JAVASCRIPT',
            desc: 'Узнаем, как работает JavaScript в браузере. Научимся оживлять интерфейсы.',
            image: JS_IMG
        },
        {
            id: 4,
            title: 'PYTHON',
            desc: 'Знакомства с языком бакэнда Python. Основы программирования и баз данных.',
            image: PYTHON_IMG
        },
    ]
    const res = courses.map((item) => 
    <Course value={item} />
    );
    return (
        <div className="wrap">
            <div className="courses">
                <header>
                    <p className="courses__title">Популярные курсы</p>
                </header>
                <div className="courses__menu">
                    <ul className="courses__category-list">
                        <CategoryElement categoryName={"Frontend"} isClicked={!true}/>
                        <CategoryElement categoryName={"Backend"} isClicked={false}/>
                        <CategoryElement categoryName={"База данных"} isClicked={false}/>
                        <CategoryElement categoryName={"Дизайн"} isClicked={false} />
                    </ul>
                    <a href="courses.html" className="courses__category-list courses__category-list-button">Все курсы</a>
                </div>
                <div className="lessons">
                    {res}
                </div>
            </div>
        </div>
    )
}

export default CoursesMain;