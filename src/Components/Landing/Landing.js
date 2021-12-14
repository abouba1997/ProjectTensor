import Online_learning_illustration from '../img/Online_learning_illustration.svg';

const Landing = () => {
    return(
        <div className="wrap">
            <div className="home-page">
                <div className="home-page__text">
                    <p className="home-page__title">
                        Запустите свою учебную программу и повышайте свой уровень с <span className="home-page__word">TensorSchool</span>
                    </p>
                    <p className="home-page__slogan">
                        <span className="slogan">Учитесь тому, как учиться.</span>
                        <span className="slogan">Откройте для себя навыки будущего.</span>
                        <span className="slogan">И возьмите свою карьеру в свои руки.</span>
                    </p>
                    <p><a href="/#" className="home-page__button">Начать</a></p>
                </div>
                <div className="home-page__illustration">
                    <img className="illustration_img" src={Online_learning_illustration} alt="Online Learning Illustration"/>
                </div>
            </div>
        </div>
    )
}

export default Landing;