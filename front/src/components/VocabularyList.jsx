/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'

const VocabularyList = ({ language }) => {
    const [fullVocabulary, setFullVocabulary] = useState()

    useEffect(() => {
        const fetchVocabulary = async () => {
            const response = await fetch('http://localhost:4000/api/vocabulary/' + language)
            const json = await response.json()
            console.log(json)

            if (response.ok){
                setFullVocabulary(json)
            }
        }
        fetchVocabulary()
    }, [] )

    return (
        <div className="vocabulary-list"> 
        {fullVocabulary &&
            fullVocabulary.map((entry, index) => (
                <p className="entry" key={'entry' + index}>{entry.word}</p>
            ))                
        }
        </div>
     );
}
 
export default VocabularyList;