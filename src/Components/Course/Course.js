const Course = (props) => {
    return (
        <div className="card card__lesson">
            <img className="card__img" src={props.image} alt="Lesson HTML"/>
            <div className="card__title" title="Lesson Title">{props.title}</div>
            <div className="card__description" title="Lesson Description">{props.desc}</div>
            <a href="/lesson.html" className="card__link"> </a>
        </div>
    )
}

export default Course;