/* eslint-disable react/prop-types */
import { useLanguageContext } from "../hooks/useLanguageContext";
import { dictionaryMapping } from "../utilities/dictionaries";

function selectRandomLetters(dictionary, blockQuantity){

    let randomLettersArray = []

    while(randomLettersArray.length < blockQuantity){
        const randomIndex = Math.floor(Math.random() * dictionary.length);
        const randomLetter = dictionary[randomIndex];
        if(!(randomLetter in randomLettersArray)){
            randomLettersArray.push(randomLetter)
        }
    }
    
    console.log(randomLettersArray)

    return randomLettersArray
}

const LetterBlocks = (props) => {
    const blockQuantity = props.blockQuantity;
    const { language } = useLanguageContext()
    const dictionary = dictionaryMapping[language]

    const dictionaryArray = Object.keys(dictionary);
    const randomLetters = selectRandomLetters(dictionaryArray, blockQuantity)

    return ( 
    <div className="letter-block-container">
        <div className="block">
            <div className="letter">{ randomLetters[0] }</div>
            <div className="transliteration">{ dictionary[randomLetters[0]] }</div>
        </div>
    </div> );
}
 
export default LetterBlocks;