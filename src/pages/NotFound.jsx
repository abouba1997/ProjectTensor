import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div>
            <h1>404 - не найдена!</h1>
            <Link to='/'>Вернуться на главную страницу</Link>
        </div>
    );
};

export default NotFound;