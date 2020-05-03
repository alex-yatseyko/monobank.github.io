import React from 'react'

import {LanguageContext} from "../context/language";

export const NoMatch = () => {
    return (
            <div className="container">
                <h1>404</h1>
                <p className="lead">Версія програми: 0.0.1</p>     
                <p className="lead">Автор: <a href="http://yatseyko.com">Alex Yatseyko</a></p>     
            </div>
    )
}
