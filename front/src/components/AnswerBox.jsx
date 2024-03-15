import { useState } from "react";

const AnswerBox = (answer) => {
    const [isCorrect, setIsCorrect] = useState(null)
    const [backgroundColor, setBackgroundColor] = useState('#023047')  

    const handleChange = (attempt) => {
        if(attempt == answer.answer){
            setIsCorrect(true)
            setBackgroundColor('#176917')
        }
        else if(attempt !== answer.answer){
            setIsCorrect(false)
            setBackgroundColor('#712121')
        }

    }

    return ( <div>
        <input 
          className="answer-box" 
          type="text"
          onChange={(event) => {handleChange(event.target.value)}}           
          style={{ backgroundColor: backgroundColor }}/>
    </div> );
}
 
export default AnswerBox;