const Teacher = ({image, name, desc, domain}) => {
    return(
        <div className="card__teacher">
            <img className="teacher__img" src={image} alt="Lesson Avatar1"/>
            <div className="teacher__title" title="Lesson Title">{name}</div>
            <div className="teacher__description" title="Lesson Description">
                <p>{desc}</p>
                <p>{domain}</p>
            </div>
        </div>
    )
}

export default Teacher;