/* eslint-disable react/prop-types */
import { useLanguageContext } from "../hooks/useLanguageContext";
import { dictionaryMapping } from "../utilities/dictionaries";
import { useState } from "react";

const selectSingleDistinctRandomLetter = (lettersArray, dictionary) => {

    if(lettersArray.length === dictionary.length){
        throw Error ('No more letters in the alphabet')
    }
    const randomIndex = Math.floor(Math.random() * dictionary.length);
    const randomLetter = dictionary[randomIndex];

    if(randomLetter in lettersArray){
        selectSingleDistinctRandomLetter(lettersArray, dictionary) 
    }

    return randomLetter

}

function selectRandomLetters(dictionary, blockQuantity){ 

    let randomLettersArray = []

    while(randomLettersArray.length < blockQuantity){        
        randomLettersArray.push(selectSingleDistinctRandomLetter(randomLettersArray, dictionary))        
    }

    return randomLettersArray
}

const changeAmountofLetters = (setLettersArray, blockQuantity, lettersArray, dictionary) => {
    
    if(blockQuantity > lettersArray.length){
        let newLetter = selectSingleDistinctRandomLetter(lettersArray, dictionary)
        lettersArray.push(newLetter)
        setLettersArray(lettersArray)
    }

    else if (blockQuantity < lettersArray.length) {
        setLettersArray(lettersArray.pop())
    }

}

const LetterBlocks = ({blockQuantity}) => {
    const { language } = useLanguageContext()
    const dictionary = dictionaryMapping[language]
    const dictionaryArray = Object.keys(dictionary);
    
    const [lettersArray, setLettersArray] = useState(selectRandomLetters(dictionaryArray, blockQuantity))
    
    changeAmountofLetters(setLettersArray, blockQuantity, lettersArray, dictionaryArray);

    return ( 
    <div className="letter-block-container">
        {lettersArray.map((letter, index)=> (
            <div className="block" key={index}>
                <div className="letter">{ letter }</div>
                <div className="transliteration">{ dictionary[letter] }</div>
            </div>
        ))}
        
    </div> );
}
 
export default LetterBlocks;