const Form = (props) => {
    
        const handleClick = (e) => {
            if(e.target.textContent === "Добавить преподавателя") {
                console.log("Teacher adding")
            }else if(e.target.textContent === "Добавить курс") {
                console.log("Lesson adding")
            }else if(e.target.textContent === "Добавить категорию") {
                console.log("Category adding")
            }
            e.preventDefault();
        }
    return (
        <div>
            <form className="form">
                <div className="form__row">
                    <input type ="text" placeholder="Имя"/>
                </div>
                <div className="form__row">
                    <input type ="text" placeholder="Описание"/>
                </div> 
                    <button className = "button" onClick={(e) => handleClick(e)}>Добавить {props.value.name}</button>
                    <button className = "button" onClick={(e) => handleClick(e)}>Удалить {props.value.name}</button>
            </form>
        </div>
    )
}
export default Form;