import { useLanguageContext } from "../hooks/useLanguageContext";

const AlphabetPage = () => {
    const { language } = useLanguageContext()
    return ( 
        <div className="home">
            <h2>Alphabet: { language } </h2>
        </div>
     );
}
 
export default AlphabetPage;