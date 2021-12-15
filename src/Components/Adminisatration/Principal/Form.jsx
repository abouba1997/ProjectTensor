const Form = (props) => {
        const handleClick = (e) => {
            e.preventDefault();
            if (e.target.textContent === "Добавить преподавателя") {
                console.log("Teacher adding")
                // Будет обработка добавления преподавателя
            } else if (e.target.textContent === "Добавить курс") {
                console.log("Lesson adding")
                // Будет обработка добавления курса
            } else if (e.target.textContent === "Добавить категорию") {
                console.log("Category adding")
                // Будет обработка добавления категории
            }
        }
    return (
        <div>
            <form className="form">
                <input type="text" className="input-text" placeholder="Имя"/>
                <input type="text" className="input-text" placeholder="Описание"/>
                <button className="form__button" onClick={(e) => handleClick(e)}>Добавить {props.value.name}</button>
                <button className="form__button" onClick={(e) => handleClick(e)}>Удалить {props.value.name}</button>
            </form>
        </div>
    )
}

export default Form;