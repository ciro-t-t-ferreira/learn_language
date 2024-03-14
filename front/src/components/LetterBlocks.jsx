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

    return randomLettersArray
}

const LetterBlocks = ({blockQuantity}) => {
    const { language } = useLanguageContext()
    const dictionary = dictionaryMapping[language]

    const dictionaryArray = Object.keys(dictionary);
    const randomLettersArray = selectRandomLetters(dictionaryArray, blockQuantity)

    return ( 
    <div className="letter-block-container">
        {randomLettersArray.map((letter, index)=> (
            <div className="block" key={index}>
                <div className="letter">{ letter }</div>
                <div className="transliteration">{ dictionary[letter] }</div>
            </div>
        ))}
        
    </div> );
}
 
export default LetterBlocks;