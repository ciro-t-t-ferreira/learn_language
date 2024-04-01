/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import { useLanguageContext } from "../hooks/useLanguageContext";

const VocabularyList = () => {
    const [fullVocabulary, setFullVocabulary] = useState()
    const { language } = useLanguageContext()  

    useEffect(() => {
        const fetchVocabulary = async () => {
            const response = await fetch('http://localhost:4000/api/vocabulary/' + language)
            const json = await response.json()

            if (response.ok){
                setFullVocabulary(json)
            }
        }
        fetchVocabulary()
    }, [language] )

    return (
        <div className="vocabulary-list"> 
        {fullVocabulary &&
            fullVocabulary.map((entry, index) => (
                <p 
                  className="entry"
                  key={'entry' + index}>
                {entry.word}</p>
            ))                
        }
        </div>
     );
}
 
export default VocabularyList;