import { useLanguageContext } from "../hooks/useLanguageContext";
import LetterBlocks from "../components/LetterBlocks";
import NumberAdjust from "../components/NumberAdjust";
import { useState } from "react";


const AlphabetPage = () => {
    const { language } = useLanguageContext()
    console.log(language)
    const [blockQuantity, setBlockQuantity] = useState(5);
    
    const handleBlockQuantityChange = (newBlockQuantity) => {
        setBlockQuantity(newBlockQuantity);
    }

    return ( 
        <div className="home">
            <h2>Alphabet: { language } </h2>
            <NumberAdjust 
             blockQuantity={blockQuantity}
             setBlockQuantity={setBlockQuantity}
             onBlockQuantityChange={handleBlockQuantityChange}>
                <LetterBlocks blockQuantity={blockQuantity}/>
            </NumberAdjust>
        </div>
    );
}
 
export default AlphabetPage;