import IMG_LESSON from '../img/image_banner.jpg';
import { Link } from 'react-router-dom';
import './Course.css';

const Course = (props) => {
    return (
        <div className="card card__lesson">
            <img className="card__img" src={props.value.image || IMG_LESSON} alt="Lesson HTML"/>
            <div className="card__title" title="Lesson Title">{props.value.title}</div>
            <div className="card__description" title="Lesson Description">{props.value.description}</div>
            <Link to="/lesson" className="card__link"></Link>
        </div>
    )
}

export default Course;