import { useLanguageContext } from "../hooks/useLanguageContext";
import { dictionaryMapping } from "../utilities/dictionaries";


const AlphabetHelp = () => {
    const { language } = useLanguageContext()
    const dictionary = dictionaryMapping[language]

    return ( 
        <div className="alphabet-help">
            {Object.entries(dictionary).map(([key, value]) => (
                <div key={key}>
                    <span>{key}: </span>
                    <span>{value}</span>
                </div>
            ))}
        </div>
    );
}
 
export default AlphabetHelp;