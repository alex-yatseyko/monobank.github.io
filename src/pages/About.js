import React from 'react'

import {LanguageContext} from "../context/language";

export const About = () => {
    return (
            <div className="container">
                <h1>Найкраща React програма</h1>
                <p className="lead">Версія програми: 0.0.1</p>     
                <p className="lead">Автор: <a href="yatseyko.com">Alex Yatseyko</a></p> 
                <h4>Технології які було використанo:</h4>
                <ul class="list-group mt-3">
                    <li class="list-group-item">Bootstrap</li>
                    <li class="list-group-item">React</li>
                    <li class="list-group-item">Monobank API</li>
                    <li class="list-group-item">SASS</li>
                    <li class="list-group-item">React Router</li>
                    <li class="list-group-item">UUID</li>
                </ul>
            </div>
    )
}
