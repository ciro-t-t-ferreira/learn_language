/* eslint-disable react/prop-types */

/*
    Bug: make the answers endure even when transliteration is turned on/off
    Refat: only show suggestion when there are the option of special characters
*/ 
import { useState } from "react";

const AnswerBox = ( { answer, dictionary }) => {
    const [backgroundColor, setBackgroundColor]       = useState('#023047')
    const [suggestionList, setSuggestionList]         = useState([])
    //const [selectedSuggestion, setSelectedSuggestion] = useState(null)
    const [counter , setCounter]                      = useState(0)
    const [inputValue, setInputValue]                 = useState('')  
    
    const handleInput = (input) => {
        setInputValue(input)
    }

    const checkAnswer = (attempt) => {
        if(attempt == answer){
            setBackgroundColor('#176917')
        }
        else if(attempt !== answer){ 
            setBackgroundColor('#712121')
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
            //setSelectedSuggestion(suggestionList[counter])
        }
        
        else if (key == 'ArrowDown' && counter < suggestionList.length){
            setCounter(counter => counter + 1)
            //setSelectedSuggestion(suggestionList[counter])
        }

        else if (key == 'Enter' && counter != 0){
            handleInput(suggestionList[counter - 1])
        }
    }
 
    return ( 
    <div>
        <input 
          className="answer-box" 
          type="text"
          onChange={(event) => {
            checkAnswer(event.target.value)
            generateSuggestions(event.target.value)
            handleInput(event.target.value)          
            }} 
          onKeyDown={(event) => selectSuggestion(event.key)}          
          style={{ backgroundColor: backgroundColor }}
          value = {inputValue}/>
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
        
    </div> );
}
 
export default AnswerBox;