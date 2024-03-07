import { createContext, useState } from 'react';

export const LanguageContext = createContext(null)

// eslint-disable-next-line react/prop-types
export const LanguageContextProvider = ( {children} ) => {
    const [language, setLanguage] = useState('devanagari');

    return(
        <LanguageContext.Provider value={ {language, setLanguage} }>
           {children}
        </LanguageContext.Provider>
    )
}
