import logo from '../img/logo.jpg';
import VK_IMG from '../img/vk.png';
import FACEBOOK_IMG from '../img/facebook-f-brands.svg';
import INSTAGRAM_IMG from '../img/instagram-square-brands.svg';
import TWITTER_IMG from '../img/twitter-brands.svg';

import './footer.css';

const Footer = () => {
    return (
        <footer className="wrap" id="contact_page">
            <div className="footer">
                <div className="footer__header">
                    <div className="footer__left">
                        <a href="/#" className="logo__link">
                            <img className="logo__img" src={logo} alt="Логотип компании Тензор"/>
                            <span className="logo__text">TensorSchool</span>
                        </a>
                    </div>
                    <div className="footer__form">
                        <div className="form__title">Контакт</div>
                        <form action="">
                            <div className="row">
                                <input type="text" placeholder="Ф.И.О"/>
                            </div>
                            <div className="row">
                                <input type="text" placeholder="Email"/>
                            </div>
                            <div className="row">
                                <textarea placeholder="Сообщение..." style={{height: 150 + "px"}}></textarea>
                            </div>
                            <div className="row">
                                <input type="submit" value="Отправить"/>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="footer__body">
                    <div className="footer__copyright">
                        <p>Copyright © TensorSchool, 2021</p>
                    </div>
                    <div className="footer__social-networks-link">
                        <ul>
                            <li><a href="/#"><img src={VK_IMG} alt="VK"/></a></li>
                            <li><a href="/#"><img src={FACEBOOK_IMG} alt="Facebook"/></a></li>
                            <li><a href="/#"><img src={TWITTER_IMG} alt="Twitter"/></a></li>
                            <li><a href="/#"><img src={INSTAGRAM_IMG} alt="Instagram"/></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;