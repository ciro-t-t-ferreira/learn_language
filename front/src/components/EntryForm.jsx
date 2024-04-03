/* eslint-disable react/prop-types */
import { useState } from "react"
import { useLanguageContext } from "../hooks/useLanguageContext";

const EntryFormModal = ({toggleModal}) => {
    const [word, setWord                ] = useState('') 
    const [userTranslation, setUserTranslation  ] = useState('') 
    const [annotations, setAnnotation    ] = useState('')
    const [isPending, setIsPending      ] = useState(false)
    const { language } = useLanguageContext()  

    const handleSubmit = (e) => {
        e.preventDefault();
        const entry = {language, word, userTranslation, annotations}

        setIsPending(true);
        console.log(language)
        
        fetch('http://localhost:4000/api/vocabulary/' + language, {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(entry)
        })
        .then(() => {
            setIsPending(false);
            console.log(entry)
        })
    }

    return ( 
        <>
        <div 
          className="overlay"
          onClick={toggleModal}></div>
        <div className="entry-form">
            <form onSubmit={handleSubmit}>
                <h2>Add a New Entry</h2>
                <label>Entry:</label>
                <input 
                type="text"
                required
                value = { word }
                onChange={(e) => setWord(e.target.value)} 
                />
                <label>Translation:</label>
                <input
                required
                value = { userTranslation }
                onChange={(e) => setUserTranslation(e.target.value)} 
                >                    
                </input>
                <label>Annotation:</label>
                <textarea
                value = { annotations }
                onChange={(e) => setAnnotation(e.target.value)} 
                >                    
                </textarea>
                {!isPending && <button>Add Entry</button>}                
                {isPending && <button disabled>Add Entry</button>}                
            </form>
            <button 
            className="close-button"
            onClick={toggleModal}>CLOSE</button>
        </div>
        </>
     );
}
 
export default EntryFormModal;