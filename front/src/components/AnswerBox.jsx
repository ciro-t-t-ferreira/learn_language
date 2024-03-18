import { useState } from "react";

const AnswerBox = (answer) => {
    const [backgroundColor, setBackgroundColor] = useState('#023047')  

    const handleChange = (attempt) => {
        if(attempt == answer.answer){
            setBackgroundColor('#176917')
        }
        else if(attempt !== answer.answer){ 
            setBackgroundColor('#712121')
        }
    }

    return ( 
    <div>
        <input 
          className="answer-box" 
          type="text"
          onChange={(event) => {handleChange(event.target.value)}}           
          style={{ backgroundColor: backgroundColor }}/>
        {/*
        {sugestões != 0 && 
        <ul className="suggestion box"> 
            {suggestionList.map((s) => {
                <li>{suggestion}</li>
            })}
        <ul>}
        */}
    </div> );
}
 
export default AnswerBox;