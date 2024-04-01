import { useLanguageContext } from "../hooks/useLanguageContext";
import VocabularyList from "../components/VocabularyList"
import EntryForm from "../components/EntryForm";

const VocabularyPage = () => {
    const { language } = useLanguageContext()  

    return ( 
        <div className="vocabulary-page">
            <h2>Vocabulary: {language}</h2>
            <EntryForm />
            <VocabularyList />            
        </div>
     );
}
 
export default VocabularyPage;