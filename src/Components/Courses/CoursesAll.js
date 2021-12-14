import HTML_IMG from '../img/html.jpg';
import CSS_IMG from '../img/css.jpg';
import JS_IMG from '../img/js.jpg';
import PYTHON_IMG from '../img/python.png';

import './courses.css'
import Course from '../Course/Course';

const CoursesAll = () => {
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
        }
    ]
    const res = courses.map((item) => 
        <Course key={item.id} value={item} />
    );
    return (
        <div className="wrap">
            <div className="courses">
                <header>
                    <p className="courses__title">Список курсов</p>
                </header>
                <div class="courses__menu">
                    <p class="menu__description">Более 100 курсов на темы как графический дизайн, фронтенд, бэкенд, Python и многое другое.</p>
                </div>
                <div className="lessons">
                    {res}
                </div>
            </div>
        </div>
    );
};

export default CoursesAll;