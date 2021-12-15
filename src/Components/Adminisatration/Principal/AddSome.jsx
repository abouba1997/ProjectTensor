import React from "react";

import "./addSome.css"
import Form from "./Form"
import IMG_WECLOME from '../../img/group.png'

// Страница добавления / преподавателя / курса / категории

const AddSome = () => {
    const forms = [
        {
            id: 1,
            name: 'преподавателя'
        },
        {
            id: 2,
            name: 'курс'
        },
        {
            id: 3,
            name: 'категорию'
        }
    ];

    const formsHtml = forms.map((item) => 
        <Form key={item.id} value={item} />
    );

    return (
        <div className="wrap__add-some">
            <div className="add-some">
                <header>
                    <p className="add-some__title">Добро пожаловать в режим администратора</p>
                    <img src={IMG_WECLOME} className="add-some__img-welcome" alt=""/>
                    <div className="add-some__forms">
                        {formsHtml}
                    </div>
                </header>
            </div>
        </div>
    )
}
export default AddSome;