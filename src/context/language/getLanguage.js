import {createContext} from "react";
import language from "./language";

export function getLanguage(ISO) {

    try {
        const lng = language[ISO];
        if(lng !== undefined) {
            return lng
        } else {
            throw new Error(`Undefined iso(key) language: ${ISO}`)
        }
    } catch (e) {
        console.error(e);
    }
}

export const LanguageContext = createContext(null);
