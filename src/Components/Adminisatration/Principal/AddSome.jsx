import React from "react";


import "./addSome.css"
import Form from "./Form"
import IMG_WECLOME from '../../img/group.png'



const AddSome = () => {
    const forms = [
        {
            id: 1,
            name: 'преподавателя',
        },
        {
            id: 2,
            name: 'курс',
        },
        {
            id: 3,
            name: 'Категорию',

        }
    ]
    const res = forms.map((item) => 
        <Form key={item.id} value={item} />
    );
    return (
        <div className="wrap">
            <div className="addSome">
                <header>
                    <p className="title">Добро пожаловать в режим администратора</p>
                    <img src={IMG_WECLOME} className="img__welcome"/>
                    <div className="addSome">
                        {res}
                    </div>
                </header>
            </div>
        </div>
    )
}
export default AddSome;