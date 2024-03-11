/* eslint-disable react/prop-types */
const LetterBlocks = (props) => {
    const blockQuantity = props.blockQuantity;

    return ( 
    <div className="letter-block">
        <div>Quantity= {blockQuantity}</div>
        <div className="letter">LETTER</div>
        <div className="transliteration">TRANSLITERATION</div>
    </div> );
}
 
export default LetterBlocks;