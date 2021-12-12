import AVATAR1_IMG from './img/avatar1.jpg';
import AVATAR2_IMG from './img/avatar2.png';
import AVATAR3_IMG from './img/avatar3.png';

import Teacher from './Teacher/Teacher';
// import { useEffect } from 'react/cjs/react.development';


const Teachers = () => {
    // const [teacher, setTeacher] = useState({name: "", desc: "", image: "", domain: ""});

    return (
        <div className="wrap">
            <div className="teachers">
                <header>
                    <p className="teacher__big-title">Учитесь у <span className="teacher__word">лучших инструкторов</span></p>
                    <a href="/#" className="teacher__list-link">Все инструкторы</a>
                </header>
                <div className="teacher">
                    <Teacher image={AVATAR1_IMG} name={"Кузьмина Виктория"} desc={"Ведущий проектировщик пользовательских интерфейсов"} domain={"Инструктор по дизайну (UX и UI)"}/>
                    <Teacher image={AVATAR2_IMG} name={"Березина Екатерина"} desc={"Senior Frontend Developer"} domain={"Инструктор фронтэнд (HTML и CSS)"}/>
                    <Teacher image={AVATAR3_IMG} name={"Воробьева Александра"} desc={"Python-программист Инструктор бакэнд (Python)"} domain={"Инструктор по дизайну (UX и UI)"}/>
                </div>
            </div>
        </div>
    )
}

export default Teachers;