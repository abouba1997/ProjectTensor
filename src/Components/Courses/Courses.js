import './courses.css'
import Course from '../Course/Course';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const baseUrl = 'http://localhost:5000/'

const CategoryElement = ({categoryName}) => {
    const [clicked, setClicked] = useState(false);
    return (
        <li className={`courses__list-item ${clicked ? "courses__list-item_active" : ""}`}
        onClick={() => setClicked(true)}>{categoryName}</li>
    )
}

const Courses = ({title, page, description}) => {
    const [coursesList, setCoursesList] = useState([]);

    //Get all courses
    const fetchCourses = async () => {
        const data = await axios.get(`${baseUrl}/lessons`)
        const {lessons} = data.data
        setCoursesList(lessons)
    };
    
    useEffect(() => {
        if(coursesList.length === 0) fetchCourses();
    }, []);

    const coursesHtml = coursesList.map((item) => <Course key={item.id} value={item} />);

    return (
        <div className="wrap">
            <div className="courses" id='courses'>
                <header>
                    <p className="courses__title">{title}</p>
                </header>
                <div className="courses__menu">
                    { page === "Main" ?
                        <>
                            <ul className="courses__category-list">
                                <CategoryElement categoryName={"Frontend"} isClicked={!true}/>
                                <CategoryElement categoryName={"Backend"} isClicked={false}/>
                                <CategoryElement categoryName={"База данных"} isClicked={false}/>
                                <CategoryElement categoryName={"Дизайн"} isClicked={false} />
                            </ul>
                            <Link to="/courses" className="courses__category-list courses__category-list-button">Все курсы</Link>
                        </>
                    : ''}
                    { page === "Courses" && !!description ?
                        <p className="menu__description">{description}</p>
                    : ''}
                </div>
                <div className="lessons">
                    {coursesHtml}
                </div>
            </div>
        </div>
    )
}

export default Courses;