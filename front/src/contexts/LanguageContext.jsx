import { createContext, useState } from 'react';

export const LanguageContext = createContext({
    language:"greek",
    setLanguage:()=>{}
})

// eslint-disable-next-line react/prop-types
export const LanguageContextProvider = ( {children} ) => {
    const [language, setLanguage] = useState('greek');

    return(
        <LanguageContext.Provider value={ {language, setLanguage} }>
           {children}
        </LanguageContext.Provider>
    )
}
