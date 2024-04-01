import { useState } from "react"
import { useLanguageContext } from "../hooks/useLanguageContext";

const EntryForm = () => {
    const [word, setWord                ] = useState('') 
    const [translation, setTranslation  ] = useState('') 
    const [annotation, setAnnotation    ] = useState('')
    const [isPending, setIsPending      ] = useState(false)
    const { language } = useLanguageContext()  

    const handleSubmit = (e) => {
        e.preventDefault();
        const entry = {language, word, translation, annotation}

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
                value = { translation }
                onChange={(e) => setTranslation(e.target.value)} 
                >                    
                </input>
                <label>Annotation:</label>
                <textarea
                value = { annotation }
                onChange={(e) => setAnnotation(e.target.value)} 
                >                    
                </textarea>
                {!isPending && <button>Add Entry</button>}                
                {isPending && <button disabled>Add Entry</button>}                
            </form>
        </div>
     );
}
 
export default EntryForm;