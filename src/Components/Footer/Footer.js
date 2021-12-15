import logo from '../img/logo.jpg';
import VK_IMG from '../img/vk.png';
import FACEBOOK_IMG from '../img/facebook-f-brands.svg';
import INSTAGRAM_IMG from '../img/instagram-square-brands.svg';
import TWITTER_IMG from '../img/twitter-brands.svg';

import { Link } from 'react-router-dom';

import './footer.css';

const ContactLink = ({item}) => {
    const {src, alt} = item;
    return (
        <li><a href="/#"><img src={src} alt={alt}/></a></li>
    )
}

const Footer = () => {
    const contactList = [
        {
            id: 1,
            src: VK_IMG,
            alt: "VK"
        },
        {
            id: 2,
            src: FACEBOOK_IMG,
            alt: "Facebook"
        },
        {
            id: 3,
            src: TWITTER_IMG,
            alt: "Twitter"
        },
        {
            id: 4,
            src: INSTAGRAM_IMG,
            alt: "Instagram"
        }
    ];

    const dataLinks = contactList.map((link) => <ContactLink key={link.id} item={link} />)

    return (
        <footer className="wrap" id="contact_page">
            <div className="footer">
                <div className="footer__header">
                    <div className="footer__left">
                        <Link to="/#" className="logo__link">
                            <img className="logo__img" src={logo} alt="Логотип компании Тензор"/>
                            <span className="logo__text">TensorSchool</span>
                        </Link>
                    </div>
                    <div className="footer__form">
                        <div className="form__title">Контакт</div>
                        <form action="">
                            <input type="text" className="input-text" placeholder="Ф.И.О"/>
                            <input type="text" className="input-text" placeholder="Email"/>
                            <textarea className='form__textarea input-text' placeholder="Сообщение..."></textarea>
                            <input type="submit" value="Отправить"/>
                        </form>
                    </div>
                </div>
                <div className="footer__body">
                    <div className="footer__copyright">
                        <p>Copyright © TensorSchool, 2021</p>
                    </div>
                    <div className="footer__social-networks-link">
                        <ul>
                            {dataLinks}
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;