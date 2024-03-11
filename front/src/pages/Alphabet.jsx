import { useLanguageContext } from "../hooks/useLanguageContext";
import LetterBlock from "../components/LetterBlock";
import NumberAdjust from "../components/NumberAdjust";

const AlphabetPage = () => {
    const { language } = useLanguageContext()
    return ( 
        <div className="home">
            <h2>Alphabet: { language } </h2>
            <LetterBlock />
            <NumberAdjust />
        </div>
     );
}
 
export default AlphabetPage;