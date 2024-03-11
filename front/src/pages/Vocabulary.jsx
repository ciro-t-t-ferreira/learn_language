import { useLanguageContext } from "../hooks/useLanguageContext";

const VocabularyPage = () => {
    const { language } = useLanguageContext()
    return ( 
        <div className="vocabulary-page">
            <h2>Vocabulary: {language}</h2>
        </div>
     );
}
 
export default VocabularyPage;