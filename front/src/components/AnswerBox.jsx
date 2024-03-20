/* eslint-disable react/prop-types */

/*
    Bugs: 
        -remove suggestion box after losing focus 
        -do not allow repeated letters     
    Refat: 
        -only show suggestion when there are the option of special characters
    Feats:
        -when all blocks are filled show the correct answers
        -move to next block when press enter
*/ 
import { useEffect, useState } from "react";

const AnswerBox = ( { answer, dictionary, index, currentAnswers, setCurrentAnswers,
    checkIfFinished }) => {
    
    
    const [backgroundColor, setBackgroundColor]       = useState('#023047')
    const [suggestionList, setSuggestionList]         = useState([])
    const [counter , setCounter]                      = useState(0)
    const [inputValue, setInputValue]                 = useState(currentAnswers[index])

    useEffect(() => {
        setInputValue(currentAnswers[index])
        checkAnswer(currentAnswers[index])
    }, [currentAnswers])

    const handleInput = (input) => {
        setInputValue(input)
        checkAnswer(input)
    }
    
    const storageCurrentAnswers = (input, index, currentAnswers, setCurrentAnswers) => {
        const updatedAnswer =  currentAnswers
        updatedAnswer[index] = input
        setCurrentAnswers(updatedAnswer) 
    }
    
    const checkAnswer = (attempt) => {
        console.log(attempt, answer)
        if(attempt == answer){
            setBackgroundColor('#176917') //make a var on a decent color
        }
        else if(attempt !== answer){ 
            setBackgroundColor('#712121') //make a var on a decent color
        }
        if(attempt == ''){
            setBackgroundColor('var(--dark-color)')
        }
    }
    
    const normalize = (value) => {
        return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    }
    
    const generateSuggestions = (attempt) => {
        const list = []
        
        for (const key in dictionary) {
            const value = dictionary[key];
            const normalizedValue = normalize(value);
            normalizedValue === attempt? list.push(value) : undefined
        }
        setSuggestionList(list)
        
    }
    
    const selectSuggestion = (key) => { 
               
        if (key == 'ArrowUp' && counter >= 0){
            setCounter(counter => counter - 1)
        }
        
        else if (key == 'ArrowDown' && counter < suggestionList.length){
            setCounter(counter => counter + 1)
        }
        
        else if (key == 'Enter' && counter != 0){
            handleInput(suggestionList[counter - 1])
        }
    }
    
    return ( 
        <>
        <input 
          className="answer-box" 
          type = "text"
          key = {'answer'  + index}
          onChange={(event) => {
              checkAnswer(event.target.value)
              storageCurrentAnswers(event.target.value, index, currentAnswers, setCurrentAnswers)
              generateSuggestions(event.target.value)
              handleInput(event.target.value)
              checkIfFinished()          
            }} 
            onKeyDown={(event) => selectSuggestion(event.key)}          
            style={{ backgroundColor: backgroundColor }}
            value = {inputValue}
            />
        {
        (suggestionList.length != 0) && 
        <ul className="suggestion-box"> 
            {
                suggestionList.map((s, index)=>{
                    const suggestionClass = (index == counter - 1)? 'selected-suggestion' :
                     'suggestion-item' 
                    return (<li 
                              key={'suggestion' + index}
                              className={suggestionClass}>{s}</li>)
                })
            }
        </ul>}
        
    </> );
}
 
export default AnswerBox;