import React from 'react'

import viber from '../icons/viber.svg'
import messenger from '../icons/messenger.svg'
import telegram from '../icons/telegram.svg'
import ma from '../icons/messages-app.svg'

import { LanguageContext } from "../context/language";

export const Contact = () => {
    return (
            <div className="container contact">
                <h1>Контакти</h1>
                <p className="lead mt-5">Людяна служба підтримки. Жодних автовідповідачів і роботів. Спілкування тільки з живими людьми, які заради вас зі шкури вилізуть! Спілкуємося у зручних для вас месенджерах</p>     
                <div className="row mt-5">
                    <div className="col-md-3">
                        <img src={ viber } />
                        <a href="https://viber.me/monobank?context=mono-desktop" target="_blank" x-native-link="viber://pa?chatURI=monobank&amp;context=mono-desktop"><div className="social-wide__button viber-color-button">Viber</div></a>
                    </div>
                    <div className="col-md-3">
                         <img src={ messenger } />
                        <a href="https://m.me/monobank.ua?ref=mono-desktop" target="_blank"><div className="social-wide__button messenger-color-button">MESSENGER</div></a>
                    </div>
                    <div className="col-md-3">
                    <img src={ telegram } />
                    <a href="https://t.me/monobankbot?start=mono-desktop" target="_blank" x-native-link="tg://resolve?domain=monobankbot&amp;start=mono-desktop"><div className="social-wide__button telegram-color-button">TELEGRAM</div></a>
                    </div>
                    <div className="col-md-3">
                    <img src={ ma } />
                    <a href="https://bcrw.apple.com/urn:biz:af617b73-14cc-496b-b591-efb565d3b690?biz-intent-id=mono-desktop&amp;biz-group-id=SERVICE" target="_blank"><div className="social-wide__button apple-color-button">Messages App</div></a>

                    </div>
                </div>
            </div>
    )
}
