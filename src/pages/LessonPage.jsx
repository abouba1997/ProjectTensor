import { useState } from "react"
import Header from "../Components/Header"
import PopupLoginSignup from "../Components/PopupLoginSignup"
import PYTHON_IMG from '../Components/img/python.png'
import AVATAR3_IMG from '../Components/img/avatar3.png'

const LessonPage = () => {
    const [showModal, setShowModal] = useState(false)
    return (
        <>
            <Header onAdd={() => setShowModal(true)}/>
            {showModal && <PopupLoginSignup onClose={() => setShowModal(false)}/>}
            <div className="wrapper">
                <div className="wrapper__content">
                    <div class="intro__lesson">
                        <div class="intro__lesson-left">
                            <h1 class="introduction__title">Добро пожаловать на Python курс</h1>
                            <p class="introduction__description">
                                Этот курс представляет собой удобное для начинающих введение в Python для бэкенда. 
                                Потренируйтесь на практических занятиях, и вы будете готовы самостоятельно создавать свои первые скрипты на Python!
                                Вы получите углублённые знания технологий, которые используются в backend-разработке на Python.
                            </p>
                            <div class="lesson__duration-claim">
                                <div class="lesson__duration">
                                    <h3 class="lesson__duration-title">Длительность</h3>
                                    <p>8 неделя</p>
                                    <p>Еженедельно (Вт,Чт в 18ч)</p>
                                </div>
                                <div class="lesson__claim">
                                    <h3 class="lesson__duration-title">Требования</h3>
                                    <p>
                                        Изучите предшествующие курсы или имееть предварительное требование.
                                        <a class="lesson__claim-list" href="/#">Смотрите подробное</a>
                                    </p>
                                    <div class="lesson__exigences">
                                        <ul>
                                            <li><a href="a">Первый урок</a></li>
                                            <li><a href="a">Второй урок</a></li>
                                            <li><a href="a">Третый урок</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="lesson__enroll">
                                <a href="/#" class="lesson__enroll-button">Записаться</a>
                            </div>
                        </div>
                        <div class="intro__lesson-right">
                            <img class="intro__lesson-image" src={PYTHON_IMG} alt="Python Lesson IMG"/>
                        </div>
                    </div>

                    <div class="lesson__description">
                        <div class="lesson__description-links">
                            <a class="lesson__description-link" href="#lesson__about">About</a>
                            <a class="lesson__description-link" href="#lesson__learning">What you'll learn</a>
                            <a class="lesson__description-link" href="#lesson__programs">Programs</a>
                            <a class="lesson__description-link" href="#lesson__instructor">Instructor</a>
                        </div>

                        <div class="lesson__about" id="lesson__about">
                            <h1 class="lesson_part-title">Об этом уроке</h1>
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
                        <div class="lesson__learning" id="lesson__learning">
                            <h1 class="lesson_part-title">Что вы будете изучить</h1>
                            <div class="lesson__learning_detailled">
                                <p>
                                Цели этого курса - начать работу с Python как языком программирования и дать вам представление о том, как начать работать с данными в Python.
                                В этом курсе вы узнаете о:
                                <ul>
                                    <li>Что такое Python и почему он полезен.</li> 
                                    <li>Применение Python в науке о данных</li> 
                                    <li>Как определять переменные в Python</li> 
                                    <li>Наборы и условные операторы в Python</li> 
                                    <li>Назначение функций в Python</li> 
                                    <li>Как работать с файлами для чтения и записи данных в Python</li> 
                                    <li>Как использовать pandas, обязательный пакет для всех, кто пытается анализировать данные на Python.</li> 
                                </ul>
                                </p>
                            </div>
                        </div>
                        <div class="lesson__programs" id="lesson__programs">
                            <h1 class="lesson_part-title">Программа урока</h1>
                            <div class="lesson__programs-module">
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
                        <div class="lesson__instructor" id="lesson__instructor">
                            <h1 class="lesson_part-title">Преподаватель</h1>
                            <div class="lesson__instructor-details">
                                <img class="lesson__instructor__img" src={AVATAR3_IMG} alt="Фото Преподавателя"/>
                                <div class="lesson__instructor-informations">
                                    <h4>Воробьева Александра</h4>
                                    <p><span>Python-программист</span><span>Инструктор бакэнд (Python)</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default LessonPage;