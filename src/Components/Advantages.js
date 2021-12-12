import BOOK_IMG from './img/book.png';
import GROUP_IMG from './img/group.png';
import CERTIFICATE_IMG from './img/certificate.png';

const Advantages = () => {
    return (
        <div className="wrap">
            <div className="advantages">
                <header>
                    <p className="advantages__title">TensorSchool и Премиущества </p>
                </header>
                <div className="advantages__description">
                    TensorSchool является образовательной платформой, предназначенная для предоставления учебных 
                        пространств и учебных сред для обучения студентов под руководством преподавателей.
                </div>
                <div className="advantage">
                    <div className="cards cards__advantage">
                        <img className="cards__img" src={BOOK_IMG} alt="Lesson Book"/>
                        <div className="cards__title" title="Lesson Title">Качественное образование</div>
                    </div>
                    <div className="cards cards__advantage">
                        <img className="cards__img" src={GROUP_IMG} alt="Lesson Group"/>
                        <div className="cards__title" title="Lesson Title">Совместное обучение и коммуникация</div>
                    </div>
                    <div className="cards cards__advantage">
                        <img className="cards__img" src={CERTIFICATE_IMG} alt="Lesson Certificate"/>
                        <div className="cards__title" title="Lesson Title">Получение диплома</div>
                    </div>
                </div>
                <div className="advantages__rounded">
                    <p className="advantages__rounded-information">В TensorSchool вы познакомитесь с миром дизайна,
                        разработкой интерфейсов и бэкендов</p>
                    <a href="/#" className="advantages__rounded-link">Начать</a>
                </div>
            </div>
        </div>
    )
}

export default Advantages;