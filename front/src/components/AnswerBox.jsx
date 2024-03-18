/* eslint-disable react/prop-types */
import { useState } from "react";

const AnswerBox = ( { answer, dictionary }) => {
    const [backgroundColor, setBackgroundColor] = useState('#023047')
    const [suggestionList, setSuggestionList]   = useState([])  

    const checkAnswer = (attempt) => {
        if(attempt == answer.answer){
            setBackgroundColor('#176917')
        }
        else if(attempt !== answer.answer){ 
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
        console.log(attempt, list, suggestionList)      
    }
 
    return ( 
    <div>
        <input 
          className="answer-box" 
          type="text"
          onChange={(event) => {
            checkAnswer(event.target.value)
            generateSuggestions(event.target.value)
          }}           
          style={{ backgroundColor: backgroundColor }}/>
        {
        (suggestionList.length != 0) && 
        <ul className="suggestion box"> 
            {
                suggestionList.map((s, index)=>{
                    return <li key={index}>{s}</li>
                })
            }
        </ul>}
        
    </div> );
}
 
export default AnswerBox;