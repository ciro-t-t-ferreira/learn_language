import { createContext, useState } from 'react';
import languages from '../utilities/languages';

export const LanguageContext = createContext({
    language:languages[1],
    setLanguage:()=>{}
})

// eslint-disable-next-line react/prop-types
export const LanguageContextProvider = ( {children} ) => {
    const [language, setLanguage] = useState(languages[1]);

    return(
        <LanguageContext.Provider value={ {language, setLanguage} }>
           {children}
        </LanguageContext.Provider>
    )
}
