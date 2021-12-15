import axios from 'axios';
import { useState, useEffect } from 'react';
import "./Teachers.css"
import { Link } from 'react-router-dom';
import Teacher from '../Teacher/Teacher';

const baseUrl = 'http://localhost:5000';

const Teachers = () => {
    const [teachersList, setTeachersList] = useState([]);

    const fetchTeachers = async () => {
        const data = await axios.get(`${baseUrl}/teachers`);
        const {teachers} = data.data;
        setTeachersList(teachers);
    };

    useEffect(() => {
        fetchTeachers();
    }, []);

    const teachersHtml = teachersList.map((item) => 
        <Teacher key={item.id} value={item} />
    );

    return (
        <div className="wrap">
            <div className="teachers" id='teachers'>
                <header>
                    <p className="teacher__big-title">Учитесь у <span className="teacher__word">лучших инструкторов</span></p>
                    <Link to="/teachers" className="teacher__list-link">Все инструкторы</Link>
                </header>
                <div className="teacher">
                    {teachersHtml}
                </div>
            </div>
        </div>
    );
};

export default Teachers;