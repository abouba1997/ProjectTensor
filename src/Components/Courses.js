import HTML_IMG from './img/html.jpg';
import CSS_IMG from './img/css.jpg';
import JS_IMG from './img/js.jpg';
import PYTHON_IMG from './img/python.png';

import Course from './Course/Course';
import { useState } from 'react';

const CategoryElement = ({categoryName}) => {
    
    const [clicked, setClicked] = useState(false);

    return (
        <li className={`courses__list-item ${clicked ? "courses__list-item_active" : ""}`} onClick={() => setClicked(true)}>{categoryName}</li>
    )
}

const Courses = () => {

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
                    <Course image={HTML_IMG} title={"HTML"} desc={"Изучаем основы HTML. Научимся как создавать веб-страницы."}/>
                    <Course image={CSS_IMG} title={"CSS"} desc={"Изучаем основы CSS. Научимся использовать CSS для оформления веб-страницы"}/>
                    <Course image={JS_IMG} title={"JAVASCRIPT"} desc={"Узнаем, как работает JavaScript в браузере. Научимся оживлять интерфейсы."}/>
                    <Course image={PYTHON_IMG} title={"PYTHON"} desc={"Знакомства с языком бакэнда Python. Основы программирования и баз данных."}/>
                </div>
            </div>
        </div>
    )
}

export default Courses;