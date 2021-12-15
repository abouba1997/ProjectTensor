import './lesson.css';
import python_img from '../img/python.png'
import AVATAR3 from '../img/avatar3.png'

const Lesson = () => {
    return(
        <div>
            <div className="intro__lesson">
                <div className="intro__lesson-left">
                    <h1 className="introduction__title">Добро пожаловать на Python курс</h1>
                    <p className="introduction__description">
                        Этот курс представляет собой удобное для начинающих введение в Python для бэкенда. 
                        Потренируйтесь на практических занятиях, и вы будете готовы самостоятельно создавать свои первые скрипты на Python!
                        Вы получите углублённые знания технологий, которые используются в backend-разработке на Python.
                    </p>
                    <div className="lesson__duration-claim">
                        <div className="lesson__duration">
                            <h3 className="lesson__duration-title">Длительность</h3>
                            <p>8 неделя</p>
                            <p>Еженедельно (Вт,Чт в 18ч)</p>
                        </div>
                        <div className="lesson__claim">
                            <h3 className="lesson__duration-title">Требования</h3>
                            <p>
                                Изучите предшествующие курсы или имееть предварительное требование.
                                <a className="lesson__claim-list" href="/#">Смотрите подробное</a>
                            </p>
                            <div className="lesson__exigences">
                                <ul>
                                    <li><a href="a">Первый урок</a></li>
                                    <li><a href="a">Второй урок</a></li>
                                    <li><a href="a">Третый урок</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="lesson__enroll">
                        <a href="/#" className="lesson__enroll-button">Записаться</a>
                    </div>
                </div>
                <div className="intro__lesson-right">
                    <img className="intro__lesson-image" src={python_img} alt="Python Lesson's"/>
                </div>
            </div>

            <div className="lesson__description">
                <div className="lesson__description-links">
                    <a className="lesson__description-link" href="#lesson__about">Подробнее</a>
                    <a className="lesson__description-link" href="#lesson__learning">Что Изучите</a>
                    <a className="lesson__description-link" href="#lesson__programs">Программа</a>
                    <a className="lesson__description-link" href="#lesson__instructor">Преподаватель</a>
                </div>

                <div className="lesson__about" id="lesson__about">
                    <h1 className="lesson_part-title">Об этом уроке</h1>
                    <p>
                        Начните изучение Python для бэкенд-разработки, а также программирования в целом 
                        с этого курса "Введение в Python". Этот курс для начинающих на Python быстро 
                        проведет вас от нуля до программирования на Python за считанные часы и даст 
                        вам представление о том, как начать работать с данными на Python.
                    </p>
                    <p>    
                        После его завершения вы сможете писать свои собственные сценарии на Python и
                         выполнять базовый практический анализ данных, используя нашу лабораторную среду 
                         на базе Jupyter. Если вы хотите изучать Python с нуля, этот курс для вас.
                    </p>
                </div>
                <div className="lesson__learning" id="lesson__learning">
                    <h1 className="lesson_part-title">Что вы будете изучить</h1>
                    <div className="lesson__learning_detailled">
                        <p>
                        Цели этого курса - начать работу с Python как языком программирования и дать вам представление о том, как начать работать с данными в Python.
                        В этом курсе вы узнаете о:
                        </p>
                        <ul>
                            <li>Что такое Python и почему он полезен.</li> 
                            <li>Применение Python в науке о данных</li> 
                            <li>Как определять переменные в Python</li> 
                            <li>Наборы и условные операторы в Python</li> 
                            <li>Назначение функций в Python</li> 
                            <li>Как работать с файлами для чтения и записи данных в Python</li> 
                            <li>Как использовать pandas, обязательный пакет для всех, кто пытается анализировать данные на Python.</li> 
                        </ul>
                    </div>
                </div>
                <div className="lesson__programs" id="lesson__programs">
                    <h1 className="lesson_part-title">Программа урока</h1>
                    <div className="lesson__programs-module">
                        <p>
                            <strong>Модуль 1 - Основы Python</strong>
                            <br/>
                            Ваша первая программа
                            <br/>
                            Типы
                            <br/>
                            Выражения и переменные
                            <br/>
                            Строковые операции
                        </p>
                        <p>
                            <strong>Модуль 2 - Структуры данных Python</strong>
                            <br/>
                            Ваша первая программа
                            <br/>
                            Типы
                            <br/>
                            Выражения и переменные
                            <br/>
                            Строковые операции
                        </p>
                        <p>
                            <strong>Модуль 3 - Работа с серверами в Python</strong>
                            <br/>
                            Ваша первая программа
                            <br/>
                            Типы
                            <br/>
                            Выражения и переменные
                            <br/>
                            Строковые операции
                        </p>
                    </div>
                </div>
                <div className="lesson__instructor" id="lesson__instructor">
                    <h1 className="lesson_part-title">Преподаватель</h1>
                    <div className="lesson__instructor-details">
                        <img className="lesson__instructor__img" src={AVATAR3}alt="Фото Преподавателя"/>
                        <div className="lesson__instructor-informations">
                            <h4>Воробьева Александра</h4>
                            <p><span>Python-программист</span><span>Инструктор бакэнд (Python)</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Lesson;



