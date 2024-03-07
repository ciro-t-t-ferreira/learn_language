import { LanguageContext } from "../contexts/LanguageContext";
import { useContext } from "react";

export const useLanguageContext = () => {
    const language = useContext(LanguageContext)

    if(!language){
        throw Error('LanguageContext is being used outside LanguageContextProvider')
    }

    return language
}