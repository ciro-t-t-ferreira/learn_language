import VocabularyList from "../components/VocabularyList"
import VocabularyDetais from "../components/VocabularyDetails";
import EntryForm from "../components/EntryForm";
import { useState } from "react";

const VocabularyPage = () => {
    const [currentEntry, setCurrentEntry] = useState();

    return ( 
        <div className="vocabulary-page">
            <VocabularyDetais
              currentEntry = {currentEntry} />
            <VocabularyList
              setCurrentEntry = {setCurrentEntry} />            
        </div>
    );
}
 
export default VocabularyPage;