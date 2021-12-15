const Teacher = (props) => {
    return(
        <div className="card__teacher">
            <img className="teacher__img" src={props.value.image} alt="Lesson Avatar1"/>
            <div className="teacher__title" title="Lesson Title">{props.value.name}</div>
            <div className="teacher__description" title="Lesson Description">
                <p>{props.value.desc}</p>  {/*Объединить в 1 параметр?? */}
                <p>{props.value.domain}</p>
            </div>
        </div>
    )
}

export default Teacher;