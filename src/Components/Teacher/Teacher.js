import AVATAR1_IMG from '../img/avatar1.jpg'

const Teacher = (props) => {
    return(
        <div className="card__teacher">
            <img className="teacher__img" src={props.value.image || AVATAR1_IMG} alt="Lesson Avatar1"/>
            <div className="teacher__title" title="Lesson Title">{props.value.name}</div>
            <div className="teacher__description" title="Lesson Description">
                <p>{props.value.profession}</p>
            </div>
        </div>
    )
}

export default Teacher;