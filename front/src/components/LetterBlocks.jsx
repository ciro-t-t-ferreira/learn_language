/* eslint-disable react/prop-types */
import { useLanguageContext } from "../hooks/useLanguageContext";
import { dictionaryMapping } from "../utilities/dictionaries";
import { useEffect, useState } from "react";
import AnswerBox from "./AnswerBox"

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

const handleClick = (setLettersArray, dictionary, blockQuantity) => {
    setLettersArray(selectRandomLetters(dictionary, blockQuantity))
}

const LetterBlocks = ({blockQuantity}) => {
    
    const createEmptyAnswerArray = (blockQuantity) => {
        const emptyAnswerArray = []
        
        for (let i = 0; i < blockQuantity; i++){
            emptyAnswerArray.push('')
        }
        
        return emptyAnswerArray
    }
    
    const emptyAnswerArray = createEmptyAnswerArray(blockQuantity)
    
    const { language }                                      = useLanguageContext()
    const [currentAnswers, setCurrentAnswers]               = useState(emptyAnswerArray)    
    const [letterSwitch, setLetterSwitch]                   = useState(true)
    const [transliterationSwitch, setTransliterationSwitch] = useState(true)
    const [isFinished, setIsFinished]                       = useState(false) 
    const [score, setScore]                                 = useState(0) 
    
    const dictionary = dictionaryMapping[language]
    const dictionaryArray = Object.keys(dictionary);
    
    const [lettersArray, setLettersArray] = useState(selectRandomLetters(dictionaryArray, blockQuantity))
    
    changeAmountofLetters(setLettersArray, blockQuantity, lettersArray, dictionaryArray);
    
    //Only runs this piece of code when alphabet is changed
    useEffect(() =>{
        setLettersArray(selectRandomLetters(dictionaryArray, blockQuantity))
        setCurrentAnswers(createEmptyAnswerArray(blockQuantity))
    }, [language])
    
    const checkIfFinished = () => {
        setIsFinished(true)
        currentAnswers.forEach(a => {
            if (a == ''){
                setIsFinished(false)
            }
        })

        checkScore()
    }    
    
    const checkScore = () => {
        setScore(0)
        for (let i = 0; i < lettersArray.length; i++){
            dictionary[lettersArray[i]] == currentAnswers[i]? 
            setScore(score => score +1):
            undefined
        }
    }

    return ( 
    <>
    <div className="letter-block-container">
        {lettersArray.map((letter, index)=> (
            <div className="block" key={"letter-block" + index}>
                {letterSwitch? 
                  <div className="letter">{ letter }</div> :
                  <div className="letter">?</div>}
                {transliterationSwitch? 
                  <div className="transliteration">{ dictionary[letter] }</div>:                  
                  <AnswerBox 
                    answer = { dictionary[letter] }
                    dictionary = { dictionary }
                    index = { index } 
                    blockQuantity = { blockQuantity }
                    currentAnswers = { currentAnswers }
                    setCurrentAnswers = { setCurrentAnswers }
                    checkIfFinished = { checkIfFinished }
                    />                    
                }
                {isFinished && !transliterationSwitch &&
                 <div className="final-answer">{dictionary[letter]}</div> }               
            </div>
        ))}               
    </div>
    {isFinished && <div className="score">{ score }/{ blockQuantity }</div> } 
    <button 
      className="refresh" 
      onClick={() => handleClick(setLettersArray, dictionaryArray, blockQuantity)}>
      Refresh
    </button>
    <div className="switch">
        <input 
            type="checkbox"
            id="letters"
            onChange={() => setLetterSwitch(!letterSwitch)}
            checked={letterSwitch} 
        />
        <label htmlFor="letters">Letters</label>
    </div>        
    <div className="switch">
        <input 
            type="checkbox"
            id="transliteration"
            onChange={() => setTransliterationSwitch(!transliterationSwitch)}
            checked={transliterationSwitch} 
        />
        <label htmlFor="transliteration">Transliteration</label>
    </div>  
    </>
    );
}
 
export default LetterBlocks;