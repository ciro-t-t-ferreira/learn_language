/* eslint-disable react/prop-types */
import { useLanguageContext } from "../hooks/useLanguageContext";
import { dictionaryMapping } from "../utilities/dictionaries";
import { useEffect, useState } from "react";

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
        lettersArray.pop()
        setLettersArray(lettersArray)
    }

}

const LetterBlocks = ({blockQuantity}) => {
    const { language } = useLanguageContext()
    const [letterSwitch, setLetterSwitch] = useState(true)
    const [transliterationSwitch, setTransliterationSwitch] = useState(true)
    const dictionary = dictionaryMapping[language]
    const dictionaryArray = Object.keys(dictionary);
    
    const [lettersArray, setLettersArray] = useState(selectRandomLetters(dictionaryArray, blockQuantity))
    
    changeAmountofLetters(setLettersArray, blockQuantity, lettersArray, dictionaryArray);

    //Only runs this piece of code when alphabet is changed
    useEffect(() =>{
        setLettersArray(selectRandomLetters(dictionaryArray, blockQuantity))
    }, [language])

    return ( 
    <>
    <div className="letter-block-container">
        {lettersArray.map((letter, index)=> (
            <div className="block" key={index}>
                <div className="letter">{ letter }</div>
                <div className="transliteration">{ dictionary[letter] }</div>
            </div>
        ))}               
    </div> 
    <div className="letter-switch">
        <input 
            type="checkbox"
            id="letters"
            onChange={() => setLetterSwitch(!letterSwitch)}
            checked={letterSwitch} 
        />
        <label htmlFor="letters">Letters</label>
    </div>        
    <div className="transliteration-switch">
        <input 
            type="checkbox"
            id="transliteration"
            onChange={() => setTransliterationSwitch(!transliterationSwitch)}
            checked={transliterationSwitch} 
        />
        <label htmlFor="letters">Transliteration</label>
    </div>  
    </>
    );
}
 
export default LetterBlocks;