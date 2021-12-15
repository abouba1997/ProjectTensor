import BOOK_IMG from '../img/book.png';
import GROUP_IMG from '../img/group.png';
import CERTIFICATE_IMG from '../img/certificate.png';

import "./advantages.css"

const AdvantageElement = ({title, src}) => {
    return (
        <div className="cards cards__advantage">
            <img className="cards__img" src={src} alt=""/>
            <div className="cards__title">{title}</div>
        </div>
    )
} 

const Advantages = () => {
    const advantagesList = [
        {
            id: 1,
            src: BOOK_IMG,
            title: "Качественное образование",
        },
        {
            id: 2,
            src: GROUP_IMG,
            title: "Совместное обучение и коммуникация",
        },
        {
            id: 3,
            src: CERTIFICATE_IMG,
            title: "Получение диплома",
        },
    ];

    return (
        <div className="wrap">
            <div className="advantages" id='advantages'>
                <header>
                    <p className="advantages__title">TensorSchool и Преимущества </p>
                </header>
                <div className="advantages__description">
                    TensorSchool является образовательной платформой, предназначенная для предоставления учебных 
                        пространств и учебных сред для обучения студентов под руководством преподавателей.
                </div>
                <div className="advantage">
                    {advantagesList.map((advantage) => 
                        <AdvantageElement 
                            key={advantage.id} 
                            src={advantage.src} 
                            title={advantage.title}/>
                        )
                    }
                </div>
                <div className="advantages__rounded">
                    <p className="advantages__rounded-information">В TensorSchool вы познакомитесь с миром дизайна,
                        разработкой интерфейсов и бэкендов</p>
                    <a href="#contact_page" className="advantages__rounded-link">Начать</a>
                </div>
            </div>
        </div>
    )
}

export default Advantages;