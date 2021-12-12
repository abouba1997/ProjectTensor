const Course = ({image, title, desc}) => {
    return (
        <div className="card card__lesson">
            <img className="card__img" src={image} alt="Lesson HTML"/>
            <div className="card__title" title="Lesson Title">{title}</div>
            <div className="card__description" title="Lesson Description">{desc}</div>
            <a href="/lesson.html" className="card__link"> </a>
        </div>
    )
}

export default Course;