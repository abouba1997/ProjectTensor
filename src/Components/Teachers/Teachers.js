import AVATAR1_IMG from '../img/avatar1.jpg';
import AVATAR2_IMG from '../img/avatar2.png';
import AVATAR3_IMG from '../img/avatar3.png';

import "./Teachers.css"

import { Link } from 'react-router-dom';

import Teacher from '../Teacher/Teacher';
// import { useEffect } from 'react/cjs/react.development';


const Teachers = () => {
    // const [teacher, setTeacher] = useState({name: "", desc: "", image: "", domain: ""});
const teachers = [
    {
        id: 1,
        name: 'Red',
        desc: 'Blue water',
        image: AVATAR1_IMG
    },
    {
        id: 2,
        name: 'Green',
        desc: 'Blue water',
        image: AVATAR2_IMG
    },
    {
        id: 3,
        name: 'Red',
        desc: 'Blue water',
        image: AVATAR3_IMG
    }
]
const res = teachers.map((item) => 
    <Teacher key={item.id} value={item} />
);
    return (
        <div className="wrap">
            <div className="teachers">
                <header>
                    <p className="teacher__big-title">Учитесь у <span className="teacher__word">лучших инструкторов</span></p>
                    <Link to="/teachers" className="teacher__list-link">Все инструкторы</Link>
                </header>
                <div className="teacher">
                    {res}
                    {/* <Teacher image={AVATAR1_IMG} name={"Кузьмина Виктория"} desc={"Ведущий проектировщик пользовательских интерфейсов"} domain={"Инструктор по дизайну (UX и UI)"}/>
                    <Teacher image={AVATAR2_IMG} name={"Березина Екатерина"} desc={"Senior Frontend Developer"} domain={"Инструктор фронтэнд (HTML и CSS)"}/>
                    <Teacher image={AVATAR3_IMG} name={"Воробьева Александра"} desc={"Python-программист Инструктор бакэнд (Python)"} domain={"Инструктор по дизайну (UX и UI)"}/> */}
                </div>
            </div>
        </div>
    )
}

export default Teachers;