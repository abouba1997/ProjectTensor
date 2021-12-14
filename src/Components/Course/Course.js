import { Link } from "react-router-dom";

const Course = (props) => {
    return (
        <div className="card card__lesson">
<<<<<<< HEAD
            <img className="card__img" src={props.image} alt="Lesson HTML"/>
            <div className="card__title" title="Lesson Title">{props.title}</div>
            <div className="card__description" title="Lesson Description">{props.desc}</div>
            <Link to="/lesson" className="card__link"> </Link>
=======
            <img className="card__img" src={props.value.image} alt="Lesson HTML"/>
            <div className="card__title" title="Lesson Title">{props.value.title}</div>
            <div className="card__description" title="Lesson Description">{props.value.desc}</div>
            <a href="/lesson.html" className="card__link"> </a>
>>>>>>> 714d0d28a5c9e13b3843a445f6a84d592669afce
        </div>
    )
}

export default Course;