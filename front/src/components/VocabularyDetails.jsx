/* eslint-disable react/prop-types */
const VocabularyDetais = ({currentEntry}) => {
    return ( 
        <>
        {currentEntry && <span className="vocabulary-details">
            <p>Word: {currentEntry.word}</p>
            <p>Translation: {currentEntry.userTranslation}</p>
            <p>Annotations: {currentEntry.annotations}</p></span>}
        </>
     );
}
 
export default VocabularyDetais;