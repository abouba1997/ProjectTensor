const Teacher = (props) => {
    return(
        <div className="card__teacher">
            <img className="teacher__img" src={props.image} alt="Lesson Avatar1"/>
            <div className="teacher__title" title="Lesson Title">{props.name}</div>
            <div className="teacher__description" title="Lesson Description">
                <p>{props.desc}</p>
                <p>{props.domain}</p>
            </div>
        </div>
    )
}

export default Teacher;