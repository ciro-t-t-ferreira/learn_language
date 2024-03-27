import { useLanguageContext } from "../hooks/useLanguageContext";
import VocabularyList from "../components/VocabularyList"

const VocabularyPage = () => {
    const { language } = useLanguageContext()
    


    return ( 
        <div className="vocabulary-page">
            <h2>Vocabulary: {language}</h2>
            <VocabularyList 
              language = {language}/>            
        </div>
     );
}
 
export default VocabularyPage;