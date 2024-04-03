import VocabularyList from "../components/VocabularyList"
import VocabularyDetais from "../components/VocabularyDetails";
import EntryFormModal from "../components/EntryForm";
import { useState } from "react";

const VocabularyPage = () => {
    const [currentEntry, setCurrentEntry] = useState();
    const [modal, setModal              ] = useState(false);

    const toggleModal = () => {
      setModal(!modal)
    }
    return ( 
        <>
          {modal &&
          <EntryFormModal
            toggleModal = {toggleModal} />}
          <button
           className="add-entry"
           onClick={toggleModal}>ADD
          </button>
          <div className="vocabulary-page">
              <VocabularyDetais
                currentEntry = {currentEntry} />
              <VocabularyList
                setCurrentEntry = {setCurrentEntry} />            
          </div>
        </>
    );
}
 
export default VocabularyPage;