/* eslint-disable react/prop-types */
import { useLanguageContext } from "../hooks/useLanguageContext";
import { dictionaryMapping } from "../utilities/dictionaries";

const LetterBlocks = (props) => {
    const blockQuantity = props.blockQuantity;
    const { language } = useLanguageContext()
    const dictionary = dictionaryMapping[language]

    const keys = Object.keys(dictionary);
    const randomIndex = Math.floor(Math.random() * keys.length);
    const randomKey = keys[randomIndex];

    return ( 
    <div className="letter-block-container">
        <div className="block">
            <div className="letter">{ randomKey }</div>
            <div className="transliteration">{ dictionary[randomKey] }</div>
        </div>
    </div> );
}
 
export default LetterBlocks;